import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const verticalCenterStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

function getDatePickerStyle(props: any) {
  const { iconfontFamily, titleColor2, primary6, lineColor1, fontColor } = getThemeData(
    props,
    'common'
  );
  const { inputHeight, lineHeight } = getThemeData(props, 'input');
  const { fontSize, btnWidth, btnHeight } = getThemeData(props, 'datePicker');
  return css`
    .c7n-pro-calendar-picker.c7n-pro-calendar-picker:not(textarea):not(:last-child) {
      padding-right: 0.35rem;
    }
    .c7n-pro-calendar-picker-multiple.c7n-pro-calendar-picker-multiple.c7n-pro-calendar-picker-multiple {
      .c7n-pro-calendar-picker.c7n-pro-calendar-picker {
        min-height: ${inputHeight}px;
        ul {
          padding: 0;
          > span.c7n-pro-calendar-picker-range-text {
            width: 100%;
            height: 24px;
            line-height: 24px;
            .c7n-pro-calendar-picker-range-split {
              vertical-align: top !important;
              position: relative;
              &::before {
                position: absolute;
                left: 3px;
              }
            }
            .c7n-pro-calendar-picker-range-start,
            .c7n-pro-calendar-picker-range-end,
            .c7n-pro-calendar-picker-range-split {
              height: 24px;
              line-height: 24px;
              margin: 0;
              padding: 0;
              vertical-align: initial;
            }
          }
        }
      }
    }
    .c7n-pro-calendar-picker-range-split {
      font-size: 0;
      :before {
        font-size: 12px;
        content: '\\e78d';
        font-family: 'iconfont-c7n-font';
        color: ${titleColor2};
      }
    }
    .c7n-pro-calendar-picker-range-start,
    .c7n-pro-calendar-picker-range-end,
    .c7n-pro-calendar-picker-range-split,
    .c7n-pro-calendar-picker-range-input {
      line-height: ${inputHeight - 2}px;
    }

    .icon-date_range.icon-date_range:before {
      content: '\\e750';
      font-family: ${iconfontFamily};
    }
    .c7n-pro-calendar-datetime-wrapper.c7n-pro-calendar-datetime-wrapper {
      .c7n-pro-calendar-view {
        .c7n-pro-calendar-footer {
          font-size: ${fontSize}px;
        }
      }
      .c7n-pro-calendar-cell-inner {
        display: block !important;
      }
      .c7n-pro-calendar-time {
        flex: auto;
        .c7n-pro-calendar-body {
          border-left: 1px solid ${lineColor1};
          padding: 0.08rem 0;
          font-size: ${fontSize}px;
          line-height: 20px;
          .c7n-pro-calendar-time-panel-inner {
            height: ${inputHeight}px;
            .c7n-pro-calendar-time-list li {
              height: ${inputHeight}px;
            }
          }
          .c7n-pro-calendar-time-panel {
            height: 2.15rem;
          }
        }
        .c7n-pro-calendar-footer {
          .c7n-pro-calendar-footer-now-btn {
            font-weight: 500;
          }
        }
      }
    }
    .c7n-pro-calendar-footer {
      .c7n-pro-calendar-footer-view-select {
        height: ${btnHeight}px;
        background: ${primary6};
        padding: 0 8px;
        line-height: ${btnHeight}px;
        width: ${btnWidth}px;
        color: ${fontColor};
        border-radius: 2px;
        box-shadow: none;
        top: ${(36 - btnHeight) / 2}px;
        :hover {
          background: ${primary6};
        }
      }
    }
  `;
}

function getDropdownStyle(props: any) {
  const {
    operationBtnRadius,
    operationBtnSize,
    bodyItemHeight,
    bodyItemWidth,
    bodyItemRadius,
    disabledDayOpacity,
    headerHeight,
    fontSize,
  } = getThemeData(props, 'datePicker');
  const {
    primary1,
    primary6,
    titleColor3,
    titleColor2,
    titleColor1,
    lineColor1,
    lineColor3,
    fontColor,
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-calendar-picker.c7n-pro-calendar-picker {
      border: none;
      > ul {
        padding: 0;
      }
    }
    .c7n-pro-calendar-picker-range.c7n-pro-calendar-picker-range {
      .c7n-pro-calendar-picker {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    .c7n-pro-calendar-picker-popup.c7n-pro-calendar-picker-popup {
      background: #fff;
      .c7n-pro-calendar-picker-popup-hover-value .c7n-pro-input,
      .c7n-pro-calendar-picker-popup-hover-value-start .c7n-pro-calendar-picker-range-start,
      .c7n-pro-calendar-picker-popup-hover-value-end .c7n-pro-calendar-picker-range-end {
        color: ${titleColor3};
      }
      .c7n-pro-calendar-time-focus,
      .c7n-pro-calendar-time-focus-active {
        display: none;
      }
      .c7n-pro-calendar-time-panel {
        .c7n-pro-calendar-cell {
          &:hover {
            background-color: ${primary1};
            color: ${primary6};
          }
          .c7n-pro-calendar-cell-inner {
            color: ${titleColor1};
            &:hover,
            &:active {
              background: none;
              color: none;
            }
          }
        }
        .c7n-pro-calendar-selected {
          background: ${primary1};
          border: none;
          .c7n-pro-calendar-cell-inner {
            background-color: initial;
          }
        }
      }
      .c7n-pro-calendar-view {
        .c7n-pro-calendar-header {
          height: ${headerHeight}px;
          line-height: ${headerHeight}px;
          padding: 0 0.16rem;

          .c7n-pro-calendar-view-select {
            font-size: ${fontSize}px;
            color: ${titleColor1};
            font-weight: normal;
          }
          .c7n-pro-calendar-prev-year,
          .c7n-pro-calendar-next-year,
          .c7n-pro-calendar-prev-month,
          .c7n-pro-calendar-next-month {
            color: ${titleColor2};
            padding: 0 0.06rem;
            .icon {
              position: relative;
              width: ${operationBtnSize}px;
              height: ${operationBtnSize}px;
              border-radius: ${operationBtnRadius}px;
              background: transparent;
              :before {
                ${verticalCenterStyle}
                line-height: ${operationBtnSize}px;
              }
            }
          }
        }
        .c7n-pro-calendar-body {
          .c7n-pro-calendar-selected .c7n-pro-calendar-cell-inner {
            color: ${primary6};
            display: inline-block;
          }
          table {
            thead {
              th {
                color: ${titleColor3};
                font-size: ${fontSize}px;
              }
            }
            tbody {
              tr {
                td {
                  :hover {
                    .c7n-pro-calendar-cell-inner {
                      background: ${primary1};
                    }
                  }
                  &.c7n-pro-calendar-disabled {
                    :hover {
                      .c7n-pro-calendar-cell-inner {
                        background: ${lineColor3};
                      }
                    }
                    .c7n-pro-calendar-cell-inner {
                      opacity: ${disabledDayOpacity};
                    }
                  }
                  &.c7n-pro-calendar-selected {
                    .c7n-pro-calendar-cell-inner {
                      background: ${primary6};
                      color: ${fontColor};
                    }
                  }

                  &.c7n-pro-calendar-today {
                    &:not(.c7n-pro-calendar-selected) {
                      .c7n-pro-calendar-cell-inner {
                        color: ${primary6};
                      }
                    }
                    .c7n-pro-calendar-cell-inner {
                      border-color: ${primary6};
                      font-weight: 500;
                      :before {
                        border: none;
                      }
                    }

                    &.c7n-pro-calendar-disabled {
                      .c7n-pro-calendar-cell-inner {
                        border-color: ${lineColor1};
                      }
                    }
                  }
                  &.c7n-pro-calendar-old,
                  &.c7n-pro-calendar-new {
                    .c7n-pro-calendar-cell-inner {
                      color: ${titleColor3};
                    }
                  }
                  .c7n-pro-calendar-cell-inner {
                    min-width: ${bodyItemWidth}px;
                    min-height: ${bodyItemHeight}px;
                    font-size: ${fontSize}px;
                    color: ${titleColor1};
                    border-radius: ${bodyItemRadius}px;
                    display: inline-block;
                  }
                }
              }
            }
          }
        }
      }
      .c7n-pro-calendar-footer {
        height: 0.37rem;
        line-height: 0.37rem;
        .c7n-pro-calendar-footer-view-select {
          color: ${fontColor};
        }
        .c7n-pro-calendar-now-disabled {
          color: ${titleColor3};
          opacity: ${disabledDayOpacity};
        }
      }
    }
    /* 这部分估计是日历部分的 */
    .c7n-calendar-picker-input.c7n-calendar-picker-input {
      display: flex;
    }
    .c7n-calendar-range-picker-separator.c7n-calendar-range-picker-separator {
      line-height: 0.28rem;
    }
  `;
}

const allCss = css`
  ${getDatePickerStyle}
  ${getDropdownStyle}
`;

export default allCss;
