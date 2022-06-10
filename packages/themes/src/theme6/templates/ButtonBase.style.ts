import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getButtonStyle(props: any) {
  const {
    radius,
    height,
    smheight,
    primaryColor,
    primaryHoverColor,
    primaryActiveColor,
    dashedBgColor,
    dashedColor,
    dashedBorderColor,
    dashedHoverBgColor,
    dashedHoverBoxShadow,
    dashedActiveBgColor,
    dashedDisabledBgColor,
    dashedDisabledBorderColor,
    dashedDisabledColor,
    linkBgColor,
    linkBorderColor,
    linkHoverBgColor,
    linkHoverBorderColor,
    linkHoverBoxShadow,
    linkActiveBgColor,
    linkActiveBorderColor,
    linkActiveBoxShadow,
    linkDisabledBgColor,
    linkDisabledBorderColor,
    linkDisabledColor,
    linktextDecoration,
    wrapperDispaly,
    textBgColor,
    textBorderColor,
    textHoverBorderColor,
    textHoverBoxShadow,
    textActiveBorderColor,
    textActiveBoxShadow,
    textDisabledBgColor,
    textDisabledBorderColor,
    textDisabledColor,
    defaultBorderColor,
    defaultColor,
    defaultBgColor,
    defaultHoverBgColor,
    defaultActiveBgColor,
    defaultDisabledColor,
    defaultDisabledBgColor,
    defaultDisabledBorderColor,
    primaryDisabledBorderColor,
    primaryDisabledBgColor,
    primaryDisabledColor,
    errorBorderColor = '#F13131',
    errorFontColor = '#F13131',
    errorBg = '#fff',
    errorDisabledBorderColor = '#FAADAD',
    errorDisabledFontColor = '#FAADAD',
    errorDisabledBg = '#fff',
    iconFontSize,
    defalutIconBorderRadius,
    defalutIconPosition,
    fontSize,
    textColor,
    lgHeight,
    lgPadding,
  } = getThemeData(props, 'button');
  const { primary, primary1, primary2, primary5, primary7 } = getThemeData(props, 'common');
  return css`
    a.c7n-btn.c7n-btn.c7n-btn.c7n-btn.c7n-btn {
      display: inline-flex;
      align-items: center;
    }
    .c7n-btn.c7n-btn {
      height: ${height}px;
      line-height: 0;
      padding: 0 16px;
      + .c7n-btn {
        margin-left: 0.08rem;
      }
      > i.icon {
        margin-left: -4px;
        vertical-align: middle;
      }
      > span {
        vertical-align: middle;
        font-size: ${fontSize}px;
        line-height: ${fontSize}px;
        text-align: right;
        margin-left: 0 !important;
      }

      &.c7n-btn-circle {
        width: 0.28rem;
        height: 0.28rem;
      }
      &&&.c7n-btn-lg {
        height: ${lgHeight}px;
        padding: 0 ${lgPadding}px;
        span {
          font-size: 16px;
        }
      }
      &.c7n-btn-sm {
        height: ${smheight}px;
        padding: 0 0.08rem;
        height: ${smheight}px;
        > i.icon {
          margin-left: 0;
        }
        span {
          font-size: ${fontSize}px;
        }
      }
      // 图标按钮
      &.c7n-btn-icon-only {
        padding: 0 !important;
        width: ${height}px;
        height: ${height}px;
        text-align: center;
        > i.icon {
          font-size: 0.16rem;
          margin: 0;
          left: 0 !important;
          line-height: 1;
          font-size: 0.16rem;
        }
        &.c7n-btn-sm {
          width: ${smheight}px;
          height: ${smheight}px;
        }
        &.c7n-btn-lg {
          width: ${lgHeight}px;
          height: ${lgHeight}px;
        }
      }
      //主按钮
      &.c7n-btn-primary {
        background-color: ${primary};
        color: ${primaryColor};

        .c7n-progress-loading .c7n-progress-inner circle {
          stroke: #fff;
        }
      }
      //默认为文字按钮
      &.c7n-btn-raised:not(.c7n-btn-circle),
      &.c7n-btn-flat:not(.c7n-btn-circle) {
        display: inline-block;
        box-sizing: border-box;
        line-height: 0;
        border-radius: ${radius}px;
        box-shadow: none;
        white-space: nowrap;
        border: none;

        color: ${textColor};
        border-color: ${textBorderColor};
        background-color: ${textBgColor};
        background-clip: padding-box;
        transition: all 0.3s !important;
        .c7n-ripple-wrapper {
          display: ${wrapperDispaly || 'none !important'};
        }
        &:not(.c7n-btn-icon-only) {
          > .icon {
            border-radius: ${defalutIconBorderRadius};
            position: ${defalutIconPosition};
            font-size: ${iconFontSize}px;
          }
        }

        &:disabled,
        &[disabled],
        &:disabled:hover {
          color: ${textDisabledColor};
          background-color: ${textDisabledBgColor};
          border-color: ${textDisabledBorderColor};
        }
        :enabled:focus,
        :enabled:hover {
          color: ${primary};
          background-color: ${primary1};
          border-color: ${primary1};
          box-shadow: none;
        }
        :enabled:active {
          color: ${primary7};
          background-color: ${primary2};
          border-color: ${textActiveBorderColor || textHoverBorderColor};
          box-shadow: ${textActiveBoxShadow || textHoverBoxShadow};
        }
        :disabled:before {
          display: none;
        }
        // 图标按钮
        &.c7n-btn-icon-only {
          background: ${defaultBgColor};
          border: none;
          color: ${defaultColor};
          :enabled:hover,
          :enabled:focus {
            box-shadow: none;
            color: ${primary};
            border: none;
            background-color: ${defaultHoverBgColor};
            i {
              border-radius: 2px;
            }
          }
          :enabled:active {
            background: ${primary2};
            border: none;
            color: ${primary7};
          }
          &:disabled,
          &[disabled],
          &:disabled:hover {
            color: ${textDisabledColor};
            background-color: ${textDisabledBgColor};
            border-color: ${defaultBorderColor};
          }
        }
        // 主按钮
        &&&.c7n-btn-primary {
          background-color: ${primary};
          color: ${primaryColor};
          border-color: ${primary};
          :enabled:focus,
          :enabled:hover {
            color: ${primaryHoverColor};
            background-color: ${primary5};
            border-color: ${primary5};
          }
          :enabled:active {
            color: ${primaryActiveColor || primaryHoverColor};
            background-color: ${primary7};
            border-color: ${primary7};
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
        //虚线按钮
        &.c7n-btn-dashed {
          background-color: ${dashedBgColor};
          color: ${dashedColor};
          height: ${height}px;
          border: 1px dashed ${dashedBorderColor};
          :enabled:hover,
          :enabled:focus {
            color: ${primary};
            background-color: ${dashedHoverBgColor};
            border: 1px dashed ${primary5};
            box-shadow: ${dashedHoverBoxShadow};
          }
          :enabled:active {
            color: ${primary7};
            background-color: ${dashedActiveBgColor};
            border: 1px dashed ${primary};
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
        //文字按钮，没有维护
        &.c7n-btn-text {
          background-color: ${textBgColor};
          color: ${textColor};
          border-color: ${textBorderColor};
          :enabled:focus,
          :enabled:hover {
            color: ${primary};
            background-color: ${primary1};
            border-color: ${primary1};
            box-shadow: none;
          }
          :enabled:active {
            color: ${primary7};
            background-color: ${primary2};
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
        // 链接按钮
        &&[href] {
          line-height: 0.28rem;
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
            box-shadow: ${linkHoverBoxShadow};
          }
          &:active {
            color: ${primary7};
            background-color: ${linkActiveBgColor || linkHoverBgColor};
            border-color: ${linkActiveBorderColor || linkHoverBorderColor};
            box-shadow: ${linkActiveBoxShadow || linkHoverBoxShadow};
          }
          &[disabled],
          &[disabled]:hover {
            cursor: not-allowed;
            cursor: not-allowed;
            background-color: ${linkDisabledBgColor};
            border-color: ${linkDisabledBorderColor};
            color: ${linkDisabledColor};
          }
        }
        //危险按钮
        &&&.c7n-btn-danger {
          color: ${errorFontColor};
          border-color: ${errorBorderColor};
          background-color: ${errorBg};
          border: none !important;
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
      // 线框按钮
      &.c7n-btn-flat.c7n-btn-flat:not(.c7n-btn-circle, .c7n-btn-dashed) {
        color: ${defaultColor};
        border-width: 1px !important;
        border-style: solid !important;
        border-color: ${defaultBorderColor};
        background-color: ${defaultBgColor};
        &.c7n-pro-btn-focused,
        :hover,
        :focus {
          border-color: ${primary5};
          color: ${primary5};
          background-color: ${defaultHoverBgColor};
        }
        :active {
          border-color: ${primary};
          color: ${primary};
          background-color: ${defaultActiveBgColor} !important;
        }
        &.c7n-pro-btn-disabled,
        :disabled,
        :disabled:hover {
          border: 1px solid ${defaultDisabledBorderColor};
          color: ${defaultDisabledColor};
          background-color: ${defaultDisabledBgColor};
        }
        &.c7n-btn-icon-only {
          background: none !important;
        }
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
