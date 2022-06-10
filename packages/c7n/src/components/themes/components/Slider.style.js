import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getSliderStyle(props) {
  const d = getThemeData(props, "slider");
  return css`
    .c7n-pro-range-wrapper.c7n-pro-range-wrapper.c7n-pro-range-vertical {
      .c7n-pro-range-track {
        height: 100%;
      }
      .c7n-pro-range-draghandle {
        top: initial;
      }
      .c7n-slider-indicator {
        left: 100%;
        top: 0;
      }
    }
    .c7n-pro-range-wrapper.c7n-pro-range-wrapper,
    .c7n-slider.c7n-slider {
      flex: 1;
      /* margin-bottom: 0.24rem; */
      &.c7n-pro-range-disabled,
      &.c7n-slider-disabled {
        .c7n-pro-range-draghandle {
          border: ${d.disableBorder};
        }
        .c7n-pro-range-draghandle,
        .c7n-slider-handle {
          background-image: url("${d.disabledImage}");
        }
        .c7n-slider-indicator {
          color: ${d.disabledIndicatorColor};
        }
        .c7n-slider-track,
        .c7n-pro-range-track {
          background-image: none;
          background: ${d.disabledBg};
        }
      }

      .c7n-pro-range-selection,
      .c7n-slider-track {
        height: 4px;
        border-radius: ${d.trackRadius}px;
        background: ${d.trackBg};
      }
      /* .c7n-pro-range-track, */
      .c7n-slider-rail {
        border-radius: ${d.trackRadius}px;
        background: ${d.railBg};
      }
      .c7n-pro-range-draghandle,
      .c7n-slider-handle {
        width: ${d.handleWidth}px;
        height: ${d.handleHeight}px;
        margin-top: ${d.marginTop};
        margin-left: ${d.marginLeft};
        background: ${d.background || `url(${d.enableImage})`};
        background-size: cover;
        border: ${d.handleBorder};
        border-radius: ${d.handleRadius}px;
        :focus {
          box-shadow: ${d.focusedShadow};
        }
        :hover {
          border-color: ${d.trackBg};
        }
      }
      &.c7n-pro-range-vertical {
        .c7n-pro-range-draghandle {
          margin-left: ${d.verticalDraghandleMarginLeft};
        }
      }
      &:hover .c7n-slider-track {
        background-color: ${d.trackBg};
      }
    }
    .c7n-slider-indicator.c7n-slider-indicator {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: ${d.handleWidth}px;
      height: ${d.handleHeight}px;
      text-align: center;
      color: ${d.indicatorColor};
    }
    .c7n-slider-vertical {
      .c7n-slider-indicator {
        position: absolute;
        top: 0;
        left: 100%;
      }
    }
    .c7n-slider-with-marks {
      .c7n-slider-indicator {
        display: none;
      }
    }
  `;
}

export default createStyleComponent("comp/slider", getSliderStyle);
