import { keyframes, css } from "styled-components";
import {
  getThemeData,
  hexToRgbaColor,
  createStyleComponent,
} from "@hzero-front-ui/core";

function getKeyFrame(color) {
  return keyframes`
  0% {
    transform: scale(0.2);
  }

  15% {
    transform: scale(1);
    background: ${hexToRgbaColor(color, 1)};
  }

  75% {
    background: ${hexToRgbaColor(color, 0.6)};
  }

  100% {
    background: ${hexToRgbaColor(color, 0)};
    transform: scale(0);
  }
`;
}

const getSpinCss = (props) => {
  const d = getThemeData(props, "spin");
  const { primary } = getThemeData(props, "common");
  const likeRotate = getKeyFrame(primary);
  return css`
    .c7n-spin.c7n-spin {
      .c7n-spin-dot {
        width: 24px;
        height: 24px;
      }
      &.c7n-spin-sm .c7n-spin-dot {
        width: 14px;
        height: 14px;
      }
      &.c7n-spin-lg .c7n-spin-dot {
        width: 40px;
        height: 40px;
      }
    }
    #c7n-loading-circle {
      fill: ${d.fillColor}!important;
    }
    .c7n-spin-text {
      color: ${d.circleColor};
    }
    .c7n-spin {
      position: relative;
      .c7n-spin-themed-dot.c7n-spin-dot {
        animation: none;
        transform: rotate(0deg);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 100%;
          height: 10px;
          background-color: transparent;
          display: flex;
          justify-content: space-between;
          position: absolute;
          align-self: center;
          animation: none;
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            left: unset;
            top: unset;
            right: unset;
            bottom: unset;
            opacity: unset;
          }
          &:nth-child(1) {
            transform: rotate(45deg) scale(1);
          }
          &:nth-child(2) {
            transform: rotate(0deg) scale(1);
          }
          &:nth-child(3) {
            transform: rotate(-45deg) scale(1);
          }
          &:nth-child(4) {
            transform: rotate(90deg) scale(1);
          }
          &:before,
          &:after {
            content: "";
            height: 10px !important;
            width: 10px !important;
            border-radius: 50%;
            display: block;
          }
          &:nth-child(1):before {
            animation: ${likeRotate} 1.6s linear 0s infinite;
          }

          &:nth-child(1):after {
            animation: ${likeRotate} 1.6s linear 0.8s infinite;
          }

          &:nth-child(2):before {
            animation: ${likeRotate} 1.6s linear 1.4s infinite;
          }

          &:nth-child(2):after {
            animation: ${likeRotate} 1.6s linear 0.6s infinite;
          }

          &:nth-child(3):before {
            animation: ${likeRotate} 1.6s linear 1.2s infinite;
          }

          &:nth-child(3):after {
            animation: ${likeRotate} 1.6s linear 0.4s infinite;
          }

          &:nth-child(4):before {
            animation: ${likeRotate} 1.6s linear 0.2s infinite;
          }

          &:nth-child(4):after {
            animation: ${likeRotate} 1.6s linear 1s infinite;
          }
        }
      }
    }
  `;
};

export default createStyleComponent("comp/spin", getSpinCss);
