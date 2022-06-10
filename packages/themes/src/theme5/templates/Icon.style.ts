import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const IconStyle = (props) => {
  const { iconfontFamily, primary6 } = getThemeData(props, 'common');
  return css`
    // icon替换
    .icon.icon {
      font-size: 0.14rem;

      &.icon-help {
        &:before {
          content: '\\e75a';
          font-family: ${iconfontFamily};
        }
        :hover {
          color: ${primary6};
        }
      }
      &.c7n-pro-icon-picker-trigger {
        &:before {
          content: '\\e754';
          font-family: 'iconfont-c7n-font';
        }
      }
      //上传
      &.icon-upload:before {
        font-family: ${iconfontFamily};
        content: '\\e758';
      }
      &.c7n-alert-icon {
        &.icon-info {
          &:before {
            content: '\\e772';
            font-family: ${iconfontFamily};
          }
        }
        &.icon-warning {
          &:before {
            content: '\\e79a';
            font-family: ${iconfontFamily};
          }
        }
        &.icon-error {
          &:before {
            content: '\\e784';
            font-family: ${iconfontFamily};
          }
        }
        &.icon-check_circle {
          &:before {
            content: '\\e73c';
            font-family: ${iconfontFamily};
          }
        }
      }
    }
    a[disabled] {
      color: #8c8c8c !important;
    }
  `;
};
export default IconStyle;
