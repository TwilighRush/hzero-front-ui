import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const selectStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .ant-select-dropdown.ant-select-dropdown {
      > div {
        border: none;
      }
      .ant-select-dropdown-menu-item {
        :hover {
          background-color: ${primary1};
          color: ${primary6};
          :after {
            display: none;
          }
        }
      }
      .ant-select-dropdown-menu-item-selected,
      .ant-select-dropdown-menu-item-selected:hover {
        background-color: ${primary1};
        color: ${primary6};
        :after {
          display: inline-block;
        }
        i,
        i:after {
          color: ${primary6};
        }
      }

      > div ul .ant-select-dropdown-menu-item-selected {
        background-color: ${primary1};
      }
    }
    .ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active
      .ant-input-group-addon.ant-input-group-addon {
      .ant-select-open,
      .ant-select-focused {
        .ant-select-selection {
          color: ${primary6};
        }
      }
    }
    .ant-select-dropdown-menu-item-active {
      background-color: ${primary1};
      color: ${primary6};
    }
    .ant-select.ant-select {
      :hover,
      &.ant-select-focused {
        .ant-select-selection {
          border-color: ${primary6};
        }
      }
      &.ant-select-focused {
        .ant-select-selection {
          box-shadow: 0 0 0 2px ${primary1};
        }
      }
      .ant-select-selection__choice {
        border-color: transparent;
        background-color: ${primary1};
        color: ${primary6};
        .ant-select-selection__choice__remove {
          color: ${primary6};
        }
      }
    }
    .ant-select-dropdown-menu-item-active {
      background-color: ${primary1};
      color: ${primary6};
    }
  `;
};
export default css`
  ${selectStyle}
`;
