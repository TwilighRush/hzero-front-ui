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
        margin-right: ${firstMarginRight}px;
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
    fontColor,
    headFontColor,
    borderColor,
    headFontSize,
  } = getThemeData(props, 'transfer');
  const { primary } = getThemeData(props, 'common');
  return css`
    .c7n-pro-transfer-wrapper.c7n-pro-transfer-wrapper {
      /* 左右列表公共样式 */
      position: relative;
      .c7n-pro-transfer-operation button {
        border-radius: 50% !important;
        &:first-child {
          margin-bottom: 0.1rem !important;
        }
      }
      .c7n-pro-transfer {
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        border-color: ${borderColor};
        padding: 0;
        //覆盖原有的复选框样式
        .c7n-pro-checkbox-inner,
        .c7n-checkbox-inner {
          background: #ffffff;
          border: 1px solid #dbe1f1;
        }
        /* 搜索框 */
        .c7n-pro-transfer-body-search-wrapper {
          padding: 0;
          .c7n-pro-input-wrapper {
            width: 208px;
          }
          .c7n-pro-input.c7n-pro-transfer-search {
            &:hover,
            &:focus {
              outline: none;
              border-color: ${primary};
            }
          }
          /* 搜索放大镜垂直居中 */
          .c7n-pro-transfer-search-action {
            display: flex;
            align-items: center;
          }
        }
        /* 样式一加边框动画时，增加子组件层级，防止被覆盖 */
        .c7n-pro-transfer-header,
        .c7n-pro-transfer-body {
          z-index: 2;
        }
        .c7n-pro-transfer-header {
          font-size: ${headFontSize}px;
          color: ${headFontColor};
          height: 0.44rem;
          line-height: 0.3rem;
          border-bottom: none;
          .c7n-pro-checkbox-label {
            color: ${headFontColor};
          }
          .c7n-pro-transfer-header-title {
            right: 0.16rem;
            font-weight: 500;
          }
        }
        .c7n-pro-transfer-body-with-search {
          padding-top: 0.4rem;
          margin-top: 40px;
          .c7n-pro-transfer-content {
            margin-top: 0;
          }
        }
        .c7n-pro-transfer-content {
          margin-top: 49px;
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            min-height: 0.32rem;
            font-size: ${bodyFontSize}px;
            color: ${fontColor};
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
          }

          .c7n-pro-transfer-content-item:hover {
            background: rgba(56, 107, 215, 0.1);
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
      /* hover 复选框 border 颜色变化 */
      .c7n-checkbox-wrapper:hover .c7n-checkbox-inner,
      .c7n-checkbox:hover .c7n-checkbox-inner,
      .c7n-checkbox-input:focus + .c7n-checkbox-inner {
        border-color: ${primary};
      }
      .c7n-checkbox {
        &.c7n-checkbox-checked,
        &.c7n-checkbox-indeterminate {
          .c7n-checkbox-inner {
            background-color: ${primary};
            border-color: ${primary};
          }
        }
      }
      /* 中间按钮样式 */
      .c7n-pro-transfer-operation {
        margin: 0;
        width: ${buttonWrapWidth}px;
        padding: ${buttonWrapPadding};
        position: ${buttonWrapPosition};
        z-index: 3;
        transform: ${buttonWrapTransform};
        top: ${buttonWrapTop};

        .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
          padding: 0;
          min-width: unset;
          width: ${buttonWidth}px;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: none;
          margin: 0;
          &:before,
          &:after {
            display: none !important;
          }
          &:first-child {
            margin-bottom: ${buttonDistance};
          }
          i {
            animation: none;
            font-size: 0.16rem;
            line-height: 0.16rem;
          }
        }
      }
      /* 样式二左右列表样式 */
      ${changeThemeTwo(props)}
      .c7n-pro-transfer:last-child {
        /* 第二个列表头复选框 */
        .c7n-pro-transfer-header {
          .c7n-pro-checkbox-wrapper {
            &.c7n-pro-checkbox-indeterminate {
              .c7n-pro-checkbox-inner {
                background: #ffffff;
                border: 1px solid #dbe1f1;
                animation: none;
                &:after {
                  width: 0.06rem;
                  height: 0.06rem;
                  content: '';
                  border: none;
                  background-color: ${primary};
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
                &:before {
                  border: 0.01rem solid #ccc;
                  transform: scale(0);
                }
              }
            }
          }
        }

        .c7n-pro-transfer-body {
          .c7n-pro-transfer-content-wrapper {
            /* 第二个列表内容复选框 */
            .c7n-pro-transfer-content {
              .c7n-pro-transfer-content-item {
                .c7n-checkbox-wrapper {
                  .c7n-checkbox {
                    .c7n-checkbox-inner {
                      background: #ffffff;
                      border: 1px solid #dbe1f1;
                    }
                    &.c7n-checkbox-checked {
                      .c7n-checkbox-inner {
                        background-color: ${primary};
                        border-color: ${primary};
                        &:after {
                          border: 0.02rem solid #fff;
                          border-top: 0;
                          border-left: 0;
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
};

export default TransferStyle;
