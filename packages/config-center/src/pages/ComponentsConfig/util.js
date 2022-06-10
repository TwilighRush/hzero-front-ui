import memoize from 'memoize-one';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'hzero-ui';
import intl from '../../utils/intl';
import { schemaName } from '../../utils/constants';

const { TabPane } = Tabs;

// TODO: 如果有其它语言的静态资源，需要在这里更改
function getCurrentLanguage() {
  // 因为目前只有中文和英文有静态资源，如果是其它语言没有对应的资源，会报错，所以要加这么一个判断
  const languagesHasAssets = ['zh_CN', 'en_US'];
  const lang = intl.getLocale() || 'zh_CN';
  return languagesHasAssets.includes(lang) ? lang : 'zh_CN';
}

/**
 * 异步获取图片的公用组件
 * @param schema
 * @param dirname
 * @param index
 * @param ext
 * @returns {*}
 * @constructor
 */
function AsyncImage({ schema, dirname, index, ext }) {
  const [src, setSrc] = useState('');
  const lang = getCurrentLanguage();

  useEffect(() => {
    import(`../_assets/${schema}/${lang}/${dirname}/style${index}.${ext}`).then(
      (m) => {
        setSrc(m.default);
      },
      (e) => {
        console.log(e);
      }
    );
  }, [dirname, ext, index, lang, schema]);

  return <img src={src} alt="" />;
}

/**
 * 工具函数：获取记忆化的一个渲染列表，仅当schema改变时重新计算；
 * @param count // 样式数量
 * @param dirname // 子文件夹
 * @param ext // 拓展名
 * @returns {function(*): {render: *}[]}
 */
export function getMemoizedAssets(count = 0, dirname, ext = 'svg') {
  return memoize((schema) => {
    return Array.from({ length: count }).map((v, i) => ({
      bottomTitle:
        i === 0
          ? `${schemaName.get(schema)}${intl
              .get('hzero.hzeroTheme.page.modeRecommendModeOne')
              .d('模式下推荐使用样式一')}`
          : '',
      render: <AsyncImage schema={schema} index={i + 1} ext={ext} dirname={dirname} />,
    }));
  });
}

/**
 * 静态图片和gif可以相互转换的组件
 * @param dirname 相对目录
 * @param index 要加载的索引
 * @param _ext 静态图片拓展名
 * @param prefix 前缀，比如style1-2.png 的 1
 * @param schema 当前主题
 * @returns {*}
 * @constructor
 */
function StaticGif({ dirname, index, _ext, prefix, schema }) {
  const [ext, setExt] = useState(_ext);
  const lang = getCurrentLanguage();
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <img
      onMouseOver={() => setExt('gif')}
      onMouseLeave={() => setExt(_ext)}
      // eslint-disable-next-line import/no-dynamic-require,global-require
      src={require(`../_assets/${schema}/${lang}/${dirname}/style${prefix ? `${prefix}-` : ''}${
        index + 1
      }.${ext}`)}
      alt=""
    />
  );
}

/**
 * 获取需要动态转换静态图片和动图的memoized
 * @param count 样式数
 * @param dirname 相对目录名
 * @param ext 拓展名
 * @param prefix 前缀，同上
 * @returns {function(*): {bottomTitle: string, render: *}[]}
 */
export function getStaticGif(count, dirname, ext = 'png', prefix) {
  return memoize((schema) =>
    Array.from({ length: count }).map((v, i) => ({
      bottomTitle:
        i === 0
          ? `${schemaName.get(schema)}${intl
              .get('hzero.hzeroTheme.page.modeRecommendModeOne')
              .d('模式下推荐使用样式一')}`
          : '',
      render: <StaticGif schema={schema} dirname={dirname} index={i} _ext={ext} prefix={prefix} />,
    }))
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;
const tableItems = ['basic', 'form_paging', 'operation', 'Fixed', 'screening', 'editor', 'folding'];
// 表格展示组件
function TableTab({ index, schema }) {
  const [urls, setUrls] = useState({});

  const lang = getCurrentLanguage();
  useEffect(() => {
    let cancel = false;
    Promise.all(
      tableItems.map(
        (item) => import(`../_assets/${schema}/${lang}/table/style${index}/${item}.svg`)
      )
    ).then(
      (arr) => {
        const result = {};
        tableItems.forEach((v, i) => {
          result[v] = arr[i].default;
        });
        !cancel && setUrls(result);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      cancel = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, schema]);
  const titles = {
    basic: '基础表格',
    form_paging: '基础表格(含分页)',
    operation: '带操作列',
    editor: '可行内编辑',
    Fixed: '带固定列',
    screening: '表头可筛选',
    folding: '可折叠',
  };
  return (
    <Tabs>
      {tableItems.map((v) => (
        <TabPane key={v} tab={titles[v]}>
          <StyledImg src={urls[v] || ''} />
        </TabPane>
      ))}
    </Tabs>
  );
}

// 获取表格的静态资源
export function getTableStatic(count) {
  return memoize((schema) =>
    Array.from({ length: count }).map((v, i) => ({
      bottomTitle: i === 0 ? `${schemaName.get(schema)}模式下推荐使用样式一` : '',
      render: <TableTab index={i + 1} schema={schema} />,
    }))
  );
}
