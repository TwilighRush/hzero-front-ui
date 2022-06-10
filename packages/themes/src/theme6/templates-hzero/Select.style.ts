import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const dropDownStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-dropdown-menu.ant-dropdown-menu {
      .ant-dropdown-menu-item,
      .ant-dropdown-menu-submenu-title {
        a {
          color: rgba(0, 0, 0, 0.65);
        }
        :hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
    .ant-dropdown.ant-dropdown {
      .ant-table-filter-dropdown-link {
        color: ${primary6};
      }
      .ant-table-filter-dropdown {
        .ant-dropdown-menu {
          .ant-dropdown-menu-item-selected,
          .ant-dropdown-menu-submenu-title-selected,
          .ant-dropdown-menu-item-selected > a,
          .ant-dropdown-menu-submenu-title-selected > a {
            color: rgba(0, 0, 0, 0.65);
            background-color: #fff;
          }
        }
      }
    }
  `;
};
const selectStyle = (props) => {
  const { primary2, primary5, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-select-dropdown.ant-select-dropdown {
      &.ant-select-dropdown--multiple {
        .ant-select-dropdown-menu-item-selected {
          :after,
          :hover:after {
            color: #ddd;
          }
        }
      }
      .ant-select-dropdown-menu {
        .ant-select-dropdown-menu-item-active,
        .ant-select-dropdown-menu-item-selected {
          background-color: #fff;
          font-weight: 400;
          color: ${primary6};
        }
        .ant-select-dropdown-menu-item-selected,
        .ant-select-dropdown-menu-item {
          :hover {
            background-color: rgba(0, 0, 0, 0.02);
          }
        }
      }
    }
    .ant-select.ant-select {
      .ant-select-selection:hover {
        border-color: ${primary5};
      }
      &.ant-select-focused {
        .ant-select-selection {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${primary2};
        }
      }
      &.ant-select-open {
        .ant-select-arrow {
          color: ${primary6};
        }
      }
    }
  `;
};
const treeSelectStyle = (props) => {
  const { primary2, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-select-tree.ant-select-tree {
      li {
        .ant-select-tree-checkbox + .ant-select-tree-node-content-wrapper {
          &:hover,
          &.ant-select-tree-node-selected {
            background-color: #fff;
          }
        }
        .ant-select-tree-node-content-wrapper {
          &:hover,
          &.ant-select-tree-node-selected {
            background-color: ${primary2};
          }
        }
        .ant-select-tree-checkbox {
          &:hover {
            .ant-select-tree-checkbox-inner {
              border-color: ${primary6};
            }
          }
          &.ant-select-tree-checkbox-checked,
          &.ant-select-tree-checkbox-indeterminate {
            .ant-select-tree-checkbox-inner {
              background-color: ${primary6};
              border-color: ${primary6};
            }
          }
        }
      }
    }
  `;
};
export default css`
  ${dropDownStyle}
  ${selectStyle}
  ${treeSelectStyle}
`;
