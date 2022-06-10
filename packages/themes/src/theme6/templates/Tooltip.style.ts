/* eslint-disable camelcase */
import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const tooltipProStyle = (props) => {
  const {
    fontSize,
    fontColor,
    backgroundColor,
    borderRadius,
    arrowColor,
    lineHeight,
    minWidth,
    maxWidth,
    darkBoxShadow,
    lightBoxShadow,
    innerPadding,
  } = getThemeData(props, 'tooltip');
  return css`
    .c7n-pro-tooltip-popup-placement-left .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-leftTop .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-leftBottom .c7n-pro-tooltip-popup-arrow {
      &.c7n-pro-tooltip-popup-arrow-dark {
        border-left-color: ${arrowColor};
      }
    }
    .c7n-pro-tooltip-popup-placement-top .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-topLeft .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-topRight .c7n-pro-tooltip-popup-arrow {
      &.c7n-pro-tooltip-popup-arrow-dark {
        border-top-color: ${arrowColor};
      }
    }
    .c7n-pro-tooltip-popup-placement-right .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-rightTop .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-rightBottom .c7n-pro-tooltip-popup-arrow {
      &.c7n-pro-tooltip-popup-arrow-dark {
        border-right-color: ${arrowColor};
      }
    }
    .c7n-pro-tooltip-popup-placement-bottom .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-bottomLeft .c7n-pro-tooltip-popup-arrow,
    .c7n-pro-tooltip-popup-placement-bottomRight .c7n-pro-tooltip-popup-arrow {
      &.c7n-pro-tooltip-popup-arrow-dark {
        border-bottom-color: ${arrowColor};
      }
    }
    .c7n-pro-tooltip-popup.c7n-pro-tooltip-popup:not(.c7n-pro-form-tooltip) {
      && {
        border-radius: ${borderRadius}px;
        .c7n-pro-tooltip-popup-arrow-dark {
          background-color: ${arrowColor};
          background-clip: content-box;
        }
        .c7n-pro-tooltip-popup-inner-dark {
          color: ${fontColor};
          line-height: ${lineHeight}px;
          font-size: ${fontSize}px;
          background-color: ${backgroundColor};
          box-shadow: ${darkBoxShadow};
        }
        .c7n-pro-tooltip-popup-inner-light {
          color: #686868;
          line-height: ${lineHeight}px;
          font-size: ${fontSize}px;
          background: #ffffff;
          box-shadow: ${lightBoxShadow};
        }
        .c7n-pro-tooltip-popup-inner {
          min-width: ${minWidth}px;
          max-width: ${maxWidth}px;
          border-radius: ${borderRadius}px;
          padding: ${innerPadding};
        }
      }
    }
  `;
};

export default tooltipProStyle;
