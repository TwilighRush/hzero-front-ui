import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const tooltipBaseStyle = (props) => {
  const {
    fontSize,
    backgroundColor,
    borderRadius,
    lineHeight,
    minWidth,
    maxWidth,
    boxPadding,
    boxShadow,
  } = getThemeData(props, 'tooltip');
  const { titleColor2, bgColor } = getThemeData(props, 'common');
  const tooltipType = 'c7n-tooltip';
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
    .${tooltipType}.${tooltipType} {
      line-height: ${lineHeight}px;
      font-size: ${fontSize}px;
      && {
        .${tooltipType}-content {
          .${tooltipType}-inner {
            min-width: ${minWidth}px;
            max-width: ${maxWidth}px;
            border-radius: ${borderRadius}px;
            background-color: ${backgroundColor};
            padding: ${boxPadding};
          }
          .${tooltipType}-inner-light {
            color: ${titleColor2};
            line-height: ${lineHeight}px;
            font-size: ${fontSize}px;
            background: ${bgColor};
            box-shadow: ${boxShadow};
          }
        }
      }
    }
  `;
};

export default tooltipBaseStyle;
