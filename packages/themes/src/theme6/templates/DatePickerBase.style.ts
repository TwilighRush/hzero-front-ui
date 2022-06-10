import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getDatePickerStyle(props) {
  const {
    hoverBgColor,
    headFontColor,
    bodyItemFontColor,
    bodyItemHeight,
    bodyItemWidth,
    bodyItemFontSize,
    bodyItemRadius,
    selectedFontColor,
    footerColor,

    oldNewDayOpacity,
    disabledDayOpacity,
  } = getThemeData(props, 'datePicker');

  const color = getThemeData(props, 'colors');
  return css`
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
    .c7n-time-picker-panel.c7n-time-picker-panel {
      .c7n-time-picker-panel-select li {
        color: #0f1358;
      }
      .c7n-time-picker-panel-select-option-selected.c7n-time-picker-panel-select-option-selected {
        color: #5365ea;
      }
    }
    .c7n-calendar.c7n-calendar {
      .c7n-calendar-decade-panel-cell,
      .c7n-calendar-year-panel-cell,
      .c7n-calendar-month-panel-cell {
        &.c7n-calendar-month-panel-selected-cell,
        &.c7n-calendar-decade-panel-selected-cell,
        &.c7n-calendar-year-panel-selected-cell {
          .c7n-calendar-year-panel-year,
          .c7n-calendar-decade-panel-decade,
          .c7n-calendar-month-panel-month {
            color: #fff;
            background: #5365ea;
          }
        }

        .c7n-calendar-year-panel-year,
        .c7n-calendar-decade-panel-decade,
        .c7n-calendar-month-panel-month {
          color: #0f1358;
          border-radius: 13px;
          &:hover {
            color: #5365ea;
            background: rgba(83, 101, 234, 0.08);
          }
        }
      }
      .c7n-calendar-decade-panel-next-century-cell .c7n-calendar-decade-panel-decade,
      .c7n-calendar-decade-panel-last-century-cell .c7n-calendar-decade-panel-decade,
      .c7n-calendar-year-panel-next-decade-cell .c7n-calendar-year-panel-year,
      .c7n-calendar-year-panel-last-decade-cell .c7n-calendar-year-panel-year,
      .c7n-calendar-last-month-cell .c7n-calendar-date,
      .c7n-calendar-next-month-btn-day .c7n-calendar-date {
        color: rgba(15, 19, 88, 0.54);
      }
      .c7n-calendar-today .c7n-calendar-date {
        font-weight: 400;
      }
      .c7n-calendar-footer-btn a {
        color: ${footerColor};
      }
      .c7n-calendar-ok-btn {
        width: 50px;
        height: 32px;
        background: rgba(83, 101, 234, 0.08);
        border-radius: 4px;
        line-height: 32px;
      }
      .c7n-calendar-in-range-cell {
        div {
          color: #415bc9 !important;
        }
        &::before {
          background: rgba(83, 101, 234, 0.14);
        }
      }
      .c7n-calendar-body {
        [class$='-selected-day'] div {
          background-color: ${color.primary};
          color: ${selectedFontColor};

          &:hover {
            color: ${headFontColor};
          }
        }
        [class$='-selected-day']:hover div {
          color: ${headFontColor};
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
                  div {
                    background: ${hoverBgColor};
                  }
                }
                &.c7n-calendar-disabled {
                  div {
                    opacity: ${disabledDayOpacity};
                  }
                }
                &.c7n-calendar-today {
                  div {
                    border-color: ${color.primary};

                    :before {
                      border: none;
                    }
                  }

                  &.c7n-calendar-disabled {
                    div {
                      border-color: ${bodyItemFontColor};
                    }
                  }
                }
                &.c7n-calendar-old,
                &.c7n-calendar-new {
                  div {
                    opacity: ${oldNewDayOpacity};
                  }
                }
                div {
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
  `;
}

export default getDatePickerStyle;
