/* eslint-disable camelcase */
import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const tooltipProStyle = (props) => {
  const {
    fontSize,
    borderRadius,
    lineHeight,
    minWidth,
    maxWidth,
    boxShadow,
    backgroundColor,
    boxPadding,
  } = getThemeData(props, 'tooltip');
  const { fontColor, titleColor2, bgColor } = getThemeData(props, 'common');
  const tooltipType = 'c7n-pro-tooltip-popup';
  return css`
    .${tooltipType}-placement-left,
      .${tooltipType}-placement-leftTop,
      .${tooltipType}-placement-leftBottom {
      .${tooltipType}-arrow.${tooltipType}-arrow-dark {
        border-left-color: ${titleColor2};
      }
    }
    .${tooltipType}-placement-top,
      .${tooltipType}-placement-topLeft,
      .${tooltipType}-placement-topRight {
      .${tooltipType}-arrow.${tooltipType}-arrow-dark {
        border-top-color: ${titleColor2};
      }
    }
    .${tooltipType}-placement-right,
      .${tooltipType}-placement-rightTop,
      .${tooltipType}-placement-rightBottom {
      .${tooltipType}-arrow.${tooltipType}-arrow-dark {
        border-right-color: ${titleColor2};
      }
    }
    .${tooltipType}-placement-bottom,
      .${tooltipType}-placement-bottomLeft,
      .${tooltipType}-placement-bottomRight {
      .${tooltipType}-arrow.${tooltipType}-arrow-dark {
        border-bottom-color: ${titleColor2};
      }
    }
    .${tooltipType}.${tooltipType}:not(.c7n-pro-form-tooltip) {
      && {
        border-radius: ${borderRadius}px;
        .${tooltipType}-arrow-dark {
          background-clip: content-box;
        }
        .${tooltipType}-inner-dark {
          color: ${fontColor};
          line-height: ${lineHeight}px;
          font-size: ${fontSize}px;
          background-color: ${backgroundColor};
        }
        .${tooltipType}-inner-light {
          color: ${titleColor2};
          line-height: ${lineHeight}px;
          font-size: ${fontSize}px;
          background: ${bgColor};
          box-shadow: ${boxShadow};
        }
        .${tooltipType}-inner {
          min-width: ${minWidth}px;
          max-width: ${maxWidth}px;
          border-radius: ${borderRadius}px;
          padding: ${boxPadding};
        }
      }
    }
  `;
};

export default tooltipProStyle;
