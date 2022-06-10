import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const verticalCenterStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

function getLanguageRedColCss(props: any) {
  const { weekendFontColor } = getThemeData(props, 'datePicker');
  let locale = '';
  if (typeof window !== 'undefined') {
    locale = (window.sessionStorage.getItem('language') || '').toLowerCase();
  }
  if (!(locale.indexOf('zh_cn') > -1 || locale.indexOf('en_us') > -1)) {
    return '';
  }
  const enCss = css`
    :first-of-type,
    :last-of-type {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;

  const zhCss = css`
    :nth-of-type(6),
    :nth-of-type(7) {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;
  const isZh = locale.toLowerCase().indexOf('zh_cn') > -1;
  return css`
    .c7n-pro-calendar-picker-popup.c7n-pro-calendar-picker-popup
      .c7n-pro-calendar-view
      .c7n-pro-calendar-body
      table.c7n-pro-calendar-day-panel {
      tr {
        td,
        th {
          ${isZh ? zhCss : enCss}
        }
      }
    }
  `;
}

function getDatePickerStyle(props: any) {
  const { iconSuffixColor, iconContent } = getThemeData(props, 'datePicker');
  const { iconfontFamily } = getThemeData(props, 'common');
  return css`
    .icon-date_range {
      color: ${iconSuffixColor};
      :before {
        font-family: ${iconfontFamily} !important;
        content: '${iconContent}';
      }
    }
  `;
}

function getDropdownStyle(props: any) {
  const {
    operationBtnRadius,
    operationBtnSize,
    headFontColor,
    bodyItemFontColor,
    bodyItemHeight,
    bodyItemWidth,
    bodyItemFontSize,
    bodyItemRadius,
    selectedFontColor,
    disabledDayOpacity,
    operationBtnBgColor,
    headerHeight,
    footHeight,
    fontSize,
  } = getThemeData(props, 'datePicker');
  const color = getThemeData(props, 'common');
  const { selectedBg } = getThemeData(props, 'timePicker');
  return css`
    .c7n-pro-calendar-picker.c7n-pro-calendar-picker {
      border: none;
      > ul {
        padding: 2px 0;
      }
    }
    .c7n-pro-calendar-picker-range.c7n-pro-calendar-picker-range {
      .c7n-pro-calendar-picker {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
    .c7n-calendar-picker-input.c7n-calendar-picker-input {
      display: flex;
    }
    .c7n-calendar-range-picker-separator.c7n-calendar-range-picker-separator {
      line-height: 0.28rem;
    }
    .c7n-pro-calendar-picker-popup.c7n-pro-calendar-picker-popup {
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
        //header样式
        .c7n-pro-calendar-header {
          height: ${headerHeight}px;
          line-height: ${headerHeight}px;
          padding: 0 0.16rem;
          .c7n-pro-calendar-view-select {
            color: ${headFontColor};
            font-weight: normal;
            font-size: 0.14rem;
          }
          .c7n-pro-calendar-prev-year,
          .c7n-pro-calendar-next-year,
          .c7n-pro-calendar-prev-month,
          .c7n-pro-calendar-next-month {
            color: rgba(0, 0, 0, 0.45);
            padding: 0 0.06rem;
            .icon {
              position: relative;
              width: ${operationBtnSize}px;
              height: ${operationBtnSize}px;
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
        //body样式
        .c7n-pro-calendar-body {
          .c7n-pro-calendar-cell-inner {
            display: inline-block;
            &:active,
            &:hover {
              background-color: ${color.primary1};
              color: rgba(0, 0, 0, 0.65);
            }
          }
          .c7n-pro-calendar-selected .c7n-pro-calendar-cell-inner {
            background-color: ${color.primary2};
            color: ${selectedFontColor};
          }
          table {
            thead {
              th {
                color: ${headFontColor};
                font-size: ${fontSize}px;
              }
            }
            tbody {
              tr {
                td {
                  :hover {
                    .c7n-pro-calendar-cell-inner {
                      background: ${color.primary1};
                    }
                  }
                  &.c7n-pro-calendar-disabled {
                    .c7n-pro-calendar-cell-inner {
                      opacity: ${disabledDayOpacity};
                    }
                  }
                  &.c7n-pro-calendar-selected {
                    .c7n-pro-calendar-cell-inner {
                      background: ${color.primary6};
                      color: #fff;
                    }
                  }

                  &.c7n-pro-calendar-today {
                    &:not(.c7n-pro-calendar-selected) {
                      .c7n-pro-calendar-cell-inner {
                        color: ${color.primary6};
                      }
                    }
                    .c7n-pro-calendar-cell-inner {
                      border-color: ${color.primary6};
                      font-weight: 500;
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
                      color: rgba(0, 0, 0, 0.25);
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

        //footer样式
        .c7n-pro-calendar-footer {
          height: ${footHeight}px;
          line-height: ${footHeight}px;
          a {
            color: ${color.primary6};
          }

          .c7n-pro-calendar-now-disabled {
            color: ${bodyItemFontColor};
            opacity: ${disabledDayOpacity};
          }
        }
      }
    }
  `;
}

function getOtherPicker(props: any) {
  const { iconSize, iconSuffixColor } = getThemeData(props, 'datePicker');
  return css`
    .c7n-pro-icon-picker-wrapper.c7n-pro-icon-picker-wrapper {
      .c7n-pro-icon-picker-prefix {
        .icon {
          font-size: 20px;
        }
      }
    }

    .c7n-pro-color-picker-wrapper.c7n-pro-color-picker-wrapper .c7n-pro-color-picker-suffix,
    .c7n-pro-icon-picker-wrapper.c7n-pro-icon-picker-wrapper .c7n-pro-icon-picker-suffix {
      .icon {
        :before {
          color: ${iconSuffixColor};
        }
      }
    }

    .c7n-pro-calendar-time.c7n-pro-calendar-time {
      .c7n-pro-calendar-body {
        .c7n-pro-calendar-time-panel {
          .c7n-pro-calendar-time-list {
            ul {
              .c7n-pro-calendar-selected {
                background: rgba(0, 0, 0, 0.04);
                .c7n-pro-calendar-cell-inner {
                  font-weight: 600;
                  background-color: transparent;
                }
              }
            }
          }
        }
      }
    }
  `;
}
const allCss = css`
  ${getDatePickerStyle}
  ${getDropdownStyle}
  ${getLanguageRedColCss}
  ${getOtherPicker}
`;

export default allCss;
