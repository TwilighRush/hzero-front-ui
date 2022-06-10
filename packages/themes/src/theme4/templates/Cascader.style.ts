import { css } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const getTabStyle = (color, type) => {
  return type === 'tab'
    ? css`
        .c7n-pro-cascader-menu-tab-item {
          border: none;
          &:last-of-type {
            border: none !important;
            border-bottom: 1px solid ${color} !important;
          }
          &:after {
            display: none;
          }
        }
      `
    : '';
};

const getStyle = (props) => {
  const {
    tabActiveBorderColor = '#D9D9D9',
    tabBorderColor = '#D9D9D9',
    tabHeight = 24,
    tabType,
    rightItemHeight = '', // auto | ''
    noShadow = false,
    columnGap = 8,
    columnBorder = 'none',
    columnShadow = '0 1px 3px 0 rgba(0,0,0,0.20)',
    itemHeight,
    selectHeight,
    mutiSelectHeight,
    singleMenuItemCurrentBg = 'initial',
    singleMenuItemCurrentColor = '#3889FF',
  } = getThemeData(props, 'cascader');
  const colors = getThemeData(props, 'colors');
  return css`
    .c7n-pro-cascader-wrapper.c7n-pro-cascader-wrapper {
      .c7n-pro-cascader-menu {
        color: #0f1358;
      }
      .c7n-pro-cascader-trigger:before {
        content: '\\E5CF';
      }
      &.c7n-pro-cascader-multiple .c7n-pro-cascader:not(:last-child) {
        border: none;
      }
      .c7n-pro-cascader > ul {
        height: ${selectHeight};
      }
      &.c7n-pro-cascader-multiple.c7n-pro-cascader-float-label {
        .c7n-pro-cascader > ul {
          min-height: ${mutiSelectHeight};
          height: auto;
          padding-top: 22px;
          margin: 0;
        }
      }
    }
    .c7n-pro-popup.c7n-pro-cascader-popup {
      box-shadow: ${noShadow ? 'none' : ''};
      .c7n-pro-cascader-select-all-none span {
        color: ${colors.primary};
      }
      .c7n-pro-cascader-menu {
        & + .c7n-pro-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        color: #0f1358;
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        .c7n-pro-cascader-menu-item-active {
          background: rgba(104, 135, 232, 0.08);
          color: #5365ea;
          font-weight: 500;
          font-family: PingFangSC-Medium;
        }
        .c7n-pro-cascader-menu-item:hover {
          background: rgba(15, 19, 88, 0.03);
        }
        .c7n-pro-cascader-menu-item-disabled {
          background: #fff;
          color: rgba(15, 19, 88, 0.25);
        }
        .c7n-pro-cascader-menu-item {
          padding: ${(itemHeight - 22) / 2}px 0.08rem;
          &-expand {
            padding-right: 35px;
          }
        }
        &.c7n-pro-cascader-menu-single {
          .c7n-pro-cascader-menu-item-active {
            background: rgba(104, 135, 232, 0.08);
            color: #5365ea;
            font-weight: 500;
            font-family: PingFangSC-Medium;
          }
          .c7n-pro-cascader-menu-item:hover {
            background: rgba(15, 19, 88, 0.03);
          }
        }
      }
      .c7n-pro-cascader-menu-tab {
        padding-bottom: 0;
        border-width: 1px;
        border-color: ${tabBorderColor};
      }
      .c7n-pro-cascader-menu-tab-item {
        display: inline-block;
        height: ${tabHeight}px;
        border-width: 1px;
        line-height: ${tabHeight - 2}px;
        padding: 0 8px;
        box-sizing: border-box;
        border-color: ${tabBorderColor};
        font-size: 12px;
        color: #666666;
        .icon.icon-arrow_drop_down {
          display: none;
        }
      }
      .c7n-pro-cascader-menu-tab-item:last-child {
        border-color: ${tabActiveBorderColor};
      }

      ${getTabStyle(tabActiveBorderColor, tabType)}
    }
  `;
};

export default getStyle;
