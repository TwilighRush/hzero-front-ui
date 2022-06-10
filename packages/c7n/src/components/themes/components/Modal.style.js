import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const changeThemeTwo = (showBgIcon, wrapBgColor) => {
  if (showBgIcon) {
    return css`
      overflow: hidden;
      &:before {
        display: block !important;
        content: "";
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
        content: "";
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
    c7nWrapWidth,
    iconWidth,
    iconHeight,
    contentFont,
    fontFamily,
    fontSize,
    titleColor,
    descriptionColor,
    iconImage,
    titlePaddingLeft,
    wrapBgColor,
  } = getThemeData(props, "modal");
  const d = getThemeData(props, "modal");
  return css`
    .c7n-modal {
      border-radius: ${d.wrapBorderRadius}px;
      padding-bottom: 0;
      .c7n-modal-content {
        padding: 0.12rem 0.16rem;
        display: flex;
        flex-direction: column;
        padding: 16px;
        background: ${wrapBgColor};
        ${changeThemeTwo(showBgIcon, wrapBgColor)};
        .c7n-modal-header {
          flex: 0 0 auto;
          padding: ${d.headerPadding || "0"};
          border: ${d.hearderBorder};
          background: initial;
          .c7n-modal-title {
            margin: 0;
            line-height: 0.28rem;
            font-family: ${fontFamily};
            font-size: ${fontSize}px;
            color: ${titleColor};
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
          flex: 1;
        }
        .c7n-modal-footer {
          flex: 0 0 auto;
          margin: 0;
          padding: 12px 0 0;
          border: none;
          text-align: right;
          justify-content: flex-end;
          border-top: 1px solid rgba(0, 0, 0, 0.09);
        }
      }

      &.c7n-confirm.c7n-confirm-confirm {
        // 移除宽度设置
        // width: ${c7nWrapWidth}px!important;
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
                  content: "";
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
                  font-family: ${fontFamily};
                  font-size: ${fontSize}px;
                  color: ${titleColor};
                  padding-left: ${titlePaddingLeft || 22}px;
                  line-height: 0.16rem;
                }
                /* 描述文字 */
                .c7n-confirm-content {
                  font-family: ${contentFont};
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
    .c7n-confirm {
      .c7n-modal-content .c7n-modal-body {
        border-bottom: none;
      }
    }
  `;
};
export default createStyleComponent("comp/modal", ModalStyle, true);
