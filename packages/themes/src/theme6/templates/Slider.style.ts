import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

function getSliderStyle(props) {
  const d = getThemeData(props, 'slider');
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
      &.c7n-pro-range-disabled,
      &.c7n-slider-disabled {
        .c7n-pro-range-draghandle {
          border: ${d.disableBorder};
        }
        .c7n-pro-range-draghandle,
        .c7n-slider-handle {
          background-image: url('${d.disabledImage}');
        }
        .c7n-slider-indicator {
          color: ${d.disabledIndicatorColor};
        }
        .c7n-slider-track {
          background: ${d.disabledBg};
        }
      }

      .c7n-pro-range-selection,
      .c7n-slider-track {
        height: 6px;
        border-radius: ${d.trackRadius}px;
        background: ${d.trackBg};
      }
      .c7n-pro-range-track,
      .c7n-slider-rail {
        height: 6px;
        border-radius: ${d.trackRadius}px;
        background: ${d.railBg};
      }
      .c7n-pro-range-draghandle,
      .c7n-slider-handle {
        position: absolute;
        width: ${d.handleWidth}px;
        height: ${d.handleHeight}px;
        top: calc(50% - ${d.handleHeight / 2}px);
        margin: 0;
        margin-top: ${d.marginTop};
        margin-left: ${d.marginLeft};
        background: ${d.background || `url(${d.enableImage})`};
        background-size: cover;
        border: ${d.handleBorder};
        border-radius: ${d.handleRadius}px;
        :focus {
          box-shadow: ${d.focusedShadow};
        }
      }
      &.c7n-pro-range-vertical {
        .c7n-pro-range-draghandle {
          margin-left: ${d.verticalDraghandleMarginLeft};
        }
      }
    }
    .c7n-slider-indicator.c7n-slider-indicator {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      width: ${d.handleWidth}px;
      height: ${d.handleHeight}px;
      text-align: center;
      color: ${d.indicatorColor};
    }
  `;
}

export default getSliderStyle;
