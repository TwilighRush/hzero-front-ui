import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getDatePickerDropDownStyle(props) {
  const { primary } = getThemeData(props, "common");
  const { radius } = getThemeData(props, "button");
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
    selectedBgColor,
    selectedFontColor,
  } = getThemeData(props, "datePicker");
  return css`
    .ant-calendar-picker-container {
      .ant-calendar-panel {
        .ant-calendar-header {
          .ant-calendar-prev-year-btn,
          .ant-calendar-next-year-btn {
            display: none;
          }
          .ant-calendar-next-month-btn,
          .ant-calendar-prev-month-btn,
          .ant-calendar-year-panel-prev-decade-btn,
          .ant-calendar-year-panel-next-decade-btn,
          .ant-calendar-decade-panel-next-century-btn,
          .ant-calendar-decade-panel-prev-century-btn {
            width: ${operationBtnSize}px;
            height: ${operationBtnSize}px;
            background-color: rgb(237, 237, 237);
            border-radius: ${operationBtnRadius}px;
            line-height: ${operationBtnSize}px;
            top: calc(50% - ${operationBtnSize / 2}px);
            transition: all 0.3s;
            :hover {
              background-color: ${hoverBgColor};
            }
          }
          .ant-calendar-year-panel-header {
            position: relative;
          }
          .ant-calendar-decade-panel-header {
            position: relative;
          }
          .ant-calendar-next-month-btn,
          .ant-calendar-year-panel-next-decade-btn {
            right: 20px;
          }
          .ant-calendar-prev-month-btn,
          .ant-calendar-year-panel-prev-decade-btn {
            left: 20px;
          }
        }
        .ant-calendar-body {
          .ant-calendar-table {
            thead > tr > th {
              font-family: PingFangSC-Medium;
              font-size: 12px;
              color: ${headFontColor};
              letter-spacing: 0;
              line-height: 16px;
            }
            tbody > tr {
              > td > div {
                height: ${bodyItemHeight}px;
                font-family: PingFangSC-Regular;
                font-size: ${bodyItemFontSize}px;
                color: ${bodyItemFontColor};
                letter-spacing: 0;
                text-align: center;
                line-height: ${bodyItemHeight - 2}px;
                border-radius: ${bodyItemRadius}px;
              }
              > .ant-calendar-last-month-cell > div {
                opacity: 0.5;
              }
              > .ant-calendar-next-month-btn-day > div {
                opacity: 0.5;
              }
              > td.ant-calendar-selected-date > div {
                width: ${bodyItemWidth}px;
                height: ${bodyItemHeight}px;
                background-color: ${selectedBgColor};
                border-radius: ${bodyItemRadius}px;
                color: ${selectedFontColor};
              }
              > .ant-calendar-today > .ant-calendar-date {
                border-color: ${primary};
                border-radius: ${bodyItemRadius}px;
              }
              > .ant-calendar-in-range-cell,
              > .ant-calendar-selected-start-date,
              > .ant-calendar-selected-end-date {
                position: relative;
                :before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 3px;
                  right: 0;
                  bottom: 3px;
                  background-color: ${selectedBgColor};
                }
                > div {
                  position: relative;
                  color: ${selectedFontColor};
                  z-index: 1;
                  background-color: ${selectedBgColor};
                }
              }
              > .ant-calendar-selected-start-date:before {
                border-top-left-radius: ${bodyItemRadius}px;
                border-bottom-left-radius: ${bodyItemRadius}px;
              }
              > .ant-calendar-selected-end-date:before {
                border-top-right-radius: ${bodyItemRadius}px;
                border-bottom-right-radius: ${bodyItemRadius}px;
              }
            }
          }
        }
        .ant-calendar-footer {
          .ant-calendar-ok-btn {
            background-color: ${primary};
            border-radius: ${radius}px;
            :hover {
              background-color: ${primary};
              opacity: 0.9;
            }
          }
        }
      }
    }
  `;
}
function getPickerCss(props) {
  const data = getThemeData(props, "datePicker");
  const inputData = getThemeData(props, "input");
  return css`
    width: auto;
    .ant-calendar-picker {
      position: relative;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      .ant-calendar-picker-clear {
        z-index: 7;
      }
      .ant-calendar-picker-icon {
        z-index: 6;
        width: ${data.iconSize}px;
        height: ${data.iconSize}px;
        margin-top: -${data.iconSize / 2}px;
        background-image: url(${data.icon});
        background-size: cover;
        :after {
          visibility: hidden;
        }
      }
      .ant-input {
        z-index: 5;
      }
      .ant-calendar-picker-input {
        width: 100%;
        height: 100%;
        line-height: ${inputData.inputHeight - 2}px;
        box-sizing: border-box;
        position: relative;
        padding-right: 32px;
        :after {
          content: "";
          display: block;
          width: ${data.iconSize}px;
          height: ${data.iconSize}px;
          position: absolute;
          left: 100px;
          top: calc(50% - ${data.iconSize / 2}px);
          background: url(${data.icon});
          background-size: cover;
        }
        .ant-calendar-picker-icon:after {
          color: #333333;
          z-index: 5;
        }
      }
      input {
        &:first-of-type {
          text-align: left;
        }
        &:last-of-type {
          text-align: right;
        }
      }
      .ant-calendar-range-picker-separator {
        display: none;
        position: absolute;
        box-sizing: border-box;
        height: ${inputData.inputHeight}px;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
        &:after {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.25);
          display: inline-block;
          line-height: 1;
        }
      }
    }
  `;
}

const datePickerStyle = css`
  .t-datepicker.t-datepicker {
    ${getPickerCss}
  }
  ${getDatePickerDropDownStyle}
`;

export default createStyleComponent("datePicker", datePickerStyle);
