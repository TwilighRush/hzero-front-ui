import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const tooltipBaseStyle = (props) => {
  const {
    fontSize,
    fontColor,
    backgroundColor,
    border,
    borderRadius,
    arrowColor,
    arrowBorderLeft,
    arrowBorderBottom,
    lineHeight,
    themeOriginal,
    minWidth,
    maxWidth,
    innerPadding,
    darkBoxShadow,
  } = getThemeData(props, 'tooltip');
  if (themeOriginal) {
    return css`
      .c7n-tooltip-placement-left .c7n-tooltip-arrow,
      .c7n-tooltip-placement-leftTop .c7n-tooltip-arrow,
      .c7n-tooltip-placement-leftBottom .c7n-tooltip-arrow {
        &.c7n-tooltip-arrow-dark {
          border-left-color: ${arrowColor};
        }
      }
      .c7n-tooltip-placement-top .c7n-tooltip-arrow,
      .c7n-tooltip-placement-topLeft .c7n-tooltip-arrow,
      .c7n-tooltip-placement-topRight .c7n-tooltip-arrow {
        &.c7n-tooltip-arrow-dark {
          border-top-color: ${arrowColor};
        }
      }
      .c7n-tooltip-placement-right .c7n-tooltip-arrow,
      .c7n-tooltip-placement-rightTop .c7n-tooltip-arrow,
      .c7n-tooltip-placement-rightBottom .c7n-tooltip-arrow {
        &.c7n-tooltip-arrow-dark {
          border-right-color: ${arrowColor};
        }
      }
      .c7n-tooltip-placement-bottom .c7n-tooltip-arrow,
      .c7n-tooltip-placement-bottomLeft .c7n-tooltip-arrow,
      .c7n-tooltip-placement-bottomRight .c7n-tooltip-arrow {
        &.c7n-tooltip-arrow-dark {
          border-bottom-color: ${arrowColor};
        }
      }
      .c7n-tooltip.c7n-tooltip {
        line-height: ${lineHeight}px;
        font-size: ${fontSize}px;
        && {
          .c7n-tooltip-content {
            .c7n-tooltip-inner {
              min-width: ${minWidth}px;
              max-width: ${maxWidth}px;
              border-radius: ${borderRadius}px;
              background-color: ${backgroundColor};
              padding: ${innerPadding};
            }
            .c7n-tooltip-inner-dark {
              box-shadow: ${darkBoxShadow};
            }
          }
        }
      }
    `;
  }
  return css`
    .c7n-tooltip.c7n-tooltip {
      && {
        font-size: ${fontSize}px;
        .c7n-tooltip-content {
          position: relative;
          background-color: ${backgroundColor};
          border-radius: ${borderRadius}px;
          border: ${border};
          box-shadow: 0 0.02rem 0.06rem 0 rgba(79, 125, 231, 0.5);

          .c7n-tooltip-arrow {
            width: 0.13rem;
            height: 0.13rem;
            border: none;
            background-color: ${arrowColor};
            position: absolute;
            border-left: ${arrowBorderLeft};
            border-bottom: ${arrowBorderBottom};
          }
          .c7n-tooltip-inner {
            color: ${fontColor};
            line-height: ${lineHeight}px;
            font-size: ${fontSize}px;
            padding: 0.11rem 0.22rem;
            background-color: transparent;
            &.c7n-tooltip-inner-dark {
              box-shadow: ${darkBoxShadow};
            }
          }
        }

        &.c7n-tooltip-placement-top .c7n-tooltip-arrow {
          transform: translateY(50%) rotate(-45deg);
          bottom: 0;
        }

        &.c7n-tooltip-placement-topLeft .c7n-tooltip-arrow {
          transform: translateY(50%) rotate(-45deg);
          bottom: 0;
        }

        &.c7n-tooltip-placement-topRight .c7n-tooltip-arrow {
          transform: translateY(50%) rotate(-45deg);
          bottom: 0;
        }

        &.c7n-tooltip-placement-right .c7n-tooltip-arrow {
          transform: translateX(-75%) rotate(45deg);
        }

        &.c7n-tooltip-placement-rightTop .c7n-tooltip-arrow {
          transform: translateX(-75%) rotate(45deg);
        }

        &.c7n-tooltip-placement-rightBottom .c7n-tooltip-arrow {
          transform: translateX(-75%) rotate(45deg);
        }

        &.c7n-tooltip-placement-left .c7n-tooltip-arrow {
          transform: translateX(75%) rotate(-135deg);
        }

        &.c7n-tooltip-placement-leftTop .c7n-tooltip-arrow {
          transform: translateX(75%) rotate(-135deg);
        }
        &.c7n-tooltip-placement-leftBottom .c7n-tooltip-arrow {
          transform: translateX(75%) rotate(-135deg);
        }

        &.c7n-tooltip-placement-bottom .c7n-tooltip-arrow {
          transform: translateY(-75%) rotate(135deg);
        }
        &.c7n-tooltip-placement-bottomLeft .c7n-tooltip-arrow {
          transform: translateY(-75%) rotate(135deg);
        }
        &.c7n-tooltip-placement-bottomRight .c7n-tooltip-arrow {
          transform: translateY(-75%) rotate(135deg);
        }
      }
    }
  `;
};

export default tooltipBaseStyle;
