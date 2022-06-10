/* eslint-disable camelcase */
import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getVersion1_3Css = () => {
  return isVersionLargeThan("1.3.0")
    ? css`
        .c7n-pro-tooltip-popup:not(.c7n-pro-form-tooltip) {
          && {
            > div {
              position: relative;
            }
          }
        }
      `
    : "";
};

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
  if (themeOriginal) {
    return css`
      .c7n-pro-tooltip-popup:not(.c7n-pro-form-tooltip) {
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
          }
        }
      }
    `;
  }
  return css`
    .c7n-pro-tooltip-popup:not(.c7n-pro-form-tooltip) {
      && {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        background-color: ${backgroundColor};
        border-radius: ${borderRadius}px;
        border: ${border};
        box-shadow: ${boxShadow};

        .c7n-pro-tooltip-popup-arrow {
          width: 0.13rem;
          height: 0.13rem;
          border: none;
          background-color: ${arrowColor};
          position: absolute;
          border-left: ${arrowBorderLeft};
          border-bottom: ${arrowBorderBottom};
          transform-origin: center;
          z-index: 2;
          &.c7n-pro-tooltip-popup-arrow-light {
            background-color: #fff;
            border: 1px solid ${borderColor};
            border-right: none;
            border-top: none;
          }
        }
        /* top */
        &.c7n-pro-tooltip-popup-placement-top .c7n-pro-tooltip-popup-arrow {
          bottom: -6px;
          transform: rotate(-45deg);
        }

        &.c7n-pro-tooltip-popup-placement-topLeft .c7n-pro-tooltip-popup-arrow {
          bottom: -6px;
          transform: rotate(-45deg);
        }

        &.c7n-pro-tooltip-popup-placement-topRight
          .c7n-pro-tooltip-popup-arrow {
          bottom: -6px;
          transform: rotate(-45deg);
        }
        /* right */
        &.c7n-pro-tooltip-popup-placement-right .c7n-pro-tooltip-popup-arrow {
          left: -6px;
          transform: rotate(45deg);
        }

        &.c7n-pro-tooltip-popup-placement-rightTop
          .c7n-pro-tooltip-popup-arrow {
          left: -6px;
          transform: rotate(45deg);
        }

        &.c7n-pro-tooltip-popup-placement-rightBottom
          .c7n-pro-tooltip-popup-arrow {
          left: -6px;
          transform: translateY(-2px) rotate(45deg);
        }
        /* left */
        &.c7n-pro-tooltip-popup-placement-left .c7n-pro-tooltip-popup-arrow {
          right: -6px;
          transform: rotate(-135deg);
        }

        &.c7n-pro-tooltip-popup-placement-leftTop .c7n-pro-tooltip-popup-arrow {
          right: -6px;
          transform: rotate(-135deg);
        }
        &.c7n-pro-tooltip-popup-placement-leftBottom
          .c7n-pro-tooltip-popup-arrow {
          right: -6px;
          transform: translateY(-2px) rotate(-135deg);
        }
        /* bottom */
        &.c7n-pro-tooltip-popup-placement-bottom .c7n-pro-tooltip-popup-arrow {
          top: -6px;
          transform: rotate(135deg);
        }
        &.c7n-pro-tooltip-popup-placement-bottomLeft
          .c7n-pro-tooltip-popup-arrow {
          top: -6px;
          transform: rotate(135deg);
        }
        &.c7n-pro-tooltip-popup-placement-bottomRight
          .c7n-pro-tooltip-popup-arrow {
          top: -6px;
          transform: rotate(135deg);
        }

        .c7n-pro-tooltip-popup-inner {
          color: ${fontColor};
          line-height: ${lineHeight}px;
          font-size: ${fontSize}px;
          padding: 0.11rem 0.22rem;
          background-color: ${backgroundColor};
          &.c7n-pro-tooltip-popup-inner-light {
            color: ${lightColor};
            background-color: #fff;
            border: 1px solid ${borderColor};
          }
        }
      }
    }

    ${getVersion1_3Css}
  `;
};

export default createStyleComponent("tooltip", tooltipStyle);

function isVersionLargeThan(ver = "") {
  // eslint-disable-next-line global-require
  const { version = "" } = require("choerodon-ui/package.json");
  const pkgVersion = version
    .split(".")
    .map((v) => v.replace(/-.+/, ""))
    .map(Number);
  const toCompare = ver
    .split(".")
    .map((v) => v.replace(/-.+/, ""))
    .map(Number);

  return (
    toCompare[0] <= pkgVersion[0] &&
    toCompare[1] <= pkgVersion[1] &&
    toCompare[2] <= pkgVersion[2]
  );
}
