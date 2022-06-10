import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const performanceCss = (props) => {
  const d = getThemeData(props, 'table');
  const { primary6 } = getThemeData(props, 'common');

  return css`
    /* 大数据表格 滚动条样式 */
    .c7n-performance-table.c7n-performance-table {
      font-size: ${d.fontSize}px;
      .c7n-performance-table-scrollbar {
        background: #fff;
        border: 0.01rem solid #e8e8e8;
        .c7n-performance-table-scrollbar-handle {
          background: rgba(28, 28, 28, 0.3);
          height: 0.04rem;
          width: 0.04rem;
          border-radius: 0.02rem;
          box-shadow: none;
          -webkit-box-shadow: none;
          &:active {
            background: rgba(28, 28, 28, 0.7);
            box-shadow: none;
            -webkit-box-shadow: none;
          }
        }
        &.c7n-performance-table-scrollbar-horizontal,
        &.c7n-performance-table-scrollbar-vertical {
          &:active {
            box-shadow: none;
            -webkit-box-shadow: none;
          }
        }
      }
      /* 大数据表格行样式 */
      .c7n-performance-table-row {
        &:nth-child(odd) {
          .c7n-performance-table-cell-content {
            background: #fff;
          }
          .c7n-performance-table-row-expanded {
            background: #fff;
          }
        }
        &:nth-child(even) {
          .c7n-performance-table-cell-content {
            background: #fafbff;
          }
          .c7n-performance-table-row-expanded {
            background: #fafbff;
          }
        }
        &.c7n-performance-table-row-header {
          .c7n-performance-table-cell {
            color: ${d.headFontColor};
            background: #fff;
            font-weight: 500;
          }
        }
      }
      .c7n-performance-table-body-row-wrapper {
        color: ${d.bodyFontColor};
        a {
          color: ${primary6};
        }
      }
    }
  `;
};

export default performanceCss;
