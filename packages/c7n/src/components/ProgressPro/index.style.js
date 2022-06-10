import styled, { css } from "styled-components";
import { getThemeData } from "@hzero-front-ui/core";

function getExtraStyle(props) {
  const d = getThemeData(props, "lineProgress");
  return css`
    .c7n-progress-line {
      .c7n-progress-bg {
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
      &.c7n-progress-status-normal {
        .c7n-progress-bg {
          position: relative;
          .bg-inner {
          }
        }
      }
      &.c7n-progress-status-exception {
        .c7n-progress-bg {
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
      &.c7n-progress-status-success {
        .c7n-progress-bg {
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

function getCircleStyle(props) {
  const d = getThemeData(props, "circleProgress");
  return css`
    .c7n-progress.c7n-progress-circle {
      padding: ${d.padding};
      border: ${d.border};
      border-bottom: ${props.type === "dashboard" ? "none" : undefined};
      border-radius: ${d.borderRadius};
      &.c7n-progress-status-normal .c7n-progress-circle-path {
        stroke: url(#c7nProUiProgressGradient-normal);
      }
      &.c7n-progress-status-normal {
        .c7n-progress-text {
          color: ${d.fontColor};
          font-size: ${d.fontSize};
          line-height: ${d.lineHeight};
          font-weight: ${d.fontWeight};
        }
      }
      &.c7n-progress-status-active {
        .c7n-progress-text {
          top: ${d.c7nProgressText};
          color: ${d.fontColor};
          font-size: ${d.fontSize};
          line-height: ${d.lineHeight};
          font-weight: ${d.fontWeight};
          &:before {
            content: "${d.activeprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            top: ${d.progressTexttop};
          }
        }
        .c7n-progress-text-bottom {
          &:before {
            content: "${d.activeprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            top: ${d.bottomProgressTexttop};
            margin: ${d.activeprogressTextMargin};
          }
        }
      }
      &.c7n-progress-status-active .c7n-progress-circle-path {
        stroke: url(#c7nProUiProgressGradient-active);
      }
      &.c7n-progress-status-exception .c7n-progress-circle-path {
        stroke: url(#c7nProUiProgressGradient-exception);
      }
      &.c7n-progress-status-exception {
        .c7n-progress-text {
          top: ${d.c7nProgressText};
          &:before {
            content: "${d.execprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            margin-left: ${d.progressTextMarginLeft};
            top: ${d.progressTexttop};
          }
          .icon {
            border-color: ${d.exceBorderColor};
            color: ${d.execColor};
            background-color: ${d.execBgColor};
          }
        }
        .c7n-progress-status-pointer-exception {
          fill: ${d.exceptionStopColors[0]};
        }
        .c7n-progress-text-bottom {
          &:before {
            content: "${d.activeprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            top: ${d.bottomProgressTexttop};
            margin: ${d.activeprogressTextMargin};
          }
          .icon {
            font-size: ${d.bottomProgressfontSize};
            &.icon-close:before {
              content: "${d.execBottomProgressText}";
            }
            color: ${d.execBgColor};
          }
        }
      }
      &.c7n-progress-status-success {
        .c7n-progress-text {
          top: ${d.c7nProgressText};
          &:before {
            content: "${d.succprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            margin-left: ${d.progressTextMarginLeft};
            top: ${d.progressTexttop};
          }
          .icon {
            border-color: ${d.succBorderColor};
            color: ${d.succColor};
            background-color: ${d.succBgColor};
          }
        }
        .c7n-progress-status-pointer-success {
          fill: ${d.successStopColors[0]};
        }
        .c7n-progress-text-bottom {
          &:before {
            content: "${d.activeprogressText}";
            font-family: ${d.progressTextFontFamily || "icomoon"};
            font-size: ${d.progressTextFontSize};
            color: ${d.progressTextColor};
            text-align: ${d.progressTextAligin};
            line-height: ${d.progressTextLineHeight};
            position: ${d.progressTextPosition};
            top: ${d.bottomProgressTexttop};
            margin: ${d.activeprogressTextMargin};
          }
          .icon {
            font-size: ${d.bottomProgressfontSize};
            &.icon-check:before {
              content: "${d.succBottomProgressText}";
            }
            color: ${d.succBgColor};
          }
        }
      }
      &.c7n-progress-status-success .c7n-progress-circle-path {
        stroke: url(#c7nProUiProgressGradient-success);
      }
      .c7n-progress-text {
        font-family: ${d.fontFamily};
        .icon {
          border: ${d.textBorder};
          border-radius: ${d.textRadius};
          padding: ${d.innerPadding}px;
          font-size: ${d.textIconFontSize};
        }
      }
      .c7n-progress-text-bottom {
        color: ${d.normalStopColors};
        font-size: ${d.bottomProgressfontSize};
        font-family: ${d.textBottomFontFamily};
        font-weight: ${d.textBottomFontWeight};
      }
      .c7n-progress-status-pointer-normal {
        fill: ${d.normalStopColors[0]};
      }
      .c7n-progress-inner {
        background: ${d.bgColor};
        overflow: hidden;
      }
    }
  `;
}

function getLineStyle(props) {
  const d = getThemeData(props, "lineProgress");
  return css`
    /* display: inline-block; */
    position: relative;
    width: ${props.type === "circle" || props.type === "dashboard"
      ? "auto"
      : "100%"};
    .c7n-progress-outer {
      width: calc(100% - 29px);
    }
    .c7n-progress-text {
      font-weight: normal;
      .icon {
        font-size: 0.15rem;
      }
    }
    .c7n-progress-line .c7n-progress-inner {
      /* height: ${d.height}px; */
      height: auto;
    }
    .c7n-progress-bg {
      height: ${d.height}px;
      position: relative;
    }
    .c7n-progress-line {
      .c7n-progress-inner {
        background: ${d.bg};
      }
      &.c7n-progress-status-normal,
      &.c7n-progress-status-active {
        .c7n-progress-bg {
          background: ${d.normalBg};
        }
        .c7n-progress-text .icon {
          color: ${d.normalBg};
        }
      }
      &.c7n-progress-status-exception {
        .c7n-progress-bg {
          background: ${d.exceptionBg};
        }
        .c7n-progress-text .icon {
          color: ${d.exceptionBg};
        }
      }
      &.c7n-progress-status-success {
        .c7n-progress-bg {
          background: ${d.successBg};
        }
        .c7n-progress-text .icon {
          color: ${d.successBg};
        }
      }
    }
    .c7n-progress-line .c7n-progress-text {
      width: 3em;
      .icon {
        display: ${d.hideRightIcon ? "none" : ""};
      }
    }
    ${getExtraStyle}
  `;
}

export const StyledContainer = styled.span`
  ${getCircleStyle}
  ${getLineStyle}
`;
