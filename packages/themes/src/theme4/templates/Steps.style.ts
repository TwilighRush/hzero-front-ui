import { css, keyframes } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

// rem转px之后，计算方式也要改变
const getAfterWidth = (w: any) => Math.floor(Math.sqrt((w * w * 10000) / 2)) / 100;

function getBaseStyle(d: any) {
  return css`
    .c7n-steps-item-tail.c7n-steps-item-tail::after {
      height: 2px;
      background: rgba(0, 0, 0, 0.2);
    }
    .c7n-steps.c7n-steps-horizontal:not(.c7n-steps-group) {
      &:not(.c7n-steps-label-vertical) > .c7n-steps-item {
        margin-right: 0;
      }
      > .c7n-steps-item {
        position: relative;
        margin: 0;
        background: none;
        .c7n-steps-item-description {
          font-family: ${d.itemDescriptionFontFamily};
          font-size: ${d.itemDescriptionFontSize};
          color: ${d.itemDescriptionColor};
          line-height: ${d.itemDescription};
        }
        .c7n-steps-item-content {
          width: 100%;
          text-align: center;
          white-space: pre-wrap;
          .c7n-steps-item-description {
            position: relative;
            right: 4px;
            bottom: 4px;
            width: 100%;
          }
          .c7n-steps-item-title {
            font-family: MicrosoftYaHei;
            font-size: ${d.titleFontSize}px;
            color: ${d.titleFontColor};
            line-height: 0.2rem;
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
    }
    .c7n-steps.c7n-steps-horizontal:not(.c7n-steps-group) {
      > .c7n-steps-item {
        .c7n-steps-item-content {
          width: 1.4rem;
        }
      }
    }
    .c7n-steps.c7n-steps.c7n-steps-navigation {
      .c7n-steps-navigation-container {
        .c7n-steps-item {
          &.c7n-steps-item-finish {
            .c7n-steps-item-icon {
              background: ${d.finishIconBg};
              border: ${d.finishIconBorder};
              span {
                color: ${d.finishIconColor};
              }
            }
            .c7n-steps-item-content {
              .c7n-steps-item-title {
                > span {
                  color: ${d.finishTitleColor};
                }
              }
            }
          }
          &.c7n-steps-item-process {
            .c7n-steps-item-icon {
              border: ${d.processIconBorder};
              background: ${d.processIconBg};
              .c7n-steps-icon {
                color: ${d.processIconColor};
              }
            }
            .c7n-steps-item-content {
              .c7n-steps-item-title {
                > span {
                  color: ${d.processBarBg};
                }
              }
            }
          }
          &.c7n-steps-item-error {
            .c7n-steps-item-icon {
              border: ${d.errorIconBorder || '#fd6868'};
              background: ${d.errorIconBg || '#fd6868'};
              .c7n-steps-icon {
                color: ${d.errorIconColor || '#fff'};
              }
            }
          }
          &.c7n-steps-item-wait {
            .c7n-steps-item-icon {
              border: ${d.waitingIconBorder};
              background: ${d.waitingIconBg};
              .c7n-steps-icon {
                color: ${d.waitingIconColor};
              }
            }
            div.c7n-steps-item-title {
              color: ${d.titleFontColor};
              > span {
                color: ${d.finishTitleColor};
              }
            }
          }
        }
      }
    }
  `;
}

const getTemplateOneStyle = (d: any) => css`
  ${getBaseStyle(d)};
  .c7n-steps-vertical {
    .c7n-steps-item-icon {
      width: 24px;
      height: 24px;
    }
  }
  .c7n-steps-item-finish > .c7n-steps-item-content > .c7n-steps-item-description {
    color: rgba(15, 19, 88, 0.65);
  }
  .c7n-steps-item-process > .c7n-steps-item-content > .c7n-steps-item-description {
    color: rgba(15, 19, 88, 0.65);
  }
  .c7n-steps-item-wait > .c7n-steps-item-content > .c7n-steps-item-description {
    color: rgba(15, 19, 88, 0.65);
  }
  .c7n-steps.c7n-steps-horizontal.c7n-steps-dot > .c7n-steps-item-wait .c7n-steps-icon-dot {
    background: rgba(0, 0, 0, 0.2);
  }
  .c7n-steps-dot .c7n-steps-item-process .c7n-steps-item-content {
    position: relative;
    left: 14px;
  }
  // .c7n-steps-vertical.c7n-steps-dot .c7n-steps-item:first-child .c7n-steps-icon-dot {
  //   left: -8px;
  // }
  // .c7n-steps-vertical.c7n-steps-dot .c7n-steps-item:last-child .c7n-steps-icon-dot {
  //   left: -8px;
  // }
  .c7n-steps.c7n-steps-vertical.c7n-steps-dot {
    padding-left: ${d.verticalPadding};
    > .c7n-steps-item {
      .c7n-steps-icon-dot {
        // background: ${d.c7nStepsIconDotColor};
        width: 8px;
        height: 8px;
        position: relative;
        left: -1px;
      }
      .c7n-steps-item-tail:after {
        width: ${d.barHeight / 2}px;
        margin-left: ${d.verticalDotmarginLeft};
      }
      &.c7n-steps-item-finish {
        & > .c7n-steps-item-tail:after {
          background: ${d.c7nStepsIconDotColor};
        }
        .c7n-steps-item-title {
          color: ${d.c7nStepsIconDotColor};
          font-size: ${d.processTitleFontSize};
        }
      }
      &.c7n-steps-item-process {
        .c7n-steps-item-title {
          color: ${d.finishTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }
      &.c7n-steps-item-wait {
        .c7n-steps-item-title {
          color: ${d.waitTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }
    }
  }
  .c7n-steps.c7n-steps-horizontal.c7n-steps-dot {
    > .c7n-steps-item:not(.c7n-steps-item-wait) {
      .c7n-steps-icon-dot {
        background: ${d.c7nStepsIconDotColor};
      }
    }
  }
  .c7n-steps.c7n-steps-horizontal.c7n-steps-dot {
    > .c7n-steps-item {
      .c7n-steps-item-description {
        text-align: ${d.descriptionTextAlign};
      }
      &.c7n-steps-item-finish {
        & > .c7n-steps-item-tail:after {
          background: ${d.c7nStepsIconDotColor};
        }
        .c7n-steps-item-title {
          color: ${d.c7nStepsIconDotColor};
          font-size: ${d.processTitleFontSize};
          font-weight: 500;
        }
      }
      &.c7n-steps-item-process {
        .c7n-steps-item-title {
          color: ${d.finishTitleColor};
          font-size: ${d.processTitleFontSize};
          font-weight: 400;
        }
      }
      &.c7n-steps-item-wait {
        .c7n-steps-item-title {
          color: ${d.waitTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }
    }
  }
  .c7n-steps.c7n-steps-vertical:not(.c7n-steps-group):not(.c7n-steps-dot) {
    padding-left: ${d.verticalPadding};
    > .c7n-steps-item {
      margin: ${d.verticalItemMargin};
      .c7n-steps-item-tail {
        padding: ${d.itemTailPadding};
        left: ${d.itemTailLeft};
      }
      .c7n-steps-item-title {
        font-family: ${d.titleFontFamily};
        font-size: ${d.titleFontSize}px;
      }
      .c7n-steps-item-tail:after {
        position: relative;
        width: ${d.barHeight}px;
        left: ${d.itemTailAfterLeft};
        display: ${d.progressDisplay};
      }
      &.c7n-steps-item-finish {
        .c7n-steps-item-icon {
          background: ${d.finishIconBg};
          border: ${d.finishIconBorder};
          span {
            color: ${d.finishIconColor};
          }
        }
        .c7n-steps-item-icon span.icon {
          font-size: 0.14rem;
          width: auto;
          height: auto;
          height: 100%;
          line-height: 0.24rem;
          position: relative;
          bottom: 2px;
        }
        .c7n-steps-item-tail:after {
          background: ${d.finishBarBg};
        }
        .c7n-steps-item-title {
          color: ${d.finishTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }

      &.c7n-steps-item-process {
        .c7n-steps-item-tail {
          &:after {
            background: ${d.processBarBg};
          }
          &:before {
            width: 0.01rem;
            height: 50%;
            position: ${d.itemProcessAfterPosition};
            margin-left: ${d.itemTailAfterLeft};
            width: ${d.barHeight}px;
            content: ' ';
            top: 50%;
            background: #d9e6f2;
            z-index: 2;
          }
        }

        .c7n-steps-item-icon {
          border: ${d.processIconBorder};
          background: ${d.processIconBg};
          .c7n-steps-icon {
            font-size: 0.14rem;
            color: ${d.processIconColor};
            top: -0.03rem;
          }
        }
        .c7n-steps-item-title {
          color: ${d.processIconBg};
          font-size: ${d.processTitleFontSize};
        }
      }
      &.c7n-steps-item-wait {
        .c7n-steps-item-tail {
          display: ${d.progressDisplay};
          &:after {
            background: ${d.waitingBarBg};
          }
        }
        .c7n-steps-item-icon {
          border: ${d.waitingIconBorder};
          background: ${d.waitingIconBg};
          .c7n-steps-icon {
            font-size: 0.14rem;
            color: ${d.waitingIconColor};
            top: -0.03rem;
          }
        }
        .c7n-steps-item-title {
          color: ${d.waitTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }
    }
  }

  .c7n-steps.c7n-steps-horizontal:not(.c7n-steps-group):not(.c7n-steps-dot) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 8px;

    > .c7n-steps-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: ${d.stepItemHight};
      align-items: ${d.alignItems || 'center'};
      margin: ${d.itemMargin};
      overflow: ${d.itemOverflow};
      align-items: left;
      ${d.iconMaskSize
        ? css`
            &:before {
              content: '';
              position: absolute;
              left: 50%;
              top: ${d.iconSize / 2 - 1}px;
              width: ${d.iconMaskSize}px;
              height: 0.04rem;
              transform: translateX(-50%);
              background-color: #fff;
              z-index: 2;
            }
          `
        : ''}
      :after {
        content: '';
        height: ${d.barHeight}px;
        width: 99.99rem;
        background: ${d.barBg};
        display: block;
        position: absolute;
        top: ${d.iconSize / 2 - d.barHeight / 2}px;
        left: 0;
        z-index: 1;
      }

      /* .c7n-steps-item-description {
        padding-left: ${d.horizontalDescriptionPaddingLeft};
      } */

      &.c7n-steps-item-process:before {
        content: '';
        height: ${d.barHeight}px;
        width: 99.99rem;
        background: #d9e6f2;
        display: ${d.progressDisplay || 'none'};
        top: ${d.stepLineTop};
        position: absolute;
        left: 50%;
        z-index: 2;
      }
      :after {
        top: ${d.stepLineTop};
      }
      :first-of-type:after {
        left: ${d.firstLeftIcon || '50%'};
      }
      :last-of-type:after {
        right: ${d.lastRightIcon || '50%'};
        width: auto;
      }
      .c7n-steps-item-content {
        .c7n-steps-item-title {
          position: relative;
          bottom: 2px;
          padding-right: 0;
          margin-top: ${d.itemTitleMarginTop};
          text-align: ${d.itemTitleTextAlign};
          margin-left: ${d.itemTitleMarginLeft};
        }
        .c7n-steps-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
      }
      .c7n-steps-item-icon {
        width: ${d.iconSize}px;
        height: ${d.iconSize}px;
        line-height: ${d.iconSize}px;
        border: ${d.iconBorder};
        margin: 0;
        position: relative;
        z-index: 2;
        .icon {
          line-height: 1;
        }
        .icon-close {
          width: initial;
          height: initial;
        }
        .c7n-steps-icon {
          color: ${d.iconBg};
        }
      }
      &.c7n-steps-item-finish {
        .c7n-steps-item-icon {
          background: ${d.finishIconBg};
          border: ${d.finishIconBorder};
          span {
            color: ${d.finishIconColor};
          }
        }
        .c7n-steps-item-title {
          color: ${d.finishTitleColor};
          font-size: ${d.processTitleFontSize};
        }
        .c7n-steps-item-icon span.icon {
          font-size: 0.14rem;
          width: auto;
          height: auto;
          color: ${d.finishIconColor};
          // 保持居中
          height: 100%;
          line-height: 0.24rem;
        }
        :after {
          background: ${d.finishBarBg};
        }
      }
      &.c7n-steps-item-process {
        :after {
          background: ${d.processBarBg};
        }
        .c7n-steps-item-icon {
          border: ${d.processIconBorder};
          background: ${d.processIconBg};
          .c7n-steps-icon {
            color: ${d.processIconColor};
          }
        }
        .c7n-steps-item-title {
          color: ${d.processIconBg};
          font-size: ${d.processTitleFontSize};
        }
      }
      &.c7n-steps-item-wait {
        :after {
          display: block;
          background: ${d.waitingBarBg};
        }
        .c7n-steps-item-icon {
          border: ${d.waitingIconBorder};
          background: ${d.waitingIconBg};
          .c7n-steps-icon {
            color: ${d.waitingIconColor};
          }
        }
        .c7n-steps-item-title {
          color: ${d.waitTitleColor};
          font-size: ${d.processTitleFontSize};
        }
      }
      &.c7n-steps-item-error {
        :after {
          display: block;
          background: ${d.errorBarBg || '#fd6868'};
        }
        > .c7n-steps-item-content > .c7n-steps-item-description {
          color: rgba(0, 0, 0, 0.45);
        }
        .c7n-steps-item-icon {
          border: ${d.errorIconBorder || '#fd6868'};
          background: ${d.errorIconBg || '#fd6868'};
          .c7n-steps-icon {
            color: ${d.errorIconColor || '#fff'};
          }
        }
      }
    }
  }
`;

const getClipAnimation = (w: any) => {
  return keyframes`
  0% {
    .c7n-steps-item-content > div {
      color: #000;
    }
    clip-path: polygon(0% 0%, 0% 0%, ${w}px 50%, 0% 100%, 0% 100%);
  }
  100% {
    .c7n-steps-item-content > div {
      color: #fff;
    }
    clip-path: polygon(0% 0%, 100% 0%, calc(100% + ${w}px) 50%, 100% 100%, 0% 100%);
  }
`;
};

function getTemplateTwo(d: any) {
  const afterWidth = getAfterWidth(d.itemHeight); // 0.32rem
  const clipAnimation = getClipAnimation(0.71 * afterWidth);
  return css`
    ${getBaseStyle(d)};
    .c7n-steps.c7n-steps-horizontal:not(.c7n-steps-group) {
      > .c7n-steps-item {
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
        .c7n-steps-item-content {
          font-family: MicrosoftYaHei;
          font-size: ${d.fontSize}px;
          line-height: 0.2rem;
          width: 100%;
          flex: 0 0 100%;
          z-index: 3;
          .c7n-steps-item-title {
            width: calc(100% - 16rem);
            padding: 0;
            white-space: nowrap;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            transform: translateY(-1px);
            :after {
              display: none;
            }
          }
        }
        :first-of-type {
          border-radius: ${d.firstRadius};
          padding: 0 0.12rem;
        }
        :after {
          content: '';
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
        .c7n-steps-item-icon {
          flex: 0 0 ${d.iconSize}px;
          width: ${d.iconSize}px;
          height: ${d.iconSize}px;
          border: none;
          line-height: ${d.iconSize}px;
          .c7n-steps-icon:after {
            font-size: ${d.iconSize}px;
            line-height: ${d.iconSize}px;
          }
        }
      }
      > .c7n-steps-item-finish {
        background: ${d.finishBg};
        border: ${d.finishBorder};
        :after {
          background: ${d.finishBg};
        }
        animation: ${clipAnimation} 0.3s linear;
        .c7n-steps-item-content > div {
          color: #fff;
        }
        .c7n-steps-item-icon {
          background: ${d.finishIconBg};
          border: ${d.finishIconBorder};
          span {
            color: ${d.finishIconColor};
          }
        }
        .c7n-steps-item-icon span.icon {
          font-size: 0.12rem;
          line-height: 0.12rem;
          width: 100%;
          height: 100%;
        }

        .c7n-steps-icon:before {
          line-height: 0.16rem;
        }
        .c7n-steps-item-title {
          color: ${d.finishFontColor};
        }
      }
      > .c7n-steps-item-process {
        background: ${d.processBg};
        border: ${d.processBorder};
        clip: rect(0 0.5rem 1rem 0);
        .c7n-steps-item-content > div {
          color: ${d.processFontColor};
        }
        .c7n-steps-item-icon {
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
      > .c7n-steps-item-wait {
        background: ${d.waitingBg};
        border: ${d.waitingBorder};
        .c7n-steps-item-icon {
          background: ${d.waitingIconBg};
          border: ${d.waitingIconBorder};
          span {
            color: ${d.waitingIconColor};
            display: none;
          }
        }
      }
      > .c7n-steps-item-error {
        background-color: #fd6868;
        color: #fff;
        &:after {
          background-color: #fd6868;
        }
        .c7n-steps-item-content {
          .c7n-steps-item-title,
          .c7n-steps-item-description {
            color: #fff;
          }
        }
        .c7n-steps-item-icon {
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

function getStepsStyle(props: any) {
  const d = getThemeData(props, 'steps');
  return d.template === 0 ? getTemplateOneStyle(d) : getTemplateTwo(d);
}

function getStepsGroupStyle(props: any) {
  const {
    ignore,
    height,
    bg,
    border,
    fontFamily,
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
              font-family: ${fontFamily};
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
