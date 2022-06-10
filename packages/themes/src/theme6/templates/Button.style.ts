import { css } from 'styled-components';

import { getThemeData, hexToRgbaColor } from '@hzero-front-ui/core';

const buttonStyle = (props: any) => {
  const {
    fontSize,
    radius,
    smheight,
    primaryColor,
    primaryHoverColor,
    defaultBorderColor,
    defaultColor,
    defaultBgColor,
    defaultHoverBgColor,
    defaultActiveBgColor,
    defaultDisabledColor,
    defaultDisabledBgColor,
    defaultDisabledBorderColor,
    primaryDisabledBgColor,
    primaryDisabledColor,
    linkBgColor,
    linkBorderColor,
    linkHoverBgColor,
    linkHoverBorderColor,
    linkActiveBgColor,
    linkActiveBorderColor,
    linkDisabledColor,
    linkDisabledBgColor,
    linkDisabledBorderColor,
    textBgColor,
    textBorderColor,
    textDisabledBgColor,
    textDisabledBorderColor,
    textDisabledColor,
    linktextDecoration,
    iconFontSize,
    textColor,
    lgHeight,
    lgPadding,
  } = getThemeData(props, 'button');

  const {
    borderWidthBase,
    primary,
    primary1,
    primary2,
    primary5,
    primary6,
    primary7,
    baseHeight,
  } = getThemeData(props, 'common');
  return css`
    a.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
      display: inline-flex;
      align-items: center;
    }
    .c7n-pro-btn.c7n-pro-btn:not(.c7n-pro-btn-block) {
      + .c7n-pro-btn {
        margin-left: 0.08rem;
      }
    }
    .c7n-pro-btn.c7n-pro-btn {
      margin-right: 0 !important;
      box-shadow: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 16px;
      > * {
        vertical-align: initial;
      }
      &.c7n-pro-btn:not(.c7n-pro-btn-disabled):active {
        box-shadow: none;
      }
      > .icon {
        margin-right: 0.04rem;
        margin-left: -4px;
        font-size: ${iconFontSize}px;
        & + span {
          vertical-align: middle;
        }
      }
      &.c7n-pro-btn-icon-only {
        padding: 0;
        min-width: auto;
        border-radius: ${radius}px;
        width: ${baseHeight}px;
        > .icon {
          margin: 0;
          font-size: 0.16rem;
        }
        &.c7n-pro-btn-sm {
          padding: 0 0.08rem;
          height: ${smheight}px;
          width: ${smheight}px;
        }
        &.c7n-pro-btn-lg {
          height: ${lgHeight}px;
          width: ${lgHeight}px;
        }
      }

      &.c7n-pro-btn-lg:not(.c7n-pro-btn-icon-only) {
        height: ${lgHeight}px;
        padding: 0 ${lgPadding}px;
        span {
          font-size: 0.16rem;
        }
      }
      &.c7n-pro-btn-sm:not(.c7n-pro-btn-icon-only) {
        padding: 0 0.08rem;
        height: ${smheight}px;
        > .icon {
          margin-left: 0;
        }
        span {
          font-size: ${fontSize}px;
        }
      }
      &.c7n-pro-btn-raised {
        box-shadow: none;
      }
      //文字按钮
      &.c7n-pro-btn-link {
        height: ${baseHeight}px;
        line-height: 1;
        color: ${textColor};
        font-size: ${fontSize}px;
        border: 1px solid ${textBorderColor};
        background-color: ${textBgColor};

        &.c7n-pro-btn-focused,
        :hover,
        :focus {
          border-color: ${primary1};
          color: ${primary};
          background-color: ${primary1};
        }
        &:active {
          border-color: ${primary2};
          color: ${primary7};
          background-color: ${primary2};
        }
        &.c7n-pro-btn-disabled,
        :disabled,
        :disabled:hover {
          border: 1px solid ${textDisabledBorderColor};
          color: ${textDisabledColor};
          background-color: ${textDisabledBgColor};
        }
      }

      &.c7n-pro-btn-raised,
      &.c7n-pro-btn-flat {
        box-sizing: border-box;
        height: ${baseHeight}px;
        font-size: ${fontSize}px;
        line-height: 1;
        border-radius: ${radius}px;
        border-width: ${borderWidthBase}px;
        border-style: solid;
        color: ${defaultColor};
        border: none;
        background-color: ${textBgColor || defaultBgColor};
        white-space: nowrap;
        background-clip: padding-box;
        // 大小

        &.c7n-pro-btn-disabled {
          font-weight: 400;
          :hover,
          :focus,
          :active {
            box-shadow: none;
          }
        }
        .c7n-ripple-wrapper {
          display: none !important;
        }
        &[href] {
          span {
            line-height: 0;
          }
        }
        span {
          font-size: ${fontSize}px;
        }
        :hover,
        :focus,
        :active {
          border: none;
          color: ${primary2 || primary2};
          background-color: ${primary6 || defaultHoverBgColor};
          i {
            border-radius: 0.02rem;
          }
        }
        :disabled,
        :disabled:hover {
          i {
            animation: none;
          }
        }
        &.c7n-pro-btn-disabled {
          border-color: ${defaultDisabledBorderColor};
          color: ${defaultDisabledColor};
          background-color: ${defaultDisabledBgColor};
          .c7n-progress-loading .c7n-progress-inner circle {
            stroke: rgba(0, 0, 0, 0.25) !important;
          }
        }
        //线框按钮
        &.c7n-pro-btn-default {
          color: ${defaultColor};
          border: 1px solid ${defaultBorderColor};
          background-color: ${defaultBgColor};
          &.c7n-pro-btn-focused,
          :hover,
          :focus {
            border-color: ${primary5};
            color: ${primary5};
            background-color: ${defaultHoverBgColor};
          }
          :active {
            border-color: ${primary7};
            color: ${primary7};
            background-color: ${defaultActiveBgColor};
          }
          &.c7n-pro-btn-disabled,
          :disabled,
          :disabled:hover {
            border: 1px solid ${defaultDisabledBorderColor};
            color: ${defaultDisabledColor};
            background-color: ${defaultDisabledBgColor};
          }
        }
        :disabled:before {
          display: none;
        }
        //主按钮
        &.c7n-pro-btn-primary {
          background-color: ${primary};
          color: ${primaryColor};
          border-color: ${primary2};
          &.c7n-pro-btn-focused,
          :hover,
          :focus {
            color: ${primaryHoverColor};
            background-color: ${primary5};
            border-color: ${primary5};
          }
          &:active {
            color: ${primaryHoverColor};
            background-color: ${primary7};
          }
          &.c7n-pro-btn-disabled {
            background-color: ${primaryDisabledBgColor};
            color: ${primaryDisabledColor};
            border: 1px solid ${defaultDisabledBorderColor};
            i {
              animation: none;
            }
          }
          .c7n-progress-inner circle {
            color: ${primaryColor};
          }
        }
        //链接按钮
        &&[href] {
          line-height: ${baseHeight}px;
          background-color: ${linkBgColor};
          color: ${primary};
          border-color: ${linkBorderColor};
          span {
            text-decoration: ${linktextDecoration || 'unset'};
          }
          &:focus,
          &:hover {
            color: ${primary5};
            background-color: ${linkHoverBgColor};
            border-color: ${linkHoverBorderColor};
          }
          &:active {
            color: ${primary7};
            background-color: ${linkActiveBgColor || linkHoverBgColor};
            border-color: ${linkActiveBorderColor || linkHoverBorderColor};
          }
          &[disabled],
          &[disabled]:hover {
            cursor: not-allowed;
            background-color: ${linkDisabledBgColor};
            border: 1px solid ${linkDisabledBorderColor};
            color: ${linkDisabledColor};
          }
        }
      }
      &.c7n-pro-btn-flat,
      &.c7n-pro-btn-raised {
        &.c7n-pro-btn-primary:not(.c7n-pro-btn-icon-only) {
          background-color: ${primary};
          color: ${primaryColor};
          border-color: ${primary};
          &.c7n-pro-btn-focused,
          :hover,
          :focus {
            color: ${primaryHoverColor};
            background-color: ${primary5};
            border-color: ${primary5};
          }
          &:active {
            background-color: ${primary7};
          }
          &.c7n-pro-btn-disabled {
            background-color: ${primaryDisabledBgColor};
            color: ${primaryDisabledColor};
            border: 1px solid ${primaryDisabledBgColor};
            i {
              animation: none;
            }
          }
          .c7n-progress-inner circle {
            color: white;
          }
          .icon {
            border-radius: ${radius}px;
          }
        }
      }

      // red
      &.c7n-pro-btn-red {
        color: white;
        &.c7n-pro-btn-flat,
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
        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#cc3333', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }

      // gray
      &.c7n-pro-btn-gray {
        color: white;
        &.c7n-pro-btn-flat,
        &.c7n-pro-btn-raised {
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
      }

      // blue
      &.c7n-pro-btn-blue {
        color: white;
        &.c7n-pro-btn-flat,
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

        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#3f51b5', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }

      // green
      &.c7n-pro-btn-green {
        color: white;
        &.c7n-pro-btn-flat,
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
        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#00bf96', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }

      // yellow
      &.c7n-pro-btn-yellow {
        color: white;
        &.c7n-pro-btn-flat,
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

        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#fadb14', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }

      // purple
      &.c7n-pro-btn-purple {
        color: white;
        &.c7n-pro-btn-flat,
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

        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#8e44ad', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }

      // dark
      &.c7n-pro-btn-dark {
        color: white;
        &.c7n-pro-btn-flat,
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

        &&:disabled,
        &&:disabled:hover,
        &&:disabled:active {
          background: ${hexToRgbaColor('#2f353b', 0.5)}!important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
      }
    }
  `;
};
export default css`
  ${buttonStyle}
`;
