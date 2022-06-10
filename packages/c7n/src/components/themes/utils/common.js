import { css } from "styled-components";

export function verticalAlign(align = "middle") {
  return css`
    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      vertical-align: ${align};
    }
    & > * {
      vertical-align: ${align};
    }
  `;
}
