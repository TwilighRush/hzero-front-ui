import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
function getBaseStyle(d: any, color: any) {
  return css`
    .c7n-steps-horizontal.c7n-steps-horizontal {
      &:not(.c7n-steps-label-vertical) {
        .c7n-steps-item {
          margin-right: 0.08rem;
        }
      }
    }
    .c7n-steps-vertical.c7n-steps-vertical {
      &:not(.c7n-steps-dot) {
        > .c7n-steps-item {
          > .c7n-steps-item-tail {
            left: 0.11rem;
            padding: 0.32rem 0 0.08rem;
          }
        }
        .c7n-steps-item-title {
          line-height: 0.22rem;
        }
      }
      &.c7n-steps-small.c7n-steps-dot {
        .c7n-steps-item-icon {
          margin-right: 8px;
        }
        .c7n-steps-item-wait > .c7n-steps-item-tail::after {
          background: #dbe1f1;
        }
        .c7n-steps-item {
          .c7n-steps-item-tail {
            padding: 0;
          }
          &:first-child .c7n-steps-icon-dot {
            left: -2px;
          }
          &:last-child .c7n-steps-item-tail {
            display: block;
          }
        }
        .c7n-steps-item-content {
          padding-top: 8px;
          padding-bottom: 7px;
          min-height: initial;
          .c7n-steps-item-title {
            font-size: 12px;
          }
        }
        .c7n-steps-item-finish {
          .c7n-steps-item-icon {
            opacity: 0;
          }
          .c7n-steps-item-tail::after {
            background: #dbe1f1;
          }
          .c7n-steps-item-title {
            color: ${d.finishfontColor};
          }
        }
        .c7n-steps-item-process {
          .c7n-steps-item-title {
            color: ${d.processFontColor};
            font-weight: 600;
          }
          .c7n-steps-item-tail::after {
            background: #dbe1f1;
          }
          .c7n-steps-item-icon {
            width: 8px;
            height: 8px;
            line-height: 8px;
            margin-top: 0.08rem;
            margin-left: 1px;
            > .c7n-steps-icon {
              top: 0.1rem;
              .c7n-steps-icon-dot {
                width: 8px;
                height: 8px;
                background: #ffffff;
                border: 1px solid #0840f8;
              }
            }
          }
        }
        .c7n-steps-item-wait {
          .c7n-steps-item-icon {
            opacity: 0;
          }
          .c7n-steps-item-tail::after {
            background: #dbe1f1;
          }
          .c7n-steps-item-title {
            color: ${d.waitingFontColor};
          }
        }
      }
    }
    .c7n-steps-horizontal.c7n-steps-horizontal:not(.c7n-steps-dot),
    .c7n-steps-vertical.c7n-steps-vertical:not(.c7n-steps-dot) {
      .c7n-steps-item {
        :hover {
          cursor: pointer;
          .c7n-steps-item-icon {
            color: ${color.primary6};
            border-color: ${color.primary6};
          }
          .c7n-steps-item-title {
            color: ${color.primary6};
          }
        }
      }
      // 标题
      .c7n-steps-item-title {
        padding-right: 0.08rem;
        font-size: ${d.titleFontSize}px;
        line-height: 0.22rem;
        :after {
          top: 0.12rem;
          background: #dbe1f1;
        }
      }
      //完成图标样式
      .c7n-steps-item-finish {
        .c7n-steps-item-title {
          color: ${d.finishfontColor};
        }
        .c7n-steps-item-icon {
          background-color: ${d.finishIconBg};
          color: ${color.primary6};
          border: 1px solid ${color.primary6};
        }
      }
      //处理中图标
      .c7n-steps-item.c7n-steps-item-process {
        .c7n-steps-item-title {
          color: ${d.processFontColor};
          font-weight: 600;
        }
        .c7n-steps-item-icon {
          background: ${color.primary6};
          font-size: ${d.titleFontSize}px;
          color: ${d.processIconColor};
          text-align: center;
        }
      }
      //等待处理样式
      .c7n-steps-item-wait {
        color: ${d.waitingFontColor};
        .c7n-steps-item-icon {
          border: 1px solid ${d.waitingIconBorderColor};
          font-size: ${d.titleFontSize}px;
          color: ${d.waitingIconColor};
          background: ${d.waitingIconBg};
        }
      }
    }
    .c7n-steps-item-icon.c7n-steps-item-icon {
      width: ${d.iconSize}px;
      height: ${d.iconSize}px;
      line-height: ${d.iconSize}px;
      span.icon {
        width: initial;
        height: initial;
        line-height: initial;
        font-size: 0.16rem;
        :before {
          line-height: 0;
        }
      }
    }
    .c7n-steps.c7n-steps {
      &.c7n-steps-large {
        .c7n-steps-item-icon {
          width: ${d.largeSize}px;
          height: ${d.largeSize}px;
          line-height: ${d.largeSize}px;
        }
        .c7n-steps-item-title {
          line-height: 32px;
        }
        &.c7n-steps-horizontal:not(.c7n-steps-dot) .c7n-steps-item-title:after {
          top: 0.16rem;
        }
      }
    }
  `;
}

function getStepsStyle(props: any) {
  const d = getThemeData(props, 'steps');
  const color = getThemeData(props, 'common');
  return getBaseStyle(d, color);
}

function getStepsGroupStyle(props: any) {
  const {
    ignore,
    height,
    bg,
    border,
    requiredBg,
    requiredBorderColor,
    processFontColor,
    processIconBg,
    processIconColor,
    processIconBorder,
    iconSize,
    iconFontSize,

    finishFontColor,
    finishIconBg,
    finishIconColor,
    finishIconBorder,

    waitingFontColor,
    waitingIconBg,
    waitingIconColor,
    waitingIconBorder,

    headerHeight,
    headerIconSize,
    headerBg,
    headerRadius,
    headerFontSize,
    headerFontColor,
    requiredHeaderBg,
    requiredHeaderFontColor,
    secondaryHeaderIcon,
    requiredHeaderIcon,
  } = getThemeData(props, 'stepsGroup');
  return ignore
    ? ''
    : css`
        .c7n-steps.c7n-steps-group {
          box-sizing: border-box;
          padding: 0 10px;
          height: ${height}px;
          background: ${bg};
          border: ${border};
          border-radius: 0px ${height}px ${height}px ${height}px;
          margin: 0.3rem 44px 0.16rem 0;
          .c7n-steps-header {
            display: flex;
            align-items: center;
            top: -${headerHeight + 1}px;
            height: ${headerHeight}px;
            line-height: ${headerHeight}px;
            font-size: ${headerFontSize}px;
            background: ${headerBg};
            border-radius: ${headerRadius};
            color: ${headerFontColor};
            i.icon {
              display: block;
              margin: 0 2px 0 0;
              height: ${headerIconSize}px;
              width: ${headerIconSize}px;
            }
          }
          &.steps-group-required {
            background: ${requiredBg};
            border: 1px solid ${requiredBorderColor};
            .c7n-steps-header {
              background: ${requiredHeaderBg};
              color: ${requiredHeaderFontColor};
            }
            i.icon {
              background: url(${requiredHeaderIcon}) no-repeat;
              background-size: cover;

              ::before {
                display: none;
              }
            }
          }
          &.steps-group-secondary {
            i.icon {
              background: url(${secondaryHeaderIcon}) no-repeat;
              background-size: cover;

              ::before {
                display: none;
              }
            }
          }
          .c7n-steps-item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &-title {
              font-size: 12px;
            }
            &-icon {
              width: ${iconSize}px;
              height: ${iconSize}px;
              /* line-height: 0.22rem; */
              font-size: ${iconFontSize}px;
              > span {
                top: 0;
                display: block;
                text-align: center;
                height: 100%;
                width: 100%;
                line-height: ${iconSize - 2}px;
              }
            }
            &.c7n-steps-item-process {
              .c7n-steps-item-icon {
                background: ${processIconBg};
                color: ${processIconColor};
                border: ${processIconBorder};
              }
              .c7n-steps-item-content .c7n-steps-item-title {
                color: ${processFontColor};
                font-weight: 500;
              }
            }
            &.c7n-steps-item-wait {
              .c7n-steps-item-icon {
                background: ${waitingIconBg};
                color: ${waitingIconColor};
                border: ${waitingIconBorder};
              }
              .c7n-steps-item-content .c7n-steps-item-title {
                color: ${waitingFontColor};
              }
            }
            &.c7n-steps-item-finish {
              .c7n-steps-item-icon {
                background: ${finishIconBg};
                color: ${finishIconColor};
                border: ${finishIconBorder};
              }
              .c7n-steps-item-content .c7n-steps-item-title {
                color: ${finishFontColor};
              }
            }
          }
        }
        .steps-group-secondary {
          margin: 0px 44px 0px 0px;
        }

        .steps-group-secondary::before {
          content: ' ';
          width: calc(${height}px - 12px);
          height: calc(${height}px - 12px);
          background: ${bg};
          position: absolute;
          margin-left: -42px;
          margin-top: 0;
        }

        .steps-group-secondary::after {
          content: ' ';
          width: calc(${height}px - 12px);
          height: calc(${height}px - 12px);
          background: white;
          position: absolute;
          margin-left: -42px;
          margin-top: 0;
          border-radius: 0 50px 0 0;
        }
      `;
}

const stepsStyle = css`
  /* Steps--components 全局样式实现 */
  ${getStepsStyle}
  ${getStepsGroupStyle}
`;

export default stepsStyle;
