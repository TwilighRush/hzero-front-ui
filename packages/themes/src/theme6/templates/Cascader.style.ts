import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const getStyle = (props) => {
  const {
    disabledColor,
    disabledBgColor,
    color,
    iconColor,
    tabActiveBorderColor,
    tabBorderColor,
    tabHeight,
    rightItemHeight = '', // auto | ''
    noShadow,
    columnGap,
    columnBorder,
    columnShadow,
    itemHeight,
    mutiSelectHeight,
    iconCheckIconContent = '\\e712',
  } = getThemeData(props, 'cascader');
  const colors = getThemeData(props, 'colors');
  const common = getThemeData(props, 'common');
  return css`
    //输入框
    .c7n-pro-cascader-wrapper.c7n-pro-cascader-wrapper {
      .c7n-pro-cascader-prefix,
      .c7n-pro-cascader-suffix,
      .c7n-pro-cascader-inner-button {
        top: 0.03rem;
      }
      .c7n-pro-cascader.c7n-pro-cascader,
      .c7n-pro-cascader-multiple .c7n-pro-cascader:not(:last-child) {
        border: none;
      }
      .c7n-pro-cascader > ul {
        height: ${mutiSelectHeight};
      }
    }
    //弹出框
    .c7n-pro-popup.c7n-pro-cascader-popup {
      box-shadow: ${noShadow ? 'none' : ''};
      padding: 0.04rem 0;
      font-weight: 400;
      //正常样式
      .c7n-pro-cascader-menu {
        & + .c7n-pro-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        color: ${color};
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        .c7n-pro-cascader-menu-item-expand-icon {
          color: ${iconColor};
        }
        .c7n-pro-cascader-menu-item-active {
          background: ${common.primary1};
          color: ${color};

          font-weight: 400;
          .c7n-pro-cascader-menu-item-expand-icon {
            color: ${common.primary6};
          }
          &:not(.c7n-pro-cascader-menu-item-expand) {
            background: transparent;
            color: ${common.primary6};
            &:after {
              color: rgba(0, 0, 0, 0.45);
              font-family: ${common.iconfontFamily} !important;
              content: '${iconCheckIconContent}';
              position: absolute;
              right: 0.08rem;
            }
          }
        }
        .c7n-pro-cascader-menu-item:hover {
          background: rgba(0, 0, 0, 0.02);
          .c7n-pro-cascader-menu-item-expand-icon {
            color: ${iconColor};
          }
        }
        .c7n-pro-cascader-menu-item-disabled {
          background: ${disabledBgColor};
          color: ${disabledColor};
        }
        .c7n-pro-cascader-menu-item {
          line-height: 0.16rem;
          padding: ${(itemHeight - 16) / 2}px 0.08rem;
          padding-right: 0.4rem;
        }
        &.c7n-pro-cascader-menu-single {
          .c7n-pro-cascader-menu-item-active {
            background: rgba(104, 135, 232, 0.08);
            color: #5365ea;
            font-weight: 500;
          }
          .c7n-pro-cascader-menu-item:hover {
            background: rgba(15, 19, 88, 0.03);
          }
        }
      }
      //tab样式
      .c7n-pro-cascader-menu-tab {
        padding-bottom: 0;
        border-width: 1px;
        border-color: ${tabBorderColor};
      }
      .c7n-pro-cascader-menu-tab-item {
        display: inline-block;
        height: ${tabHeight}px;
        border: none;
        line-height: ${tabHeight - 2}px;
        padding: 0 8px;
        box-sizing: border-box;
        font-size: 12px;
        color: #666666;
        .icon.icon-arrow_drop_down {
          display: none;
        }
        &:after {
          display: none;
        }
        &.c7n-pro-cascader-menu-tab-item:last-child {
          border-color: ${tabActiveBorderColor};
        }
      }
    }
  `;
};

export default getStyle;
