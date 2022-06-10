import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

export const btnCss = (props) => {
  const { primary7, primary6, primary4 } = getThemeData(props, 'common');
  return css`
    //去除动画
    .ant-btn.ant-btn {
      :after {
        display: none;
      }
    }
    //线框
    .ant-btn.ant-btn:not(.ant-btn-danger):not(.ant-btn-primary):not(.ant-btn-icon-only):not([disabled]),
    .ant-btn-default.ant-btn-default:not([disabled]) {
      :hover,
      :focus {
        color: ${primary6};
        border-color: ${primary6};
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
        background-color: ${primary4};
        border-color: ${primary4};
      }
      &:active {
        background-color: ${primary7};
        border-color: ${primary7};
      }
    }
    //图标
    .ant-btn.ant-btn-icon-only {
      &:hover,
      &:focus,
      &:active {
        color: ${primary6};
        border-color: #d9d9d9;
      }
      &:active {
        background: #f2f2f2;
      }
    }
    //按钮组
    .ant-btn-group.ant-btn-group.ant-btn-group {
      .ant-btn.ant-btn:not([disabled]) {
        &:hover {
          border-color: rgb(217, 217, 217);
          color: ${primary6};
        }
        &:focus {
          color: ${primary6};
          border-color: ${primary6};
        }
        :active {
          color: ${primary7};
          border-color: ${primary7};
        }
      }
    }
  `;
};

const allBtnCss = css`
  ${btnCss}
`;

export default allBtnCss;
