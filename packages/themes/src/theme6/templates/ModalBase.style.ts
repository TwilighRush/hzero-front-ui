import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const changeThemeTwo = (showBgIcon, wrapBgColor) => {
  if (showBgIcon) {
    return css`
      overflow: hidden;
      &:before {
        display: block !important;
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

const ModalStyle = (props) => {
  const {
    showBgIcon,
    iconWidth,
    iconHeight,
    fontSize,
    titleColor,
    descriptionColor,
    iconImage,
    titlePaddingLeft,
    wrapBgColor,
  } = getThemeData(props, 'modal');
  const d = getThemeData(props, 'modal');
  const common = getThemeData(props, 'common');
  return css`
    .c7n-modal.c7n-modal {
      border-radius: ${d.wrapBorderRadius}px;
      padding-bottom: 0;
      .c7n-modal-content {
        display: flex;
        flex-direction: column;
        padding: 0;
        background: ${wrapBgColor};
        ${changeThemeTwo(showBgIcon, wrapBgColor)};
        .c7n-modal-header {
          flex: 0 0 auto;
          padding: ${d.headerPadding || '0'};
          border: ${d.hearderBorder};
          border-bottom: 1px solid ${d.headerBottomBorderColor};
          background: initial;
          .c7n-modal-title {
            font-size: ${fontSize}px;
            font-weight: 500;
            color: ${titleColor};
            line-height: 0.24rem;
          }
        }
        .c7n-modal-close {
          position: absolute;
          top: 0;
          right: 0;
          .icon-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .c7n-modal-body {
          padding: 0.24rem;
          flex: 1;
        }
        .c7n-modal-footer {
          padding: ${d.footerPadding};
          flex: 0 0 auto;
          margin: 0;
          border: none;
          text-align: right;
          justify-content: flex-end;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }
      }

      &.c7n-confirm.c7n-confirm-confirm {
        // 移除宽度设置
        .c7n-modal-content {
          top: 0;
          padding: 0rem 0.16rem;
          background: ${wrapBgColor};
          ${changeThemeTwo(showBgIcon, wrapBgColor)};
          .c7n-modal-body {
            padding: 0;
            .c7n-confirm-body-wrapper {
              .c7n-confirm-body {
                position: relative;

                /* 图标 前面没有icon，所以只能用伪元素 */
                &:before {
                  content: '';
                  background-image: url(${iconImage});
                  background-position: center;
                  background-size: ${iconWidth}px ${iconHeight}px;
                  width: ${iconWidth}px;
                  height: ${iconHeight}px;
                  transform: translateY(-0.04rem);
                  background-repeat: no-repeat;

                  position: absolute;
                  top: 0.04rem;
                  left: 0;
                }
                /* 头文字 */
                .c7n-confirm-title {
                  font-size: ${fontSize}px;
                  color: ${titleColor};
                  padding-left: ${titlePaddingLeft || 0.22}px;
                  line-height: 0.16rem;
                }
                /* 描述文字 */
                .c7n-confirm-content {
                  font-size: ${fontSize}px;
                  color: ${descriptionColor};
                  margin-top: 0.12rem;
                  margin-left: 0;
                }
              }
              /* 按钮 */
              .c7n-confirm-btns {
                margin-bottom: -0.12rem;
                .c7n-btn {
                  margin-left: 0.08rem;
                }
              }
            }
          }
        }
      }
    }
    .c7n-confirm.c7n-confirm {
      .c7n-modal-content .c7n-modal-body {
        border-bottom: none;
      }
    }
    .c7n-image-crop-modal.c7n-image-crop-modal {
      .c7n-image-crop-control {
        .c7n-btn.c7n-btn.c7n-btn-raised:not(.c7n-btn-circle),
        .c7n-btn.c7n-btn.c7n-btn-flat:not(.c7n-btn-circle) {
          border-color: transparent;
          :after {
            border-color: transparent;
          }
          :before {
            border-color: transparent;
          }
          background: transparent;
        }
      }
    }
    .c7n-modal.c7n-confirm {
      .c7n-modal-body {
        padding: 0.32rem;
        .c7n-confirm-title {
          font-size: ${fontSize}px;
          font-weight: 500;
          color: ${titleColor};
          line-height: 0.24rem;
        }
        .c7n-confirm-content {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          line-height: 22px;
        }
        .icon.icon-warning {
          font-size: 0.21rem;
          color: ${common.warningColor};
          line-height: 0.21rem;
          &:before {
            font-family: ${common.iconfontFamily};
            content: '\\e723';
          }
        }
      }
      .c7n-confirm-btns {
        padding-top: 32px;
        padding-bottom: 24px;
        margin-bottom: -32px;
      }
    }
  `;
};
export default ModalStyle;
