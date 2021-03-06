import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
  hexToRgbaColor,
} from "@hzero-front-ui/core";

const buttonStyle = (props) => {
  const {
    fontFamily,
    fontSize,
    radius,
    height,
    // borderWidth,
    primaryBgColor,
    primaryColor,
    primaryBorderColor,
    primaryHoverBgColor,
    primaryHoverColor,
    primaryHoverBorderColor,
    defaultBorderColor,
    defaultColor,
    defaultBgColor,
    defaultHoverBgColor,
    defaultHoverColor,
    defaultHoverBorderColor,
    defaultDisabledColor,
    defaultDisabledBgColor,
    defaultDisabledBorderColor,
    primaryDisabledBorderColor,
    primaryDisabledBgColor,
    primaryDisabledColor,
    leftRightPadding,
    linkBgColor,
    linkColor,
    linkBorderColor,
    linkHoverBgColor,
    linkHoverColor,
    linkHoverBorderColor,
    linkActiveBgColor,
    linkActiveColor,
    linkActiveBorderColor,
    linkDisabledColor,
    linkDisabledBgColor,
    linkDisabledBorderColor,
    linkActiveBoxShadow,
    linkHoverBoxShadow,
    textBgColor,
    textColor,
    textBorderColor,
    textHoverBgColor,
    textHoverColor,
    textHoverBorderColor,
    textHoverBoxShadow,
    textActiveBgColor,
    textActiveColor,
    textActiveBorderColor,
    textActiveBoxShadow,
    textDisabledBgColor,
    textDisabledBorderColor,
    textDisabledColor,
    linktextDecoration,
    defaultFlatHoverColor,
  } = getThemeData(props, "button");
  const { textSizeBase, baseHeight, borderWidthBase } = getThemeData(
    props,
    "common"
  );
  return css`
    a.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
      display: inline-flex;
      align-items: center;
    }
    .c7n-pro-btn.c7n-pro-btn {
      &&.c7n-pro-btn-icon-only {
        padding: 0;
        width: ${height}px;
        > .icon {
          line-height: 1;
        }
      }
      > span {
        vertical-align: middle;
      }
      &.c7n-pro-btn-raised,
      &.c7n-pro-btn-flat {
        display: inline-block;
        box-sizing: border-box;
        height: ${baseHeight}px;
        line-height: 0;
        padding: 0 ${leftRightPadding}px;
        border-radius: ${radius}px;
        border-width: ${borderWidthBase}px;
        border-style: solid;
        color: ${defaultColor};
        border-color: ${textBorderColor || defaultBorderColor};
        background-color: ${textBgColor || defaultBgColor};
        box-shadow: none;
        white-space: nowrap;
        background-clip: padding-box;
        &.c7n-pro-btn-disabled {
          .icon {
            opacity: 0.5;
          }
        }
        .c7n-ripple-wrapper {
          display: none !important;
        }
        &[href] {
          span {
            line-height: ${height}px;
          }
        }
        span {
          font-family: ${fontFamily};
          font-size: ${textSizeBase}px;
          line-height: ${fontSize}px;
          text-align: right;
        }
        :hover,
        :focus,
        :active {
          border-color: ${defaultFlatHoverColor || textHoverBorderColor};
          color: ${textHoverColor || defaultHoverColor};
          background-color: ${textHoverBgColor || defaultHoverBgColor};
          i {
            border-radius: 2px;
          }
        }
        :disabled,
        :disabled:hover {
          i {
            animation: none;
          }
        }
        &.c7n-pro-btn-disabled {
          border-color: ${textBorderColor || defaultDisabledBorderColor};
          color: ${defaultDisabledColor};
          background-color: ${textBgColor || defaultDisabledBgColor};
          .c7n-progress-loading .c7n-progress-inner circle {
            stroke: rgba(0, 0, 0, 0.25) !important;
          }
        }
        &.c7n-pro-btn-default {
          color: ${defaultColor};
          border-color: ${defaultBorderColor};
          background-color: ${defaultBgColor};
          &.c7n-pro-btn-focused,
          :hover,
          :active {
            border-color: ${defaultHoverBorderColor};
            color: ${defaultHoverColor};
            background-color: ${defaultHoverBgColor};
          }
          &.c7n-pro-btn-disabled,
          :disabled,
          :disabled:hover {
            border-color: ${defaultDisabledBorderColor};
            color: ${defaultDisabledColor};
            background-color: ${defaultDisabledBgColor};
          }
        }
        :disabled:before {
          display: none;
        }
        &.c7n-pro-btn-primary {
          background-color: ${textBgColor || primaryBgColor};
          color: ${textColor || primaryColor};
          border-color: ${textBorderColor || primaryBorderColor};
          &.c7n-pro-btn-focused,
          :hover,
          :active,
          :focus {
            color: ${textColor || primaryHoverColor};
            background-color: ${textHoverBgColor || primaryHoverBgColor};
            border-color: ${textBorderColor || primaryHoverBorderColor};
          }
          &.c7n-pro-btn-disabled {
            background-color: ${textBgColor || primaryDisabledBgColor};
            color: ${primaryDisabledColor};
            border-color: ${textBorderColor || primaryDisabledBorderColor};
            .icon {
              opacity: 0.5;
            }
            i {
              animation: none;
            }
          }
          .c7n-progress-inner circle {
            color: ${primaryColor};
          }
        }
        &&[href] {
          line-height: 0.28rem;
          background-color: ${linkBgColor};
          color: ${linkColor};
          border-color: ${linkBorderColor};
          span {
            text-decoration: ${linktextDecoration || "unset"};
          }
          :enabled:hover {
            color: ${linkHoverColor};
            background-color: ${linkHoverBgColor};
            border-color: ${linkHoverBorderColor};
            box-shadow: ${linkHoverBoxShadow};
          }
          :enabled:focus,
          :enabled:active {
            color: ${linkActiveColor || linkHoverColor};
            background-color: ${linkActiveBgColor || linkHoverBgColor};
            border-color: ${linkActiveBorderColor || linkHoverBorderColor};
            box-shadow: ${linkActiveBoxShadow || linkHoverBoxShadow};
          }
          &[disabled],
          &[disabled]:hover {
            cursor: not-allowed;
            background-color: ${linkDisabledBgColor};
            border-color: ${linkDisabledBorderColor};
            color: ${linkDisabledColor};
          }
        }
      }
      &.c7n-pro-btn-raised {
        &.c7n-pro-btn-primary {
          background-color: ${primaryBgColor};
          color: ${primaryColor};
          border-color: ${primaryBorderColor};
          &.c7n-pro-btn-focused,
          :hover,
          :active,
          :focus {
            color: ${primaryHoverColor};
            background-color: ${primaryHoverBgColor};
            border-color: ${primaryHoverBorderColor};
          }
          &.c7n-pro-btn-disabled {
            background-color: ${primaryDisabledBgColor};
            color: ${primaryDisabledColor};
            border-color: ${primaryDisabledBorderColor};
            i {
              animation: none;
            }
          }
          .c7n-progress-inner circle {
            color: white;
          }
        }
      }
      &.c7n-pro-btn-flat {
        &.c7n-pro-btn-default {
          background-color: ${textBgColor};
          color: ${textColor};
          border-color: ${textBorderColor};
          :enabled:hover {
            color: ${textHoverColor};
            background-color: ${textHoverBgColor};
            border-color: ${defaultFlatHoverColor || textHoverBorderColor};
            box-shadow: ${textHoverBoxShadow};
          }
          :enabled:focus,
          :enabled:active {
            color: ${textActiveColor || textHoverColor};
            background-color: ${textActiveBgColor || textHoverBgColor};
            border-color: ${defaultFlatHoverColor ||
            textActiveBorderColor ||
            textHoverBorderColor};
            box-shadow: ${textActiveBoxShadow || textHoverBoxShadow};
          }
          &:disabled,
          &:disabled:hover {
            background-color: ${textDisabledBgColor};
            border-color: ${textDisabledBorderColor};
            color: ${textDisabledColor};
            i {
              animation: none;
            }
          }
        }
      }
      &:not(.c7n-pro-btn-link) {
        &.c7n-pro-btn-red {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: #cc3333 !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(204, 51, 51, 0.7) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(204, 51, 51, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #cc3333 !important;

            .c7n-progress circle {
              stroke: #cc3333 !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#cc3333", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        // gray
        &.c7n-pro-btn-gray {
          color: white;
          &.c7n-pro-btn-raised {
            color: #000 !important;
            background-color: #f5f5f5 !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: #e6e6e6 !important;
            }

            &:disabled {
              color: ${defaultDisabledColor} !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #d0d0d0 !important;

            .c7n-progress circle {
              stroke: #d0d0d0 !important;
            }
          }
        }

        // blue
        &.c7n-pro-btn-blue {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: #3f51b5 !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(63, 81, 181, 0.7) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(0, 0, 0, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #3f51b5 !important;

            .c7n-progress circle {
              stroke: #3f51b5 !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#3f51b5", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        // green
        &.c7n-pro-btn-green {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: #00bf96 !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(0, 191, 150, 0.7) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(0, 0, 0, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #00bf96 !important;

            .c7n-progress circle {
              stroke: #00bf96 !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#00bf96", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        // yellow
        &.c7n-pro-btn-yellow {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: #fadb14 !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(250, 219, 20, 0.7) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(0, 0, 0, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #fadb14 !important;

            .c7n-progress circle {
              stroke: #fadb14 !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#fadb14", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        // purple
        &.c7n-pro-btn-purple {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: #8e44ad !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(142, 68, 173, 0.7) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(0, 0, 0, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #8e44ad !important;

            .c7n-progress circle {
              stroke: #8e44ad !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#8e44ad", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }

        // dark
        &.c7n-pro-btn-dark {
          color: white;
          &.c7n-pro-btn-raised {
            background-color: RGB(47, 53, 59, 0.4) !important;

            &:enabled:hover,
            &:enabled:focus {
              border-color: transparent !important;
              background-color: RGB(47, 53, 59, 0.5) !important;
            }

            .c7n-pro-ripple {
              background-color: RGB(0, 0, 0, 0.1) !important;
            }
          }

          &.c7n-pro-btn-flat {
            color: #2f353b !important;

            .c7n-progress circle {
              stroke: #2f353b !important;
            }
          }
          &&:disabled,
          &&:disabled:hover,
          &&:disabled:active {
            background: ${hexToRgbaColor("#2f353b", 0.5)}!important;
            color: rgba(255, 255, 255, 0.5) !important;
          }
        }
      }
    }
  `;
};

export default createStyleComponent("button", buttonStyle);
