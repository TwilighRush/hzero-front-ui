import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getScreeningStyle(props) {
  const d = getThemeData(props, "select");
  const { primary, multipleColor } = getThemeData(props, "common");
  return css`
    .c7n-pro-screening {
      .c7n-tag {
        background-color: ${multipleColor || primary};
        color: ${d.mutiSelectItemFontColor};
      }
      .c7n-pro-screening-item-operation .c7n-pro-screening-item-expanded:hover {
        color: ${primary};
      }
      .c7n-pro-screening-item-option-text:hover {
        color: ${primary};
      }
    }
  `;
}
export default createStyleComponent("screening", getScreeningStyle);
