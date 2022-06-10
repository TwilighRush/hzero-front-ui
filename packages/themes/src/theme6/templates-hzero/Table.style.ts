import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const tableStyle = (props) => {
  const { primary1, primary3, primary6 } = getThemeData(props, 'common');
  return css`
    .ant-table.ant-table {
      .ant-table-thead > tr.ant-table-row-hover > td,
      .ant-table-tbody > tr.ant-table-row-hover > td,
      .ant-table-thead > tr:hover > td,
      .ant-table-tbody > tr:hover > td {
        background: ${primary1};
      }
      .ant-table-tbody > tr.ant-table-row-selected td {
        background: ${primary1};
      }
      .ant-table-row-expand-icon.ant-table-row-expanded {
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
        color: ${primary3};
      }
    }
  `;
};
export default tableStyle;
