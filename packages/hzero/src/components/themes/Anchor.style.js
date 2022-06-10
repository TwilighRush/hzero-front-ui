import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const setAnchorCss = props => {
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
    animation = "",
  } = data;
  return css`
    ${animation};
    .ant-anchor {
      .ant-anchor-ink {
        width: ${lineWidth}px;
        border-top: ${hideTopLength}px solid white;
        border-bottom: ${hideBottomLength}px solid white;
        .ant-anchor-ink-ball.visible {
          display: none;
        }
        :before {
          width: ${data.leftLineWidth}px;
        }
      }
      .ant-anchor-link {
        padding-bottom: ${data.paddingBottom}px;
        .ant-anchor-link-title {
          padding-bottom: ${data.paddingBottom}px;
        }
        .ant-anchor-link: nth-last-child(1) {
          padding-bottom: 0;
        }
      }
      .ant-anchor-link {
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
        &.ant-anchor-link-active:before {
          background-color: ${primary};
        }
        > .ant-anchor-link:before {
          border: ${nodeDistance - 2}px solid white;
          left: ${nodeLeft + 2}px;
          transform: translateY(${nodeTranslateY + 2}px);
        }
        .ant-anchor-link-title {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          color: ${grayColor};
          :hover {
            color: ${primary};
          }
          &.ant-anchor-link-title-active {
            color: ${primary};
            outline: none;
          }
        }
      }
    }
  `;
};

const AnchorStyle = css`
  .ant-anchor-wrapper {
    & {
      ${setAnchorCss}
    }
  }
`;

// export default createGlobalStyle`${AnchorStyle}`;
export default createStyleComponent("anchor", AnchorStyle);
