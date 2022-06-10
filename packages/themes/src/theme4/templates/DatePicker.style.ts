import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const verticalCenterStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

function getDatePickerStyle(props: any) {
  const { iconSuffixColor, iconContent } = getThemeData(props, 'datePicker');
  return css`
    .icon-date_range:before {
      font-family: 'icomoon' !important;
      content: '${iconContent}';
      color: ${iconSuffixColor};
    }
  `;
}

function getDropdownStyle(props: any) {
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
    disabledDayOpacity,
    operationBtnBgColor,
    confirmBgColor,
    confirmHoverBgColor,
    confirmHoverFontColor,
  } = getThemeData(props, 'datePicker');
  const color = getThemeData(props, 'common');
  const { selectedBg } = getThemeData(props, 'timePicker');
  return css`
    label .c7n-pro-calendar-picker.c7n-pro-calendar-picker {
      border: none;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${color.placeholderColor};
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${color.placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${color.placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${color.placeholderColor};
    }
    .c7n-pro-calendar-picker-popup {
      background: #fff;
      .c7n-pro-calendar-time-focus,
      .c7n-pro-calendar-time-focus-active {
        display: none;
      }
      .c7n-pro-calendar-time-panel .c7n-pro-calendar-selected {
        background: ${selectedBg};
        border: none;
        .c7n-pro-calendar-cell-inner {
          background-color: initial;
          color: #333;
        }
      }
      .c7n-pro-calendar-view {
        .c7n-pro-calendar-header {
          .c7n-pro-calendar-view-select {
            color: ${headFontColor};
            font-weight: normal;
          }
          .c7n-pro-calendar-prev-year,
          .c7n-pro-calendar-next-year,
          .c7n-pro-calendar-prev-month,
          .c7n-pro-calendar-next-month {
            .icon {
              position: relative;
              width: ${operationBtnSize}px;
              height: ${operationBtnSize}px;
              border: ${operationBorder};
              border-radius: ${operationBtnRadius}px;
              background: ${operationBtnBgColor || '#ededed'};
              :before {
                ${verticalCenterStyle}
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
                  &.c7n-pro-calendar-disabled {
                    .c7n-pro-calendar-cell-inner {
                      opacity: ${disabledDayOpacity};
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

                      :before {
                        border: none;
                      }
                    }

                    &.c7n-pro-calendar-disabled {
                      .c7n-pro-calendar-cell-inner {
                        border-color: ${bodyItemFontColor};
                      }
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
      }
      .c7n-pro-calendar-footer {
        a {
          color: ${footerColor};
        }
        .c7n-pro-calendar-footer-view-select {
          background: ${confirmBgColor};
          box-shadow: none;
          &:hover {
            background: ${confirmHoverBgColor};
            color: ${confirmHoverFontColor};
          }
        }

        .c7n-pro-calendar-now-disabled {
          color: ${bodyItemFontColor};
          opacity: ${disabledDayOpacity};
        }
      }
    }
  `;
}

const allCss = css`
  ${getDatePickerStyle}
  ${getDropdownStyle}
`;

export default allCss;
