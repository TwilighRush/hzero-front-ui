import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getFormStyle(props) {
  const {
    inputFontWeight,
    requiredBgColor,
    requiredBorderColor,
  } = getThemeData(props, "input");
  return css`
    .c7n-form-item {
      .c7n-form-item-control-wrapper {
        input,
        textarea {
          font-weight: ${inputFontWeight};
        }
        &.is-required {
          .c7n-input-wrapper {
            border-color: ${requiredBorderColor};
          }
          input,
          .c7n-input,
          .c7n-input-rendered-wrapper {
            background: ${requiredBgColor};
          }
        }
      }
      .c7n-select.c7n-select {
        width: 100%;
      }
    }
  `;
}

export default createStyleComponent("comp/form", getFormStyle);
