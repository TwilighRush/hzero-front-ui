import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getBadgeStyle = (props) => {
  const {
    bgColor = "#F13131",
    fontColor = "#fff",
    processingColor = "#3f51b5",
    fontSize,
    height,
    radius,
    dotSize,
    padding,
    pNumberHeight,
    countTop,
  } = getThemeData(props, "badge");
  return css`
    .c7n-badge {
      .c7n-badge-count {
        background-color: ${bgColor};
      }
      && {
        .c7n-badge-count {
          color: ${fontColor};
          font-size: ${fontSize}px;
          /* height: ${height}px; */
          /* line-height: ${height - 2}px; */
          /* border-radius: ${radius}px; */
          z-index: 5;
          top: ${countTop};
        }
        .c7n-scroll-number-only > p {
          height: ${pNumberHeight};
        }
        .c7n-badge-dot {
          background-color: ${bgColor};
          width: ${dotSize}px;
          height: ${dotSize}px;
        }
        .c7n-badge-multiple-words {
          padding: ${padding};
        }
      }
      && .c7n-badge-status-processing {
        position: absolute;
        /* height: ${dotSize - 2}px;
        width: ${dotSize - 2}px; */
        background-color: ${processingColor};
      }
      && {
        .c7n-badge-status-pink {
          background: #eb2f96;
        }
        .c7n-badge-status-magenta {
          background: #eb2f96;
        }
        .c7n-badge-status-red {
          background: #d50000;
        }
        .c7n-badge-status-volcano {
          background: #fa541c;
        }
        .c7n-badge-status-orange {
          background: #fa8c16;
        }
        .c7n-badge-status-yellow {
          background: #fadb14;
        }
        .c7n-badge-status-gold {
          background: #faad14;
        }
        .c7n-badge-status-cyan {
          background: #13c2c2;
        }
        .c7n-badge-status-lime {
          background: #a0d911;
        }
        .c7n-badge-status-green {
          background: #00bf96;
        }
        .c7n-badge-status-blue {
          background: #3f51b5;
        }
        .c7n-badge-status-geekblue {
          background: #2f54eb;
        }
        .c7n-badge-status-purple {
          background: #8e44ad;
        }
        .c7n-badge-status-dark {
          background: #2f353b;
        }
        .c7n-badge-status-gray {
          background: #808080;
        }
      }
      & {
        .c7n-badge-status-error {
          background: ${bgColor};
        }
        .c7n-badge-status-processing {
          background-color: #3f51b5;
        }
        .c7n-badge-status-success {
          background: #00bf96;
        }
        .c7n-badge-status-warning {
          background-color: rgb(250, 171, 0);
        }
      }
    }
  `;
};

export default createStyleComponent("comp/badge", getBadgeStyle);
