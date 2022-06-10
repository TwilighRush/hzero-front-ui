import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getTightStyle(tight) {
  return tight
    ? css`
        border-right-width: 0;
        :hover {
          border-right-width: 1px;
        }
        &.ant-pagination-next {
          border-right-width: 1px;
        }
      `
    : "";
}

function getPaginationStyle(props) {
  const d = getThemeData(props, "pagination");
  const {
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  return css`
    .ant-pagination {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-end;
      .ant-pagination-prev,
      .ant-pagination-next,
      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        min-width: unset;
        height: ${d.itemHeight}px;
        width: ${d.itemWidth}px;
        margin: ${d.tight ? 0 : ""};
        line-height: ${d.itemHeight - 2}px;
        border-radius: ${d.itemRadius}px;
        border: ${d.border};
        background: ${d.bgColor};
        a {
          color: ${d.itemFontColor};
          border: none;
          background: none;
        }
        a:after {
          height: unset;
          line-height: ${d.itemHeight - 2}px;
        }
        :hover {
          border: ${d.hoverBorder};
          background: ${d.hoverBg};
          color: ${d.hoverFontColor};
        }
        ${getTightStyle(d.tight)}
      }
      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        line-height: ${d.itemHeight - 2}px;
      }
      .ant-pagination-item {
        position: relative;
        margin: ${d.itemMargin};
        width: ${d.itemWidth}px;
        height: ${d.itemHeight}px;
        min-width: ${d.itemWidth}px;
        line-height: ${d.itemHeight}px;
        border-radius: ${d.itemRadius}px;
        border: ${d.border};
        transition: all 0.3s;
        border-collapse: collapse;
        &:hover {
          border: ${d.hoverBorder};
          background: ${d.hoverBg};
          a {
            color: ${d.hoverFontColor};
          }
        }
        ${getTightStyle(d.tight)}
        a {
          position: absolute;
          top: 50%;
          left: 50%;
          margin: 0;
          color: ${d.itemFontColor};
          white-space: nowrap;
          transform: translate(-50%, -50%);
          font-family: ArialMT;
          font-size: ${d.itemFontSize}px;
          text-align: center;
          line-height: 20px;
        }
        &.ant-pagination-item-active {
          background: ${d.activeBg};
          border-color: ${d.activeBorderColor};
          border-right-width: ${d.tight ? "1px" : ""};
          a {
            color: ${d.activeFontColor};
          }
        }
      }
      .ant-pagination-next,
      .ant-pagination-prev {
        &.ant-pagination-disabled {
          border-color: ${disabledBorderColor};
          background: ${disabledBg};
          a {
            color: ${disabledColor};
          }
        }
      }

      .ant-pagination-next {
        border-radius: ${d.nextBorderRadius};
      }
      .ant-pagination-prev {
        border-radius: ${d.prevBorderRadius};
      }
      .ant-pagination-options {
        .ant-select-selection.ant-select-selection--single {
          .ant-select-selection__rendered {
            line-height: ${d.itemHeight - 2}px;
          }
          &:hover,
          &:focus {
            border-color: #4f7de7;
          }
        }
      }
    }
  `;
}

export default createStyleComponent("pagination", getPaginationStyle);
