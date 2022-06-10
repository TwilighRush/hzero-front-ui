import { keyframes, css } from "styled-components";

import {
  getThemeData,
  hexToRgbaColor,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

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

const getStyledSpin = (props) => {
  const d = getThemeData(props, "spin");
  const likeRotate = getKeyFrame(d.dotColor || d.circleColor); // 主要是为了表格内部loading的颜色
  return css`
    .ant-spin.ant-spin {
      .ant-spin-dot {
        width: ${d.size}px;
        height: ${d.size}px;
      }
      .ant-spin-dot.ant-spin-dot-spin {
        animation: none;
        transform: rotate(0deg);
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          width: 50px;
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

export default createStyleComponent("spin", getStyledSpin);
