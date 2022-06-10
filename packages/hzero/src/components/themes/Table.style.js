import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getTableCss(props) {
  const d = getThemeData(props, "table");
  const stripedStyle = css`
    .ant-table-row {
      &:nth-of-type(2n) {
        background-image: ${d.stripedBg};
      }
    }
  `;
  const tableHead = css`
    .ant-table-thead {
      > tr > th.ant-table-selection-column {
        ${d.bordered && `border-left: 1px solid ${d.borderColor};`}
      }
      > tr > th {
        box-sizing: border-box;
        height: ${d.headHeight}px;
        min-height: ${d.headHeight}px;
        line-height: ${d.headHeight - 16}px;
        padding: 8px;
        background: ${d.headBg}!important;
        border: solid ${d.borderColor};
        border-top: 1px solid ${d.borderColor};
        border-top-width: ${d.bordered ? "1px" : 0};
        border-bottom: 1px solid ${d.borderColor};
        &.ant-table-selection-column {
          text-align: center;
        }
        &:first-of-type {
          border-left: none;
        }
        span {
          font-family: ${d.fontFamily};
          font-size: ${d.headFontSize}px;
          background: none;
          color: ${d.headFontColor};
          line-height: ${d.headHeight - 16}px;
        }
      }

      > tr > th.react-resizable,
      > tr > th.ant-table-selection-column,
      > tr > th {
        border-right: 1px solid ${d.borderColor};
        border-left: none;
        border-right-width: ${d.bordered ? "1px" : 0};
      }
    }
  `;
  return css`
    width: 100%;
    background: #fff;
    .ant-table-bordered {
      .ant-table-header {
        > table {
          border-top: none;
        }
      }
    }
    .ant-table {
      width: 100%;
      font-size: ${d.bodyFontSize}px;
      &.ant-table-bordered {
        .ant-table-content .ant-table-body {
          border-top: none;
        }
      }
      &.ant-table-empty {
        .ant-table-content .ant-table-body {
          border-bottom: none;
        }
      }
      .ant-table-content {
        ${tableHead}
        .ant-table-body {
          border-bottom: 1px solid ${d.borderColor};
          border-width: ${d.bordered ? "1px" : 0};
          table {
            border-right: none;
            border-left: 1px solid ${d.borderColor};
            border-top: none;
            /* border-width: ${d.bordered ? "1px" : 0}; */
            /* border:none; */
          }
          /* .ant-table-fixed {
            border-top: none;
          } */
          /* .ant-table-thead {
            tr > th {
              height: ${d.headHeight}px;
              min-height: ${d.headHeight}px;
              line-height: ${d.headHeight - 16}px;
              padding: 8px;
              background: ${d.headBg} !important;
              border-color: ${d.borderColor};
              border-right: solid ${d.borderColor};
              border-width: ${d.bordered ? "1px" : 0};
              border-bottom: 1px solid ${d.borderColor};
              box-sizing: border-box;
              span {
                font-family: ${d.fontFamily};
                font-size: ${d.headFontSize}px;
                color: ${d.headFontColor};
              }
            }
          } */
          .ant-table-tbody {
            border-width: ${d.bordered ? "1px" : 0};
            .ant-table-row-hover > td,
            tr:hover > td {
              background: ${d.bodyHoverBg} !important;
            }
            .ant-table-row {
              min-height: ${d.rowHeight}px;
              ${d.bordered
                ? css`
                    :last-of-type > td {
                      border-bottom-width: 0;
                    }
                  `
                : ""}
              td {
                box-sizing: border-box;
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                min-height: ${d.rowHeight}px;
                border-right: 1px solid;
                padding: 8px;
                color: ${d.bodyFontColor};
                line-height: ${d.rowHeight - 16}px;
                border-bottom: 1px solid ${d.borderColor};
                border-color: ${d.borderColor};
                border-right-width: ${d.bordered ? "1px" : 0};
              }
            }
            .ant-table-expanded-row {
            }
            ${d.striped ? stripedStyle : ""}
          }
        }
        .ant-table-fixed-right,
        .ant-table-fixed-left {
          .ant-table-fixed,
          table {
            border: none;
            border-left: solid ${d.borderColor};
            border-left-width: ${d.bordered ? "1px" : 0};
          }
          .ant-table-row-hover > td,
          tr:hover > td {
            background: ${d.bodyHoverBg} !important;
          }
          ${tableHead}
          .ant-table-tbody {
            > tr > td.ant-table-selection-column {
              ${d.bordered && `border-left: 1px solid ${d.borderColor};`}
            }
            .ant-table-row {
              td {
                box-sizing: border-box;
                height: ${d.rowHeight}px;
                padding: 8px;
                line-height: ${d.rowHeight - 16}px;
                border-top: none;
                border-bottom: 1px solid ${d.borderColor};
                border-right: 1px solid ${d.borderColor};
                border-right-width: ${d.bordered ? "1px" : 0};
                border-color: ${d.borderColor};
                &:first-of-type {
                  border-left: none;
                }
              }
            }
            ${d.striped ? stripedStyle : ""}
          }
        }
        .ant-table-placeholder {
          ${d.bordered
            ? css`
                border: none;
              `
            : ""}
        }
      }
      .ant-table-row-expand-icon {
        border: none;
        :after {
          display: inline-block;
          content: "";
          width: 14px;
          height: 14px;
          background-image: url("${d.expandedIcon}");
          background-size: cover;
        }
        &.ant-table-row-collapsed:after {
          background-image: url("${d.expandIcon}");
        }
      }
    }
  `;
}

const tableStyle = css`
  .ant-table-wrapper {
    ${getTableCss}
  }
`;

export default createStyleComponent("table", tableStyle);
