import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core";

function getRichTextStyle() {
  return css`
    /* 这个样式的实现在components/slider中完成，如果有附加样式，可以写在这里  */
  `;
}

export default createStyleComponent("richtext", getRichTextStyle);
