import React from 'react';
import intl from '../../utils/intl';
import { BlockContainer } from './index.style';
import SectionTitle from '../_components/SectionTitle';
import ConfigItem from '../_components/ConfigItem';
import withFormOperate from '../_components/withFormOperate';
import { getMemoizedAssets } from './util';

@withFormOperate
export default class ListConfig extends React.Component {
  getList = getMemoizedAssets(this.props.styleCounts.list, 'list/list-single');

  getListWithAction = getMemoizedAssets(this.props.styleCounts.list, 'list/list-single_operate');

  getListDouble = getMemoizedAssets(this.props.styleCounts.list, 'list/list-double');

  getListDoubleAction = getMemoizedAssets(this.props.styleCounts.list, 'list/list-double_operate');

  render() {
    const { value, schema, handleChange } = this.props;
    return (
      <BlockContainer id="list-config">
        <SectionTitle title="列表" titleTail="List" />
        <ConfigItem
          cols={2}
          title={intl.get('hzero.hzeroTheme.page.basicList').d('基础列表')}
          items={this.getList(schema)}
          defaultSelected={value}
          onChange={handleChange('style')}
        />
        <ConfigItem
          cols={2}
          // title="单行列表+操作"
          title={intl.get('hzero.hzeroTheme.page.basicListWithAction').d('基础列表+操作')}
          // items={withActions}
          onChange={handleChange('style')}
          items={this.getListWithAction(schema)}
          defaultSelected={value}
        />
        <ConfigItem
          cols={2}
          // title="多行列表"
          title={intl.get('hzero.hzeroTheme.page.verticalList').d('多行列表')}
          // items={multiLine}
          onChange={handleChange('style')}
          items={this.getListDouble(schema)}
          defaultSelected={value}
        />
        <ConfigItem
          cols={2}
          // title="多行列表+操作"
          title={intl.get('hzero.hzeroTheme.page.verticalListWithAction').d('多行列表+操作')}
          // items={multiLine}
          onChange={handleChange('style')}
          items={this.getListDoubleAction(schema)}
          defaultSelected={value}
        />
      </BlockContainer>
    );
  }
}
