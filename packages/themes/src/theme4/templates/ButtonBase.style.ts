import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getButtonStyle(props: any) {
  const {
    fontFamily,
    // fontSize,
    radius,
    // height,
    // borderWidth,
    primaryBgColor,
    primaryColor,
    primaryBorderColor,
    primaryHoverBgColor,
    primaryHoverColor,
    primaryHoverBorderColor,
    primaryHoverBoxShadow,
    primaryActiveBgColor,
    primaryActiveColor,
    primaryActiveBorderColor,
    primaryActiveBoxShadow,
    dashedBgColor,
    dashedColor,
    dashedBorderColor,
    dashedHoverBgColor,
    dashedHoverColor,
    dashedHoverBorderColor,
    dashedHoverBoxShadow,
    dashedActiveBgColor,
    dashedActiveColor,
    dashedActiveBorderColor,
    dashedActiveBoxShadow,
    dashedDisabledBgColor,
    dashedDisabledBorderColor,
    dashedDisabledColor,
    linkBgColor,
    linkColor,
    linkBorderColor,
    linkHoverBgColor,
    linkHoverColor,
    linkHoverBorderColor,
    linkHoverBoxShadow,
    linkActiveBgColor,
    linkActiveColor,
    linkActiveBorderColor,
    linkActiveBoxShadow,
    linkDisabledBgColor,
    linkDisabledBorderColor,
    linkDisabledColor,
    linktextDecoration,
    wrapperDispaly,
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
    defaultBorderColor,
    defaultColor,
    defaultBgColor,
    defaultHoverBgColor,
    defaultHoverColor,
    defaultHoverBorderColor,
    defaultHoverBoxShadow,
    defaultActiveBgColor,
    defaultActiveColor,
    defaultActiveBorderColor,
    defaultActiveBoxShadow,
    defaultDisabledColor,
    defaultDisabledBgColor,
    defaultDisabledBorderColor,
    primaryDisabledBorderColor,
    primaryDisabledBgColor,
    primaryDisabledColor,
    leftRightPadding,
    errorBorderColor = '#F13131',
    errorFontColor = '#F13131',
    errorBg = '#fff',
    errorDisabledBorderColor = '#FAADAD',
    errorDisabledFontColor = '#FAADAD',
    errorDisabledBg = '#fff',
    iconFontSize,
    defalutIconWidth,
    defalutIconHeight,
    defalutIconBorderRadius,
    defalutIconLineHeight,
    defalutIconPosition,
    defaultFlatHoverColor,
    defalutIconLeft,
  } = getThemeData(props, 'button');
  const { textSizeBase, baseHeight } = getThemeData(props, 'common');
  return css`
    a.c7n-btn.c7n-btn.c7n-btn.c7n-btn.c7n-btn {
      display: inline-flex;
      align-items: center;
    }
    .c7n-btn.c7n-btn {
      height: ${baseHeight}px;
      line-height: 0;
      padding: 0 ${leftRightPadding}px;
      /* 大虚线线框按钮样式修复 */
      &.c7n-btn-lg.c7n-btn-dashed {
        line-height: 12px;
      }
      > i.icon {
        vertical-align: middle;
      }
      > span {
        vertical-align: middle;
      }
      &.c7n-btn-circle {
        width: 0.32rem;
        height: 0.32rem;
      }
      &.c7n-btn-circle.c7n-btn-lg {
        width: 0.4rem;
        height: 0.4rem;
      }
      &.c7n-btn-circle.c7n-btn-sm {
        width: 0.24rem;
        height: 0.24rem;
      }
      &.c7n-btn-icon-only {
        /* background: none !important; */
        padding: 0 !important;
        width: ${baseHeight}px;
        height: ${baseHeight}px;
        text-align: center;
        > .icon {
          margin-right: 0;
          left: 0 !important;
          line-height: 1;
        }
      }
      &.c7n-btn-primary {
        background-color: ${primaryBgColor};
        color: ${primaryColor};

        .c7n-progress-loading .c7n-progress-inner circle {
          stroke: #fff;
        }
      }
      &.c7n-btn-raised:not(.c7n-btn-circle),
      &.c7n-btn-flat:not(.c7n-btn-circle) {
        display: inline-block;
        box-sizing: border-box;
        height: ${baseHeight}px;
        line-height: 0;
        padding: 0 ${leftRightPadding}px;
        border-radius: ${radius}px;
        box-shadow: none;
        white-space: nowrap;
        border: none;
        color: ${defaultColor};
        border-color: ${defaultBorderColor};
        background-color: ${defaultBgColor};
        background-clip: padding-box;
        transition: all 0.3s !important;
        .c7n-ripple-wrapper {
          display: ${wrapperDispaly || 'none !important'};
        }
        > .icon {
          width: ${defalutIconWidth || defalutIconHeight};
          height: ${defalutIconHeight};
          border-radius: ${defalutIconBorderRadius};
          line-height: ${defalutIconLineHeight};
          position: ${defalutIconPosition};
          left: ${defalutIconLeft};
          font-size: ${iconFontSize}px;
        }
        span {
          font-family: ${fontFamily};
          font-size: ${textSizeBase}px;
          line-height: ${textSizeBase}px;
          text-align: right;
        }
        &:disabled,
        &[disabled],
        &:disabled:hover {
          color: ${defaultDisabledColor};
          background-color: ${defaultDisabledBgColor};
          border-color: ${defaultDisabledBorderColor};
        }
        :enabled:hover {
          box-shadow: ${defaultHoverBoxShadow || 'none'};
          border-color: ${defaultHoverBorderColor};
          color: ${defaultHoverColor};
          background-color: ${defaultHoverBgColor};
          i {
            border-radius: 2px;
          }
        }
        :enabled:focus,
        :enabled:active {
          box-shadow: none;
          border-color: ${defaultActiveBorderColor || defaultHoverBorderColor};
          color: ${defaultActiveColor || defaultHoverColor};
          background-color: ${defaultActiveBgColor || defaultHoverBgColor};
          i {
            border-radius: 2px;
          }
        }
        :disabled:before {
          display: none;
        }
        &.c7n-btn-primary {
          background-color: ${primaryBgColor};
          color: ${primaryColor};
          border-color: ${primaryBorderColor};
          :enabled:hover {
            color: ${primaryHoverColor};
            background-color: ${primaryHoverBgColor};
            border-color: ${primaryHoverBorderColor};
            // box-shadow: ${primaryHoverBoxShadow};
          }
          :enabled:focus,
          :enabled:active {
            color: ${primaryActiveColor || primaryHoverColor};
            background-color: ${primaryActiveBgColor || primaryHoverBgColor};
            border-color: ${primaryActiveBorderColor || primaryHoverBorderColor};
            box-shadow: none;
          }
          &:disabled,
          &:disabled:hover {
            background-color: ${primaryDisabledBgColor};
            border-color: ${primaryDisabledBorderColor};
            color: ${primaryDisabledColor};
            i {
              animation: none;
            }
          }
          > .icon {
            font-size: ${iconFontSize}px;
          }
        }
        &.c7n-btn-dashed {
          background-color: ${dashedBgColor};
          color: ${dashedColor};
          height: 0.3rem;
          border: 1px solid ${dashedBorderColor};
          :enabled:hover {
            color: ${dashedHoverColor};
            background-color: ${dashedHoverBgColor};
            border: 1px solid ${dashedHoverBorderColor};
            box-shadow: ${dashedHoverBoxShadow};
          }
          :enabled:focus,
          :enabled:active {
            color: ${dashedActiveColor || dashedHoverColor};
            background-color: ${dashedActiveBgColor || dashedHoverBgColor};
            border: 1px solid ${dashedActiveBorderColor};
            box-shadow: none;
          }
          &:disabled,
          &:disabled:hover {
            background-color: ${dashedDisabledBgColor};
            border-color: ${dashedDisabledBorderColor};
            color: ${dashedDisabledColor};
            i {
              animation: none;
            }
          }
        }
        &.c7n-btn-text {
          background-color: ${textBgColor};
          color: ${textColor};
          border-color: ${textBorderColor};
          :enabled:hover {
            color: ${textHoverColor};
            background-color: ${textHoverBgColor};
            border-color: ${textHoverBorderColor};
            box-shadow: ${textHoverBoxShadow};
          }
          :enabled:focus,
          :enabled:active {
            color: ${textActiveColor || textHoverColor};
            background-color: ${textActiveBgColor || textHoverBgColor};
            border-color: ${textActiveBorderColor || textHoverBorderColor};
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
        &[href] {
          line-height: 0.28rem;
          background-color: ${linkBgColor};
          color: ${linkColor};
          border-color: ${linkBorderColor};
          span {
            text-decoration: ${linktextDecoration || 'unset'};
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
        &.c7n-btn-danger {
          color: ${errorFontColor};
          border-color: ${errorBorderColor};
          background-color: ${errorBg};
          &:hover,
          &:focus,
          &:active,
          &.c7n-btn-focused {
            color: ${errorFontColor};
            border-color: ${errorBorderColor};
            background-color: ${errorBg};
            opacity: 0.9;
            span {
              color: ${errorFontColor};
            }
            &:after,
            &:before {
              border-color: ${errorBorderColor};
            }
          }
          &:disabled,
          &:disabled:hover,
          &:disabled:active {
            color: ${errorDisabledFontColor};
            border-color: ${errorDisabledBorderColor};
            background-color: ${errorDisabledBg};
            span {
              color: ${errorDisabledFontColor};
            }
          }
        }
      }
      &.c7n-btn-flat.c7n-btn-flat:not(.c7n-btn-circle, .c7n-btn-dashed) {
        background-color: ${textBgColor};
        color: ${textColor};
        border-color: ${textBorderColor};
        :enabled:hover {
          color: ${textHoverColor};
          background-color: ${textHoverBgColor};
          border-color: ${textHoverBorderColor};
          box-shadow: ${textHoverBoxShadow};
        }
        :enabled:focus,
        :enabled:active {
          color: ${textActiveColor || textHoverColor};
          background-color: ${textActiveBgColor || textHoverBgColor};
          border-color: ${textActiveBorderColor || textHoverBorderColor};
          box-shadow: none;
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
      &&.c7n-btn-circle {
        :hover {
          :before {
            border-color: transparent;
          }
          :after {
            border-color: transparent;
          }
        }
      }
      &.c7n-btn-flat.c7n-btn-flat:not(.c7n-btn-circle, .c7n-btn-dashed):enabled:hover {
        border-color: ${defaultFlatHoverColor || defaultHoverBorderColor};
      }
      &.c7n-btn-flat.c7n-btn-flat:not(.c7n-btn-circle, .c7n-btn-dashed):enabled:focus,
      .c7n-btn.c7n-btn.c7n-btn-flat.c7n-btn-flat:not(.c7n-btn-circle):enabled:active {
        border-color: ${defaultFlatHoverColor || defaultHoverBorderColor};
      }
      &.c7n-btn-loading {
        padding: 0;
      }
      &.c7n-btn .c7n-progress.c7n-progress-loading {
        margin: 0;
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
    }
  `;
};

const allCss = css`
  ${getButtonStyle}
  ${getGroupStyle}
`;

export default allCss;
