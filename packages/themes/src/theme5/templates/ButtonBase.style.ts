import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getButtonStyle(props: any) {
  const {
    minWidth,
    radius,
    height,
    smheight,
    fontSize,
    lgFontSize,
    iconFontSize,
    leftRightPadding,
    linktextDecoration,
    // 合同主题适配
    lgIconFontSize,
    smIconFontSize,
    lgHeight,
  } = getThemeData(props, 'button');
  const {
    textSizeBase,
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
  } = getThemeData(props, 'common');
  return css`
    a.c7n-btn.c7n-btn.c7n-btn.c7n-btn.c7n-btn {
      display: inline-block;
    }
    //边距
    .c7n-btn + .c7n-btn {
      margin-left: 0.08rem;
    }
    .c7n-btn.c7n-btn.c7n-btn-circle {
      padding: 0;
    }
    .c7n-btn.c7n-btn {
      height: ${height}px;
      line-height: 0;
      padding: 0 ${leftRightPadding}px;
      > i.icon {
        vertical-align: middle;
      }
      > span {
        vertical-align: middle;
      }
      span {
        font-size: ${textSizeBase}px;
        line-height: 1;
        text-align: right;
        margin-left: 0;
      }
      &&.c7n-btn-circle {
        width: ${height}px;
        height: ${height}px;
      }
      &.c7n-btn-loading {
        padding: 0;
      }
      &.c7n-btn .c7n-progress.c7n-progress-loading {
        margin: 0;
      }
      //默认为文字按钮
      &.c7n-btn-flat:not(.c7n-btn-circle) {
        padding: 0 8px;
        color: ${primary6};
        background-color: transparent;
        &:disabled,
        &[disabled],
        &:disabled:hover {
          color: ${titleColor3};
          background-color: transparent;
        }
        :enabled:focus,
        :enabled:hover {
          border-color: ${primary1};
          color: ${primary6};
          background-color: ${primary1};
          i {
            border-radius: 2px;
          }
        }
        :enabled:active {
          box-shadow: none;
          border-color: transparent;
          color: ${primary7};
          background-color: transparent;
          i {
            border-radius: 2px;
          }
        }
        :disabled:before {
          display: none;
        }

        &.c7n-btn-lg:not(.c7n-btn-circle) {
          height: ${lgHeight}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
        &.c7n-btn-sm:not(.c7n-btn-circle) {
          height: ${smheight}px;
          span {
            font-size: ${fontSize}px;
          }
        }
        &.c7n-btn-icon-only.c7n-btn-icon-only {
          border-radius: ${radius}px;
          min-width: auto;
          width: ${height}px;
          width: ${height}px !important;
          height: ${height}px !important;
          padding: 0;
          .icon {
            margin: 0;
            line-height: 1;
            /* 合同主题适配 */
            font-size: ${fontSize}px;
          }
        }
      }
      // 线框按钮
      &.c7n-btn-raised:not(.c7n-btn-circle) {
        color: ${titleColor2};
        border: 1px solid ${lineColor1};
        background-color: ${bgColor};
        padding: 0 ${leftRightPadding}px;
        min-width: ${minWidth}px;
        &.c7n-pro-btn-focused,
        :hover,
        :focus {
          border-color: ${primary6};
          color: ${primary6};
          background-color: ${bgColor};
        }
        :active {
          border-color: ${primary7};
          color: ${primary7};
          background-color: ${bgColor};
        }
        &.c7n-pro-btn-disabled,
        :disabled,
        :disabled:hover {
          border: 1px solid ${lineColor1};
          color: ${titleColor3};
          background-color: ${lineColor3};
        }

        &.c7n-btn-lg:not(.c7n-btn-circle) {
          /* 合同主题适配 */
          height: ${lgHeight}px;
          padding: 0 ${leftRightPadding}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
        &.c7n-btn-sm:not(.c7n-btn-circle) {
          padding: 0 0.08rem;
          height: ${smheight}px;
          min-width: 0.4rem;
          span {
            font-size: ${fontSize}px;
          }
        }
        // 主按钮
        &.c7n-btn-primary {
          background-color: ${primary6};
          color: ${fontColor};
          border-color: ${primary6};
          .c7n-progress-loading .c7n-progress-inner circle {
            stroke: #fff;
          }
          :enabled:focus,
          :enabled:hover {
            color: ${fontColor};
            background-color: ${primary4};
            border-color: ${primary4};
          }
          :enabled:active {
            color: ${fontColor};
            background-color: ${primary7};
            border-color: ${primary7};
            box-shadow: none;
          }
          &:disabled,
          &:disabled:hover {
            background-color: ${titleColor4};
            border-color: ${titleColor4};
            color: ${fontColor};
            i {
              animation: none;
            }
          }
        }
        &.c7n-btn-icon-only.c7n-btn-icon-only {
          padding: 0 !important;
          width: ${height}px !important;
          height: ${height}px !important;
          text-align: center;
          min-width: auto;
          > .icon {
            font-size: 0.16rem;
            margin-right: 0;
            left: 0 !important;
            line-height: 1;
            font-size: 0.16rem;
          }
          &.c7n-btn-lg:not(.c7n-btn-circle) {
            /* 合同主题适配 */
            height: ${lgHeight}px;
            span {
              font-size: ${lgFontSize}px;
            }
          }
          &.c7n-btn-sm:not(.c7n-btn-circle) {
            min-width: auto;
            span {
              font-size: ${fontSize}px;
            }
          }
          /* 合同主题适配 */
          &.c7n-btn-sm:not(.c7n-btn-icon-only) {
            height: ${smheight}px;
            span {
              font-size: ${fontSize}px;
            }
          }
          &.c7n-btn-lg:not(.c7n-btn-icon-only) {
            height: ${lgHeight}px;
            span {
              font-size: ${lgFontSize}px;
            }
          }
        }
      }
      // 图标按钮
      &.c7n-btn {
        display: inline-block;
        box-sizing: border-box;
        height: ${height}px;
        line-height: 0;
        border-radius: ${radius}px;
        box-shadow: none;
        white-space: nowrap;
        background-clip: padding-box;
        transition: all 0.3s !important;
        display: inline-block;
        > .icon {
          font-size: ${iconFontSize}px;
        }
        .c7n-ripple-wrapper {
          display: 'none !important';
        }
        span {
          font-size: ${textSizeBase}px;
          line-height: 1;
          text-align: right;
          margin-left: 0;
        }
        //文字按钮，没有维护
        &.c7n-btn-text.c7n-btn-text {
          background-color: transparent;
          color: ${primary6};
          border-color: transparent;
          :enabled:hover,
          :enabled:focus,
          :enabled:active {
            color: ${primary6};
            background-color: ${primary1};
            border-color: ${primary1};
          }
          &:disabled,
          &:disabled:hover {
            background-color: transparent;
            border-color: transparent;
            color: ${titleColor3};
            i {
              animation: none;
            }
          }
        }
        // 链接按钮
        &&[href] {
          line-height: 0.28rem;
          background-color: transparent;
          color: ${primary6};
          border-color: transparent;
          padding: 0 !important;
          min-width: auto;
          span {
            text-decoration: ${linktextDecoration || 'unset'};
          }
          &:hover,
          &:focus,
          &:active {
            color: ${primary7};
            background-color: transparent;
            border-color: transparent;
          }
          &[disabled],
          &[disabled]:hover {
            cursor: not-allowed;
            cursor: not-allowed;
            background-color: transparent;
            border-color: transparent;
            color: ${titleColor3};
          }
          /* 合同主题适配 */
          &.c7n-btn-sm:not(.c7n-btn-icon-only) {
            height: ${smheight}px;
            line-height: ${smheight}px;
            span {
              font-size: ${fontSize}px;
            }
          }
          &.c7n-btn-lg:not(.c7n-btn-icon-only) {
            height: ${lgHeight}px;
            span {
              font-size: ${lgFontSize}px;
            }
          }
        }
        //危险按钮
        &&.c7n-btn-danger {
          color: ${redColor6};
          border-color: transparent;
          background-color: transparent;
          &:hover,
          &:focus,
          &.c7n-btn-focused {
            color: ${redColor6};
            background-color: ${redColor1};
            border-color: transparent;
          }
          &:active {
            color: ${redColor7};
            border-color: transparent;
            background-color: transparent;
            span {
              color: ${redColor7};
            }
          }
          &:disabled,
          &:disabled:hover,
          &:disabled:active {
            opacity: 0.8;
            color: ${redColor6};
            border-color: transparent;
            background-color: transparent;
            span {
              color: ${redColor6};
            }
          }
        }
        &&.c7n-btn-raised.c7n-btn-danger {
          color: ${redColor6};
          border-color: ${lineColor1};
          background-color: ${bgColor};
          &:hover,
          &:focus,
          &.c7n-btn-focused {
            color: ${redColor6};
            border-color: ${redColor6};
          }
          &:active {
            color: ${redColor7};
            border-color: ${redColor7};
            span {
              color: ${redColor7};
            }
          }
          &:disabled,
          &:disabled:hover,
          &:disabled:active {
            color: ${redColor6};
            border-color: ${lineColor1};
            background-color: #fff;
            span {
              color: ${redColor6};
            }
          }
        }
        &&.c7n-btn-icon-only.c7n-btn-danger {
          &.c7n-btn-raised,
          &.c7n-btn-flat {
            color: ${redColor6};
            border-color: ${lineColor1};
            background-color: transparent;
            &:hover,
            &:focus,
            &.c7n-btn-focused {
              color: ${redColor6};
              background-color: transparent;
              border-color: ${redColor6};
            }
            &:active {
              color: ${redColor7};
              background-color: transparent;
              border-color: ${redColor7};
            }
            &:disabled,
            &:disabled:hover,
            &:disabled:active {
              opacity: 0.8;
              color: ${redColor6};
              border-color: ${lineColor1};
              background-color: transparent;
              span {
                color: ${redColor6};
              }
            }
          }
        }
      }
      //虚线按钮
      &.c7n-btn-dashed.c7n-btn-dashed {
        background-color: ${bgColor};
        color: ${titleColor2};
        height: ${height}px;
        line-height: ${height}px;
        border: 1px dashed ${lineColor1};
        padding: 0 8px !important;
        min-width: auto;
        display: inline-block;
        box-sizing: border-box;

        line-height: 0;
        border-radius: ${radius}px;
        box-shadow: none;
        white-space: nowrap;
        background-clip: padding-box;
        transition: all 0.3s !important;

        :enabled:hover,
        :enabled:focus {
          color: ${primary6};
          background-color: ${bgColor};
          border: 1px dashed ${primary6};
          box-shadow: none;
        }
        :enabled:active {
          color: ${primary7};
          background-color: ${bgColor};
          border: 1px dashed ${primary7};
          box-shadow: none;
        }
        &:disabled,
        &:disabled:hover {
          background-color: ${lineColor3};
          border-color: ${lineColor1};
          color: ${titleColor3};
          box-shadow: none;
          i {
            animation: none;
          }
        }
        &.c7n-btn-lg:not(.c7n-btn-circle) {
          /* 合同主题适配 */
          height: ${lgHeight}px;
          padding: 0 ${leftRightPadding}px;
          span {
            font-size: ${lgFontSize}px;
          }
        }
        &.c7n-btn-sm:not(.c7n-btn-circle) {
          padding: 0 0.08rem;
          height: ${smheight}px;
          line-height: ${smheight}px;
          min-width: 0.4rem;
          span {
            font-size: ${fontSize}px;
          }
        }
      }
    }
    /* 合同主题适配 */
    .c7n-btn.c7n-btn.c7n-btn-sm {
      > .icon {
        font-size: ${smIconFontSize}px;
        line-height: ${smIconFontSize}px;
      }
    }
    .c7n-btn.c7n-btn.c7n-btn-lg:not(.c7n-btn-icon-only) {
      > .icon {
        font-size: ${lgIconFontSize}px;
      }
    }
    .c7n-btn.c7n-btn.c7n-btn.c7n-btn {
      span {
        font-size: ${fontSize}px;
      }
    }
  `;
}

const getGroupStyle = (props: any) => {
  const { radius } = getThemeData(props, 'button');
  return css`
    .c7n-btn-group.c7n-btn-group {
      > .c7n-btn.c7n-btn.c7n-btn.c7n-btn,
      > span > .c7n-btn.c7n-btn.c7n-btn.c7n-btn {
        line-height: initial;
        border-radius: 0;
        > span {
          line-height: 0;
        }
        &:first-of-type:not(:last-of-type) {
          border-top-left-radius: ${radius}px;
          border-bottom-left-radius: ${radius}px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-of-type:not(:first-of-type) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: ${radius}px;
          border-bottom-right-radius: ${radius}px;
        }
        &:only-child {
          border-radius: ${radius}px;
        }
      }
      > .c7n-btn {
        > .icon {
          line-height: 0.28rem;
        }
      }
    }
  `;
};

const allCss = css`
  ${getButtonStyle}
  ${getGroupStyle}
`;

export default allCss;
