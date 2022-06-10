import { css, keyframes } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const RadioEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
  `;

const gouStyle = (props: any) => {
  const gou = getThemeData(props, 'radio', 'gou');
  if (gou) {
    return css`
      background-color: ${getThemeData(props, 'radio', 'checkedBackgroundColor')} !important;
      height: ${getThemeData(props, 'radio', 'gouHeight')}px !important;
      width: ${getThemeData(props, 'radio', 'gouWidth')}px !important;
      border: 0.01rem solid ${getThemeData(props, 'common', 'primary')};
      border-top: 0;
      border-right: 0;
      transform: ${getThemeData(props, 'radio', 'checkedTransform')} !important;
      top: ${getThemeData(props, 'radio', 'gouTop')} !important;
      left: ${getThemeData(props, 'radio', 'checkedLeft')} !important;
    `;
  }
  return '';
};

const RadioStyle = (props: any) => {
  const { primary } = getThemeData(props, 'common');
  const { fontFamily, radius } = getThemeData(props, 'radio');
  const d = getThemeData(props, 'radio');

  return css`
    .c7n-radio-group-wrapper {
      .c7n-radio-group {
        .c7n-radio-button-wrapper:first-child {
          border-radius: ${radius}px 0 0 ${radius}px !important;
        }
        .c7n-radio-button-wrapper:last-child {
          border-radius: 0 ${radius}px ${radius}px 0 !important;
        }
      }
    }
    .c7n-pro-radio-wrapper:not(.c7n-pro-radio-button) {
      font-family: ${fontFamily};
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
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
      & {
        &.c7n-pro-radio-disabled {
          &.c7n-pro-radio-button {
            border-color: #d9dbe6 !important;
          }
          &.c7n-pro-radio-button:hover {
            .c7n-pro-radio-inner {
              background-color: #f8f8f8;
            }
            .c7n-pro-radio-label:hover,
            .c7n-pro-radio-label {
              color: #aaadba !important;
            }
          }

          .c7n-pro-radio:disabled + .c7n-pro-radio-inner {
            background-color: #f8f8f8 !important;
            border-color: #d9dbe6 !important;
          }
          /* 设置disabled是内里样式 */
          .c7n-pro-radio:disabled + .c7n-pro-radio-inner + span {
            color: #aaadba !important;
          }
          .c7n-pro-radio:disabled + .c7n-pro-radio-inner::before {
            background-color: rgba(0, 0, 0, 0.24) !important;
            border-color: rgba(0, 0, 0, 0.24) !important;
          }
          .c7n-pro-radio:checked + .c7n-pro-radio-inner::before {
            background-color: ${d.checkedBackgroundColor}!important;
            border: ${d.checkedWrapBorder};
          }
          .c7n-pro-radio:checked + .c7n-pro-radio-inner {
            background-color: ${d.checkedBgColor}!important;
            border: ${d.checkedWrapBorder};
          }
          .c7n-pro-radio:checked + .c7n-pro-radio-inner {
            background-color: ${d.checkedDisabledBgColor}!important;
            border: ${d.checkedDisabledWrapBorder};
          }
        }
      }

      & {
        .c7n-pro-radio-inner {
          width: 0.16rem;
          height: 0.16rem;
          border-color: ${d.borderGrayColor};
        }
        .c7n-pro-radio:hover + .c7n-pro-radio-inner {
          border-color: ${primary};
        }

        .c7n-pro-radio-inner::before {
          width: 0.08rem;
          height: 0.08rem;
          width: ${d.dotWidth}px;
          height: ${d.dotHeight}px;
          top: ${d.dotTop}px;
          left: ${d.dotLeft}px;
        }
        .c7n-pro-radio-inner::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 0.01rem solid ${primary};
          content: '';
          visibility: hidden;
        }
      }

      && {
        .c7n-pro-radio:checked + .c7n-pro-radio-inner {
          border-color: ${primary};
          background: ${d.defaultBgColor};
          &::before {
            border-radius: ${() => getThemeData(props, 'radio', 'borderRadius')};
            background-color: ${primary};
            ${gouStyle};
            background-color: ${d.defaultChoosedInnerColor};
          }
          &::after {
            visibility: visible;
            ${css`
              animation: ${RadioEffect} 0.36s ease-out;
            `};
            animation-fill-mode: both;
          }
        }
      }
    }
  `;
};

const getButtonStyle = (props: any) => {
  // const { primary } = getThemeData(props, "common");
  const {
    btnHeight,
    fontSize,
    borderColor,
    checkedFontColor,
    checkedBorderColor,
    radius,
    checkedBgColor,
    disabledBorderColor,
    disabledBgColor,
    disabledFontColor,
    checkedDisableBorderColor,
    checkedDisableFontColor,
    checkedDisableBgColor,
    verticalAligin,
  } = getThemeData(props, 'radioButton');
  return css`
    .c7n-pro-radio-wrapper {
      .c7n-pro-radio-label {
        min-height: 0.18rem;
        line-height: 0.18rem;
      }
      /* button 样式处理 */
      & {
        &.c7n-pro-radio-button {
          /* 设置高度和radius */
          height: ${btnHeight}px;
          line-height: ${btnHeight - 2}px;
          font-size: ${fontSize}px;
          padding: 0 0.08rem;

          // 设置border-radius
          .c7n-pro-radio-inner {
            border-radius: ${radius}px;
            width: 100%;
            height: 100%;
          }

          /* hover时边框灰色，字体primary */
          .c7n-pro-radio:hover + .c7n-pro-radio-inner {
            border-color: ${borderColor};
          }

          .c7n-pro-radio:checked + .c7n-pro-radio-inner {
            border-color: ${checkedBorderColor} !important;
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
            display: none;
          }

          .c7n-pro-radio:checked + .c7n-pro-radio-inner + span {
            color: ${checkedFontColor};
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
