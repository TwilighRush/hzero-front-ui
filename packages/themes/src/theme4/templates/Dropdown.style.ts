import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function DropdownStyle(props: any) {
  const {
    radius,
    smheight,
    leftRightPadding,
    lgIconFontSize,
    smIconFontSize,
    lgHeight,
    defaultBgColor,
    defaultHoverBgColor,
    defaultHoverColor,
  } = getThemeData(props, 'button');

  return css`
    //下拉菜单样式
    .c7n-btn-group.c7n-pro-dropdown-button {
      && {
        border-radius: ${radius}px;
        .c7n-pro-btn {
          &:not(.c7n-pro-btn-primary, .c7n-pro-btn-default):hover {
            background-color: rgba(0, 0, 0, 0.08);
          }
          &:nth-child(1) {
            background-color: ${defaultBgColor};
            border: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            border-top-left-radius: ${radius}px;
            border-bottom-left-radius: ${radius}px;
            /* background-color: ${defaultBgColor}; */
            padding: 0 ${leftRightPadding}px !important;
          }
          &:nth-child(1):not(.c7n-pro-btn-disabled) {
            &:hover {
              background-color: ${defaultHoverBgColor};
              color: ${defaultHoverColor};
              border: none;
            }
          }
          &:nth-child(2) {
            border: none;
            background-color: ${defaultBgColor};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: ${radius}px;
            border-bottom-right-radius: ${radius}px;

            &.c7n-pro-btn-icon-only {
              .icon-arrow_drop_down {
                ::before {
                  content: \e5cf;
                }
              }
            }
            &.c7n-pro-btn-sm {
              height: ${smheight}px;
              font-size: ${smIconFontSize}px;
            }
            &.c7n-pro-btn-lg {
              height: ${lgHeight}px;
              font-size: ${lgIconFontSize}px;
            }
          }
          &:nth-child(2):not(.c7n-pro-btn-disabled) {
            &:hover {
              background-color: ${defaultHoverBgColor};
              color: ${defaultHoverColor};
            }
          }
          &.c7n-pro-btn-flat[href] {
            background-color: ${defaultBgColor};
            &:hover {
              background-color: ${defaultHoverBgColor};
              color: ${defaultHoverColor};
              border: none;
            }
          }
        }
      }
    }
  `;
}

export default DropdownStyle;
