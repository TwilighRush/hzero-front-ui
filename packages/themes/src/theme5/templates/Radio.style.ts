import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const RadioStyle = (props: any) => {
  const { primary6, titleColor1, titleColor4, lineColor1, lineColor3, bgColor } = getThemeData(
    props,
    'common'
  );
  const { borderWidth, fontSize, lineHeight } = getThemeData(props, 'radio');

  return css`
    .c7n-pro-radio-wrapper.c7n-pro-radio-wrapper:not(.c7n-pro-radio-button) {
      line-height: ${lineHeight}px;
      &:last-child {
        margin-right: 0;
      }
      .c7n-pro-radio-label {
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        color: ${titleColor1};
      }
      &.c7n-pro-radio-readonly {
        .c7n-pro-radio:focus + .c7n-pro-radio-inner {
          border-color: #e0e0e0;
        }
        .c7n-pro-radio:hover + .c7n-pro-radio-inner {
          border-color: #e0e0e0;
          :after {
            border-color: #e0e0e0;
            display: none;
          }
        }
      }
      &.c7n-pro-radio-readonly.c7n-pro-radio-focused {
        .c7n-pro-radio:focus + .c7n-pro-radio-inner {
          border-color: #e0e0e0;
        }
        .c7n-pro-radio:hover + .c7n-pro-radio-inner {
          border-color: #e0e0e0;
          :after {
            border-color: #e0e0e0;
            display: none;
          }
        }
      }
      /* disabled 时样式覆盖 */

      &.c7n-pro-radio-disabled {
        &.c7n-pro-radio-button {
          border-color: ${lineColor3} !important;
        }
        &.c7n-pro-radio-button:hover {
          .c7n-pro-radio-inner {
            background-color: ${lineColor3};
          }
          .c7n-pro-radio-label:hover,
          .c7n-pro-radio-label {
            color: ${titleColor1} !important;
            font-size: ${fontSize}px;
          }
        }
        .c7n-pro-radio:checked + .c7n-pro-radio-inner {
          background-color: #fff !important;
          border: 5px solid ${titleColor4} !important;
        }
      }

      .c7n-pro-radio-inner {
        width: 0.16rem;
        height: 0.16rem;
        border-color: ${lineColor1} !important;
      }
      :hover:not(.c7n-pro-radio-disabled) {
        .c7n-pro-radio-inner {
          border-color: ${primary6} !important;
        }
      }
      .c7n-pro-radio-inner:after,
      .c7n-pro-radio-inner:before {
        display: none;
      }
      .c7n-pro-radio:checked + .c7n-pro-radio-inner {
        border-color: ${primary6} !important;
        background: ${bgColor};
        border-width: ${borderWidth};
      }
    }
    .c7n-radio-inner.c7n-radio-inner,
    .c7n-pro-radio-inner.c7n-pro-radio-inner {
      transition: all 0.2s;
    }
  `;
};

const getButtonStyle = (props: any) => {
  const {
    fontSize,
    btnHeight,
    checkedFontColor,
    checkedBgColor,
    disabledBorderColor,
    disabledBgColor,
    disabledFontColor,
    checkedDisableBorderColor,
    checkedDisableFontColor,
    checkedDisableBgColor,
    verticalAligin,
  } = getThemeData(props, 'radioButton');
  const { primary6 } = getThemeData(props, 'common');
  const { iconfontSize } = getThemeData(props, 'radio');

  return css`
    .c7n-pro-radio-wrapper.c7n-pro-radio-wrapper {
      &.c7n-pro-radio-focused {
        .c7n-pro-radio-inner {
          box-shadow: none;
        }
      }
      & {
        &.c7n-pro-radio-button {
          /* 设置高度和radius */
          height: ${btnHeight}px;
          line-height: ${btnHeight - 2}px;
          font-size: ${fontSize}px;
          padding: 0 0.08rem;
          /* 按钮显示效果pro组件 --最小宽度 */
          min-width: 72px;
          text-align: center;
          .c7n-pro-radio:checked + .c7n-pro-radio-inner::before {
            background-color: ${primary6};
            z-index: 2;
          }
          /* hover时边框灰色，字体primary */
          &.c7n-pro-radio-button :hover {
            &:not(.c7n-pro-radio-disabled) {
              .c7n-pro-radio-inner {
                border-color: ${primary6};
                z-index: 1;
              }
              .c7n-pro-radio-label {
                color: ${primary6};
              }
            }
          }

          .c7n-pro-radio:checked + .c7n-pro-radio-inner {
            border-color: ${primary6} !important;
            color: ${checkedFontColor};
            background-color: ${checkedBgColor};
          }
          .c7n-pro-radio-label {
            vertical-align: ${verticalAligin};
          }

          &.c7n-pro-radio-disabled .c7n-pro-radio-inner {
            border-color: ${disabledBorderColor} !important;
            color: ${disabledFontColor};
            background-color: ${disabledBgColor};
            & + .c7n-pro-radio-label {
              color: ${disabledFontColor};
            }
          }
          &.c7n-pro-radio-disabled {
            .c7n-pro-radio:checked + .c7n-pro-radio-inner {
              border-color: ${checkedDisableBorderColor} !important;
              color: ${checkedDisableFontColor};
              background-color: ${checkedDisableBgColor};
              & + .c7n-pro-radio-label {
                color: ${checkedDisableFontColor};
                cursor: not-allowed;
              }
            }
          }

          .c7n-pro-radio:checked + .c7n-pro-radio-inner::after {
            /* display: none; */
            /* 按钮显示效果pro组件 --icon勾选状态 */
            content: '\\e768' !important;
            font-family: 'iconfont-c7n-font';
            font-size: ${iconfontSize}px;
            height: ${iconfontSize}px;
            line-height: ${iconfontSize}px;
            position: absolute;
            border-radius: 4px;
            right: -1px;
            bottom: -1px;
            color: ${primary6};
          }

          .c7n-pro-radio:checked + .c7n-pro-radio-inner + span {
            color: ${primary6};
            z-index: 2;
          }

          &.c7n-pro-radio-focused > .c7n-pro-radio-inner {
            box-shadow: none;
          }
        }
      }
    }
  `;
};

const radioCss = css`
  ${RadioStyle}
  ${getButtonStyle}
`;

export default radioCss;
