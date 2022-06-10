import { css } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

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
    fontFamily,
    fontSize,
    titleColor,
    wrapBgColor,
    contentFooterPadding,
    modalContentPadding,
    bodyPadding,
    headerBottomBorderColor,
    modalBodyTextColor,
    modalBodyTextWeight,
    modalBodyTextFontFamily,
  } = getThemeData(props, 'modal');
  const d = getThemeData(props, 'modal');
  const { commonItemBg, commonItemFontColor } = getThemeData(props, 'select');
  const { primary } = getThemeData(props, 'common');
  const modalTitle = css`
    font-family: ${fontFamily};
    font-size: ${fontSize}px;
    color: ${titleColor};
    line-height: 0.28rem;
  `;
  return css`
    .c7n-pro-modal.c7n-pro-modal {
      // 移除width设置
      // width: ${d.width}px!important;
      // box-shadow: ${d.wrapBoxShadow};
      border-radius: ${d.wrapBorderRadius}px;

      .c7n-pro-modal-header {
        padding: ${d.headerPadding}px;
        border: ${d.hearderBorder};
        border-bottom: 1px solid ${headerBottomBorderColor};
        background-color: initial;
        .c7n-pro-modal-title {
          ${modalTitle}
        }
        .c7n-pro-modal-header-button {
          .icon-close {
            position: ${d.headerPosition || 'absolute'};
            top: 0;
            right: 0;
            z-index: 1;
          }
        }
      }

      .c7n-pro-modal-content {
        padding: ${modalContentPadding}px;
        background: ${wrapBgColor};
        ${getBgStyle(showBgIcon, wrapBgColor)};

        .c7n-pro-modal-body {
          color: ${modalBodyTextColor};
          font-weight: ${modalBodyTextWeight};
          font-family: ${modalBodyTextFontFamily};
          padding: ${bodyPadding}px;
          margin: 0;
          box-sizing: border-box;
        }

        .c7n-pro-modal-footer {
          padding: ${contentFooterPadding}px;
          left: 0;
          text-align: right;
          border-top: none;
          .c7n-pro-btn {
            margin-left: 0.12rem;
          }
        }

        .c7n-pro-modal-footer {
          border-top: 1px solid #d9e6f2;
          &.c7n-pro-modal-footer-drawer {
            // border-top: 1px solid #d9e6f2;
            & > div {
              display: ${d.modalFooterdispaly};
            }
          }
        }
      }

      .c7n-pro-modal-content .c7n-pro-modal-footer {
        // background-color: ${d.footer};
        padding: ${d.footerPadding}px;
        .c7n-btn {
          background: ${primary};
          font-size: ${d.footerFontSize}px;
          border-radius: ${d.footerBorderRadius}px;
          color: ${d.footColor};
          border: ${d.footerBorder};
          padding: ${d.footFontPadding}px;
        }
      }
      /* 去除表格个性化中输入框与后缀的间隙 */
      .c7n-pro-table-customization {
        .c7n-pro-table-customization-form {
          [class*='-option-input'] {
            label > input {
              padding-top: 0;
            }
            div[class$='-group-input']:not(:last-child) span {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }
          }
        }
      }
      /* Lov开启showSelectedInView的显示样式 */
      &.c7n-pro-select-lov-selection-wrapper {
        .c7n-pro-modal-selection-list-below {
          .c7n-tag {
            background-color: ${commonItemBg};
            color: ${commonItemFontColor};
          }
        }
      }
    }
  `;
};
export default ModalStyle;
