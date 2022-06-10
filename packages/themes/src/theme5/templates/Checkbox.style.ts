import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

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
  const { radius, fontSize, lineHeight, btnHeight } = getThemeData(props, 'checkbox');
  const { primary6, titleColor1, titleColor4, lineColor1, lineColor3, minWidth } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-wrapper:not(.c7n-pro-checkbox-button) {
      :hover .c7n-pro-checkbox-inner {
        border-color: ${primary6};
      }
      &.c7n-pro-checkbox-indeterminate {
        &,
        &:hover {
          .c7n-pro-checkbox-inner {
            ${checkedStyle};
            background: ${primary6};
            border-color: ${primary6};
            background-color: ${primary6} !important;
            :after {
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) !important;
            }
          }
        }
        .c7n-pro-checkbox:disabled + .c7n-pro-checkbox-inner {
          background-color: ${titleColor4} !important;
          border-color: ${titleColor4} !important; // 选中后，边框与底色同色
        }
      }
      &.c7n-pro-checkbox-focused {
        .c7n-checkbox-inner {
          border-color: ${primary6};
        }
        .c7n-pro-checkbox {
          :checked + .c7n-pro-checkbox-inner {
            ${checkedStyle};
            background: ${primary6};
            border-color: ${primary6};
          }
          :focus + .c7n-pro-checkbox-inner {
            border-color: ${primary6};
          }
        }
      }
      .c7n-pro-checkbox {
        :hover + .c7n-pro-checkbox-inner {
          border-color: ${primary6};
        }
        :focus + .c7n-pro-checkbox-inner {
          box-shadow: none;
        }
        :checked + .c7n-pro-checkbox-inner {
          background-color: ${primary6} !important;
          border-color: ${primary6}; // 选中后，边框与底色同色

          :after {
            left: 0.04rem;
          }
        }
        :disabled {
          + .c7n-pro-checkbox-inner {
            border: 0.01rem solid ${lineColor1} !important;
            background: ${lineColor3} !important;
            :after {
              border-color: #fff !important;
            }
          }
          &.c7n-pro-checkbox:checked + .c7n-pro-checkbox-inner {
            background-color: ${titleColor4} !important;
            border-color: ${titleColor4} !important; // 选中后，边框与底色同色
            ${checkedStyle}
          }
        }
      }
      .c7n-pro-checkbox-inner {
        position: relative;
        box-sizing: border-box;
        width: 0.16rem;
        height: 0.16rem;
        border: 0.01rem solid ${lineColor1};
        border-radius: ${radius}px;
        vertical-align: middle;
        :hover {
          border-color: ${primary6};
        }
        :after {
          position: relative;
          /* z-index: 2; */
          transform-origin: center;
          transition: all 0.5s;
          top: 0;
        }
        :before {
          content: '';
          position: absolute;
          background: ${primary6};
          transform-origin: center;
          transform: scale(0);
          transition: all 0.5s;
          border-radius: ${radius}px;
        }
      }
      .c7n-pro-checkbox-label {
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        color: ${titleColor1};
      }
    }
    .c7n-pro-checkbox-wrapper.c7n-pro-checkbox-wrapper.c7n-pro-checkbox-button {
      min-width: ${minWidth}px;
      .c7n-pro-checkbox-label {
        :hover {
          border-color: ${primary6};
          color: ${primary6};
          opacity: initial;
          z-index: 1;
        }
      }
      .c7n-pro-checkbox-label {
        height: ${btnHeight}px;
        line-height: ${btnHeight - 2}px;
        font-size: ${fontSize}px;
        font-weight: 400;
        border-radius: 2px;
      }
      .c7n-pro-checkbox:checked + i + .c7n-pro-checkbox-label {
        position: static;
        opacity: 1;
        color: ${primary6};
        border-color: ${primary6};
        :hover {
          opacity: 1;
        }
      }
      .c7n-pro-checkbox:checked + i + .c7n-pro-checkbox-label::after {
        content: '\\e768' !important;
        font-family: 'iconfont-c7n-font';
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        position: absolute;
        border-radius: 4px;
        right: 0px;
        bottom: 0px;
      }
    }
  `;
}

const checkboxStyle = css`
  /* Checkbox--pro 全局样式实现 */
  ${getCheckboxStyle}
`;

export default checkboxStyle;
