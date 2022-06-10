import { css } from "styled-components";
import {
  createStyleComponent,
  getThemeData,
} from "@hzero-front-ui/core/lib/utils";

function getTimePickerDropDown(props) {
  const d = getThemeData(props, "timePicker");
  return css`
    .ant-time-picker-panel {
      .ant-time-picker-panel-input-wrap {
        height: ${d.dropDownInputHeight}px;
      }
      .ant-time-picker-panel-select {
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
        .ant-time-picker-panel-select-option-selected {
          background: ${d.selectedBg};
          color: ${d.selectedFontColor};
          font-weight: normal;
        }
      }
    }
  `;
}
function getStyle() {
  // const d = getThemeData(props, 'timePicker');
  return css`
    .ant-time-picker {
      border: none;
      width: 100%;
      .ant-time-picker-input {
        border: none;
        position: relative;
        box-shadow: none;
        z-index: 2;
      }
      .ant-time-picker-icon {
        z-index: 2;
      }
    }
  `;
}

const timePickerStyle = css`
  .t-time-picker.t-time-picker {
    width: auto;
    ${getStyle}
  }
  ${getTimePickerDropDown}
`;

export default createStyleComponent("timePicker", timePickerStyle);
