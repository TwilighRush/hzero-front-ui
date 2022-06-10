import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getTabsStyle(props) {
  const d = getThemeData(props, 'tabs');
  const colors = getThemeData(props, 'colors');
  const common = getThemeData(props, 'common');
  return css`
    .c7n-tabs-line.c7n-tabs-line {
      .c7n-tabs-tab-active {
        color: ${common.primary6} !important;
      }
      .c7n-tabs-nav-container {
        flex: none;
        :after {
          width: 100%;
          height: 1px;
          background: #d9d9d9;
          position: relative;
          bottom: 0px;
          display: inline-block;
          position: absolute;
          z-index: 0;
          visibility: visible;
        }
      }
    }
    .c7n-tabs-line.c7n-tabs-nav .c7n-tabs-tab-disabled {
      color: rgba(0, 0, 0, 0.25) !important;
    }
    .c7n-tabs.c7n-tabs-line {
      &.c7n-tabs-top {
        > .c7n-tabs-bar {
          border-bottom: ${d.barBottomBorder};
          .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
            margin-bottom: 0;
            .c7n-tabs-nav-wrap {
              .c7n-tabs-nav-scroll {
                .c7n-tabs-nav {
                  .c7n-tabs-ink-bar {
                    display: ${d.showInkBar ? '' : 'none'}!important;
                    background: ${common.primary6};
                    bottom: ${d.bottom};
                    border-radius: ${d.radius};
                    height: ${d.height};
                    z-index: ${d.zIndex};
                    display: none;
                  }
                  .c7n-tabs-tab.c7n-tabs-tab-active {
                    :after {
                      content: '';
                      position: absolute;
                      bottom: 0rem;
                      height: 2px;
                      width: 100%;
                      border-radius: 2px;
                      background: ${colors.primary};
                      background: ${common.primary6};
                      z-index: 2;
                      box-shadow: 0 -1px 4px 0 rgba(179, 217, 255, 0.75);
                    }
                    /* border-bottom: 2px solid ${common.primary6};
                    z-index: 2; */
                  }
                  .c7n-tabs-tab {
                    font-size: ${d.tabFontSize}px;
                    margin: 0;
                    margin-right: 24px;
                    padding: 0.12rem 0;
                    font-size: ${d.tabFontSize}px;
                    color: ${d.tabFontColor};
                    letter-spacing: 0;
                    line-height: 22px;
                    /* border: ${d.tabBorderWidth}px solid ${d.tabBorderColor}; */
                    border-left: ${d.showLeftBorder ? '' : 'none'};
                    border-radius: 0;

                    :last-child {
                      margin-right: 0px;
                    }
                    .c7n-ripple {
                      background-color: transparent;
                    }
                    &:active,
                    &:hover {
                      color: ${common.primary6};
                    }

                    // 里面的代码怀疑都是冗余代码，都没起效
                    .c7n-tabs-tab {
                      &.c7n-tabs-tab-active {
                        color: ${d.activeFontColor};
                        border-color: ${d.tabActiveBorderColor};
                        box-shadow: ${d.tabBorderWidth
                          ? `-${d.tabBorderWidth}px 0 0 0 ${d.tabActiveBorderColor}`
                          : ''};
                        z-index: 1;
                        :after {
                          content: '';
                          display: ${d.hideBottomScale ? 'none' : 'block'};
                          position: absolute;
                          bottom: 0.01rem;
                          height: 2px;
                          width: 100%;
                          border-radius: 2px;
                          background: ${colors.primary};
                          transform: scaleX(0);
                          transition: all 0.3s;
                        }
                        :last-of-type {
                          border-radius: 0 ${d.tabRadius}px ${d.tabRadius}px 0;
                        }
                        :nth-of-type(2) {
                          border-left: ${d.tabBorderWidth}px solid ${d.tabBorderColor};
                          border-radius: ${d.tabRadius}px 0 0 ${d.tabRadius}px;
                        }

                        .c7n-ripple-wrapper {
                          display: none;
                        }
                        &.c7n-tabs-tab-active {
                          color: ${common.primary6};
                          border-color: ${d.tabActiveBorderColor};
                          box-shadow: ${d.tabBorderWidth
                            ? `-${d.tabBorderWidth}px 0 0 0 #1890ff`
                            : ''};
                          z-index: 1;
                          :after {
                            transform: scaleX(1);
                          }
                          :hover:after {
                            transform: scaleX(1.15);
                          }
                        }
                      }
                    }
                  }
                }
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
    margin: 0 ${(height * 1.732) / 3}px;
    border-radius: 0;

    :before,
    :after {
      content: '';
      position: absolute;
      box-sizing: border-box;
      transform-origin: center;
      border: ${0.707 * height}px solid;
      transition: background-color 0.2s;
      border-color: transparent;
      z-index: 0;
    }
    :before {
      left: 0;
      top: 0;
      transform-origin: left top;
      border-left-color: ${d.bg};
      transform: rotateZ(30deg);
      border-bottom-width: 55px;
      box-shadow: 0 1px 0 1px ${d.borderColor};
    }
    :after {
      right: 0;
      top: 0;
      border-right-color: ${d.bg};
      box-shadow: 0 1px 0 1px ${d.borderColor};
      transform-origin: right top;
      border-bottom-width: 55px;
      transform: rotateZ(-30deg);
    }
    &.c7n-tabs-tab-active {
      position: relative;
      height: ${d.activeHeight}px;
      color: ${d.activeFontColor};
      background: ${d.activeBg};
      border-bottom-color: ${d.activeBg};
      z-index: 5;
      transform-origin: bottom;
      :after {
        border-width: ${0.707 * d.activeHeight}px;
        border-right-color: ${d.activeBg};
      }
      :before {
        border-width: ${0.707 * d.activeHeight}px;
        border-left-color: ${d.activeBg};
      }
    }
  `;
}
//卡片样式
function getCardStyle(props) {
  const d = getThemeData(props, 'tabsCard');
  const trapeziumStyle = getTrapeziumStyle(d);
  const common = getThemeData(props, 'common');
  return css`
    .c7n-tabs.c7n-tabs-card {
      width: 100%;
      .c7n-ripple-wrapper {
        display: none;
      }
      > .c7n-tabs-bar {
        border-bottom: none;
        > .c7n-tabs-bar-inner {
          > .c7n-tabs-nav-container {
            height: auto !important;
            flex: none;
            /* border-bottom: 1px solid #e8e8e8; */
            .c7n-tabs-nav {
              height: 40px;
              display: flex;
              flex-direction: row;
              align-items: flex-end;
              .c7n-tabs-tab {
                margin: ${d.margin};
                box-sizing: border-box;

                font-size: ${d.fontSize}px;
                color: ${d.fontColor};
                border-radius: ${d.radius};
                background: ${d.bg};
                border: 1px solid ${d.borderColor};
                border-bottom: none;
                height: ${d.height}px;
                line-height: ${d.height}px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s;
                :last-child {
                  margin: 0;
                }

                .icon {
                  color: ${d.fontColor};
                }
                .icon-close :before {
                  font-family: ${common.iconfontFamily} !important;
                  content: '\\e70f';
                }
                &:hover {
                  color: ${common.primary6};
                  .icon {
                    color: ${common.primary6};
                  }
                }

                .c7n-ripple-wrapper {
                  display: none;
                }
                &.c7n-tabs-tab-active {
                  color: ${common.primary6} !important;
                  height: ${d.activeHeight}px;
                  line-height: ${d.activeHeight}px;
                  background: #fff;
                  > div {
                    color: ${common.primary6};
                  }
                  .icon {
                    color: ${common.primary6};
                  }
                }
                ${d.trapezium ? trapeziumStyle : ''};
              }
              .c7n-tabs-tab.c7n-tabs-tab-active {
                :after {
                  content: '';
                  position: absolute;
                  bottom: 0rem;
                  height: 2px;
                  width: 100%;
                  border-radius: 2px;

                  background: #fff;
                  z-index: 2;
                }
              }
            }
            :after {
              width: 100%;
              height: 1px;
              background: #f0f0f0;
              bottom: 0px;
              display: inline-block;
              position: absolute;
              z-index: 0;
              visibility: visible;
            }
          }
        }
        .c7n-tabs-ink-bar {
          visibility: initial;
          bottom: -0.01rem;
          background-color: #fff;
        }
      }
      .c7n-tabs-extra-content {
        .c7n-tabs-new-tab {
          width: 0.32rem;
          height: 0.32rem;
          margin: 10px 0 -1px 2px;
          background: rgba(0, 0, 0, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 2px 2px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            /* border-color: ${common.primary6}; */
            color: ${common.primary6};
          }
        }
      }
    }
  `;
}

//垂直样式
function getVerticalStyle(props) {
  const common = getThemeData(props, 'common');
  return css`
    .c7n-tabs-vertical.c7n-tabs-vertical {
      &.c7n-tabs-line .c7n-tabs-nav-container::after {
        background: transparent;
      }
      .c7n-tabs-nav-wrap {
        padding: 0;
      }
      .c7n-tabs-content {
        border: none !important;
      }
      .c7n-tabs-bar {
        .c7n-tabs-ink-bar {
          display: none !important;
        }
        /* .c7n-tabs-nav-container {
          margin: 0.16rem;
        } */
        .c7n-tabs-tab {
          border-right: 3px solid transparent;
          &:hover {
            color: ${common.primary6};
          }
          &.c7n-tabs-tab-active {
            background: ${common.primary1};
            border-right: 3px solid ${common.primary6};
            .icon{
              color: ${common.primary6};
            }
          }
          .c7n-ripple {
            background-color: transparent;
          }
        }
      }
    }
  `;
}

const tabsCss = css`
  /* Tabs--components 全局样式实现 */
  ${getTabsStyle}
  ${getCardStyle}
  ${getVerticalStyle}
`;

export default tabsCss;
