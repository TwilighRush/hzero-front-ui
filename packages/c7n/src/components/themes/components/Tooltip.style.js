import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const tooltipStyle = (props) => {
  const {
    fontFamily,
    fontSize,
    fontColor,
    backgroundColor,
    border,
    borderRadius,
    arrowColor,
    arrowBorderLeft,
    arrowBorderBottom,
    lineHeight,
    lightColor,
    borderColor,
    boxShadow,
    themeOriginal,
  } = getThemeData(props, "tooltip");
  const tooltipType = "c7n-pro-tooltip-popup";
  if (themeOriginal) {
    return css`
      .c7n-tooltip {
        && {
          .c7n-tooltip-content {
            .c7n-tooltip-inner-dark {
              border-radius: ${borderRadius}px;
              background-color: ${backgroundColor};
            }
          }
          /* 风铃紫 dark 主题箭头颜色修改 */
          &.c7n-tooltip-placement-top .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-topLeft .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-topRight .c7n-tooltip-arrow-dark {
            border-top-color: ${arrowColor};
          }
          &.c7n-tooltip-placement-right .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-rightTop .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-rightBottom .c7n-tooltip-arrow-dark {
            border-right-color: ${arrowColor};
          }
          &.c7n-tooltip-placement-left .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-leftTop .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-leftBottom .c7n-tooltip-arrow-dark {
            border-left-color: ${arrowColor};
          }
          &.c7n-tooltip-placement-bottom .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-bottomLeft .c7n-tooltip-arrow-dark,
          &.c7n-tooltip-placement-bottomRight .c7n-tooltip-arrow-dark {
            border-bottom-color: ${arrowColor};
          }
        }
      }
      /* 风铃紫 popup 箭头颜色修改 */
      .${tooltipType}-placement-left,
        .${tooltipType}-placement-leftTop,
        .${tooltipType}-placement-leftBottom {
        .${tooltipType}-arrow.${tooltipType}-arrow-dark {
          border-left-color: ${arrowColor};
        }
      }
      .${tooltipType}-placement-top,
        .${tooltipType}-placement-topLeft,
        .${tooltipType}-placement-topRight {
        .${tooltipType}-arrow.${tooltipType}-arrow-dark {
          border-top-color: ${arrowColor};
        }
      }
      .${tooltipType}-placement-right,
        .${tooltipType}-placement-rightTop,
        .${tooltipType}-placement-rightBottom {
        .${tooltipType}-arrow.${tooltipType}-arrow-dark {
          border-right-color: ${arrowColor};
        }
      }
      .${tooltipType}-placement-bottom,
        .${tooltipType}-placement-bottomLeft,
        .${tooltipType}-placement-bottomRight {
        .${tooltipType}-arrow.${tooltipType}-arrow-dark {
          border-bottom-color: ${arrowColor};
        }
      }
    `;
  }
  return css`
    .c7n-tooltip {
      && {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        .c7n-tooltip-content {
          position: relative;
          background-color: ${backgroundColor};
          border-radius: ${borderRadius}px;
          border: ${border};
          box-shadow: ${boxShadow};

          .c7n-tooltip-arrow {
            width: 0.13rem;
            height: 0.13rem;
            border: none;
            background-color: ${arrowColor};
            position: absolute;
            border-left: ${arrowBorderLeft};
            border-bottom: ${arrowBorderBottom};
            &.c7n-tooltip-arrow-light {
              background-color: #fff;
              border: 1px solid ${borderColor};
              border-right: none;
              border-top: none;
            }
          }
          .c7n-tooltip-inner {
            color: ${fontColor};
            line-height: ${lineHeight}px;
            font-size: ${fontSize}px;
            padding: 0.11rem 0.22rem;
            background-color: transparent;
            &.c7n-tooltip-inner-light {
              color: ${lightColor};
              background-color: #fff;
              border: 1px solid ${borderColor};
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

export default createStyleComponent("comp/tooltip", tooltipStyle, true);
