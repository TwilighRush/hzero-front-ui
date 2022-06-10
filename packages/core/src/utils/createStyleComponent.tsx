import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { createGlobalStyle, css, StyleSheetManager } from 'styled-components';
import { CSSTemplate } from './types';
import { emptyObj } from './constants';
import { ThemeContext } from './ThemeContext';
import { getStyleSheetTarget } from './utils';
// import { Heart } from './Heart';
import { setLoadEffectCssComponent, useLoadStyles } from './dynamicLoad';
import { emptyArray } from '.';

export interface StyleComponentProps {
  name: string; // 组件名称，例如：button 或 comp/button
  targetIdPrefix?: string; // 插入目标的id前缀
  data: any; // 主题数据
  scopeList?: string[];
  schema: string;
  global?: boolean; // 是否为全局样式，不受 scope 影响
  partialSelector?: string;
  uiType: string; // 例如：hzero-ui、c7n-ui
  cssTemplate?: CSSTemplate;
}

export interface StyleComponentCreatorRet {
  name: string;
  id: string;
  fieldName: string;
  global?: boolean;
  cssTemplate?: CSSTemplate;
}

export interface LoadStyleComponentCreatorRet {
  listenCompKey: string;
  loadCssData: () => Promise<StyleComponentCreatorRet>;
}

export interface CommonGlobalStyleProps {
  data: any;
  css: any;
  scope?: string[];
  name: string;
  extraTemplate: any;
  onlyTemplate: any;
  schema: string;
  global?: boolean;
  partialSelector?: string;
  pro: boolean;
  uiType: string;
}

const getGlobalCss = (props: CommonGlobalStyleProps) => {
  const { onlyTemplate, extraTemplate, scope = [], global, partialSelector, pro, uiType } = props;
  let template: any;
  // choerodon-ui 和 hzero-ui两个特殊  判断可以优化一下
  if (uiType === 'choerodon-ui') {
    const item = pro ? 'pro' : 'base';
    if (props.onlyTemplate) {
      template = css`
        ${(onlyTemplate && onlyTemplate[item]) || ''}
        ${(extraTemplate && extraTemplate[item]) || ''}
      `;
    } else {
      template = css`
        ${props.css || ''}
        ${(extraTemplate && extraTemplate[item]) || ''}
      `;
    }
  } else if (uiType === 'hzero-ui') {
    if (props.onlyTemplate) {
      template = css`
        ${(onlyTemplate && onlyTemplate['hzero']) || ''}
        ${(extraTemplate && extraTemplate['hzero']) || ''}
      `;
    } else {
      template = css`
        ${props.css || ''}
        ${(extraTemplate && extraTemplate['hzero']) || ''}
      `;
    }
  } else {
    if (props.onlyTemplate) {
      template = css`
        ${onlyTemplate || ''}
        ${extraTemplate || ''}
      `;
    } else {
      template = css`
        ${props.css || ''}
        ${extraTemplate || ''}
      `;
    }
  }

  if (partialSelector) {
    return css`
      ${partialSelector} {
        ${template}
      }
    `;
  }
  return scope && !global && scope.length > 0
    ? css`
        ${scope.join(',')} {
          ${template}
        }
      `
    : template;
};

export const CommonGlobalStyle = createGlobalStyle<CommonGlobalStyleProps>`
${getGlobalCss}
`;

export const StyleComponent: FC<StyleComponentProps> = (props) => {
  const {
    name,
    uiType,
    global,
    data,
    schema,
    scopeList,
    cssTemplate = '',
    targetIdPrefix,
    partialSelector,
  } = props;
  const fieldSplits = name.split('/');
  const fieldName = fieldSplits[fieldSplits.length - 1];
  const { onlyTemplate, extraTemplate, __global } = data[fieldName] || emptyObj;
  const target = useMemo(
    () => getStyleSheetTarget(`${targetIdPrefix || ''}${uiType}-${name}`),
    [name, targetIdPrefix, uiType]
  );
  useEffect(() => {
    return () => target.childNodes.forEach((i: any) => i.remove());
  }, []);

  return (
    <StyleSheetManager target={target}>
      <CommonGlobalStyle
        schema={schema}
        name={fieldName}
        uiType={uiType}
        pro={!name.startsWith('comp')}
        css={cssTemplate}
        scope={scopeList}
        extraTemplate={extraTemplate}
        onlyTemplate={onlyTemplate}
        global={global || __global}
        data={data}
        partialSelector={partialSelector}
      />
    </StyleSheetManager>
  );
};

/**
 * 创建一个样式组件
 * @param name // fieldName取值问题，可以是{name}，也可以是xxxxx/{name}
 * @param cssTemplate
 */
export function createStyleComponent(
  name: string,
  cssTemplate: CSSTemplate,
  global?: boolean
): StyleComponentCreatorRet {
  const id = `${Math.random().toString().slice(2, 10)}${Date.now()}`;
  const fieldSplits = name.split('/');
  const fieldName = fieldSplits[fieldSplits.length - 1];

  return { name, fieldName, id: `${fieldName}-${id}`, global, cssTemplate };
}

function isLoadStyleComponentCreator(
  params: StyleComponentCreatorRet | LoadStyleComponentCreatorRet
): params is LoadStyleComponentCreatorRet {
  return (
    (params as LoadStyleComponentCreatorRet).listenCompKey !== undefined &&
    (params as LoadStyleComponentCreatorRet).loadCssData !== undefined
  );
}
/**
 * 创建入口样式组件，用于汇总所有样式组件
 * @param styles
 */
export function createMainStyleComponent(opts: {
  name: string;
  styles: (StyleComponentCreatorRet | LoadStyleComponentCreatorRet)[];
  // transformThemeData?: (data: any) => any;
}) {
  const { name, styles: _styles } = opts;

  const uidKey = `${Math.random().toString().slice(2, 10)}${Date.now()}`;
  let hasLoadItem = false;

  const styles: StyleComponentCreatorRet[] = _styles.filter((item) => {
    if (isLoadStyleComponentCreator(item)) {
      setLoadEffectCssComponent(`${name}::${item.listenCompKey}`, item.loadCssData, uidKey);
      hasLoadItem = true;
      return false;
    }
    return true;
  }) as StyleComponentCreatorRet[];

  const _useLoadStyles = hasLoadItem ? () => useLoadStyles(name, uidKey) : () => null;

  const MainStyleComponent: FC<{ partialSelector?: string; targetPrefix?: string }> = ({
    partialSelector,
    targetPrefix,
  }) => {
    const contextValue = useContext(ThemeContext);
    const { resolvedTheme = emptyObj, scopeList, schema } = contextValue;

    const loadStyles = _useLoadStyles();

    const stylesConfig = useMemo(() => {
      return [...styles, ...(loadStyles || [])];
    }, [loadStyles]);

    const elements = useMemo(() => {
      // const refCount: any = {};

      const eles = stylesConfig
        .map(({ id, global, fieldName, name: compName, cssTemplate }) => {
          if (!id) {
            return false;
          }
          // let shouldRender = true;
          // const hasOnly = (resolvedTheme || emptyObj)[fieldName]?.onlyTemplate;
          // if (!refCount[compName] && hasOnly) {
          //   refCount[compName] = true;
          // } else if (refCount[compName] && hasOnly) {
          //   shouldRender = false;
          // }
          return (
            // shouldRender && (
            <StyleComponent
              global={global}
              name={compName}
              uiType={name}
              cssTemplate={cssTemplate}
              partialSelector={partialSelector}
              schema={schema}
              scopeList={scopeList}
              data={resolvedTheme}
              key={`${name}-${id}`}
              targetIdPrefix={targetPrefix}
            />
            // )
          );
        })
        .filter(Boolean);
      return eles;
    }, [schema, resolvedTheme, scopeList, partialSelector, targetPrefix, stylesConfig]);

    return <>{elements}</>;
  };
  (MainStyleComponent as any).uiName = name;
  return MainStyleComponent;
}
