import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const radioStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    //单选
    .ant-radio-wrapper.ant-radio-wrapper {
      .ant-radio-checked:not(.ant-radio-disabled) .ant-radio-inner {
        border-color: ${primary6};
        background-color: ${primary6};
        :after {
          background: #fff;
        }
      }
      &.ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
      .ant-radio:hover .ant-radio-inner,
      .ant-radio-focused .ant-radio-inner {
        border-color: ${primary6};
      }
    }
    .ant-radio-group.ant-radio-group {
      //线性按钮
      &.ant-radio-group-outline {
        .ant-radio-button-wrapper:hover,
        .ant-radio-button-wrapper-focused {
          color: ${primary6};
        }
        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
          border-color: ${primary6};
          color: ${primary6};
          box-shadow: -1px 0 0 0 ${primary6};
        }
      }
      //实心按钮
      &.ant-radio-group-solid {
        .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-checked):hover,
        .ant-radio-button-wrapper-focused {
          color: ${primary6};
        }
        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
          background: ${primary6};
          border-color: ${primary6};
          box-shadow: -1px 0 0 0 ${primary6};
        }
      }
    }
  `;
};

export default radioStyle;
