import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

/* 样式二 整合列表一 列表二 */
const changeThemeTwo = (props) => {
  const {
    rightDistance,
    topRightRadius,
    bottomRightRadius,
    leftDistance,
    bottomLeftRadius,
    topLeftRadius,
    firstMarginRight,
  } = getThemeData(props, 'transfer');
  return css`
    .c7n-pro-transfer.c7n-pro-transfer {
      &:first-child {
        /* 合并时去除圆角 */
        border-top-right-radius: ${topRightRadius};
        border-bottom-right-radius: ${bottomRightRadius};
        .c7n-pro-transfer-header {
          padding-left: ${leftDistance * 2}px;
          padding-right: ${rightDistance * 2}px;
        }
        .c7n-pro-transfer-body-search-wrapper {
          padding-left: ${rightDistance * 2}px;
          .c7n-pro-input-suffix {
            color: rgba(0, 0, 0, 0.25);
          }
        }
        .c7n-pro-transfer-content {
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            padding-left: 0.08rem;
            margin-left: 0.08rem;
            padding-right: 0.08rem;
            margin-right: 0.08rem;
          }
        }
      }
      &:last-child {
        /* 合并时去左边框和除圆角 */
        border-top-left-radius: ${topLeftRadius};
        border-bottom-left-radius: ${bottomLeftRadius};
        margin-left: 0;
        .c7n-pro-transfer-header {
          padding-left: ${leftDistance * 2}px;
          padding-right: ${rightDistance * 2}px;
        }
        .c7n-pro-transfer-body-search-wrapper {
          padding-left: ${leftDistance * 2}px;
        }
        .c7n-pro-transfer-content {
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            padding-left: 0.08rem;
            margin-left: 0.08rem;
            padding-right: 0.08rem;
            margin-right: 0.08rem;
          }
        }
      }
    }
  `;
};

const TransferStyle = (props) => {
  const {
    listWidth,
    listHeight,
    listRadius,
    buttonWrapWidth,
    buttonWrapPadding,
    buttonWrapTransform,
    buttonWrapPosition,
    buttonWrapTop,
    buttonWidth,
    buttonHeight,
    buttonRadius,
    buttonDistance,
    bodyFontSize,
    headFontSize,
    headerHeight,
    titleFontSize,
  } = getThemeData(props, 'transfer');
  const {
    primary1,
    primary4,
    primary7,
    titleColor1,
    titleColor2,
    titleColor3,
    lineColor1,
    lineColor3,
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-transfer-wrapper.c7n-pro-transfer-wrapper {
      /* 左右列表公共样式 */
      position: relative;
      .c7n-pro-transfer-operation button {
        border-radius: 12px !important;
        &:first-child {
          margin-bottom: 0.1rem !important;
        }
      }
      .c7n-pro-transfer.c7n-pro-transfer-with-header {
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        border-color: ${lineColor1};
        padding: 0;
        /* 样式一加边框动画时，增加子组件层级，防止被覆盖 */
        .c7n-pro-transfer-header,
        .c7n-pro-transfer-body {
          z-index: 2;
        }

        //header样式
        .c7n-pro-transfer-header {
          font-size: ${headFontSize}px;
          color: ${titleColor3};
          height: ${headerHeight + 12}px;
          line-height: ${headerHeight}px;
          border-bottom: none;
          .c7n-pro-checkbox-label {
            color: ${titleColor3};
          }
          .c7n-pro-transfer-header-title {
            right: 0.16rem;
            font-weight: 600;
            font-size: ${titleFontSize}px;
            color: ${titleColor1};
          }
        }
        //body
        .c7n-pro-transfer-body {
          height: calc(100% - 44px);
          //搜索框
          &.c7n-pro-transfer-body-with-search {
            padding-top: 0.4rem;
            margin-top: 40px;
            .c7n-pro-transfer-content {
              margin-top: 0;
            }
            .c7n-pro-input-wrapper {
              width: 208px;
            }
          }

          .c7n-pro-transfer-content {
            margin-top: 44px;
            /* 每一项 */
            .c7n-pro-transfer-content-item {
              line-height: 0.2rem;
              font-size: ${bodyFontSize}px;
              color: ${titleColor2};

              .c7n-checkbox-wrapper {
                .c7n-checkbox {
                  &.c7n-checkbox-checked {
                    .c7n-checkbox-inner {
                      &:after {
                        transform: rotate(45deg) scale(0.9);
                        left: 0.04rem;
                      }
                    }
                  }
                }
              }
              &.c7n-pro-transfer-content-item-disabled {
                color: ${titleColor3};
                &,
                &:hover {
                  cursor: not-allowed;
                  background-color: #fff;
                }
              }
            }

            .c7n-pro-transfer-content-item:hover {
              background: ${primary1};
              border-radius: 2px;
              cursor: pointer;
            }
            .c7n-pro-transfer-content-item-active {
              background-color: transparent;
            }

            .c7n-pro-transfer-content-item-selected {
              background: none;
            }
          }
        }
      }
      //单选样式
      .c7n-pro-transfer {
        .c7n-pro-transfer-body {
          height: calc(100% - 44px);
          //搜索框
          &.c7n-pro-transfer-body-with-search {
            padding-top: 0.4rem;
            margin-top: 40px;
            .c7n-pro-transfer-content {
              margin-top: 0;
            }
            .c7n-pro-input-wrapper {
              width: 208px;
            }
          }

          .c7n-pro-transfer-content {
            /* margin-top: 44px; */
            /* 每一项 */
            .c7n-pro-transfer-content-item {
              line-height: 0.2rem;
              font-size: ${bodyFontSize}px;
              color: ${titleColor2};

              .c7n-checkbox-wrapper {
                .c7n-checkbox {
                  &.c7n-checkbox-checked {
                    .c7n-checkbox-inner {
                      &:after {
                        transform: rotate(45deg) scale(0.9);
                        left: 0.04rem;
                      }
                    }
                  }
                }
              }
              &.c7n-pro-transfer-content-item-disabled {
                color: ${titleColor3};
                &,
                &:hover {
                  cursor: not-allowed;
                  background-color: #fff;
                }
              }
            }

            .c7n-pro-transfer-content-item:hover {
              background: ${primary1};
              border-radius: 2px;
              cursor: pointer;
            }
            .c7n-pro-transfer-content-item-active {
              background-color: transparent;
            }

            .c7n-pro-transfer-content-item-selected {
              background: none;
            }
          }
        }
      }
      /* 中间按钮样式 */
      .c7n-pro-transfer-operation {
        margin: 0 8px;
        padding: ${buttonWrapPadding};
        z-index: 3;
        top: ${buttonWrapTop};

        .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
          min-width: unset;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: none;
          margin: 0;
          /* 保持默认样式为圆形 */
          padding: 0 3px;
          &.c7n-pro-btn-icon-only {
            width: ${buttonWidth}px;
          }
          &:before,
          &:after {
            display: none !important;
          }
          &.c7n-pro-btn-focused,
          :hover,
          :focus {
            color: #fff;
            background-color: ${primary4};
            border-color: ${primary4};
          }
          &:active {
            color: #fff;
            background-color: ${primary7};
            border-color: ${primary7};
          }

          &:disabled,
          &:disabled&:hover {
            border-color: ${lineColor1} !important;
            background-color: ${lineColor3} !important;
            color: ${titleColor3} !important;
            cursor: not-allowed;
            opacity: 1;
          }
          &:first-child {
            margin-bottom: ${buttonDistance};
          }
          i {
            animation: none;
            font-size: 0.16rem;
            line-height: 0.16rem;
            margin: 0;
          }
        }
      }
      /* sortable按钮样式 */
      &.c7n-pro-transfer-sortable {
        .c7n-pro-transfer-sort {
          > button {
            display: block;
            :last-child {
              margin-left: 0;
            }
          }
        }
      }
      /* 样式二左右列表样式 */
      ${changeThemeTwo(props)}
    }
  `;
};

export default TransferStyle;
