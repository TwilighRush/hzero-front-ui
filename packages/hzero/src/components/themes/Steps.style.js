import { css, keyframes } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getAfterWidth = (w) => Math.floor(Math.sqrt((w * w) / 2));

function getBaseStyle(d) {
  return css`
    .ant-steps.ant-steps-horizontal {
      &&:not(.ant-steps-label-vertical) .ant-steps-item {
        margin-right: 0;
      }
      .ant-steps-item {
        position: relative;
        margin: 0;
        background: none;
      }
      .ant-steps-item-content {
        width: 100%;
        .ant-steps-item-title {
          font-family: MicrosoftYaHei;
          font-size: ${d.titleFontSize}px;
          color: ${d.titleFontColor};
          line-height: 20px;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: center;
          :after {
            display: none;
          }
        }
      }
    }
  `;
}

const getTemplateOneStyle = (d) => css`
  ${getBaseStyle(d)};
  .ant-steps.ant-steps-horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .ant-steps-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${d.iconMaskSize
        ? css`
            &:before {
              content: "";
              position: absolute;
              left: 50%;
              top: ${d.iconSize / 2 - 1}px;
              width: ${d.iconMaskSize}px;
              height: 4px;
              transform: translateX(-50%);
              background-color: #fff;
              z-index: 2;
            }
          `
        : ""}
      :after {
        content: "";
        height: ${d.barHeight}px;
        width: 9999px;
        background: ${d.barBg};
        display: block;
        position: absolute;
        top: ${d.iconSize / 2 - d.barHeight / 2}px;
        left: 0;
        z-index: 1;
      }
      :first-of-type:after {
        left: 50%;
      }
      :last-of-type:after {
        right: 50%;
        width: auto;
      }
      .ant-steps-item-content {
        .ant-steps-item-title {
          padding-right: 0;
        }
        .ant-steps-item-description {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      .ant-steps-item-icon {
        width: ${d.iconSize}px;
        height: ${d.iconSize}px;
        line-height: ${d.iconSize}px;
        border: ${d.iconBorder};
        margin: 0;
        z-index: 2;
        .ant-steps-icon {
          color: ${d.iconBg};
        }
      }
      &.ant-steps-item-finish {
        .ant-steps-item-icon {
          background: ${d.finishIconBg};
          border: ${d.finishIconBorder};
        }
        .ant-steps-icon {
          color: ${d.finishIconColor};
        }
        :after {
          background: ${d.finishBarBg};
        }
      }
      &.ant-steps-item-process {
        :after {
          background: ${d.processBarBg};
        }
        .ant-steps-item-icon {
          border: ${d.processIconBorder};
          background: ${d.processIconBg};
          .ant-steps-icon {
            color: ${d.processIconColor};
          }
        }
      }
      &.ant-steps-item-wait {
        :after {
          display: block;
          background: ${d.waitingBarBg};
        }
        .ant-steps-item-icon {
          border: ${d.waitingIconBorder};
          background: ${d.waitingIconBg};
          .ant-steps-icon {
            color: ${d.waitingIconColor};
          }
        }
      }
      &.ant-steps-item-error {
        :after {
          display: block;
          background: ${d.errorBarBg || "#fd6868"};
        }
        .ant-steps-item-icon {
          border: ${d.errorIconBorder || "#fd6868"};
          background: ${d.errorIconBg || "#fd6868"};
          .ant-steps-icon {
            color: ${d.errorIconColor || "#fff"};
          }
        }
      }
    }
  }
`;

const getClipAnimation = (w) => {
  return keyframes`
  0% {
    .ant-steps-item-content > div {
      color: #000;
    }
    clip-path: polygon(0% 0%, 0% 0%, ${w}px 50%, 0% 100%, 0% 100%);
  }
  100% {
    .ant-steps-item-content > div {
      color: #fff;
    }
    clip-path: polygon(0% 0%, 100% 0%, calc(100% + ${w}px) 50%, 100% 100%, 0% 100%);
  }
`;
};

function getTemplateTwo(d) {
  const afterWidth = getAfterWidth(d.itemHeight);
  const clipAnimation = getClipAnimation(0.71 * afterWidth);
  return css`
    ${getBaseStyle(d)};
    .ant-steps.ant-steps-horizontal {
      margin-bottom: 8px;
      .ant-steps-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        margin-right: 0 !important;
        height: ${d.itemHeight}px;
        padding: ${d.itemPadding};
        min-width: ${d.itemMinWidth}px;
        overflow: visible;
        .ant-steps-item-content {
          font-family: MicrosoftYaHei;
          font-size: ${d.fontSize}px;
          line-height: 20px;
          width: 100%;
          flex: 0 0 100%;
          z-index: 3;
          .ant-steps-item-title {
            width: calc(100% - 16px);
            padding: 0;
            white-space: nowrap;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            :after {
              display: none;
            }
          }
        }
        :first-of-type {
          border-radius: ${d.firstRadius};
          padding: 0 12px;
        }
        :after {
          content: "";
          display: block;
          position: absolute;
          width: ${afterWidth}px;
          height: ${afterWidth}px;
          right: -${afterWidth / 2}px;
          background-color: ${d.itemBg};
          transform-origin: center;
          transform: rotateZ(45deg);
          z-index: 1;
        }
        .ant-steps-item-icon {
          flex: 0 0 ${d.iconSize}px;
          width: ${d.iconSize}px;
          height: ${d.iconSize}px;
          border: none;
          line-height: ${d.iconSize}px;
          .ant-steps-icon:after {
            font-size: ${d.iconSize}px;
            line-height: ${d.iconSize}px;
          }
        }
      }
      .ant-steps-item-finish {
        background: ${d.finishBg};
        border: ${d.finishBorder};
        :after {
          background: ${d.finishBg};
        }
        animation: ${clipAnimation} 0.3s linear;
        .ant-steps-item-content > div {
          color: #fff;
        }
        .ant-steps-item-icon {
          background: ${d.finishIconBg};
          border: ${d.finishIconBorder};
          span {
            color: ${d.finishIconColor};
          }
        }
        .ant-steps-icon:before {
          line-height: 16px;
        }
        .ant-steps-item-title {
          color: ${d.finishFontColor};
        }
      }
      .ant-steps-item-process {
        background: ${d.processBg};
        border: ${d.processBorder};
        clip: rect(0 50px 100px 0);
        // clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        .ant-steps-item-content > div {
          color: ${d.processFontColor};
        }
        .ant-steps-item-icon {
          background: ${d.processIconBg};
          span {
            display: none;
            color: ${d.processIconColor};
          }
        }
        :after {
          background: ${d.processBg};
          border-right: ${d.processBorder};
          border-top: ${d.processBorder};
        }
      }
      .ant-steps-item-wait {
        background: ${d.waitingBg};
        border: ${d.waitingBorder};
        .ant-steps-item-icon {
          background: ${d.waitingIconBg};
          border: ${d.waitingIconBorder};
          span {
            color: ${d.waitingIconColor};
          }
        }
      }
      .ant-steps-item-error {
        background-color: #fd6868;
        color: #fff;
        &:after {
          background-color: #fd6868;
        }
        .ant-steps-item-content {
          .ant-steps-item-title,
          .ant-steps-item-description {
            color: #fff;
          }
        }
        .ant-steps-item-icon {
          position: relative;
          border: 1px solid #ff4141;
          background: #fff;
          border-radius: 50%;
        }
        .icon-close {
          width: ${d.iconSize}px;
          height: ${d.iconSize}px;
          font-size: ${d.iconSize}px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          line-height: 0;
          color: #ff4141;
        }
      }
    }
  `;
}

function getStepsStyle(props) {
  const d = getThemeData(props, "steps");
  return d.template === 0 ? getTemplateOneStyle(d) : getTemplateTwo(d);
}

const stepsStyle = css`
  ${getStepsStyle};
`;

export default createStyleComponent("steps", stepsStyle);
