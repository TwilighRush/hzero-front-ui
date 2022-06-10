import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

const getAutoCompleteStyle = () => {
  return css`
    .c7n-pro-auto-complete-wrapper {
      &.c7n-pro-auto-complete-disabled .c7n-pro-auto-complete,
      &.c7n-pro-auto-complete-disabled label:hover .c7n-pro-auto-complete,
      &.c7n-pro-auto-complete:disabled {
        background: initial;
      }
    }
  `;
};

export default createStyleComponent("autoComplete", getAutoCompleteStyle);
