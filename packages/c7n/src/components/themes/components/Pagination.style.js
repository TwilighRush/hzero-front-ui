import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const PaginationStyle = (props) => {
  const {
    defaultBorderColor,
    itemWidth,
    itemHeight,
    itemRadius,
    itemFontSize,
    itemFontColor,
    hoverFontColor,
    activeBg,
    border,
    hoverBorder,
    itemMargin,
    hoverBg,
    activeFontColor,
    activeBorderColor,
    nextBorderRadius,
    prevBorderRadius,
    bgColor,
    tight,
  } = getThemeData(props, "pagination");
  const d = getThemeData(props, "pagination");
  const {
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  const { inputFontWeight } = getThemeData(props, "input");
  return css`
    /* 待实现 */
    .c7n-pagination {
      display: flex;
      flex-direction: row;
      align-items: center;
      &-simple {
        & > li.c7n-pagination-prev,
        & > li.c7n-pagination-next {
          height: ${itemHeight}px;
        }
        li.c7n-pagination-simple-pager {
          width: auto;
          height: ${itemHeight}px;
          input {
            font-weight: ${inputFontWeight};
          }
        }
      }
      li {
        margin: ${itemMargin};
        min-width: ${itemWidth}px;
        width: ${itemWidth}px;
        height: ${itemHeight}px;
        border: none;
        line-height: 0;
        .c7n-btn {
          width: ${itemWidth}px !important;
          height: ${itemHeight}px !important;
          border: ${border};
          font-size: ${itemFontSize}px;
          background: ${bgColor};
          line-height: 0;
          border-radius: ${itemRadius}px;
          border-color: ${defaultBorderColor};
          border-right-width: ${tight ? 0 : ""} !important;
          :after,
          :before {
            display: none !important;
          }
          a {
            height: 100%;
            margin: 0;
            white-space: nowrap;
            text-align: center;
            color: ${itemFontColor};
          }
          .c7n-ripple-wrapper {
            display: none;
          }
          :hover {
            background: none;
            border: ${hoverBorder} !important;
            background: ${hoverBg};
            ${tight ? `border-right-width: 1px !important` : ""};
            a {
              color: ${hoverFontColor};
            }
            .icon {
              animation: none;
            }
            z-index: 2;
            & + .c7n-btn {
              border-left-width: ${tight ? 0 : ""};
            }
          }
          :disabled {
            border-color: ${disabledBorderColor};
            background: ${disabledBg};
            a {
              color: ${disabledColor};
            }
          }
        }
        &.c7n-pagination-item-active {
          .c7n-btn {
            background: ${activeBg};
            border-color: ${activeBorderColor};
            border-right-width: ${tight ? "1px" : ""} !important;
            a {
              color: ${activeFontColor};
            }
          }
        }
        &.c7n-pagination-prev {
          .c7n-btn {
            border-radius: ${prevBorderRadius};
          }
        }
        &.c7n-pagination-next {
          .c7n-btn {
            border-radius: ${nextBorderRadius};
            border-right-width: ${tight ? "1px" : ""} !important;
          }
        }
        &.c7n-pagination-jump-next,
        &.c7n-pagination-jump-prev {
          .c7n-btn {
            border-width: 0.01rem;
          }
        }
        &.c7n-pagination-options,
        &.c7n-pagination-total-text {
          width: initial;
          line-height: ${itemHeight}px;
          .c7n-select-selection__rendered {
            padding: 0 0.12rem;
          }
          .c7n-select-dropdown-menu li {
            width: 100%;
            line-height: 24px;
          }
        }

        &.c7n-pagination-options {
          height: auto;

          .c7n-pagination-options-label {
            display: ${d.jumpBorder};
          }
          .c7n-select-selection {
            border-radius: ${d.selectRadius}px;
            .c7n-select-selection__rendered {
              padding-right: 16px;
            }
          }
          .c7n-select-selection-selected-value {
            margin-right: ${d.marginRight}px;
          }
        }
        btn.c7n-btn:focus::after {
          border-color: transparent;
        }
      }
    }
  `;
};

export default createStyleComponent("comp/pagination", PaginationStyle);
