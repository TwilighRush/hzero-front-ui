import React, { Component } from 'react';
import intl from '../../utils/intl';
import { BlockContainer } from './index.style';
import SectionTitle from '../_components/SectionTitle';
import ConfigItem from '../_components/ConfigItem';
import withFormOperate from '../_components/withFormOperate';
import MotionTitle from '../_components/MotionTitle';
import { getMemoizedAssets, getStaticGif } from './util';

@withFormOperate
export default class SelectConfig extends Component {
  memoizedBaseSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/selection');

  memoizedLabelSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/label-selection');

  memoizedIconSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/icon-selection');

  memoizedDateSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/date-selection');

  memoizedDateTimeSelect = getMemoizedAssets(
    this.props.styleCounts.select,
    'select/date_time-selection'
  );

  memoizedRangeSelect = getMemoizedAssets(
    this.props.styleCounts.select,
    'select/scope-date-selection'
  );

  memoizedFastSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/fast');

  memoizedTimeSelect = getMemoizedAssets(this.props.styleCounts.select, 'select/time');

  getMotions = getStaticGif(this.props.styleCounts.inputMotion, 'select/motions');

  render() {
    const { value, schema, handleChange } = this.props;
    return (
      <BlockContainer id="select-config">
        <SectionTitle title="选择框" titleTail="Select" />
        <ConfigItem
          name="select"
          title={intl.get('hzero.hzeroTheme.page.basicSelect').d('基础下拉选择框')}
          simple
          items={this.memoizedBaseSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="fastSelect"
          title={intl.get('hzero.hzeroTheme.page.fastSelect').d('快捷选择')}
          simple
          items={this.memoizedFastSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="labelSelect"
          title={intl.get('hzero.hzeroTheme.page.labelSelect').d('标签选择框')}
          items={this.memoizedLabelSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="iconSelect"
          title={intl.get('hzero.hzeroTheme.page.iconSelect').d('图标选择')}
          items={this.memoizedIconSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="dateSelect"
          cols={2}
          title={intl.get('hzero.hzeroTheme.page.dateSelect').d('日期选择')}
          items={this.memoizedDateSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="rangeSelect"
          cols={2}
          title={intl.get('hzero.hzeroTheme.page.rangeDateSelect').d('范围日期选择')}
          items={this.memoizedRangeSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="dateTimeSelect"
          cols={2}
          title={intl.get('hzero.hzeroTheme.page.dateAndTimeSelect').d('日期+时间选择')}
          items={this.memoizedDateTimeSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="timeSelect"
          cols={2}
          title={intl.get('hzero.hzeroTheme.page.timeSelect').d('时间选择')}
          items={this.memoizedTimeSelect(schema)}
          defaultSelected={value.select}
          onChange={handleChange('select')}
        />
        <ConfigItem
          name="selectMotion"
          title={<MotionTitle text={intl.get('hzero.hzeroTheme.page.animation').d('动效')} />}
          defaultSelected={value.dropdownMotion}
          items={this.getMotions(schema)}
          onChange={handleChange('dropdownMotion')}
        />
      </BlockContainer>
    );
  }
}
