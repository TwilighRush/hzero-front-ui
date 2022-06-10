import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getDatePickerStyle(props) {
  const {
    icon,
    iconSize,
    textAlign,
    fontSize,
    textCenter,
    iconDateSize,
    iconSuffixColor,
    iconContent,
  } = getThemeData(props, "datePicker");
  const input = getThemeData(props, "input");

  const color = getThemeData(props, "colors");
  return css`
    .c7n-fullcalendar-fullscreen {
      .c7n-fullcalendar-today .c7n-fullcalendar-date {
        border-top-color: ${color.primary};
      }
    }
    .c7n-calendar-picker-container {
      .c7n-calendar-selected-day .c7n-calendar-date {
        background-color: ${color.primary};
      }
      .c7n-calendar-today .c7n-calendar-date {
        color: ${color.primary};
        background-color: white;
        border-color: ${color.primary};
      }
    }
    .c7n-calendar-picker {
      border: none;
      padding: 0;
      height: ${input.inputHeight - input.borderWidth * 2}px;
      text-align: center;
      text-align: ${textAlign};
      font-size: ${fontSize}px;
      .c7n-calendar-range-picker-input,
      .c7n-calendar-range-picker-start {
        text-align: ${textAlign};
      }
      .c7n-calendar-range-picker-separator + input {
        text-align: ${textCenter};
      }
      .c7n-calendar-range-picker-separator {
        background-image: url("${icon}");
        background-size: cover;
        width: ${iconSize}px;
        height: ${iconSize}px;
        content: "";
        color: transparent;
        position: relative;
        top: calc(50% - ${iconSize / 2}px);
        :before {
          display: none;
        }
      }
    }
    .c7n-calendar-picker-wrapper {
      &&:hover .c7n-calendar-picker-clear-button {
        z-index: 6;
      }
    }
    .c7n-calendar-range-picker {
      .c7n-input {
        height: ${input.inputHeight - input.borderWidth * 2}px;
        display: inline-flex;
      }
    }
    .c7n-input-suffix {
      .c7n-calendar-picker-icon {
        :before {
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
    .c7n-calendar {
      a {
        color: ${color.primary};
      }
      .c7n-calendar-ok-btn {
        background-color: ${color.primary};
      }
    }
  `;
}

export default createStyleComponent("comp/datePicker", getDatePickerStyle);
