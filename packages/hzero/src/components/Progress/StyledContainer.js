import styled, { css } from "styled-components";
import { getThemeData } from "@hzero-front-ui/core/lib/utils";
//
// const circleMap = {
//   [StyleTypes.themeOne]: "",
//   [StyleTypes.themeTwo]: css`
//     .ant-progress-circle {
//       .ant-progress-inner {
//         width: 120px !important;
//         position: relative;
//         height: 80px !important;
//         overflow: hidden;
//         border-radius: 0;
//         svg.ant-progress-circle {
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//         .ant-progress-text {
//           transform: translateY(20%);
//         }
//       }
//     }
//   `,
// };

function getExtraStyle(props) {
  const d = getThemeData(props, "lineProgress");
  return css`
    .ant-progress-line {
      .ant-progress-bg {
        .bg-inner {
          display: ${d.showExtra ? "block" : "none"};
          position: absolute;
          right: -${d.extraSize / 2}px;
          top: calc(50% - ${d.extraSize / 2}px);
          width: ${d.extraSize}px;
          height: ${d.extraSize}px;
          background: ${d.extraBg};
          border: 1px solid ${d.extraBorderColor};
          border-radius: ${d.extraRadius};
          span {
            content: "";
            box-sizing: border-box;
            position: absolute;
            left: calc(50% - 6px);
            top: calc(50% - 6px);
            width: 12px;
            height: 12px;
            border-radius: ${d.extraRadius};
            border: 4px solid ${d.normalBg};
            background: #fff;
          }
        }
      }
      &.ant-progress-status-normal {
        .ant-progress-bg {
          position: relative;
          .bg-inner {
          }
        }
      }
      &.ant-progress-status-exception {
        .ant-progress-bg {
          .bg-inner {
            span {
              border-color: ${d.exceptionBg};
              background: ${d.exceptionBg};
            }
            :after,
            :before {
              content: "";
              width: 10px;
              border-bottom: 2px solid #fff;
              position: absolute;
              top: calc(50% - 1px);
              left: 50%;
              transform: translateX(-50%) rotate(45deg);
            }
            :before {
              transform: translateX(-50%) rotate(-45deg);
              z-index: 2;
            }
          }
        }
      }
      &.ant-progress-status-success {
        .ant-progress-bg {
          .bg-inner {
            span {
              border-color: ${d.successBg};
              background: ${d.successBg};
            }
            :after {
              content: "";
              width: 10px;
              height: 4px;
              border-bottom: 1px solid #fff;
              border-left: 1px solid #fff;
              position: absolute;
              top: calc(50% - 3px);
              left: 50%;
              transform: translateX(-45%) rotate(-45deg);
            }
          }
        }
      }
    }
  `;
}

function getStyle(props) {
  const d = getThemeData(props, "lineProgress");
  const c = getThemeData(props, "circleProgress");
  return css`
    display: inline-block;
    position: relative;
    width: ${props.type !== "circle" ? "100%" : "auto"};
    .ant-progress-inner {
      height: ${d.height}px;
    }
    .ant-progress-bg {
      height: ${d.height}px !important;
      position: relative;
    }
    .ant-progress-line .ant-progress-inner {
      background: ${d.bg};
    }
    .ant-progress-line {
      .ant-progress-inner {
        background: ${d.bg};
      }
      .ant-progress-success-bg, 
      .ant-progress-bg{
          background: ${d.normalBg};
      }
      &.ant-progress-status-normal {
        .ant-progress-bg {
          background: ${d.normalBg};
        }
      }
      &.ant-progress-status-exception {
        .ant-progress-bg {
          background: ${d.exceptionBg};
        }
      }
      &.ant-progress-status-success {
        .ant-progress-bg {
          background: ${d.successBg};
        }
      }
    }
    .ant-progress-text {
      font-weight: normal;
      .anticon {
        display: ${d.hideRightIcon ? "none" : ""};
      }
    }
    ${getExtraStyle}
    .ant-progress-circle-path {
      stroke: url(#hzeroUiProgressGradient-normal);
    }
    .ant-progress-status-success .ant-progress-circle-path {
      stroke: url(#hzeroUiProgressGradient-success);
    }
    .ant-progress-status-exception .ant-progress-circle-path {
      stroke: url(#hzeroUiProgressGradient-exception);
    }
    .ant-progress-status-normal .ant-progress-circle-path {
      stroke: url(#hzeroUiProgressGradient-normal);
    }

    .ant-progress-status-normal .ant-progress-text {
      color: ${c.fontColor};
    }
    .ant-progress-status-active .ant-progress-text {
      color: ${c.fontColor};
    }
    .ant-progress-status-success {
      .ant-progress-text .anticon {
        border-color: ${c.succBorderColor}!important;
      }
    }
    .ant-progress-status-exception {
      .ant-progress-text .anticon {
        border-color: ${c.exceBorderColor}!important;
        color: ${c.execColor};
      }
    }
    .ant-progress-circle .ant-progress-text .anticon {
      border: ${c.border};
      border-radius: ${c.textRadius};
      padding: ${c.innerPadding}px;
    }
  `;
}

const BaseStyledContainer = styled.span`
  ${getStyle}
`;
export default BaseStyledContainer;
