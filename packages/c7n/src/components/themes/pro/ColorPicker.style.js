import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

function colorPickerStyle() {
  return css`
    .c7n-pro-color-picker-wrapper.c7n-pro-color-picker-wrapper {
      .c7n-pro-color-picker-color {
        width: 18px;
      }
    }
  `;
}

export default createStyleComponent("colorPicker", colorPickerStyle);
