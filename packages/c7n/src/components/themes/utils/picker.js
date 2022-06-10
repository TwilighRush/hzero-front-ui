import { css } from "styled-components";

export function getInnerBtnCss() {
  return css`
    & {
      width: 16px;
      right: 16px;
      .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
      }
    }
  `;
}
