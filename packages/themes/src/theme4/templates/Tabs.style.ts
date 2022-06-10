import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getTabsStyle(props) {
  const d = getThemeData(props, 'tabs');
  const colors = getThemeData(props, 'colors');
  return css`
    .c7n-tabs {
      .c7n-tabs-bar {
        border-bottom-color: #d9e6f2;
      }
    }
    .c7n-tabs-line {
      .c7n-tabs-tab-active {
        color: ${d.activeFontColor} !important;
      }
      .c7n-tabs-ink-bar {
        background: ${d.lineBottomBorderColor};
      }
    }
    .c7n-tabs-nav .c7n-tabs-tab-disabled {
      color: rgba(15, 19, 88, 0.25) !important;
    }
    .c7n-tabs.c7n-tabs-line {
      &.c7n-tabs-top {
        > .c7n-tabs-bar {
          border-bottom-color: #d9e6f2;
          .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
            .c7n-tabs-nav-wrap {
              .c7n-tabs-nav-scroll {
                .c7n-tabs-nav {
                  .c7n-tabs-ink-bar {
                    bottom: ${d.bottom};
                  }
                  .c7n-tabs-tab {
                    font-size: ${d.tabFontSize}px;
                    padding: ${d.tabPadding};
                    margin: ${d.tabMargin};
                    color: ${d.tabFontColor};
                    letter-spacing: 0;
                    line-height: 22px;
                    border: ${d.tabBorderWidth}px solid ${d.tabBorderColor};
                    border-left: ${d.showLeftBorder ? '' : 'none'};
                    border-radius: 0;
                    :after {
                      content: '';
                      display: ${d.hideBottomScale ? 'none' : 'block'};
                      position: absolute;
                      bottom: 0.01rem;
                      height: 2px;
                      width: 100%;
                      border-radius: 2px;
                      background: ${colors.primary};
                    }
                    .c7n-tabs-tab {
                      font-size: ${d.tabFontSize}px;
                      padding: ${d.tabPadding};
                      margin: ${d.tabMargin};
                      color: ${d.tabFontColor};
                      letter-spacing: 0;
                      line-height: 22px;
                      border: ${d.tabBorderWidth}px solid ${d.tabBorderColor};
                      border-left: ${d.showLeftBorder ? '' : 'none'};
                      border-radius: 0;
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
                          color: ${d.activeFontColor};
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

function getCardStyle(props) {
  const d = getThemeData(props, 'tabsCard');
  const trapeziumStyle = getTrapeziumStyle(d);
  return css`
    .c7n-tabs.c7n-tabs-card {
      width: 100%;
      .c7n-ripple-wrapper {
        display: none;
      }
      > .c7n-tabs-bar {
        .c7n-tabs-tab-active {
          color: ${d.activeFontColor};
        }
        .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
          .c7n-tabs-nav {
            .c7n-tabs-tab {
              box-sizing: border-box;
              font-size: ${d.fontSize}px;
              padding: ${d.tabPadding};
              .icon {
                color: ${d.fontColor};
              }
              .c7n-ripple-wrapper {
                display: none;
              }
              &.c7n-tabs-tab-active {
                color: ${d.activeFontColor} !important;
                background: ${d.activeBg};
                > div {
                  color: ${d.activeFontColor};
                }
                .icon {
                  color: ${d.activeFontColor};
                }
              }
              ${d.trapezium ? trapeziumStyle : ''};
            }
          }
        }
      }
    }
  `;
}

function getVerticalStyle(props) {
  const d = getThemeData(props, 'tabs');
  const colors = getThemeData(props, 'colors');
  const {
    verticalTabsWrapperBg = '#fafafa',
    verticalActiveBg = '#EAF0FF',
    verticalItemBottomMargin = 24,
    verticalItemHeight = 32,
    showVerticalInk,
    showVerticalRightBorder,
    verticalRightBorderWidth,
  } = d;
  // const {primary} = getThemeData(props, 'common');
  return css`
    .c7n-tabs.c7n-tabs-vertical.c7n-tabs-left {
      .c7n-ripple-wrapper {
        display: none;
      }
      > .c7n-tabs-content {
        padding-left: 16px;
        border-left: 0;
      }
      > .c7n-tabs-bar {
        border-color: #eee;
        border-right-width: 0;
        ${showVerticalRightBorder
          ? `box-shadow: inset -${verticalRightBorderWidth}px 0 0 0 #eee;`
          : ''}
        .c7n-tabs-nav-wrap {
          margin-right: 0;
          padding-top: 8px;
          padding-bottom: 8px;
          background: ${verticalTabsWrapperBg};
        }
      }
      > .c7n-tabs-bar .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
        margin-right: 0;
        .c7n-tabs-nav {
          .c7n-tabs-tab {
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
            }
            &:hover {
              color: ${d.activeFontColor};
              opacity: 0.95;
            }
            :after {
              content: '';
              display: ${!showVerticalInk ? 'none' : 'block'};
              position: absolute;
              right: 0;
              top: 0;
              height: 100%;
              width: 2px;
              border-radius: 2px;
              background: ${colors.primary};
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

const tabsCss = css`
  /* Tabs--components 全局样式实现 */
  ${getTabsStyle}
  ${getCardStyle}
  ${getVerticalStyle}
`;

export default tabsCss;
