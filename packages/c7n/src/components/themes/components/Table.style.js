import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getTableCss(props) {
  const d = getThemeData(props, "table");
  const colors = getThemeData(props, "colors");
  const stripedStyle = css`
    .c7n-table-row {
      &:nth-of-type(2n) {
        background-image: ${d.stripedBg};
      }
    }
  `;
  return css`
    .c7n-table-filter-select {
      padding-top: 0.04rem;
      padding-bottom: 0.04rem;
    }
    .c7n-table-filter-dropdown-link {
      color: ${colors.primary};
    }
    .c7n-table-columns-chooser {
      border-left: 0 solid transparent;
    }
    width: 100%;
    .c7n-table {
      width: 100%;
      .c7n-table-bordered .c7n-table-title {
        border-top: ${d.titleBorderTop};
      }
      a {
        color: ${colors.primary};
      }
      .c7n-table-content {
        .c7n-table-body {
          table {
            border: 1px solid ${d.borderColor};
            border-width: ${d.bordered ? "1px" : 0};
          }
          .c7n-table-thead {
            tr > th {
              height: ${d.headHeight}px;
              min-height: ${d.headHeight}px;
              padding: 8px;
              background: ${d.headBg} !important;
              border-color: ${d.borderColor};
              border-right: solid ${d.borderColor};
              border-width: ${d.bordered ? "1px" : 0};
              border-bottom: 1px solid ${d.borderColor};
              span {
                font-family: ${d.fontFamily};
                font-size: ${d.headFontSize}px;
                color: ${d.headFontColor};
              }
            }
          }
          .c7n-table-tbody {
            .c7n-table-row-hover > td,
            tr:hover > td {
              background: ${d.bodyHoverBg} !important;
            }
            .c7n-table-expanded-row td {
              padding: 0.08rem 0;
            }
            .c7n-table-row {
              min-height: ${d.rowHeight}px;
              td {
                box-sizing: border-box;
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                min-height: ${d.rowHeight}px;
                border-right: solid;
                padding: 8px;
                color: ${d.bodyFontColor};
                line-height: 20px;
                border-bottom: 1px solid ${d.borderColor};
                border-color: ${d.borderColor};
                border-right-width: ${d.bordered ? "1px" : 0};
              }
              .c7n-table-row-expand-icon-cell {
                .c7n-table-row-expand-icon {
                  transform: unset;
                  font-family: "iconfont-c7n" !important;
                  :before {
                    content: "";
                    display: inline-block;
                    width: 14px;
                    height: 14px;
                    background-image: url("${d.expandIcon}");
                    background-size: 100% 100%;
                  }
                  &.c7n-table-row-expanded {
                    :before {
                      content: "";
                      background-image: url("${d.expandedIcon}");
                    }
                  }
                }
              }
            }
            ${d.striped ? stripedStyle : ""}
          }
        }
        .c7n-table-fixed-right,
        .c7n-table-fixed-left {
          .c7n-table-fixed {
            border-width: 1px;
          }
          .c7n-table-row-hover > td,
          tr:hover > td {
            background: ${d.bodyHoverBg} !important;
          }
          .c7n-table-thead {
            > tr > th {
              height: ${d.headHeight}px;
              min-height: ${d.headHeight}px;
              padding: 8px;
              background: ${d.headBg}!important;
              border: solid ${d.borderColor};
              border-top: 1px solid ${d.borderColor};
              border-width: ${d.bordered ? "1px" : 0};
              border-bottom: 1px solid ${d.borderColor};
              span {
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                background: none;
                color: ${d.bodyFontColor};
              }
            }
          }
          .c7n-table-tbody {
            .c7n-table-row {
              min-height: ${d.rowHeight}px;
              td {
                box-sizing: border-box;
                font-family: ${d.fontFamily};
                font-size: ${d.bodyFontSize}px;
                min-height: ${d.rowHeight}px;
                border-right: solid;
                padding: 8px;
                color: ${d.bodyFontColor};
                line-height: 20px;
                border-bottom: 1px solid ${d.borderColor};
                border-color: ${d.borderColor};
                border-right-width: ${d.bordered ? "1px" : 0};
              }
            }
            .c7n-table-expanded-row td {
              padding: 0.08rem 0;
            }
            ${d.striped ? stripedStyle : ""};
          }
        }
      }
      &.c7n-table-fixed-header {
        .c7n-table-thead {
          > tr > th {
            height: ${d.headHeight}px;
            min-height: ${d.headHeight}px;
            padding: 8px;
            border: solid ${d.borderColor};
            border-top: 1px solid ${d.borderColor};
            border-width: ${d.bordered ? "1px" : 0};
            border-bottom: 1px solid ${d.borderColor};
            span {
              font-family: ${d.fontFamily};
              font-size: ${d.bodyFontSize}px;
              background: none;
              color: ${d.bodyFontColor};
            }
          }
        }
      }
    }
  `;
}

const tableCss = css`
  .c7n-table-wrapper {
    ${getTableCss};
  }
`;

export default createStyleComponent("comp/table", tableCss);
