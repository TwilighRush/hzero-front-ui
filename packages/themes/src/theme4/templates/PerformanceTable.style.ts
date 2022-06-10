import { css } from 'styled-components';

function performanceCss(props: any) {
  return css`
    .c7n-performance-table {
      .c7n-performance-table-header-row-wrapper,
      .c7n-performance-table-body-row-wrapper {
        .c7n-performance-table-row {
          /* 去除纵向滚动时表头的阴影 */
          &.c7n-performance-table-cell-group-shadow {
            box-shadow: none;
          }
          .c7n-performance-table-cell-group {
            &.c7n-performance-table-cell-group-left-shadow {
              &.c7n-performance-table-cell-group-fixed-left {
                /* 去除原有阴影 模拟单侧阴影 */
                box-shadow: none;
                &::after {
                  display: block;
                  content: '';
                  width: 5px;
                  height: 100%;
                  position: absolute;
                  background-image: linear-gradient(to right, rgb(9 9 9 / 8%), rgb(9 9 9 / 0%));
                  right: -5px;
                  top: 0;
                }
              }
            }
            &.c7n-performance-table-cell-group-right-shadow {
              &.c7n-performance-table-cell-group-fixed-right {
                /* 去除原有阴影 模拟单侧阴影 */
                box-shadow: none;
                &::before {
                  display: block;
                  content: '';
                  width: 5px;
                  height: 100%;
                  position: absolute;
                  background-image: linear-gradient(to left, rgb(9 9 9 / 8%), rgb(9 9 9 / 0%));
                  left: -5px;
                  top: 0;
                }
              }
            }

            /* 表格行底部分割线 */
            .c7n-performance-table-cell {
              border-bottom-color: rgb(238, 244, 249) !important;
            }
          }
        }
      }
    }
    .c7n-performance-table.c7n-performance-table:not(.c7n-performance-table-column-resizing, .c7n-performance-table-bordered) {
      .c7n-performance-table-row.c7n-performance-table-row-header {
        &:hover
          .c7n-performance-table-cell-header
          .c7n-performance-table-cell:not([parent])
          + .c7n-performance-table-column-resize-spanner {
          &::before {
            position: absolute;
            display: block;
            content: '';
            width: 1px;
            height: 80%;
            top: 10%;
            left: 1px;
            background-color: #c0d5ea;
          }
        }
        .c7n-performance-table-column-resize-spanner {
          &:hover::before {
            background-color: transparent !important;
          }
        }
      }
    }
    .c7n-performance-table.c7n-performance-table {
      .c7n-performance-table-mouse-area {
        background-color: #5365ea;
        box-shadow: 0px 2px 4px 0px rgba(83, 101, 234, 0.65);
      }
      &:not(.c7n-performance-table-bordered) {
        .c7n-performance-table-row-header:hover .c7n-performance-table-cell {
          border-right-color: transparent;
        }
      }
    }
    .c7n-performance-table-professional-query-bar {
      &-button {
        .c7n-performance-table-professional-query-more span {
          display: flex;
          align-items: center;
        }
      }
    }
  `;
}
export default performanceCss;
