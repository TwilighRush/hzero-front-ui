import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getTabStyle(props) {
  const d = getThemeData(props, "tabs");
  return css`
    width: 100%;
    &:not(.ant-tabs-vertical) {
      .ant-tabs-tab:after {
        content: "";
        display: ${d.hideBottomScale ? "none" : "block"};
        position: absolute;
        left: 0;
        bottom: 1px;
        width: 100%;
        height: 2px;
        background: ${d.inkBarBg};
        transform: scaleX(0);
        transition: all 0.3s;
      }
    }
    > .ant-tabs-bar {
      padding: 0 8px;
      .ant-tabs-nav-container {
        .ant-tabs-ink-bar {
          display: ${d.showInkBar ? "block" : "none"} !important;
          background: ${d.inkBarBg};
        }
        .ant-tabs-tab {
          position: relative;
          padding: ${d.tabPadding};
          margin: ${d.tabMargin};
          font-family: MicrosoftYaHei;
          font-size: ${d.tabFontSize}px;
          color: ${d.tabFontColor};
          letter-spacing: 0;
          line-height: 22px;
          border: ${d.tabBorderWidth}px solid ${d.tabBorderColor};
          border-left: ${d.showLeftBorder ? "" : "none"};
          border-radius: 0;
          :last-of-type {
            border-radius: 0 ${d.tabRadius}px ${d.tabRadius}px 0;
          }
          :first-of-type {
            border-left: ${d.tabBorderWidth}px solid ${d.tabBorderColor};
            border-radius: ${d.tabRadius}px 0 0 ${d.tabRadius}px;
          }
          &.ant-tabs-tab-active {
            color: ${d.activeFontColor};
            border-color: ${d.tabActiveBorderColor};
            box-shadow: ${d.tabBorderWidth
              ? `-${d.tabBorderWidth}px 0 0 0 #1890ff`
              : ""};
            z-index: 1;
            :after {
              transform: scaleX(1);
            }
            :hover {
              :after {
                transform: scaleX(1.15);
              }
            }
          }
        }
      }
    }
  `;
}

function getTrapeziumStyle(d) {
  const { height } = d;
  return css`
    margin: 0 16px;
    border-radius: 0;
    > div {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      line-height: 24px;
      z-index: 10;
      border: none;
      transform-style: preserve-3d;
      transform: translateZ(1px);
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #4c4c4c;
      letter-spacing: 0;
    }

    :before,
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: -${2 * 2 * Math.sqrt((height * height) / 3)}px;
      height: ${2 * 1.732 * Math.sqrt((height * height) / 3)}px;
      width: ${2 * 2 * Math.sqrt((height * height) / 3)}px;
      transform-origin: left top;
      transform: rotate(60deg);
      background: ${d.bg};
      border-top: 1px solid ${d.borderColor};
      transition: background-color 0.2s;
      z-index: 0;
    }
    :after {
      left: -${2 * 2 * Math.sqrt((height * height) / 3)}px;
      height: ${2 * 1.732 * Math.sqrt((height * height) / 3)}px;
      width: ${2 * 2 * Math.sqrt((height * height) / 3)}px;
      transform-origin: right top;
      transform: rotate(-60deg);
      background: ${d.bg};
    }
    &.ant-tabs-tab-active {
      position: relative;
      height: 36px;
      color: ${d.activeFontColor};
      background: ${d.activeBg};
      border-bottom-color: ${d.activeBg};
      z-index: 5;
      transform-origin: bottom;
      > div {
        color: ${d.activeFontColor};
        line-height: 36px;
      }
      :after,
      :before {
        background-color: ${d.activeBg};
      }
    }
  `;
}

function getCardStyle(props) {
  const d = getThemeData(props, "tabsCard");
  // const type = d.trapezium;
  const trapeziumStyle = getTrapeziumStyle(d);
  return css`
    width: 100%;
    > .ant-tabs-bar {
      .ant-tabs-nav-container {
        height: auto !important;
        .ant-tabs-nav {
          > div {
            height: 40px;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
          }
          .ant-tabs-tab {
            margin: ${d.margin};
            box-sizing: border-box;
            font-family: MicrosoftYaHei;
            font-size: ${d.fontSize}px;
            color: ${d.fontColor};
            border-radius: ${d.radius};
            background: ${d.bg};
            border: 1px solid ${d.borderColor};
            transition: all 0.2s;
            height: ${d.height}px;
            line-height: ${d.height}px;
            display: flex;
            justify-content: center;
            align-items: center;

            &.ant-tabs-tab-active {
              color: ${d.activeFontColor};
              height: ${d.activeHeight}px;
              line-height: ${d.activeHeight}px;
              background: ${d.activeBg};
              > div {
                color: ${d.activeFontColor};
              }
              .anticon {
                color: ${d.activeFontColor};
              }
            }
            ${d.trapezium ? trapeziumStyle : ""}
          }
        }
      }
    }
  `;
}

function getVerticalStyle(props) {
  const d = getThemeData(props, "tabs");
  const {
    verticalTabsWrapperBg = "",
    verticalActiveBg = "",
    verticalItemBottomMargin = "",
    verticalItemHeight = "",
    showVerticalInk,
    showVerticalRightBorder,
    verticalRightBorderWidth,
  } = d;
  // const {primary} = getThemeData(props, 'common');
  return css`
    .ant-tabs.ant-tabs-vertical.ant-tabs-left {
      > .ant-tabs-content {
        padding-left: 16px;
        border-left: 0;
      }
      > .ant-tabs-bar {
        padding: 0;
        border-color: #eee;
        border-right-width: 0;
        ${showVerticalRightBorder
          ? `box-shadow: inset -${verticalRightBorderWidth}px 0 0 0 #eee;`
          : ""}
        .ant-tabs-nav-wrap {
          margin-right: 0;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .ant-tabs-ink-bar {
          display: none !important;
        }
      }
      > .ant-tabs-bar > .ant-tabs-nav-container {
        margin-right: 0;
        .ant-tabs-nav {
          background: ${verticalTabsWrapperBg};
          .ant-tabs-tab {
            height: ${verticalItemHeight}px;
            line-height: ${verticalItemHeight}px;
            padding: 0 16px;
            margin-bottom: ${verticalItemBottomMargin}px;
            font-size: ${d.tabFontSize}px;
            letter-spacing: 0;
            position: relative;
            color: ${d.tabFontColor};
            overflow: visible;
            &:last-child {
              margin-bottom: 0;
            }
            &-active,
            &:hover {
              color: ${d.activeFontColor};
              background: ${verticalActiveBg};
            }
            &:hover {
              color: ${d.activeFontColor};
              opacity: 0.95;
            }
            :after {
              content: "";
              display: ${!showVerticalInk ? "none" : "block"};
              position: absolute;
              right: 0;
              top: 0;
              height: 100%;
              width: 2px;
              border-radius: 2px;
              background: ${d.inkBarBg};
              transform: scaleY(0);
              transition: all 0.3s;
            }
            &-active:after {
              transform: scaleY(1);
            }
          }
        }
      }
    }
  `;
}

const tabsStyle = css`
  .ant-tabs.ant-tabs.ant-tabs-vertical {
    > .ant-tabs-bar .ant-tabs-nav-container .ant-tabs-nav > div {
      display: block;
    }
    .ant-tabs-nav-scroll {
      overflow: auto;
    }
  }
  &.ant-tabs-top:not(.ant-tabs-card) {
    ${getTabStyle}
  }
  &.ant-tabs-card {
    ${getCardStyle}
  }
  ${getVerticalStyle}
`;

export default createStyleComponent("tabs", tabsStyle);
