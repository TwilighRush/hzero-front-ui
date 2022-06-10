import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

export const getBgStyle = (showBgIcon: any, wrapBgColor: any) => {
  if (showBgIcon) {
    return css`
      overflow: hidden;
      &:before {
        content: '';
        width: 1rem;
        height: 1rem;
        background: url(${wrapBgColor});
        background-repeat: no-repeat;
        background-size: 1rem 1rem;
        position: absolute;
        right: -0.2rem;
        top: -0.2rem;
        transform: rotate(180deg);
        opacity: 0.2;
      }
      &:after {
        content: '';
        width: 1rem;
        height: 1rem;
        background: url(${wrapBgColor});
        background-repeat: no-repeat;
        background-size: 1rem 1rem;
        position: absolute;
        left: -0.65rem;
        bottom: -0.65rem;
        opacity: 0.2;
      }
    `;
  }
};

const ModalStyle = (props: any) => {
  const {
    showBgIcon,
    titleLineHeight,
    titleFontSize,
    contentFontColor,
    contentLineHeight,
    modalContentPadding,
    hearderBorder,
    headerPadding,
    bodyPadding,
    modalBodyTextWeight,
    wrapBorderRadius,
    footerPadding,
    headerPosition,
  } = getThemeData(props, 'modal');
  const {
    infoColor,
    titleColor1,
    titleColor2,
    titleColor3,
    bgColor,
    iconfontFamily,
    warningColor,
    successColor,
    errorColor,
  } = getThemeData(props, 'common');

  return css`
    .c7n-pro-modal.c7n-pro-modal {
      border-radius: ${wrapBorderRadius}px;
      //头部
      .c7n-pro-modal-header {
        padding: ${headerPadding}px;
        border: ${hearderBorder};
        background-color: initial;
        .c7n-pro-modal-title {
          font-size: ${titleFontSize}px;
          color: ${titleColor1};
          line-height: ${titleLineHeight}px;
        }
        .c7n-pro-modal-header-buttons {
          .c7n-pro-modal-header-button {
            .icon-close {
              font-size: 14px;
              position: ${headerPosition || 'absolute'};
              top: 0;
              right: 0;
              z-index: 1;
              font-weight: 400;
              color: ${titleColor2};
            }
          }
        }
        + .c7n-pro-modal-body.c7n-pro-modal-body {
          padding-top: 0;
        }
      }
      .c7n-pro-modal-content {
        padding: ${modalContentPadding}px;
        background: ${bgColor};
        line-height: ${contentLineHeight}px;
        min-width: auto;
        ${getBgStyle(showBgIcon, bgColor)};
        //body
        .c7n-pro-modal-body {
          color: ${titleColor3};
          font-weight: ${modalBodyTextWeight};
          padding: ${bodyPadding}px;
          margin: 0;
          box-sizing: border-box;
          //警告提示框
          .c7n-pro-confirm {
            .c7n-pro-confirm-icon {
              padding-right: 0.08rem;
              .icon {
                line-height: 0;
                font-size: 0.18rem;
                margin-top: 1px;
                &.icon-warning {
                  &:before {
                    color: ${warningColor};
                    content: '\\e79b';
                    font-family: ${iconfontFamily};
                  }
                }
                // sucess
                &.icon-check_circle {
                  &:before {
                    color: ${successColor};
                    content: '\\e738';
                    font-family: ${iconfontFamily};
                  }
                }
                // cancel
                &.icon-cancel {
                  &:before {
                    color: ${errorColor};
                    content: '\\e734';
                    font-family: ${iconfontFamily};
                  }
                }
              }
            }
            .c7n-pro-confirm-title {
              font-size: ${titleFontSize}px;
              color: ${titleColor1};
              line-height: ${titleLineHeight}px;
            }
            .c7n-pro-confirm-content {
              color: ${titleColor3};
              font-size: ${contentFontColor};
              line-height: ${contentLineHeight}px;
            }
            /* 增加 info 和 confirm icon */
            tr > td:nth-last-child(1):first-child {
              .c7n-pro-confirm-title {
                &::before {
                  display: inline-block;
                  font-family: ${iconfontFamily};
                  content: '\\e77d';
                  width: 26px;
                  font-size: 18px;
                  color: ${infoColor};
                }
              }
              .c7n-pro-confirm-content {
                padding-left: 26px;
              }
            }
          }
        }
        //底部按钮组
        .c7n-pro-modal-footer {
          padding: ${footerPadding}px;
          left: 0;
          text-align: right;
          border-top: none;
        }
      }
      //modal中的表单间距为12px
      .c7n-pro-form:not(.c7n-pro-form-vertical):not(.c7n-pro-form-float),
      .c7n-pro-form-horizontal {
        .c7n-pro-field-label.c7n-pro-field-label:not(.c7n-pro-field-label-vertical) {
          & > label,
          + td .c7n-pro-field-wrapper {
            // padding: 0 0.04rem 0.12rem;
            padding: 6px 4px;
          }
        }
      }
    }
  `;
};
export default ModalStyle;
