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
    fontSize,
    titleColor,
    wrapBgColor,
    contentFooterPadding,
    modalContentPadding,
    bodyPadding,
    headerBottomBorderColor,
    modalBodyTextColor,
    modalBodyTextWeight,
  } = getThemeData(props, 'modal');
  const d = getThemeData(props, 'modal');
  const { primary, iconfontFamily } = getThemeData(props, 'common');
  const modalTitle = css`
    font-size: ${fontSize}px;
    font-weight: 500;
    color: ${titleColor};
    line-height: 0.24rem;
  `;
  return css`
    .c7n-pro-modal.c7n-pro-modal {
      border-radius: ${d.wrapBorderRadius}px;
      &.c7n-pro-modal-border {
        .c7n-pro-modal-footer {
          border-top: 0.01rem solid rgba(0, 0, 0, 0.06) !important;
        }
      }
      //头部
      .c7n-pro-modal-header {
        padding: ${d.headerPadding};
        border: ${d.hearderBorder};
        border-bottom: 1px solid ${headerBottomBorderColor};
        background-color: initial;
        .c7n-pro-modal-title {
          ${modalTitle}
        }
        .c7n-pro-modal-header-button {
          .icon-close {
            font-weight: 400;
            :before {
              font-family: ${iconfontFamily} !important;
              content: '\\e70f';
            }
            color: rgba(0, 0, 0, 0.45);
            :hover {
              color: rgba(0, 0, 0, 0.45);
            }
            position: ${d.headerPosition || 'absolute'};
            top: 0;
            right: 0;
            z-index: 1;
          }
        }
      }
      //内容体
      .c7n-pro-modal-content {
        padding: ${modalContentPadding}px;
        background: ${wrapBgColor};
        ${getBgStyle(showBgIcon, wrapBgColor)};

        .c7n-pro-modal-body {
          color: ${modalBodyTextColor};
          font-weight: ${modalBodyTextWeight};
          padding: ${bodyPadding}px;
          margin: 0;
          box-sizing: border-box;
          .c7n-pro-confirm {
            .c7n-pro-confirm-icon {
              padding-right: 0.16rem;
              .icon {
                line-height: 1;
                font-size: 0.21rem;
              }
            }
            .c7n-pro-confirm-title {
              font-size: 0.16rem;
              color: ${titleColor};
              line-height: 24px;
              font-weight: 500;
            }
            .c7n-pro-confirm-content {
              color: rgba(0, 0, 0, 0.45);
              line-height: 22px;
              font-size: 14px;
            }
          }
        }

        .c7n-pro-modal-footer {
          padding: ${contentFooterPadding}px;
          left: 0;
          text-align: right;
          border-top: none;
          > div {
            display: flex;
            flex-direction: row-reverse;
          }
          .c7n-pro-btn {
            margin-left: 0.08rem;
          }
        }

        .c7n-pro-modal-footer {
          &.c7n-pro-modal-footer-drawer {
            & > div {
              display: ${d.modalFooterdispaly};
            }
          }
        }
      }

      .c7n-pro-modal-content {
        .c7n-pro-modal-footer {
          padding: ${d.footerPadding};
          .c7n-btn {
            background: ${primary};
            font-size: ${d.footerFontSize}px;
            border-radius: ${d.footerBorderRadius}px;
            color: ${d.footColor};
            border: ${d.footerBorder};
            padding: ${d.footFontPadding}px;
          }
        }
      }
    }
    // 确认框样式
    .c7n-pro-modal.c7n-pro-confirm-wrapper {
      .c7n-pro-modal-content {
        .c7n-pro-modal-footer {
          padding-top: 0;
          padding-bottom: 24px;
        }
      }
    }
  `;
};
export default ModalStyle;
