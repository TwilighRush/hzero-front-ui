import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

export const getBgStyle = (showBgIcon, wrapBgColor) => {
  if (showBgIcon) {
    return css`
      overflow: hidden;
      &:before {
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
    iconWidth,
    iconHeight,
    contentFont,
    fontFamily,
    fontSize,
    titleColor,
    descriptionColor,
    iconImage,
    wrapBgColor,
    contentFooterPadding,
    modalContentPadding,
    bodyPadding,
    footDrawerBgColor,
    footBgColor,
  } = getThemeData(props, "modal");
  const d = getThemeData(props, "modal");
  const { primary } = getThemeData(props, "common");
  const modalTitle = css`
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    color: ${titleColor};
    line-height: 0.2rem;
  `;
  return css`
    .c7n-pro-modal {
      // 移除width设置
      // width: ${d.width}px!important;
      box-shadow: ${d.wrapBoxShadow};
      border-radius: ${d.wrapBorderRadius}px;

      .c7n-pro-modal-header {
        padding: ${d.headerPadding || "4px 0 12px 0"};
        border: ${d.hearderBorder};
        background-color: initial;
        .c7n-pro-modal-title {
          ${modalTitle}
        }
        .c7n-pro-modal-header-button {
          .icon-close {
            position: ${d.headerPosition || "absolute"};
            top: 0;
            right: 0;
            z-index: 1;
          }
        }
      }

      .c7n-pro-modal-content {
        padding: ${modalContentPadding || "0.12rem 0.16rem"};
        background: ${wrapBgColor};
        ${getBgStyle(showBgIcon, wrapBgColor)};

        .c7n-pro-modal-body {
          padding: ${bodyPadding || "16px 0"};
          margin: 0;
          box-sizing: border-box;
          .c7n-pro-form {
            overflow: hidden;
          }
          .c7n-pro-confirm {
            position: relative;
            td.c7n-pro-confirm-warning + td > div.c7n-pro-confirm-title {
              padding-left: 2px;
            }

            .icon-warning:before {
              content: "";
            }

            .c7n-pro-confirm-success,
            .c7n-pro-confirm-error {
              padding-right: 8px;
              .icon {
                line-height: 0;
                margin-top: -8px;
              }
              .icon:before {
                font-size: 0.18rem;
                line-height: 0.2rem;
              }
              & + td .c7n-pro-confirm-title {
                &:before {
                  display: none;
                }
                padding-left: 0;
              }
            }
            .c7n-pro-confirm-title {
              ${modalTitle}
              line-height: 0.14rem;
              overflow-y: hidden;
              padding-left: ${d.titleconfirmPaddingLeft || 22}px;
              line-height: ${d.confirmTitleLineHeight};

              &::before {
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
            }

            /* 描述文字 */
            .c7n-pro-confirm-content {
              font-family: ${contentFont};
              font-size: ${fontSize}px;
              color: ${descriptionColor};
              margin-top: 0.12rem;
              margin-left: 0;
            }
          }
        }

        .c7n-pro-modal-footer {
          padding: ${contentFooterPadding || "0.12rem"};
          left: 0;
          text-align: right;
          > div {
            display: flex;
            flex-direction: row-reverse;
          }
          .c7n-pro-btn {
            margin-left: 0.08rem;
          }
        }

        .c7n-pro-modal-footer {
          background-color: ${footBgColor};
          &.c7n-pro-modal-footer-drawer {
            background-color: ${footDrawerBgColor};
            & > div {
              display: ${d.modalFooterdispaly};
            }
          }
        }
      }

      .c7n-pro-modal-content .c7n-pro-modal-footer {
        background-color: ${d.footer};
        padding: ${d.footerPadding || "12px 0 0"};
        .c7n-btn {
          background: ${primary};
          font-size: ${d.footerFontSize}px;
          border-radius: ${d.footerBorderRadius}px;
          color: ${d.footColor};
          border: ${d.footerBorder};
          padding: ${d.footFontPadding};
        }
        &.c7n-pro-modal-footer-drawer {
          padding-right: 16px;
        }
      }
    }
  `;
};
export default createStyleComponent("modal", ModalStyle, true);
