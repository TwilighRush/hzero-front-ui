import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getRowBorder(bordered, borderColor) {
  return bordered
    ? css`
        border-right: 1px solid ${borderColor};
      `
    : "border-left: none; border-right: none;";
}

function getStripStyle(striped, stripedBg) {
  return striped
    ? css`
        &:nth-of-type(2n) {
          background: ${stripedBg};
        }
      `
    : "";
}

function getTableCss(props) {
  const data = getThemeData(props, "table");
  const {
    fontFamily = "PingFangSC-Medium",
    bordered = true,
    striped = false,
    stripedBg = `none`,
    borderColor = "#D5DAE0",
    // headHeight = 36,
    headBg = "#F7F7F7",
    headFontColor = "#5A6677",
    headFontSize = 12,
    // rowHeight = 36,
    bodyBg = "#fff",
    bodyHoverBg = "#eff6ff",
    bodyFontSize = 12,
    bodyFontColor = "#333",
  } = data;

  return css`
    .c7n-performance-table {
      font-family: ${fontFamily};
      &-header-row-wrapper {
        .c7n-performance-table-row {
          background: ${headBg};
          .c7n-performance-table-cell {
            color: ${headFontColor};
            font-size: ${headFontSize}px;
          }
        }
        .c7n-performance-table-column-group-header {
          border-color: ${borderColor};
        }
        .c7n-performance-table-column-group-cell {
          border-color: ${borderColor};
        }
      }
      .c7n-performance-table-row {
        border-bottom: 1px solid ${borderColor};
        .c7n-performance-table-cell {
          ${getRowBorder(bordered, borderColor)}
        }
      }
      &-body-row-wrapper {
        .c7n-performance-table-row {
          ${getStripStyle(striped, stripedBg)}

          .c7n-performance-table-cell {
            background: ${bodyBg};
            font-size: ${bodyFontSize}px;
            color: ${bodyFontColor};
          }
        }
      }
      &.c7n-performance-table-hover {
        .c7n-performance-table-body-row-wrapper
          .c7n-performance-table-row:hover
          .c7n-performance-table-cell {
          background: ${bodyHoverBg};
        }
      }
    }
  `;
}

export default createStyleComponent("performanceTable", getTableCss);
