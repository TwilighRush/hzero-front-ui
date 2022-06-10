import { css, keyframes } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const loadingFrame = keyframes`
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
`;

const getStyle = (props) => {
  const { barColor, titleHeight } = getThemeData(props, "skeleton");
  return css`
    .c7n-skeleton.c7n-skeleton {
      .c7n-skeleton-avatar,
      .c7n-skeleton-title,
      .c7n-skeleton-paragraph > li {
        background: linear-gradient(
          90deg,
          ${barColor} 25%,
          #f1f1f1 37%,
          ${barColor} 63%
        );
      }
      .c7n-skeleton-title{
        height:${titleHeight};
      }
      &.c7n-skeleton-active {
        .c7n-skeleton-header .c7n-skeleton-avatar,
        .c7n-skeleton-content .c7n-skeleton-title,
        .c7n-skeleton-content .c7n-skeleton-paragraph > li {
          background: linear-gradient(
            90deg,
            ${barColor} 25%,
            #f1f1f1 37%,
            ${barColor} 63%
          );
          background-size: 400% 100%;
          animation: ${loadingFrame} 1.4s ease infinite;
        }
      }
    }
  `;
};

export default createStyleComponent("comp/skeleton", getStyle);
