import { css, keyframes } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

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

const gouStyle = (props) => {
  const gou = getThemeData(props, "radio", "gou");
  if (gou) {
    return css`
      background-color: ${getThemeData(
        props,
        "radio",
        "checkedBackgroundColor"
      )} !important;
      height: ${getThemeData(props, "radio", "gouHeight")}px !important;
      width: ${getThemeData(props, "radio", "gouWidth")}px !important;
      border: 0.01rem solid ${getThemeData(props, "common", "primary")};
      border-top: 0;
      border-right: 0;
      transform: ${getThemeData(props, "radio", "checkedTransform")} !important;
      top: ${getThemeData(props, "radio", "gouTop")} !important;
      left: ${getThemeData(props, "radio", "checkedLeft")} !important;
    `;
  }
  return "";
};

const RadioStyle = (props) => {
  const { fontFamily } = getThemeData(props, "radio");
  const { primary } = getThemeData(props, "common");
  const d = getThemeData(props, "radio");
  return css`
    .c7n-radio-wrapper {
      && {
        font-family: ${fontFamily};
        /* disabled 时样式覆盖 */
        && {
          &&.c7n-radio-wrapper-disabled {
            && {
              .c7n-radio-disabled {
                .c7n-radio-inner {
                  background-color: #f8f8f8;
                  border-color: #e7eaed;
                }
              }
              .c7n-radio-disabled + span {
                color: #aaadba;
              }

              .c7n-radio-disabled.c7n-radio-checked .c7n-radio-inner::before {
                background-color: rgba(0, 0, 0, 0.24);
                border-color: rgba(0, 0, 0, 0.24);
                background-color: ${d.checkedBackgroundColor};
                border: ${d.checkedWrapBorder};
                top: ${d.dotTop + 1}px;
                left: ${d.dotLeft + 1}px;
              }
              .c7n-radio-disabled.c7n-radio-checked .c7n-radio-inner {
                background-color: ${d.checkedBgColor};
                border: ${d.checkedWrapBorder};
                opacity: ${d.disabledCheckedOpacity};
              }

              .c7n-radio-disabled.c7n-radio-checked .c7n-radio-inner {
                background-color: ${d.checkedDisabledBgColor}!important;
                border: ${d.checkedDisabledWrapBorder};
                opacity: ${d.disabledCheckedOpacity};
              }
            }
          }
        }
        /* 正常样式及动画以及hover */
        && {
          && {
            .c7n-radio-inner {
              width: 0.16rem;
              height: 0.16rem;
            }

            .c7n-radio-checked .c7n-radio-inner {
              border-color: ${primary};
              color: ${primary};
              padding: 0;
              background: none;
              background: ${d.defaultBgColor};
            }
            .c7n-radio-inner::before {
              content: "";
              width: 0.08rem;
              height: 0.08rem;
              transform: scale(1);
              opacity: 0;
              position: absolute;
              top: 0.03rem;
              left: 0.03rem;
              transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
              width: ${d.dotWidth}px;
              height: ${d.dotHeight}px;
              top: ${d.dotTop}px;
              left: ${d.dotLeft}px;
            }
            .c7n-radio-checked .c7n-radio-inner::before {
              opacity: 1;
              border-radius: ${() =>
                getThemeData(props, "radio", "borderRadius")};
              background-color: ${primary};
              ${gouStyle};
              background-color: ${d.defaultChoosedInnerColor};
            }

            .c7n-radio::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 0.01rem solid ${primary};
              content: "";
              visibility: hidden;
            }
            .c7n-radio-checked::after {
              visibility: visible;
              ${css`
                animation: ${RadioEffect} 0.36s ease-out;
              `};
              animation-fill-mode: both;
            }
          }
        }
      }
    }

    .c7n-radio-wrapper:hover {
      .c7n-radio-inner {
        border-color: ${primary};
      }
    }
  `;
};

const ButtonCss = (props) => {
  const d = getThemeData(props, "radioButton");
  const style = css`
    .c7n-radio-button-wrapper.c7n-radio-button-wrapper {
      font-family: ${d.fontFamily};
      height: ${d.btnHeight}px;
      font-size: ${d.fontSize}px;
      line-height: ${d.btnHeight - 2}px;
      color: ${d.fontColor};
      padding: ${d.btnPadding};
      margin-right: ${d.btnMarginRight}px;
      border-radius: ${d.radius}px;
      border: 0.01rem solid ${d.borderColor};
      box-shadow: ${d.btnBoxShadow};
      &:first-child {
        /* border-radius: ${d.btnOneRadius}px; */
        border-radius: ${d.radius}px;
      }
      &:last-child {
        /* border-radius: ${d.btnOneRadius}px; */
        border-radius: ${d.radius}px;
        margin-right: 0;
      }
      &:not(:first-child)::before {
        width: 0;
      }
      &.c7n-radio-button-wrapper-checked {
        border-radius: ${d.radius}px;
        color: ${d.checkedFontColor};
        border: 0.01rem solid ${d.checkedBorderColor};
        background: ${d.checkedBgColor};
      }
      &.c7n-radio-button-wrapper-disabled {
        color: ${d.disabledFontColor};
        background: ${d.disabledBgColor};
        border-color: ${d.disabledBorderColor};
      }
      &.c7n-radio-button-wrapper-disabled.c7n-radio-button-wrapper-checked {
        color: ${d.checkedDisableFontColor};
        background: ${d.checkedDisableBgColor};
        border-color: ${d.checkedDisableBorderColor};
      }
    }
    .c7n-radio-group {
      & > .c7n-radio-button-wrapper.c7n-radio-button-wrapper {
        border-radius: ${d.groupBorderRadiusOther}px !important;
      }
      & > .c7n-radio-button-wrapper.c7n-radio-button-wrapper:first-child {
        border-top-left-radius: ${d.groupBorderRadius}px !important;
        border-bottom-left-radius: ${d.groupBorderRadius}px !important;
      }
      & > .c7n-radio-button-wrapper.c7n-radio-button-wrapper:last-child {
        border-top-right-radius: ${d.groupBorderRadius}px !important;
        border-bottom-right-radius: ${d.groupBorderRadius}px !important;
      }
    }
  `;
  return css`
    .c7n-radio-group-solid.c7n-radio-group-solid {
      ${style};
    }
    ${style};
  `;
};

const RadioCss = css`
  /* Radio--components 全局样式实现 */
  ${RadioStyle}
  ${ButtonCss}
`;

export default createStyleComponent("comp/radio", RadioCss);
