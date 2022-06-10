import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getOneStyle(type: any, props: any) {
  const { fontSize, lineHeight, addPadding } = getThemeData(props, 'select');
  const { inputHeight } = getThemeData(props, 'common');
  const { primary6, primary1, titleColor2, bgColor, titleColor3 } = getThemeData(props, 'common');
  return css`
    .${type}.${type} {
      font-size: ${fontSize}px;
      color: ${titleColor2};
      padding: 8px;
      .${type}-item {
        &.c7n-tree-treenode-selected {
          background-color: transparent;
        }
        color: ${titleColor2};
        line-height: ${lineHeight}px;
        padding: ${4 + addPadding}px 8px;
        &:hover,
        &.${type}-item-active {
          background: ${primary1};
        }
        &.${type}-item-selected {
          background: ${primary1};
          color: ${primary6};
        }
        &.${type}-item-more {
          &:hover {
            color: ${primary6};
          }
        }
        &.${type}-item-disabled.${type}-item-disabled {
          background: ${bgColor};
          color: ${titleColor3};
        }
      }
      .c7n-pro-tree-select-dropdown-menu-item:hover {
        background: transparent;
      }
      .${type}-item-group {
        padding-bottom: 0;
        padding-top: 0;
        .${type}-item-group-title {
          font-size: ${fontSize}px;
          height: ${inputHeight}px;
          line-height: ${inputHeight}px;
          padding: 0 8px;
          margin-left: 8px;
          margin-right: 8px;
          color: ${titleColor3};
        }
        .${type}-item-group-list {
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  `;
}
function getMultipleStyle(type: any, props: any) {
  const { titleColor2 } = getThemeData(props, 'common');
  return css`
    .${type}.${type} {
      .${type}-item-selected {
        background: transparent;
        color: ${titleColor2};
      }
    }
  `;
}
function getSelectStyle(props: any) {
  const { primary6 } = getThemeData(props, 'common');
  const types = ['c7n-pro-select-dropdown-menu', 'c7n-pro-tree-select-dropdown-menu'];
  return css`
    ${types.map((t) => getOneStyle(t, props))}
    .c7n-pro-select-popup-multiple {
      ${types.map((t) => getMultipleStyle(t, props))}
    }
    //去除动画
    .c7n-ripple-wrapper.c7n-ripple-wrapper {
      display: none;
    }
    .c7n-pro-auto-complete-select-all-none.c7n-pro-auto-complete-select-all-none,
    .c7n-pro-select-select-all-none.c7n-pro-select-select-all-none {
      padding-left: 16px;
      span {
        color: ${primary6};
        margin: 0;
        margin-bottom: 8px;
        margin-right: 16px;
      }
    }
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper,
    .c7n-pro-tree-select-wrapper.c7n-pro-tree-select-wrapper {
      .icon-baseline-arrow_drop_down:before {
        content: '\\E5CF';
        font-family: 'icomoon' !important;
      }
    }
    .c7n-pro-span-select.c7n-pro-span-select {
      .c7n-pro-select,
      .c7n-select-selection,
      .c7n-pro-select-wrapper {
        border: none !important;
        :after,
        :before {
          display: none !important;
        }
      }
    }
    /* 分组样式 */
    .c7n-pro-select-dropdown-menu.c7n-pro-select-dropdown-menu {
      .c7n-pro-select-dropdown-menu-item-group {
        .c7n-pro-select-dropdown-menu-item-group-title {
          margin: 0;
        }
        &-list {
          padding-left: 0px !important;
          padding-right: 0px !important;
          li {
            padding-left: 20px;
          }
        }
      }
    }
  `;
}

export default getSelectStyle;
