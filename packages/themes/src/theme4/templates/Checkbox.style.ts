import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const checkedStyle = css`
  :before {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
  }
  :after {
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
    transform: rotate(45deg) scale(1);
  }
`;

function getCheckboxStyle(props: any) {
  const d = getThemeData(props, 'checkbox');
  const { primary } = getThemeData(props, 'common');
  return css`
    .c7n-pro-checkbox.c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
      border: 0.02rem solid ${d.disabledBorderColor} !important;
    }
    .c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
      &.c7n-pro-checkbox-indeterminate .c7n-pro-checkbox-inner {
        ${checkedStyle};
      }

      &.c7n-pro-checkbox-indeterminate,
      &.c7n-pro-checkbox-indeterminate:hover {
        .c7n-pro-checkbox-inner {
          background: ${primary};
          border-color: ${primary};
          background-color: ${primary} !important;
          :after {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) !important;
          }
        }
      }

      .c7n-pro-checkbox {
        :checked + .c7n-pro-checkbox-inner {
          background-color: ${primary} !important;
          border-color: ${primary}; // 选中后，边框与底色同色

          :after {
            left: 0.03rem; // 防止过多小数带来的偏移
          }
        }
      }

      &.c7n-pro-checkbox-disabled .c7n-pro-checkbox-label {
        color: ${d.disabledColor};
      }
      &.c7n-pro-checkbox-focused {
        .c7n-checkbox-inner {
          border-color: ${primary};
        }
        .c7n-pro-checkbox {
          :checked + .c7n-pro-checkbox-inner {
            ${checkedStyle};
            background: ${primary};
            border-color: ${primary};
          }
          :focus + .c7n-pro-checkbox-inner {
            border-color: ${primary};
          }
        }
      }

      .c7n-pro-checkbox:hover + .c7n-pro-checkbox-inner,
      .c7n-pro-checkbox-wrapper:hover .c7n-pro-checkbox-inner {
        border-color: ${primary};
      }
      .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
        :before {
          border: 2px solid ${d.disabledBorderColor};
          // transform: scale(1);
          background: ${d.disabledBg};
        }
      }
      &.c7n-pro-checkbox-indeterminate {
        .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
          background-color: ${d.checkedDisabledBg} !important;
          border-color: ${d.checkedDisabledBg} !important; // 选中后，边框与底色同色

          :before {
            background: ${d.indeterminateCheckedBgColor};
          }
        }
      }
      .c7n-pro-checkbox:disabled.c7n-pro-checkbox:checked + .c7n-pro-checkbox-inner {
        background-color: ${d.checkedDisabledBg} !important;
        border-color: ${d.checkedDisabledBg} !important; // 选中后，边框与底色同色

        ${checkedStyle}
        :before {
          background: ${d.indeterminateCheckedBgColor};
        }
      }
      .c7n-pro-checkbox-inner {
        position: relative;
        box-sizing: border-box;
        width: 0.16rem;
        height: 0.16rem;
        border: 0.02rem solid ${d.borderColor};
        border-radius: ${d.radius}px;
        background: ${d.innerbackGroundColor || 'transparent !important'};
        // background-clip: content-box;
        vertical-align: middle;
        :hover {
          border-color: ${primary};
        }
        :after {
          position: relative;
          /* z-index: 2; */
          /* transform: rotate(45deg) scale(0); */
          transform-origin: center;
          transition: all 0.5s;
        }
        :before {
          content: '';
          position: absolute;
          top: -0.01rem;
          bottom: -0.01rem;
          left: -0.01rem;
          right: -0.01rem;
          background: ${primary};
          transform-origin: center;
          transform: scale(0);
          transition: all 0.5s;
          border-radius: ${d.radius}px;
        }
      }

      .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner:after {
        border-color: ${d.disabledImageColor} !important;
      }
      .c7n-pro-checkbox-label {
        font-family: ${d.fontFamily};
        font-size: ${d.fontSize}px;
        color: ${d.fontColor};
        height: 0.16rem;
        line-height: 0.16rem;
      }
    }
  `;
}

const checkboxStyle = css`
  /* Checkbox--pro 全局样式实现 */
  ${getCheckboxStyle}
`;

export default checkboxStyle;
