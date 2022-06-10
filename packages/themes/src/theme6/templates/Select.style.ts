import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const checkedStyle = css`
  :before {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
  }
  :after {
    transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
    transform: rotate(45deg) scale(1);
  }
`;

function getSelectStyle(props: any) {
  const d = getThemeData(props, 'select');
  const { primary6, placeholderColor } = getThemeData(props, 'common');

  return css`
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${d.placeholderColor};
    }
    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${d.placeholderColor};
    }
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${placeholderColor};
    }
    .c7n-ripple-wrapper {
      display: none !important;
    }
    //内部传入为menu菜单
    .c7n-pro-select-dropdown-menu.c7n-pro-select-dropdown-menu {
      padding: 4px 0;
      font-size: 14px;
      color: ${d.dropdownItemFontColor};
      //菜单选中样式
      .c7n-pro-select-dropdown-menu-item-selected {
        background: #fff;
        color: ${primary6};
        &:after {
          color: rgba(0, 0, 0, 0.45);
          font-family: ${d.iconFontFamily};
          content: '${d.iconCheckIconContent}';
          position: absolute;
          right: 0.08rem;
        }
      }
      //menu分组
      .c7n-pro-select-dropdown-menu-item-group {
        .c7n-pro-select-dropdown-menu-item-group-title {
          font-size: 0.14rem;
          margin-top: 8px;
          line-height: 0.22rem;
          height: 0.22rem;
          padding: 0 0.12rem;
        }
      }
      .c7n-pro-select-dropdown-menu-item {
        color: rgba(0, 0, 0, 0.85);
        padding: 0.06rem 0.12rem;
        padding-right: 0.24rem;
      }
      .c7n-pro-select-dropdown-menu-item:hover {
        background: rgba(0, 0, 0, 0.02);
        color: rgba(0, 0, 0, 0.85);
        .c7n-checkbox-inner {
          border-color: ${primary6};
        }
      }
      .c7n-pro-select-dropdown-menu-item-active {
        background: #fff;
      }
      .c7n-pro-select-dropdown-menu-item-disabled {
        background: #fff;
        color: rgba(15, 19, 88, 0.25);
      }
    }
    .c7n-select-dropdown-menu.c7n-select-dropdown-menu {
      .c7n-select-dropdown-menu-item {
        margin: 0rem 0.08rem;
        padding: 0.06rem;
      }
    }
    .c7n-pro-select.c7n-pro-select {
      > ul {
        padding: 0.02rem 0;
      }
      &:before {
        font-family: ${d.iconFontFamily};
        content: ${d.iconSearchIconContent};
        color: ${d.iconSearchIconColor};
      }
    }
    .c7n-pro-select-expand.c7n-pro-select-expand {
      .icon-baseline-arrow_drop_down {
        color: ${primary6} !important;
      }
    }
    .c7n-pro-select-select-all-none.c7n-pro-select-select-all-none {
      color: #0f1358;
      display: none;
    }
    .c7n-spin-container.c7n-spin-container {
      margin-right: 1px;
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
  `;
}

function getTreeSelectStyle(props: any) {
  const d = getThemeData(props, 'select');
  const common = getThemeData(props, 'common');
  return css`
    .c7n-pro-tree-select-popup.c7n-pro-tree-select-popup {
      .c7n-tree.c7n-tree {
        font-size: ${d.fontSize}px;
        padding: 0;
        .c7n-tree-list {
          padding: 0.08rem 0;
          .c7n-pro-tree-select-dropdown-menu-item {
            margin-bottom: 0.04rem;
            &:last-child {
              margin-bottom: 0;
            }
            &:first-child {
              border-radius: 0;
            }
            //前图标
            .c7n-tree-switcher {
              line-height: ${d.treeLineHeight}px;
              color: ${d.treeIconColor};
              &.c7n-tree-switcher_open {
                .icon-arrow_drop_down {
                  color: ${common.primary6};
                }
              }
              .icon-arrow_drop_down.c7n-tree-switcher-icon:hover {
                background: none;
              }
            }
            //多选框
            .c7n-tree-checkbox-inner {
              background: #ffffff;
              border: 1px solid rgba(0, 0, 0, 0.15);
              border-radius: 2px;
            }
            .c7n-tree-checkbox-checked {
              .c7n-tree-checkbox-inner {
                background: ${common.primary6};
                border: 1px solid ${common.primary6};
                color: #fff;
                line-height: 16px;
                &:after {
                  display: none !important;
                }
                &:before {
                  font-size: 14px;
                  font-family: ${common.iconfontFamily} !important;
                  content: '\\e712';
                }
              }
            }
            .c7n-tree-node-content-wrapper {
              min-height: ${d.treeLineHeight}px;
              line-height: ${d.treeLineHeight}px;
              color: ${d.treeColor};
              width: 100%;
              margin-right: 0.12rem;
              padding: 0 0.04rem;
              padding-right: 0.24rem;
              border-radius: 2px;
            }
            &.c7n-tree-treenode-switcher-open,
            &.c7n-tree-treenode-switcher-close {
              font-weight: 500;
              .c7n-tree-checkbox {
                display: none;
              }
            }
            &.c7n-pro-tree-select-dropdown-menu-item:hover {
              background: transparent;
              .c7n-tree-checkbox-inner {
                border: 1px solid ${common.primary6};
              }
              .c7n-tree-node-content-wrapper {
                background: ${d.treeHoverBgColor} !important;
              }
            }
            &.c7n-tree-treenode-selected {
              background: transparent;
              .c7n-tree-checkbox-checked + .c7n-tree-node-selected {
                background: #fff !important;
                &:after {
                  display: none;
                }
              }
              .c7n-tree-node-selected {
                background: ${common.primary2} !important;
                &:after {
                  color: ${common.primary6};
                  font-family: ${d.iconFontFamily};
                  content: '${d.iconCheckIconContent}';
                  position: absolute;
                  right: 0.2rem;
                }
                .c7n-tree-title {
                  color: initial;
                }
              }
            }
          }
        }
      }
    }
  `;
}

export default css`
  ${getSelectStyle}
  ${getTreeSelectStyle}
`;
