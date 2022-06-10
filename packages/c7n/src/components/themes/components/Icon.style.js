import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

const getIconCss = () => {
  return css`
    a[disabled] {
      color: rgba(0, 0, 0, 0.25) !important;
    }
  `;
};

export default createStyleComponent("comp/icon", getIconCss);
