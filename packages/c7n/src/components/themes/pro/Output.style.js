import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getOutputCss = (props) => {
  const d = getThemeData(props, "output");
  const color = getThemeData(props, "common");
  return css`
    .c7n-pro-output {
      overflow-wrap: break-word;
      .c7n-pro-output-multiple-block {
        background: ${color.multipleColor || color.primary};
        border-radius: ${d.blockBorderRadius};
        font-family: ${d.blockFontFamily};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }

    .c7n-pro-form,
    .c7n-pro-form .c7n-pro-output {
      font-family: ${d.fontFamily};
      font-size: ${d.fontSize};
      color: ${d.color};
      line-height: ${d.lineHeight};
      font-weight: ${d.fontWeight};
      .c7n-pro-output-multiple-block {
        background: ${color.multipleColor || color.primary};
        border-radius: ${d.blockBorderRadius};
        font-family: ${d.blockFontFamily};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }
  `;
};

export default createStyleComponent("output", getOutputCss);
