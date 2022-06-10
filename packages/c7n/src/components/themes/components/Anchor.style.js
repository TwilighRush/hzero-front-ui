import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const setAnchorCss = (props) => {
  const data = getThemeData(props, "anchor");
  const { primary } = getThemeData(props, "common");
  const {
    fontFamily,
    fontSize,
    grayColor,
    nodeWidth,
    nodeHeight,
    nodeRadius,
    nodeDistance,
    nodeLeft,
    nodeTranslateY,
    lineWidth,
    hideTopLength,
    hideBottomLength,
    wordsLeft,
  } = data;
  return css`
    .c7n-anchor {
      .c7n-anchor-ink {
        width: ${lineWidth}px;
        border-top: ${hideTopLength}px solid white;
        border-bottom: ${hideBottomLength}px solid white;
        .c7n-anchor-ink-ball.visible {
          display: none;
        }
        :before {
          width: ${data.leftLineWidth}px;
        }
      }
      .c7n-anchor-link {
        padding-bottom: ${data.paddingBottom}px;
        .c7n-anchor-link-title {
          padding-bottom: ${data.paddingBottom}px;
        }
        .c7n-anchor-link:nth-last-child(1) {
          padding-bottom: 0;
        }
      }

      .c7n-anchor-link {
        padding-left: ${wordsLeft}px;
        &:before {
          width: ${nodeWidth}px;
          height: ${nodeHeight}px;
          content: "";
          box-sizing: content-box;
          border: ${nodeDistance}px solid white;
          position: absolute;
          left: ${nodeLeft}px;
          transform: translateY(${nodeTranslateY}px);
          border-radius: ${nodeRadius};
          background-color: ${grayColor};
          display: block;
        }
        &.c7n-anchor-link-active:before {
          background-color: ${primary};
        }
        > .c7n-anchor-link:before {
          border: ${nodeDistance - 2}px solid white;
          left: ${nodeLeft + 2}px;
          transform: translateY(${nodeTranslateY + 2}px);
        }
        .c7n-anchor-link-title {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          color: ${grayColor};
          &.c7n-anchor-link-title-active {
            color: ${primary};
            outline: none;
          }
        }
      }
    }
  `;
};

const AnchorStyle = css`
  /* Anchor--components 全局样式实现 */
  .c7n-anchor-wrapper {
    ${setAnchorCss};
  }
`;

export default createStyleComponent("comp/anchor", AnchorStyle);
