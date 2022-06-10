import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getSliderCss(props) {
  const data = getThemeData(props, "slider");
  return css`
    position: relative;
    flex: 1;
    width: 100%;
    && {
      padding-bottom: 20px;
    }
    .ant-slider-rail {
      background: ${data.railBg};
    }
    .ant-slider-track {
      background: ${data.trackBg};
      border-radius: ${data.trackRadius}px;
    }
    .ant-slider-handle {
      position: relative;
      width: ${data.handleWidth}px;
      height: ${data.handleHeight}px;
      border-radius: ${data.handleRadius}px;
      border: ${data.handleBorder};
      background-image: url(${data.enableImage});
      background-position: center;
      background-size: cover;
      transform: ${data.iconTransform};
      overflow: visible;
      :hover,
      :focus {
        box-shadow: ${data.focusedShadow};
        transition: box-shadow 0.3s;
      }
      .slider-handle-underlay {
        display: ${data.showIndicator ? "block" : "none"};
        color: #4f7de7;
        position: absolute;
        top: calc(100% + 2px);
        left: calc(50% - 8px);
        width: 16px;
        height: 16px;
        font-size: 12px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 0;
        text-align: center;
        white-space: nowrap;
        z-index: 10;
      }
    }
    &.ant-slider-disabled {
      .ant-slider-track {
        background: ${data.disabledIndicatorColor};
      }
      .ant-slider-handle {
        background-image: url(${data.disabledImage});
        > .slider-handle-underlay {
          color: ${data.disabledIndicatorColor};
        }
      }
    }
  `;
}

const sliderStyle = css`
  .ant-slider {
    ${getSliderCss};
  }
`;

export default createStyleComponent("slider", sliderStyle);
