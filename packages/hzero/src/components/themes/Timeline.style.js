import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const timeLineItem = props => {
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
  } = data;
  return css`
    .ant-timeline.ant-timeline.ant-timeline {
      overflow: hidden;
      padding-top: 8px;
      .ant-timeline-item {
        .ant-timeline-item-head {
          border: ${border}px solid transparent;
          border-radius: 50%;

          &:not(.ant-timeline-item-head-blue),
          &:not(.ant-timeline-item-head-green),
          &:not(.ant-timeline-item-head-red),
          &:not(.ant-timeline-item-head-yellow) {
            border-color: ${blueNodeBorderColor}!important;
            background: ${blueNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.ant-timeline-item-head-blue {
            border-color: ${blueNodeBorderColor}!important;
            background: ${blueNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.ant-timeline-item-head-green {
            border-color: ${greenNodeBorderColor}!important;
            background: ${greenNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.ant-timeline-item-head-red {
            border-color: ${redNodeBorderColor}!important;
            background: ${redNodeBgColor}!important;
            background-clip: padding-box !important;
          }
          &.ant-timeline-item-head-yellow {
            border-color: ${yellowNodeBorderColor}!important;
            background: ${yellowNodeBgColor}!important;
            background-clip: padding-box !important;
          }
        }
        .ant-timeline-item-tail {
          border-left: 1px solid #e8ebee;
          &:first-child {
            /* height: 55px; */
            top: -15px;
          }
        }
        .ant-timeline-item-content {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          line-height: 20px;
          /* height: 20px; */
          color: ${fontColor};
        }
        &.ant-timeline-item-last {
          .ant-timeline-item-tail {
            display: inline-block;
          }
        }
      }
    }
  `;
};
export default createStyleComponent("timeline", timeLineItem);
