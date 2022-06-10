import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getCheckboxStyle(props: any) {
  const d = getThemeData(props, 'checkbox');
  const { primary6, iconfontFamily } = getThemeData(props, 'common');
  return css`
    .c7n-pro-checkbox.c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
      border: 0.01rem solid ${d.disabledBorderColor} !important;
      background: ${d.disabledBg} !important;
    }
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
      //正常样式
      :hover {
        .c7n-pro-checkbox-inner {
          border-color: ${primary6};
        }
      }
      .c7n-pro-checkbox-inner {
        position: relative;
        box-sizing: border-box;
        width: 0.16rem;
        height: 0.16rem;
        border: 0.01rem solid ${d.borderColor};
        border-radius: ${d.radius}px;
        background: ${d.innerbackGroundColor || 'transparent !important'};
        font-size: 12px !important;
        vertical-align: middle;
        font-style: normal;
        font-weight: inherit;
        font-variant: normal;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        :after {
          display: none;
        }
      }
      .c7n-pro-checkbox-label {
        font-size: ${d.fontSize}px;
        color: ${d.fontColor};
      }
      //indeterminate样式
      &.c7n-pro-checkbox-indeterminate {
        &:hover {
          .c7n-pro-checkbox-inner {
            border-color: ${d.borderColor};
          }
        }
        .c7n-pro-checkbox-inner {
          border-color: ${d.borderColor};
          background-color: #fff !important;
          text-align: center;
          :before {
            display: none;
          }
          :after {
            display: block;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) !important;
            border: none;
            width: 8px;
            height: 8px;
            background: ${primary6} !important;
          }
        }
      }
      //选中
      .c7n-pro-checkbox {
        :checked + .c7n-pro-checkbox-inner {
          background-color: ${primary6} !important;
          border-color: ${primary6}; // 选中后，边框与底色同色

          :before {
            content: '\\e712';
            font-family: ${iconfontFamily} !important;
            color: #fff;
            position: absolute;
            margin-left: 1.5px;
            top: 1px;
            right: 0px;
          }
        }
      }
      .c7n-pro-checkbox:focus + .c7n-pro-checkbox-inner {
        box-shadow: none;
      }
      //禁用
      &.c7n-pro-checkbox-indeterminate {
        .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
          background-color: ${d.disabledBg} !important;
          :after {
            background-color: ${d.disabledFontColor} !important;
          }
        }
      }
      .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner:after {
        border-color: ${d.disabledImageColor} !important;
      }
      .c7n-pro-checkbox:disabled.c7n-pro-checkbox:checked + .c7n-pro-checkbox-inner {
        background-color: ${d.checkedDisabledBg} !important;
        border-color: ${d.disabledBorderColor} !important; // 选中后，边框与底色同色

        :before {
          color: ${d.disabledFontColor};
        }
      }
      &.c7n-pro-checkbox-disabled .c7n-pro-checkbox-label {
        color: ${d.disabledFontColor};
      }
    }
  `;
}

const checkboxStyle = css`
  /* Checkbox--pro 全局样式实现 */
  ${getCheckboxStyle}
`;

export default checkboxStyle;
