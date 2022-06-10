import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getStyle(props) {
  const colors = getThemeData(props, "colors");
  return css`
    .c7n-time-picker {
      border: none;
      width: 100%;
      a {
        color: ${colors.primary};
      }
      .c7n-input-content .c7n-input-suffix {
        right: 2px;
        display: flex !important;
        justify-content: center;
      }
      .c7n-time-picker-input {
        border: none;
        position: relative;
        box-shadow: none;
        z-index: 2;
      }
      .c7n-time-picker-icon {
        z-index: 2;
      }
    }
  `;
}

function getTimePickerStyle(props) {
  const {
    icon,
    iconSize,
    timeChange,
    iconDateSize,
    iconSuffixColor,
    iconContent,
  } = getThemeData(props, "datePicker");
  return timeChange
    ? css`
        .c7n-time-picker {
          .c7n-input-suffix {
            .icon:before {
              background-image: url("${icon}");
              height: ${iconSize}px;
              width: ${iconSize}px;
              background-size: cover;
              display: block;
              font-size: ${iconDateSize}px;
              color: ${iconSuffixColor};
              content: "${iconContent}" !important;
            }
          }
        }
      `
    : "";
}
function getTimePickerDropDown(props) {
  const d = getThemeData(props, "timePicker");
  return css`
    .c7n-time-picker-panel {
      .c7n-time-picker-panel-input-wrap {
        height: ${d.dropDownInputHeight}px;
      }
      .c7n-time-picker-panel-select {
        width: ${d.columnWidth}px;
        ::-webkit-scrollbar {
          display: none;
        }
        li {
          height: ${d.itemHeight}px;
          padding: 0;
          font-family: MicrosoftYaHei;
          font-size: ${d.itemFontSize}px;
          color: ${d.itemFontColor};
          letter-spacing: 0;
          text-align: center;
          line-height: ${d.itemHeight}px;
        }
        .c7n-time-picker-panel-select-option-selected {
          background: ${d.selectedBg};
          color: ${d.selectedFontColor};
          font-weight: normal;
        }
      }
    }
  `;
}
const timePickerStyle = css`
  /* TimePicker--components 全局样式实现 */
  ${getStyle}
  ${getTimePickerStyle}
  ${getTimePickerDropDown}
`;

export default createStyleComponent("comp/timePicker", timePickerStyle);
