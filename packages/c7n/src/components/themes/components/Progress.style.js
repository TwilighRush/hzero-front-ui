import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getProgressCss = (props) => {
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-progress-loading {
      &.c7n-progress-status-normal {
        .c7n-progress-inner circle {
          stroke: ${primary};
        }
      }
    }
  `;
};

export default createStyleComponent("comp/progress", getProgressCss);
