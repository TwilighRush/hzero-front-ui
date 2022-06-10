import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const buttonStyle = (props) => {
  const { primary5, primary6, primary7 } = getThemeData(props, 'common');
  return css`
    //线框
    .ant-btn.ant-btn {
      :after {
        display: none;
      }
    }

    .ant-btn.ant-btn:not(.ant-btn-danger):not(.ant-btn-primary):not(.ant-btn-icon-only):not([disabled]),
    .ant-btn-group.ant-btn-group .ant-btn,
    .ant-btn-default.ant-btn-default {
      :hover,
      :focus {
        color: ${primary5};
        border-color: ${primary5};
      }
      :active {
        color: ${primary7};
        border-color: ${primary7};
      }
    }
    //虚线按钮
    .ant-btn.ant-btn-dash {
      border-style: dashed;
    }
    //主按钮
    .ant-btn.ant-btn-primary {
      background-color: ${primary6};
      border-color: ${primary6};
      &:hover,
      &:focus {
        background-color: ${primary5};
        border-color: ${primary5};
      }
      &:active {
        background-color: ${primary7};
        border-color: ${primary7};
      }
      &.ant-btn-icon-only:not([disabled]) {
        &:hover,
        &:focus,
        &:active {
          color: #fff;
        }
      }
    }
    //图标
    .ant-btn.ant-btn-icon-only {
      &:hover,
      &:focus,
      &:active {
        color: ${primary6};
        border-color: ${primary5};
      }
      &:active {
        color: ${primary7};
        border-color: ${primary6};
      }
    }
  `;
};

export default buttonStyle;
