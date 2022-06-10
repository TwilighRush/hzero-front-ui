import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
function getBaseStyle(props: any) {
  const {
    titleFontSize,
    finishIconBg,
    processIconColor,
    waitingIconBorderColor,
    waitingIconBg,
    waitingIconColor,
    iconSize,
    errorWhite,
    errorRed,
  } = getThemeData(props, 'steps');
  const {
    primary6,
    titleColor1,
    titleColor2,
    titleColor3,
    iconfontFamily,
    redColor6,
    pureBlack,
  } = getThemeData(props, 'common');
  return css`
    .c7n-steps-horizontal.c7n-steps-horizontal {
      &:not(.c7n-steps-label-vertical) {
        .c7n-steps-item {
          margin-right: 0.08rem;
        }
      }
      &.c7n-steps-label-vertical.c7n-steps-dot {
        .c7n-steps-item-finish,
        .c7n-steps-item-process {
          .c7n-steps-item-description {
            color: ${pureBlack};
          }
          .c7n-steps-icon-dot {
            background: ${primary6};
          }
        }
        .c7n-steps-item-wait {
          .c7n-steps-item-description {
            color: ${titleColor3};
          }
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
            color: #465476;
          }
        }
        .c7n-steps-item-process {
          .c7n-steps-item-title {
            color: #1c1c1c;
            font-weight: 500;
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
            color: #465476;
          }
        }
      }
      .c7n-steps-item-icon.c7n-steps-item-icon {
        margin-right: 0.08rem;
      }
    }
    .c7n-steps.c7n-steps {
      &.c7n-steps-horizontal:not(.c7n-steps-dot),
      &.c7n-steps-vertical:not(.c7n-steps-dot) {
        .c7n-steps-item {
          cursor: pointer;
          &:hover {
            .c7n-steps-item-icon.c7n-steps-item-icon {
              border: 0.01rem solid ${primary6};
              color: ${primary6};
              background-color: transparent;
            }
            .c7n-steps-item-content {
              .c7n-steps-item-title {
                color: ${primary6};
              }
            }
          }
        }
        // 标题
        .c7n-steps-item-title {
          padding-right: 0.08rem;
          font-size: ${titleFontSize}px;
          line-height: 0.22rem;
          :after {
            top: 0.12rem;
            background: #dbe1f1;
          }
        }
        &.c7n-steps-large {
          .c7n-steps-item-content {
            /* vertical-align: middle !important; */
            .c7n-steps-item-title {
              line-height: 32px;
              font-size: 16px;
            }
          }
          .c7n-steps-item-icon {
            .c7n-steps-icon {
              font-size: 14px;
            }
          }
        }
        /* 描述 */
        .c7n-steps-item-description {
          margin-top: 4px;
        }
        //完成图标样式
        .c7n-steps-item-finish {
          .c7n-steps-item-title {
            color: ${titleColor2};
          }
          .c7n-steps-item-icon {
            background-color: ${finishIconBg};
            color: ${primary6};
            border: 1px solid ${primary6};
          }
        }
        //处理中图标
        .c7n-steps-item-process {
          .c7n-steps-item-title {
            color: ${titleColor1};
            font-weight: 500;
          }
          .c7n-steps-item-icon {
            background: ${primary6};
            font-size: ${titleFontSize}px;
            color: ${processIconColor};
            text-align: center;
          }
        }
        //等待处理样式
        .c7n-steps-item-wait.c7n-steps-item-wait {
          .c7n-steps-item-title {
            color: ${titleColor3};
          }
          .c7n-steps-item-icon {
            border: 1px solid ${waitingIconBorderColor};
            font-size: ${titleFontSize}px;
            color: ${waitingIconColor};
            background: ${waitingIconBg};
          }
        }
        .c7n-steps-item-icon {
          width: ${iconSize}px;
          height: ${iconSize}px;
          line-height: ${iconSize}px;
          border: 1px solid transparent;
          /* display: flex;
          align-items: center;
          justify-content: center; */

          span.icon {
            width: ${iconSize - 2}px;
            height: ${iconSize - 2}px;
            line-height: ${iconSize - 2}px;
            font-size: 0.16rem;
            vertical-align: top;
            &::before {
              display: block;
              width: 100%;
              height: 100%;
              line-height: ${iconSize - 2}px;
            }
          }
          .c7n-steps-icon {
            display: flex;
            align-items: center;
            height: 0.22rem;
            justify-content: center;
          }
        }
      }
      &.c7n-steps-large.c7n-steps-large {
        .c7n-steps-item.c7n-steps-item {
          .c7n-steps-item-icon.c7n-steps-item-icon {
            width: 32px;
            height: 32px;
            > .c7n-steps-icon {
              height: 32px;
              align-items: center;
            }
            > .icon::before {
              line-height: 32px;
            }
          }
          .c7n-steps-item-content {
            .c7n-steps-item-title {
              line-height: 32px;
              font-size: 16px;
              ::after {
                top: 0.16rem;
              }
            }
          }
        }
      }
    }
    .c7n-steps-navigation {
      .c7n-steps.c7n-steps {
        /* display: block; */
        .c7n-steps-item {
          margin: 0;
          .c7n-steps-item-content {
            .c7n-steps-item-title {
              padding-right: 20px;
              /* :after {
                content: '\\e73e';
                font-size: 20px;
                font-family: ${iconfontFamily};
                background-color: transparent;
                color: ${titleColor2};
                font-weight: 400;
                top: 2px;
                width: 20px;
                height: 20px;
              } */
            }
          }
        }
      }
    }
    .c7n-menu.c7n-menu {
      .c7n-steps-item {
        cursor: pointer;
        &:hover {
          .c7n-steps-item-icon.c7n-steps-item-icon {
            border: 0.01rem solid ${primary6};
            color: ${primary6};
            background-color: transparent;
          }
          .c7n-steps-item-dropdown-title {
            color: ${primary6};
          }
        }
      }
      // 标题
      .c7n-steps-item-dropdown-title {
        font-size: 0.12rem;
        line-height: inherit;
        :after {
          top: 0.12rem;
          background: #dbe1f1;
        }
      }
      //完成图标样式
      .c7n-steps-item-finish {
        .c7n-steps-item-dropdown-title {
          color: ${titleColor2};
        }
        .c7n-steps-item-icon {
          background-color: ${finishIconBg};
          color: ${primary6};
          border: 1px solid ${primary6};
        }
      }
      //处理中图标
      .c7n-steps-item-process {
        .c7n-steps-item-dropdown-title {
          color: ${titleColor1};
          font-weight: 500;
        }
        .c7n-steps-item-icon {
          background: ${primary6};
          font-size: ${titleFontSize}px;
          color: ${processIconColor};
          text-align: center;
        }
      }
      //等待处理样式
      .c7n-steps-item-wait {
        .c7n-steps-item-dropdown-title {
          color: ${titleColor3};
        }
        .c7n-steps-item-icon {
          border: 1px solid ${waitingIconBorderColor};
          font-size: ${titleFontSize}px;
          color: ${waitingIconColor};
          background: ${waitingIconBg};
        }
      }
      .c7n-steps-item-icon {
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.16rem;
        border: 1px solid transparent;
        margin-top: -2px;
        .c7n-steps-icon {
          top: -0.02rem;
          font-size: 0.12rem;
        }
        span.icon {
          width: 16px;
          height: 16px;
          line-height: 1;
        }
      }
    }
    .c7n-steps-item.c7n-steps-item {
      &:hover {
        .c7n-steps-item-content {
          .c7n-steps-item-description {
            color: ${primary6};
          }
        }
      }
      /* .c7n-steps-item-icon {
        .c7n-steps-icon {
          position: static;
          i {
          }
        }
      } */
    }
    //错误时候erroor样式
    .c7n-steps-item-error.c7n-steps-item-error {
      .c7n-steps-item-content {
        .c7n-steps-item-title {
          color: ${redColor6} !important;
        }
      }
      .c7n-steps-item-icon {
        .c7n-steps-icon-dot {
          background: ${primary6};
        }
        background-color: ${redColor6} !important;
        border-color: transparent !important;
        span {
          color: #fff;
        }
      }
      .c7n-steps-item-description {
        color: ${redColor6} !important;
      }
      &:hover {
      }
    }
  `;
}

//未修改
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
        .steps-group-secondary.steps-group-secondary {
          margin: 0px 44px 0px 0px;
        }

        .steps-group-secondary.steps-group-secondary::before {
          content: ' ';
          width: calc(${height}px - 12px);
          height: calc(${height}px - 12px);
          background: ${bg};
          position: absolute;
          margin-left: -42px;
          margin-top: 0;
        }

        .steps-group-secondary.steps-group-secondary::after {
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
  ${getBaseStyle}
  ${getStepsGroupStyle}
`;

export default stepsStyle;
