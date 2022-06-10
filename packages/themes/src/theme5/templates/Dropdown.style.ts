import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function DropdownStyle(props: any) {
  const { iconMarginRight } = getThemeData(props, 'dropdown');
  const { radius, smheight, leftRightPadding, lgIconFontSize, smIconFontSize, lgHeight } =
    getThemeData(props, 'button');
  const { bgColor, primary6, titleColor2, lineColor1, lineColor3, titleColor3 } = getThemeData(
    props,
    'common'
  );

  return css`
    //下拉菜单样式
    .c7n-pro-dropdown-popup.c7n-pro-dropdown-popup {
      .c7n-menu {
        padding: 6px 8px;
        border: none;
      }
    }
    /* 基础select的代码吧 */
    .c7n-select-dropdown-menu-item.c7n-select-dropdown-menu-item {
      padding: 0.04rem 0.06rem;
    }

    .c7n-btn-group.c7n-pro-dropdown-button {
      && {
        border-radius: ${radius}px;
        .c7n-pro-btn {
          &:nth-child(1) {
            padding: 0 ${leftRightPadding}px !important;
            color: ${titleColor2};
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: ${radius}px;
            border-bottom-left-radius: ${radius}px;
          }
          &:nth-child(1):not(.c7n-pro-btn-disabled) {
            &:hover {
              background-color: ${bgColor};
              border-color: ${primary6};
              border-radius: ${radius}px;
              color: ${primary6};
            }
          }
          &:nth-child(1).c7n-pro-btn-disabled:not(a) {
            background-color: ${lineColor3};
            border-color: ${lineColor1};
            color: ${titleColor3};
          }
          &:nth-child(2) {
            margin: 0 0 0 ${iconMarginRight}px;
            border: 1px solid ${lineColor1};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: ${radius}px;
            border-bottom-right-radius: ${radius}px;
            &.c7n-pro-btn-icon-only.c7n-pro-btn-sm {
              height: ${smheight}px;
              font-size: ${smIconFontSize}px;
            }
            &.c7n-pro-btn-icon-only.c7n-pro-btn-lg {
              height: ${lgHeight}px;
              font-size: ${lgIconFontSize}px;
            }
          }
          &:nth-child(2):not(.c7n-pro-btn-disabled) {
            color: ${titleColor2};

            &:hover {
              border-color: ${primary6};
              color: ${primary6};
            }
          }
          &:nth-child(2).c7n-pro-btn-disabled {
            background-color: ${lineColor3};
          }
        }
        a.c7n-pro-btn.c7n-pro-btn {
          border: 1px solid ${lineColor1};
          &[disabled] {
            border: 1px solid ${lineColor1} !important;
            background-color: ${lineColor3} !important;
          }
        }
      }
    }
  `;
}

export default DropdownStyle;
