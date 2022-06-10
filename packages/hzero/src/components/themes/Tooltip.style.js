import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getToolTipStyle = (props) => {
  const {
    fontFamily,
    fontSize,
    fontColor,
    backgroundColor,
    border,
    borderRadius,
    // contentWidth,
    contentHeight,
    // arrowTransform,
    arrowColor,
    arrowBorderLeft,
    arrowBorderBottom,
  } = getThemeData(props, "tooltip");
  return css`
    .ant-tooltip.ant-tooltip.ant-tooltip {
      .ant-tooltip-content {
        min-height: ${contentHeight}px;
        height: auto;
        line-height: 32px;
        border: ${border};
        background: ${backgroundColor};
        border-radius: ${borderRadius}px;
        display: flex;
        justify-content: center;
        align-items: center;
        .ant-tooltip-arrow {
          border: none;
          width: 8px;
          height: 8px;
          background: ${arrowColor};
          transform: translateY(-4px) rotateZ(45deg);
          transform-origin: center;
          border-right: ${arrowBorderBottom};
          border-bottom: ${arrowBorderLeft};
        }
        .ant-tooltip-inner {
          font-family: ${fontFamily};
          font-size: ${fontSize}px;
          color: ${fontColor};
          padding: 0 16px;
          height: 100%;
          background: none;
        }
      }
      &.ant-tooltip-placement-top,
      &.ant-tooltip-placement-topLeft,
      &.ant-tooltip-placement-topRight {
        .ant-tooltip-arrow {
          bottom: 0;
        }
      }
      &.ant-tooltip-placement-bottom,
      &.ant-tooltip-placement-bottomLeft,
      &.ant-tooltip-placement-bottomRight {
        .ant-tooltip-arrow {
          border: none;
          top: 0;
          border-left: ${arrowBorderBottom};
          border-top: ${arrowBorderLeft};
          transform: translateY(4px) rotateZ(45deg);
          transform-origin: center;
        }
      }
    }
  `;
};
export default createStyleComponent("tooltip", getToolTipStyle, true);
