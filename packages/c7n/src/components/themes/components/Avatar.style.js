import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getAvatarCss = (props) => {
  const d = getThemeData(props, "avatar");
  return css`
    .c7n-avatar {
      background-color: ${d.backgroundColor};
      font-family: ${d.fontFamily};
      font-size: ${d.fontSize};
      color: ${d.color};
      &.c7n-avatar-square {
        border-radius: ${d.c7nSquareBorderRadius || d.squareBorderRadius};
      }
    }
  `;
};

export default createStyleComponent("comp/avatar", getAvatarCss);
