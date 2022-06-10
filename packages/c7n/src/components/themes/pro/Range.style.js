import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

function getRangeStyle() {
  return css`
    /* 这个样式的实现在components/slider中完成，如果有附加样式，可以写在这里  */

    .c7n-pro-range-track {
      background: linear-gradient(
        90deg,
        rgb(69, 136, 244) 0%,
        rgb(56, 107, 215) 100%
      );
    }
    .c7n-pro-range-handle.c7n-pro-range-handle {
      border-color: #3e7ae6;
      :focus {
        box-shadow: 0 0 0 0.05rem #abcaff;
      }
    }
  `;
}

export default createStyleComponent("range", getRangeStyle);
