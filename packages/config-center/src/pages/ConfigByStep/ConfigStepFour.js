import React from 'react';
import { Form } from 'hzero-ui';
import { ConfigStepContainer, StyledConfigRow } from './index.style';
import TimeLineConfig from '../ComponentsConfig/TimeLineConfig';
import TabConfig from '../ComponentsConfig/TabConfig';
import TableConfig from '../ComponentsConfig/TableConfig';
import PopconfirmConfig from '../ComponentsConfig/PopconfirmConfig';
import ProgressConfig from '../ComponentsConfig/ProgressConfig';
import StepsConfig from '../ComponentsConfig/StepConfig';
import LoadingConfig from '../ComponentsConfig/LoadingConfig';
import AnchorConfig from '../ComponentsConfig/AnchorConfig';

const ConfigStepFour = ({ form, config }) => {
  const { getFieldDecorator } = form;
  return (
    <ConfigStepContainer>
      <StyledConfigRow>
        {getFieldDecorator('timeline', {
          initialValue: config.timeline,
        })(<TimeLineConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator('anchor', {
          initialValue: config.anchor,
        })(<AnchorConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator('tabs', {
          initialValue: {
            tabs: config.tabs,
            tabsCard: config.tabsCard,
          },
        })(<TabConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator('table', {
          initialValue: config.table,
        })(<TableConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator('popconfirm', {
          initialValue: {
            popconfirm: config.popconfirm,
            modal: config.modal,
          },
        })(<PopconfirmConfig />)}
      </StyledConfigRow>
      {getFieldDecorator('progress', {
        initialValue: {
          lineProgress: config.lineProgress,
          circleProgress: config.circleProgress,
        },
      })(<ProgressConfig />)}
      <StyledConfigRow>
        {getFieldDecorator('steps', {
          initialValue: {
            steps: config.steps,
            stepsGroup: config.stepsGroup,
          },
        })(<StepsConfig />)}
      </StyledConfigRow>
      <StyledConfigRow>
        {getFieldDecorator('spin', {
          initialValue: {
            spin: config.spin,
            collapse: config.collapse,
          },
        })(<LoadingConfig />)}
      </StyledConfigRow>
    </ConfigStepContainer>
  );
};

export default Form.create({
  onValuesChange(props, field, values) {
    if (props.onChange) {
      const { popconfirm, progress, steps, tabs, spin, ...rest } = values;
      props.onChange({
        ...rest,
        ...popconfirm,
        ...progress,
        ...tabs,
        ...spin,
        ...steps,
      });
    }
  },
})(ConfigStepFour);
