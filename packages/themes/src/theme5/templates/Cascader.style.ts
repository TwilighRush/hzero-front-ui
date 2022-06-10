import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

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
    rightItemHeight = '',
    columnGap = 8,
    columnBorder = 'none',
    columnShadow = '0 1px 3px 0 rgba(0,0,0,0.20)',
    itemHeight,
    addPadding,
    fontSize,
    lineHeight,
  } = getThemeData(props, 'cascader');

  const { primary6, primary1, titleColor2, titleColor3, boxShadow, bgColor } = getThemeData(
    props,
    'common'
  );
  return css`
    //输入框部分
    .c7n-pro-cascader-wrapper.c7n-pro-cascader-wrapper {
      .c7n-pro-cascader-trigger:before {
        content: '\\E5CF';
        font-family: 'icomoon' !important;
      }
    }
    //下拉框
    .c7n-pro-popup.c7n-pro-cascader-popup {
      box-shadow: ${boxShadow};
      .c7n-pro-cascader-select-all-none span {
        color: ${primary6};
      }
      .c7n-pro-cascader-menu {
        color: ${titleColor2};
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        & + .c7n-pro-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        .c7n-pro-cascader-menu-item {
          padding: ${4 + addPadding}px 0.08rem;
          padding-right: 0.3rem;
          font-size: ${fontSize}px;
          line-height: ${lineHeight}px;
          color: ${titleColor2};
          &:hover {
            background: ${primary1};
          }
          &.c7n-pro-cascader-menu-item-active {
            background: ${primary1};
            color: ${primary6};
            font-weight: 500;
            .c7n-pro-cascader-menu-item-expand-icon {
              color: ${primary6};
            }
          }
          &.c7n-pro-cascader-menu-item-disabled {
            &,
            &:hover {
              background: ${bgColor};
              color: ${titleColor3};
            }
          }
        }
        &.c7n-pro-cascader-menu-single {
          .c7n-pro-cascader-menu-item-active {
            background: ${primary1};
            color: ${primary6};
            font-weight: 500;
          }
          .c7n-pro-cascader-menu-item:hover {
            background: ${primary1};
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
        color: ${titleColor2};
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
