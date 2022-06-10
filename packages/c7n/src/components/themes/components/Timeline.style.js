import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const timeLineItem = (props) => {
  const data = getThemeData(props, "timeline");
  const {
    fontFamily,
    fontSize,
    fontColor,
    blueNodeBorderColor,
    blueNodeBgColor,
    greenNodeBorderColor,
    greenNodeBgColor,
    redNodeBorderColor,
    redNodeBgColor,
    yellowNodeBorderColor,
    yellowNodeBgColor,
    border,
    originalIcon,
  } = data;

  const themeNew = css`
    .c7n-timeline.c7n-timeline.c7n-timeline {
      overflow: hidden;
      padding-top: 8px;
      .c7n-timeline-item {
        .c7n-timeline-item-head {
          width: 0.1rem;
          height: 0.1rem;
          border: ${border}px solid transparent;
          border-radius: 50%;

          &:not(.c7n-timeline-item-head-blue),
          &:not(.c7n-timeline-item-head-green),
          &:not(.c7n-timeline-item-head-red),
          &:not(.c7n-timeline-item-head-yellow) {
            border-color: ${blueNodeBorderColor}!important;
            background: ${blueNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.c7n-timeline-item-head-blue {
            border-color: ${blueNodeBorderColor}!important;
            background: ${blueNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.c7n-timeline-item-head-green {
            border-color: ${greenNodeBorderColor}!important;
            background: ${greenNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.c7n-timeline-item-head-red {
            border-color: ${redNodeBorderColor}!important;
            background: ${redNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.c7n-timeline-item-head-yellow {
            border-color: ${yellowNodeBorderColor}!important;
            background: ${yellowNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.c7n-timeline-item-head-custom {
            width: auto;
            height: auto;
            background-color: #fff !important;
            border-color: rgba(0, 0, 0, 0) !important;
          }
        }
        .c7n-timeline-item-tail {
          border-left: 0.01rem solid #e8ebee;
          &:first-child {
            /* height: 0.55rem; */
            top: -0.15rem;
          }
        }
        .c7n-timeline-item-content {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          line-height: 0.2rem;
          height: auto;
          color: ${fontColor};
        }
        &.c7n-timeline-item-last {
          .c7n-timeline-item-tail {
            display: inline-block;
          }
        }
      }
    }
  `;

  const themeOriginal = css`
    .c7n-timeline.c7n-timeline.c7n-timeline {
      .c7n-timeline-item-head-blue {
        border-color: ${blueNodeBorderColor};
      }
      .c7n-timeline-item-head-red {
        border-color: ${redNodeBorderColor};
      }
      .c7n-timeline-item-head-green {
        border-color: ${greenNodeBorderColor};
      }
      .c7n-timeline-item-head-yellow {
        border-color: ${yellowNodeBorderColor};
      }
    }
  `;

  return css`
    ${originalIcon ? themeOriginal : themeNew}
  `;
};
export default createStyleComponent("comp/timeline", timeLineItem);
