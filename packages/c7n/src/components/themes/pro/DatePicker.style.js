import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import { getInnerBtnCss } from "../utils";

function getDatePickerStyle(props) {
  const input = getThemeData(props, "input");
  const {
    icon,
    iconSize,
    textAlign,
    paddingLeft,
    paddingRight,
    iconSuffixColor,
    iconContent,
    iconDateSize,
    ulPadding,
    suffixPadding,
    suffixWidth,
  } = getThemeData(props, "datePicker");
  return css`
    .c7n-pro-calendar-picker-wrapper {
      line-height: 0;
      .c7n-pro-calendar-picker-multiple-block {
        margin-top: 0.02rem;
        margin-bottom: 0.02rem;
        .icon {
          line-height: 1.3;
        }
      }
      .c7n-pro-calendar-picker-inner-button {
        ${getInnerBtnCss()}
        right: 2px !important;
      }
      .c7n-pro-calendar-picker-suffix {
        padding-left: 0;
        padding-right: 0;
      }
      &.c7n-pro-calendar-picker-empty {
        .c7n-pro-calendar-picker-inner-button.c7n-pro-calendar-picker-clear-button {
          display: none;
        }
      }
      &.c7n-pro-calendar-picker-invalid
        label
        input.c7n-pro-calendar-picker-multiple-input {
        background: transparent;
      }
    }
    .c7n-pro-calendar-picker-wrapper label .c7n-pro-calendar-picker {
      border: none;
      padding: 0;
      height: auto;
      min-height: ${input.inputHeight - input.borderWidth * 2}px;
      text-align: left;
      text-align: ${textAlign};
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;

      .c7n-pro-calendar-picker-range-input,
      .c7n-pro-calendar-picker-range-start {
        text-align: ${textAlign};
        padding-left: ${paddingLeft}px;

        .c7n-pro-calendar-picker-range-input,
        .c7n-pro-calendar-picker-range-start {
          text-align: ${textAlign};
        }
        .c7n-pro-calendar-picker-multiple-input {
          height: ${input.inputHeight - input.borderWidth * 4}px;
        }
        > ul {
          padding: ${ulPadding};
        }
        .c7n-pro-calendar-picker-range-split {
          background-image: url("${icon}");
          background-size: cover;
          width: ${iconSize}px;
          height: ${iconSize}px;
          content: "${iconContent}";
          color: transparent;
          position: relative;
          top: calc(50% - ${iconSize / 2}px);
          :before {
            display: none;
          }
        }
      }
    }
    .c7n-pro-calendar-picker-wrapper {
      &&:hover .c7n-pro-calendar-picker-clear-button {
        z-index: 6;
      }
    }
    .c7n-pro-calendar-picker-suffix {
      padding: ${suffixPadding}px;
      width: ${suffixWidth}px;
      right: 7px;
      .c7n-pro-calendar-picker-trigger {
        :before {
          // content: "${iconContent}" !important;
          content: "\\E916";
          display: block;
          // background-image: url("${icon}");
          // height: ${iconSize}px;
          // width: ${iconSize}px;
          background-size: cover;
          display: block;
          font-size: ${iconDateSize}px;
          color: ${iconSuffixColor};
        }
      }
    }
  `;
}
function getDatePickerDropdownStyle(props) {
  const {
    operationBtnRadius,
    operationBtnSize,
    hoverBgColor,
    headFontColor,
    bodyItemFontColor,
    // weekendFontColor,
    bodyItemHeight,
    bodyItemWidth,
    bodyItemFontSize,
    bodyItemRadius,
    selectedFontColor,
    footerColor,
    operationBorder,
    oldNewDayOpacity,
    operationBtnBgColor,
  } = getThemeData(props, "datePicker");
  const color = getThemeData(props, "common");
  const { selectedBg } = getThemeData(props, "timePicker");
  return css`
    .c7n-pro-calendar-picker-popup {
      background: #fff;
      .c7n-pro-calendar-time-focus,
      .c7n-pro-calendar-time-focus-active {
        display: none;
      }
      .c7n-pro-calendar-time-panel {
        .c7n-pro-calendar-cell-inner:active {
          background-color: ${selectedBg || "transparent"};
          color: #333;
        }
      }
      .c7n-pro-calendar-time-panel .c7n-pro-calendar-selected {
        background: ${selectedBg};
        border: none;
        .c7n-pro-calendar-cell-inner {
          background-color: initial !important;
          color: #333 !important;
        }
      }
      .c7n-pro-calendar-view {
        .c7n-pro-calendar-header {
          a:hover {
            color: ${color.primary};
          }
          .c7n-pro-calendar-view-select {
            color: ${headFontColor}px;
            font-weight: normal;
          }
          .c7n-pro-calendar-prev-year,
          .c7n-pro-calendar-next-year,
          .c7n-pro-calendar-prev-month,
          .c7n-pro-calendar-next-month {
            .icon {
              width: ${operationBtnSize}px;
              height: ${operationBtnSize}px;
              border: ${operationBorder};
              border-radius: ${operationBtnRadius}px;
              background: ${operationBtnBgColor || "#ededed"};
              :before {
                line-height: ${operationBtnSize}px;
              }
            }
          }
          .c7n-pro-calendar-prev-month,
          .c7n-pro-calendar-next-month {
          }
        }
        .c7n-pro-calendar-body {
          .c7n-pro-calendar-selected .c7n-pro-calendar-cell-inner {
            background-color: ${color.primary};
            color: ${selectedFontColor};
          }
          table {
            thead {
              th {
                color: ${headFontColor};
                font-size: ${bodyItemFontSize}px;
              }
            }
            tbody {
              tr {
                td {
                  :hover {
                    .c7n-pro-calendar-cell-inner {
                      background: ${hoverBgColor};
                    }
                  }
                  &.c7n-pro-calendar-selected {
                    .c7n-pro-calendar-cell-inner {
                      background: ${color.primary};
                      color: ${selectedFontColor};
                    }
                  }
                  &.c7n-pro-calendar-today {
                    .c7n-pro-calendar-cell-inner {
                      border-color: ${color.primary};
                    }
                  }
                  &.c7n-pro-calendar-old,
                  &.c7n-pro-calendar-new {
                    .c7n-pro-calendar-cell-inner {
                      opacity: ${oldNewDayOpacity};
                    }
                  }
                  .c7n-pro-calendar-cell-inner {
                    min-width: ${bodyItemWidth}px;
                    min-height: ${bodyItemHeight}px;
                    font-size: ${bodyItemFontSize}px;
                    color: ${bodyItemFontColor};
                    border-radius: ${bodyItemRadius}px;
                  }
                }
              }
            }
          }
        }

        .c7n-pro-calendar-footer {
          a {
            color: ${footerColor};
          }
          .c7n-pro-calendar-footer-view-select {
            &,
            &:hover {
              background-color: ${color.primary};
              color: #fff;
            }
          }
        }
      }
    }
  `;
}

const allCss = css`
  ${getDatePickerStyle}
  ${getDatePickerDropdownStyle}
`;

export default createStyleComponent("datePicker", allCss);
