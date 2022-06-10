import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getTabsStyle(props) {
  const {
    tabFontSize,
    barBottomBorder,
    showInkBar,
    bottom,
    radius,
    zIndex,
    height,
    verticalItemHeight,
    tabColor,
    tabDisabledColor,
  } = getThemeData(props, 'tabs');
  const { primary6, titleColor3, lineColor4 } = getThemeData(props, 'common');
  return css`
    //公共样式
    .c7n-tabs.c7n-tabs.c7n-tabs {
      .c7n-tabs-nav {
        //普通样式
        .c7n-tabs-tab {
          color: ${tabColor};
          font-size: ${tabFontSize}px;
          line-height: ${verticalItemHeight}px;
          padding: 0.09rem 0 0.07rem;
          .icon {
            /* margin-top: -0.02rem; */
            font-size: 14px;
          }
          i.icon.icon-date_range {
            transform: translateY(-10%);
          }
          //hover样式
          &:hover {
            color: ${primary6};
            .c7n-tabs-tab-count {
              color: ${primary6};
            }
            .icon {
              color: ${primary6};
            }
          }

          .c7n-ripple-wrapper {
            display: none;
          }
          //禁用样式
          &.c7n-tabs-tab-disabled {
            /* color: ${titleColor3}; */
            color: ${tabDisabledColor};
          }
          //选中样式
          &.c7n-tabs-tab-active {
            color: ${primary6};
            font-weight: 600;
            .c7n-tabs-tab-count {
              color: ${primary6};
            }
            .icon {
              color: ${primary6};
            }
          }
        }
      }
      .c7n-tabs-nav-add {
        min-width: 32px;
        height: 32px;
        line-height: 32px;
        background-color: ${lineColor4};
        &.c7n-tabs-nav-add-fixed {
          border-bottom-color: ${lineColor4};
          .icon {
            margin-top: -5px;
          }
        }
      }
      .c7n-tabs-more-tab {
        border: none;
      }
      .c7n-tabs-extra-content {
        height: 0.38rem;
      }

      &.c7n-tabs-second-level {
        .c7n-tabs-second-tab {
          color: ${tabColor};
        }
        .c7n-tabs-second-tab-disabled {
          color: ${tabDisabledColor};
        }
      }
    }
    //line
    .c7n-tabs.c7n-tabs-line {
      &.c7n-tabs-top {
        > .c7n-tabs-bar {
          border-bottom: ${barBottomBorder};
          .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
            :after {
              display: none;
            }
            .c7n-tabs-nav-wrap {
              .c7n-tabs-nav-scroll {
                .c7n-tabs-nav {
                  //下划线
                  .c7n-tabs-ink-bar {
                    display: ${showInkBar ? '' : 'none'}!important;
                    background: ${primary6};
                    bottom: ${bottom};
                    border-radius: ${radius};
                    height: ${height};
                    z-index: ${zIndex};
                  }
                  //普通样式
                  .c7n-tabs-tab {
                    /* margin: 0;
                    padding-left: 16px;
                    padding-right: 16px; */
                    letter-spacing: 0;
                    line-height: 22px;
                    border: none;
                    border-radius: 0;
                  }
                }
              }
            }
          }
        }
      }
      &.c7n-tabs-bottom {
        > .c7n-tabs-bar {
          border-top: ${barBottomBorder};
        }
      }
    }
    .c7n-tabs-invalid-badge {
      &&& &-content {
        top: -0.1rem;
        right: -0.1rem;
        width: 0.08rem;
        height: 0.08rem;
        transform: initial;
        transform-origin: center;
        &::before {
          font-size: 0.08rem;
          vertical-align: top;
        }
      }
    }
  `;
}

function getCardStyle(props) {
  const { height, cardPadding } = getThemeData(props, 'tabsCard');
  const { lineColor1, primary6, titleColor2, bgColor } = getThemeData(props, 'common');
  return css`
    .c7n-tabs.c7n-tabs.c7n-tabs.c7n-tabs-card {
      .c7n-tabs-bar {
        .c7n-tabs-extra-content,
        .c7n-tabs-nav-container {
          height: ${height}px;
        }
        .c7n-tabs-nav-container {
          .c7n-tabs-tab-next,
          .c7n-tabs-tab-prev {
            border: 1px solid ${lineColor1};
            border-bottom: none;
            border-radius: 2px 2px 0 0;
            color: ${titleColor2};
            &:not([class*='-disabled']):hover {
              color: ${primary6};
            }
          }
          .c7n-tabs-tab-next {
            margin-left: 2px;
          }
          .c7n-tabs-tab-prev {
            margin-right: 2px;
          }
        }
        .c7n-tabs-tab {
          padding: ${cardPadding};
          border-color: ${lineColor1};
          &.c7n-tabs-tab-active {
            background-color: ${bgColor};
          }
          /* 调整关闭图标与文字对齐 */
          .icon-close {
            height: 100%;
            line-height: 22px;
            vertical-align: top;
          }
        }
      }
    }
  `;
}

function getGroupStyle(props: any) {
  const { tabRadius, tabFontSize, tabFontSize12, tabFontSize120, tabDisabledColor } = getThemeData(
    props,
    'tabs'
  );
  const { lineColor3, titleColor1, titleColor2, bgColor } = getThemeData(props, 'common');
  return css`
    .c7n-tabs-bar-with-groups.c7n-tabs-bar-with-groups {
      .c7n-tabs-group {
        background: ${lineColor3};
        border-radius: ${tabRadius}px;
        height: auto;
        padding: 0;
        .c7n-tabs-group-item {
          margin: 0.02rem;
          height: 0.2rem;
          line-height: 0.2rem;
          font-size: ${tabFontSize - 2}px;
          color: ${titleColor2};
          border: none;
          background-color: transparent;
          padding: 0 6px;
          border-radius: 1px;
          .c7n-badge {
            margin: 0;
            /* 调整 dot 位置不与标题重叠 */
            .c7n-badge-dot {
              top: -10px;
            }
          }
          .icon {
            color: ${titleColor2};
          }
          &:hover {
            color: ${titleColor1};
            .icon {
              color: ${titleColor1};
            }
          }
          &.c7n-tabs-group-item-selected {
            background-color: ${bgColor};
            color: ${titleColor1};
            box-shadow: none;
            .icon {
              color: ${titleColor1};
            }
          }
          &.c7n-tabs-group-item-disabled {
            color: ${tabDisabledColor};
          }
        }
      }
      .c7n-tabs-bar-divider {
        margin: auto 0.08rem;
      }
      .c7n-tabs-nav-container.c7n-tabs-nav-container {
        .c7n-tabs-nav-wrap {
          .c7n-tabs-nav-scroll {
            .c7n-tabs-nav {
              .c7n-tabs-ink-bar {
                display: none;
              }
              .c7n-tabs-tab {
                font-size: ${tabFontSize12}px;
                line-height: ${tabFontSize120}px;
                padding-top: 0;
                padding-bottom: 0;
                padding-left: 0px !important;
                padding-right: ${tabFontSize12 * 2}px !important;
              }
            }
          }
        }
      }
    }
  `;
}
function getVerticalStyle(props) {
  const { verticalItemHeight, marginTop, marginBottom } = getThemeData(props, 'tabs');
  const { primary6, bgColor } = getThemeData(props, 'common');
  return css`
    .c7n-tabs.c7n-tabs-vertical.c7n-tabs {
      &-left {
        > .c7n-tabs-content {
          padding-left: 16px;
          border-left: 0;
        }
        .c7n-tabs-ink-bar {
          display: none !important;
        }
        > .c7n-tabs-bar {
          .c7n-tabs-nav-wrap {
            margin-right: 0;
            /* padding-top: 8px; */
            /* padding-bottom: 8px; */
            background: ${bgColor};
          }
        }
        > .c7n-tabs-bar > .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
          margin-right: 0;
          .c7n-tabs-nav {
            .c7n-tabs-tab {
              /* min-width: 1.5rem; */
              text-align: right;
              height: ${verticalItemHeight}px;
              line-height: ${verticalItemHeight}px;
              padding: 0 16px;
              margin: ${marginTop}px 0 ${marginBottom}px 0;
              letter-spacing: 0;
              position: relative;
              overflow: visible;
              border-right: 2px solid transparent;

              &.c7n-tabs-tab-active {
                border-right-color: ${primary6};
              }
              &:last-child {
                margin-bottom: 0;
              }
              &-active,
              &:hover {
                color: ${primary6};
                i:before {
                  color: ${primary6};
                }
              }
            }
          }
        }
      }
      &-right {
        .c7n-tabs-ink-bar {
          display: none !important;
        }
        > .c7n-tabs-bar > .c7n-tabs-bar-inner > .c7n-tabs-nav-container {
          margin-right: 0;
          .c7n-tabs-nav-wrap {
            margin: 0;
          }
          .c7n-tabs-nav {
            .c7n-tabs-tab {
              /* min-width: 1.5rem; */
              text-align: left;
              height: ${verticalItemHeight}px;
              line-height: ${verticalItemHeight}px;
              padding: 0 16px;
              margin: ${marginTop}px 0 ${marginBottom}px 0;
              letter-spacing: 0;
              position: relative;
              overflow: visible;
              border-left: 2px solid transparent;

              &.c7n-tabs-tab-active {
                border-left-color: ${primary6};
              }
              &:last-child {
                margin-bottom: 0;
              }
              &-active,
              &:hover {
                color: ${primary6};
                i:before {
                  color: ${primary6};
                }
              }
            }
          }
        }
        /* 内容文字统一左对齐 */
        /* > .c7n-tabs-content {
          text-align: right;
        } */
      }
    }
    .c7n-tabs.c7n-tabs-horizontal.c7n-tabs {
      &-bottom {
        .c7n-tabs-ink-bar {
          background: ${primary6};
        }
        .c7n-tabs-nav-scroll {
          > .c7n-tabs-nav {
            .c7n-tabs-tab {
              padding: 9px 0px 7px 0px;
            }
          }
        }
      }
    }
    .c7n-tabs.c7n-tabs.c7n-tabs-top.c7n-tabs-horizontal {
      .c7n-tabs-nav-container.c7n-tabs-nav-container-scrolling {
        .c7n-tabs-tab-prev-icon,
        .c7n-tabs-tab-next-icon {
          line-height: 18px;
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
  ${getGroupStyle}
`;

export default tabsCss;
