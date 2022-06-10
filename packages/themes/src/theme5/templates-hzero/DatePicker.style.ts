import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const datePickerStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    //datePicker输入框
    .ant-calendar-picker.ant-calendar-picker {
      .ant-input:not(.ant-input-disabled) {
        :hover,
        :focus,
        :active {
          border-color: ${primary6};
          ~ .ant-calendar-picker-icon:after {
            color: ${primary6} !important;
          }
        }
      }
    }
    //弹出内容
    .ant-calendar-picker-container.ant-calendar-picker-container {
      .ant-calendar.ant-calendar {
        //头部hover颜色
        .ant-calendar-header {
          a:hover {
            color: ${primary6};
          }
          .ant-calendar-next-month-btn,
          .ant-calendar-prev-month-btn,
          .ant-calendar-year-panel-prev-decade-btn,
          .ant-calendar-year-panel-next-decade-btn,
          .ant-calendar-decade-panel-next-century-btn,
          .ant-calendar-decade-panel-prev-century-btn {
            :hover {
              color: ${primary6};
            }
            a:hover {
              color: ${primary6};
            }
          }
          .ant-calendar-month-panel-month,
          .ant-calendar-year-panel-year {
            :hover {
              background: ${primary1};
            }
          }
        }
        //中间
        .ant-calendar-panel {
          .ant-calendar-body {
            .ant-calendar-table {
              tbody > tr {
                &.ant-calendar-selected-end-date:before {
                  background: ${primary6};
                  color: #fff;
                }
                > td {
                  .ant-calendar-selected-date > div {
                    background: ${primary6};
                    color: #fff;
                  }
                  &.ant-calendar-today .ant-calendar-date {
                    border-color: ${primary6};
                    color: ${primary6};
                    background: #fff;
                  }
                }
                > .ant-calendar-in-range-cell {
                  :before {
                    background: ${primary6};
                    color: #fff;
                  }
                }
                .ant-calendar-selected-date,
                .ant-calendar-selected-start-date,
                .ant-calendar-selected-end-date {
                  .ant-calendar-date {
                    background: ${primary6};
                  }
                }
              }
            }
          }
        }

        &.ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week,
        .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month,
        .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
          background: ${primary6};
        }
        :not(.ant-calendar-selected-day) {
          .ant-calendar-date {
            &:hover {
              background: ${primary1};
            }
            &:active {
              background: ${primary6};
              color: #fff;
            }
          }
        }
        .ant-calendar-time-picker-select li {
          :hover,
          &.ant-calendar-time-picker-select-option-selected {
            background-color: ${primary1};
            color: ${primary6};
          }
        }
        //底部
        .ant-calendar-footer {
          .ant-calendar-ok-btn {
            background-color: ${primary6};
            border-color: ${primary6};
          }
        }
      }
      .ant-calendar-week-number {
        .ant-calendar-body {
          tr {
            :hover {
              background-color: ${primary1};
            }
            :active {
              background-color: ${primary6};
            }
          }
        }
      }
    }
  `;
};

export default css`
  ${datePickerStyle}
`;
