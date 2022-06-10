import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TableStyle = (props) => {
  const { primary1, primary6, primary2 } = getThemeData(props, 'common');
  return css`
    .ant-table.ant-table {
      .ant-table-tbody > tr.ant-table-row-selected td,
      .ant-table-thead > tr.ant-table-row-hover > td,
      .ant-table-tbody > tr.ant-table-row-hover > td,
      .ant-table-thead > tr:hover > td,
      .ant-table-tbody > tr:hover > td {
        background-color: ${primary1};
      }
      span.ant-table-row-expand-icon.ant-table-row-expanded {
        border-color: ${primary6};
        color: ${primary6};
      }
      .ant-table-column-sorter-up.on .anticon-caret-up,
      .ant-table-column-sorter-down.on .anticon-caret-up,
      .ant-table-column-sorter-up.on .anticon-caret-down,
      .ant-table-column-sorter-down.on .anticon-caret-down {
        color: ${primary6};
      }
      .ant-table-column-sorter-up:hover .anticon,
      .ant-table-column-sorter-down:hover .anticon {
        color: ${primary2};
      }
    }
    .ant-table-filter-dropdown.ant-table-filter-dropdown {
      .ant-dropdown-menu-item-selected,
      .ant-dropdown-menu-submenu-title-selected,
      .ant-dropdown-menu-item-selected > a,
      .ant-dropdown-menu-submenu-title-selected > a {
        background-color: ${primary1};
        color: ${primary6};
      }
      .ant-table-filter-dropdown-btns {
        .ant-table-filter-dropdown-link {
          color: ${primary6};
        }
      }
    }
  `;
};
export default TableStyle;
