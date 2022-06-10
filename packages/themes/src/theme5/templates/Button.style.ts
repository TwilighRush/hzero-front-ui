import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const buttonStyle = (props: any) => {
  const {
    fontSize,
    radius,
    height,
    smheight,
    leftRightPadding,
    linktextDecoration,
    iconFontSize,
    lgFontSize,
    lgIconFontSize,
    smIconFontSize,
    lgHeight,
  } = getThemeData(props, 'button');
  const {
    fontColor,
    bgColor,
    primary1,
    primary4,
    primary6,
    primary7,
    titleColor2,
    titleColor3,
    titleColor4,
    lineColor1,
    lineColor3,
    redColor1,
    redColor6,
    redColor7,
    blueColor1,
    blueColor6,
    blueColor7,
    greenColor1,
    greenColor6,
    greenColor7,
    yellowColor1,
    yellowColor6,
    yellowColor7,
    purplColor1,
    purplColor6,
    purplColor7,
  } = getThemeData(props, 'common');
  return css`
    a.c7n-pro-btn.c7n-pro-btn[disabled] {
      line-height: 28px;
      border: none !important;
      background: transparent !important;
      padding: 0 !important;
      min-width: auto !important;
    }
    .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
      margin-right: 0 !important;
      height: ${height}px;
      line-height: 1;
      padding: 0 ${leftRightPadding}px;
      font-size: 0;
      box-shadow: none;
      display: inline-block;
      &.c7n-pro-btn-disabled,
      &.c7n-pro-btn:disabled {
        opacity: 1;
      }
      //按钮边距
      + .c7n-pro-btn:not(.c7n-pro-btn-block) {
        margin-left: 0.08rem;
      }
      > * {
        vertical-align: middle;
      }
      span {
        font-size: ${fontSize}px;
        i:before {
          line-height: 0;
        }
      }
      .icon {
        font-size: ${iconFontSize}px;
      }
      > .icon {
        margin-right: 0.04rem;
        & + span {
          vertical-align: middle;
        }
      }
      //仅图标按钮
      &.c7n-pro-btn-icon-only.c7n-pro-btn-icon-only {
        &.c7n-pro-btn-link {
          width: ${height}px;
          > i.icon {
            font-size: 14px;
          }
          :hover {
            color: ${primary6};
          }
        }
        &.c7n-pro-btn-raised {
          background-color: ${bgColor};
          border: 1px solid ${lineColor1};
          border-radius: ${radius}px;
          color: ${titleColor2};
          padding: 0;
          min-width: auto;
          width: ${height}px;

          > .icon {
            margin-right: 0;
            font-size: 0.16rem;
            line-height: 1;
          }
          :hover,
          &.c7n-pro-btn-focused,
          &:focus {
            background-color: ${bgColor};
            border-color: ${primary6};
            border-radius: ${radius}px;
            color: ${primary6};
          }

          &:active {
            background: ${bgColor};
            border: 1px solid ${primary7};
            color: ${primary7};
          }
          &:disabled {
            background-color: ${lineColor3};
            border-color: ${lineColor1};
            color: ${titleColor3};
          }
        }
        &.c7n-pro-btn-flat {
          border-radius: ${radius}px;
          min-width: auto;
          width: ${height}px;
          padding: 0;
          .icon {
            font-size: 14px;
            margin: 0;
            line-height: 1;
          }
        }
      }
      //链接按钮
      &.c7n-pro-btn-raised.c7n-pro-btn-raised[href],
      &.c7n-pro-btn-flat.c7n-pro-btn-flat[href],
      &.c7n-pro-btn-link.c7n-pro-btn-link {
        background-color: transparent;
        color: ${primary6};
        border: none;
        padding: 0 !important;
        min-width: auto;
        height: 28px;
        font-size: 0;
        &[href] {
          display: inline-flex;
        }
        span {
          text-decoration: ${linktextDecoration};
          font-size: ${fontSize}px;
        }
        &:hover,
        &:focus,
        &:active {
          color: ${primary7};
          background-color: transparent;
          border-color: transparent;
        }
        /* 存在 tooltip 时使用 [disabled] 会有问题 */
        /* &[disabled], */
        /* &[disabled]:hover, */
        &.c7n-pro-btn-disabled,
        &.c7n-pro-btn-disabled:hover {
          cursor: not-allowed;
          background-color: transparent;
          color: ${titleColor3};
        }
        &.c7n-pro-btn-sm:not(.c7n-pro-btn-icon-only) {
          height: ${smheight}px;
          span {
            font-size: ${fontSize}px;
          }
        }
        &.c7n-pro-btn-lg:not(.c7n-pro-btn-icon-only) {
          height: ${lgHeight}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
      }
      //线框按钮
      &.c7n-pro-btn-raised {
        min-width: 0.68rem;
        box-sizing: border-box;
        white-space: nowrap;
        background-clip: padding-box;
        border-radius: ${radius}px;
        box-shadow: none;
        color: ${titleColor2};
        border: 1px solid ${lineColor1};
        background-color: ${bgColor};
        .c7n-ripple-wrapper {
          display: none !important;
        }
        span {
          font-size: ${fontSize}px;
          text-align: right;
        }
        &:not(.c7n-pro-btn-disabled, .c7n-pro-btn-loading) {
          :hover,
          :focus {
            border-color: ${primary6};
            color: ${primary6};
            background-color: ${bgColor};
            i {
              border-radius: 0.02rem;
            }
          }
        }
        :active {
          border-color: ${primary7};
          color: ${primary7};
          background-color: ${bgColor};
        }
        :disabled,
        :disabled:hover,
        &.c7n-pro-btn-disabled {
          border-color: ${lineColor1};
          color: ${titleColor3};
          background-color: ${lineColor3};
          .c7n-progress-loading .c7n-progress-inner circle {
            stroke: rgba(0, 0, 0, 0.25) !important;
          }
          :before {
            display: none;
          }
          i {
            animation: none;
          }
          :hover,
          :focus,
          :active {
            box-shadow: none;
          }
        }
        //主按钮
        &.c7n-pro-btn-primary {
          background-color: ${primary6};
          color: ${fontColor};
          border-color: ${primary6};
          &.c7n-pro-btn-focused,
          :hover,
          :focus {
            color: ${fontColor};
            background-color: ${primary4};
            border-color: ${primary4};
          }
          &:active {
            color: ${fontColor};
            background-color: ${primary7};
            border-color: ${primary7};
          }
          &.c7n-pro-btn-disabled {
            background-color: ${titleColor4};
            color: ${fontColor};
            border-color: ${titleColor4};
            i {
              animation: none;
            }
          }
          .c7n-progress-inner circle {
            color: ${fontColor};
          }
        }
        //小
        &.c7n-pro-btn-sm:not(.c7n-pro-btn-icon-only) {
          padding: 0 0.08rem;
          height: ${smheight}px;
          min-width: 0.4rem;
          span {
            font-size: ${fontSize}px;
          }
        }
        //大
        &.c7n-pro-btn-lg:not(.c7n-pro-btn-icon-only) {
          height: ${lgHeight}px;
          padding: 0 ${leftRightPadding}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
      }
      //文字按钮
      &.c7n-pro-btn-flat {
        border: none;
        color: ${primary6};
        padding: 0 8px;
        background-color: transparent;
        &.c7n-pro-btn-focused,
        :hover {
          color: ${primary6};
          background-color: ${primary1};
        }
        :active {
          background-color: transparent;
          color: ${primary7};
        }
        &.c7n-pro-btn-disabled,
        :disabled,
        :disabled:hover {
          color: ${titleColor3};
          background-color: transparent;
        }
        &.c7n-pro-btn-sm:not(.c7n-pro-btn-icon-only) {
          height: ${smheight}px;
          span {
            font-size: ${fontSize}px;
          }
        }
        &.c7n-pro-btn-lg:not(.c7n-pro-btn-icon-only) {
          height: ${lgHeight}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
      }
      // link标签没有覆盖
      // red
      &.c7n-pro-btn-red:not(.c7n-pro-btn-disabled) {
        color: ${redColor6};
        &[href],
        &.c7n-pro-btn-link {
          color: ${redColor6};
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: ${redColor7};
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: ${redColor1};
            color: ${redColor6};
          }
          &:active {
            background-color: transparent;
            color: ${redColor7};
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${redColor6};
            color: ${redColor6};
          }
          &:active {
            border-color: ${redColor7};
            color: ${redColor7};
          }
        }
        &.c7n-pro-btn-icon-only {
          color: ${redColor6} !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${redColor6} !important;
            color: ${redColor6} !important;
          }
          &:active {
            border-color: ${redColor7} !important;
            color: ${redColor7} !important;
          }
        }
      }

      // gray
      &.c7n-pro-btn-gray:not(.c7n-pro-btn-disabled) {
        color: #d0d0d0;
        &[href],
        &.c7n-pro-btn-link {
          color: #d0d0d0;
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: #aba1a1;
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: #e6e6e6;
            color: #d0d0d0;
          }
          &:active {
            background-color: transparent;
            color: #aba1a1;
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: #d0d0d0;
            color: #d0d0d0;
          }
          &:active {
            border-color: #aba1a1;
            color: #aba1a1;
          }
        }
        &.c7n-pro-btn-icon-only {
          color: #d0d0d0 !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: #d0d0d0 !important;
            color: #d0d0d0 !important;
          }
          &:active {
            border-color: #aba1a1 !important;
            color: #aba1a1 !important;
          }
        }
      }
      // blue
      &.c7n-pro-btn-blue:not(.c7n-pro-btn-disabled) {
        color: ${blueColor6};
        &[href],
        &.c7n-pro-btn-link {
          color: ${blueColor6};
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: ${blueColor7};
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: ${blueColor1};
            color: ${blueColor6};
          }
          &:active {
            background-color: transparent;
            color: ${blueColor7};
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${blueColor6};
            color: ${blueColor6};
          }
          &:active {
            border-color: ${blueColor7};
            color: ${blueColor7};
          }
        }
        &.c7n-pro-btn-icon-only {
          color: ${blueColor6} !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${blueColor6} !important;
            color: ${blueColor6} !important;
          }
          &:active {
            border-color: ${blueColor7} !important;
            color: ${blueColor7} !important;
          }
        }
      }
      // green
      &.c7n-pro-btn-green:not(.c7n-pro-btn-disabled) {
        color: ${greenColor6};
        &[href],
        &.c7n-pro-btn-link {
          color: ${greenColor6};
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: ${greenColor7};
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: ${greenColor1};
            color: ${greenColor6};
          }
          &:active {
            background-color: transparent;
            color: ${greenColor7};
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${greenColor6};
            color: ${greenColor6};
          }
          &:active {
            border-color: ${greenColor7};
            color: ${greenColor7};
          }
        }
        &.c7n-pro-btn-icon-only {
          color: ${greenColor6} !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${greenColor6} !important;
            color: ${greenColor6} !important;
          }
          &:active {
            border-color: ${greenColor7} !important;
            color: ${greenColor7} !important;
          }
        }
      }
      // yellow
      &.c7n-pro-btn-yellow:not(.c7n-pro-btn-disabled) {
        color: ${yellowColor6};
        &[href],
        &.c7n-pro-btn-link {
          color: ${yellowColor6};
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: ${yellowColor7};
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: ${yellowColor1};
            color: ${yellowColor6};
          }
          &:active {
            background-color: transparent;
            color: ${yellowColor7};
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${yellowColor6};
            color: ${yellowColor6};
          }
          &:active {
            border-color: ${yellowColor7};
            color: ${yellowColor7};
          }
        }
        &.c7n-pro-btn-icon-only {
          color: ${yellowColor6} !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${yellowColor6} !important;
            color: ${yellowColor6} !important;
          }
          &:active {
            border-color: ${yellowColor7} !important;
            color: ${yellowColor7} !important;
          }
        }
      }
      // purple
      &.c7n-pro-btn-purple :not(.c7n-pro-btn-disabled) {
        color: ${purplColor6};
        &[href],
        &.c7n-pro-btn-link {
          color: ${purplColor6};
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: ${purplColor7};
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: ${purplColor1};
            color: ${purplColor6};
          }
          &:active {
            background-color: transparent;
            color: ${purplColor7};
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${purplColor6};
            color: ${purplColor6};
          }
          &:active {
            border-color: ${purplColor7};
            color: ${purplColor7};
          }
        }
        &.c7n-pro-btn-icon-only {
          color: ${purplColor6} !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: ${purplColor6} !important;
            color: ${purplColor6} !important;
          }
          &:active {
            border-color: ${purplColor7} !important;
            color: ${purplColor7} !important;
          }
        }
      }
      // dark
      &.c7n-pro-btn-dark:not(.c7n-pro-btn-disabled) {
        color: #2f353b;

        &[href],
        &.c7n-pro-btn-link {
          color: #2f353b;
          &.c7n-pro-btn-focused,
          &:hover,
          &:active {
            color: #0f1214;
          }
        }
        &.c7n-pro-btn-flat {
          &.c7n-pro-btn-focused,
          :hover {
            background-color: #73787a;
            color: #2f353b;
          }
          &:active {
            background-color: transparent;
            color: #0f1214;
          }
        }
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-focused,
          :hover {
            border-color: #2f353b;
            color: #2f353b;
          }
          &:active {
            border-color: #0f1214;
            color: #0f1214;
          }
        }
        &.c7n-pro-btn-icon-only {
          color: #2f353b !important;
          border-color: ${lineColor1} !important;
          &.c7n-pro-btn-focused,
          :hover {
            border-color: #2f353b !important;
            color: #2f353b !important;
          }
          &:active {
            border-color: #0f1214 !important;
            color: #0f1214 !important;
          }
        }
      }
      &.c7n-pro-btn-sm {
        .icon {
          font-size: ${smIconFontSize}px;
        }
      }
      &.c7n-pro-btn-lg {
        .icon {
          font-size: ${lgIconFontSize}px;
        }
      }
    }
  `;
};
export default css`
  ${buttonStyle}
`;
