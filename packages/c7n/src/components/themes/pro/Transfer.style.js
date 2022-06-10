import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

/* 样式二 整合列表一 列表二 */
const changeThemeTwo = (props) => {
  const {
    rightDistance,
    topRightRadius,
    bottomRightRadius,
    leftDistance,
    bottomLeftRadius,
    topLeftRadius,
    borderLeft,
  } = getThemeData(props, "transfer");
  return css`
    .c7n-pro-transfer {
      .c7n-pro-input-wrapper.c7n-pro-input-empty {
        .c7n-pro-input-clear-button {
          display: none;
        }
      }
      &:first-child {
        /* 合并时去除圆角 */
        border-top-right-radius: ${topRightRadius};
        border-bottom-right-radius: ${bottomRightRadius};
        .c7n-pro-transfer-header {
          padding-right: ${rightDistance}px;
        }
        .c7n-pro-transfer-body-search-wrapper {
          padding-right: ${rightDistance}px;
          .c7n-pro-input-suffix {
            color: rgba(0, 0, 0, 0.25);
          }
        }
        .c7n-pro-transfer-content {
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            padding-right: ${rightDistance}px;
          }
        }
      }
      &:last-child {
        /* 合并时去左边框和除圆角 */
        border-left: ${borderLeft};
        border-top-left-radius: ${topLeftRadius};
        border-bottom-left-radius: ${bottomLeftRadius};
        margin-left: 0;
        .c7n-pro-transfer-header {
          padding-left: ${leftDistance}px;
        }
        .c7n-pro-transfer-body-search-wrapper {
          padding-left: ${leftDistance}px;

          .c7n-pro-input-suffix {
            color: rgba(0, 0, 0, 0.25);
          }
        }
        .c7n-pro-transfer-content {
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            padding-left: ${leftDistance}px;
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
    buttonWrapPadding,
    buttonWrapTransform,
    buttonWrapPosition,
    buttonWrapTop,
    buttonWidth,
    buttonHeight,
    buttonRadius,
    buttonDisabledBorderColor,
    buttonDisabledBgColor,
    buttonDistance,
    selectedFontColor,
    fontFamily,
    bodyFontSize,
    fontColor,
    headFontColor,
    borderColor,
    headFontSize,
  } = getThemeData(props, "transfer");
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-pro-transfer-wrapper {
      /* pro组件 sortable模式下的样式覆盖 */
      &.c7n-pro-transfer-sortable {
        .c7n-pro-transfer-sort {
          > button {
            i {
              margin: 0 !important;
            }
            display: block;
            /* padding: 0; */
            :last-child {
              margin-left: 0;
            }
          }
        }
      }
      position: relative;
      /* 左右列表公共样式 */
      .c7n-pro-transfer {
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        border-color: ${borderColor};
        /* 搜索框 */
        .c7n-pro-transfer-body-search-wrapper {
          padding: 0.08rem 0.12rem;
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
        }
        .c7n-pro-transfer-content {
          /* 每一项 */
          .c7n-pro-transfer-content-item {
            /* flex: 每一项内容垂直居中 */
            display: flex;
            align-items: center;
            min-height: 0.34rem;
            font-family: ${fontFamily};
            font-size: ${bodyFontSize}px;
            color: ${fontColor};
            &.c7n-pro-transfer-content-item-selected {
              color: ${selectedFontColor};
            }
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
            background-color: rgba(0, 0, 0, 0.04);
            cursor: pointer;
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
        padding: ${buttonWrapPadding};
        position: ${buttonWrapPosition};
        z-index: 3;
        transform: ${buttonWrapTransform};
        top: ${buttonWrapTop};

        .c7n-pro-btn.c7n-pro-btn.c7n-pro-btn {
          min-width: unset;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: none;
          /* 保持默认样式为圆形 */
          padding: 0 3px;
          &.c7n-pro-btn-icon-only {
            width: ${buttonWidth}px;
          }
          &:before,
          &:after {
            display: none !important;
          }

          &:hover {
            cursor: pointer;
          }

          &:disabled,
          &:disabled&:hover {
            border: 0.01rem solid !important;
            border-color: ${buttonDisabledBorderColor}!important;
            background-color: ${buttonDisabledBgColor}!important;
            color: ${buttonDisabledBorderColor}!important;
            cursor: not-allowed;
          }
          &:first-child {
            margin-bottom: ${buttonDistance};
          }
          &:last-child {
            margin: 0;
          }
          i {
            animation: none;
            font-size: 0.16rem;
            line-height: 0.16rem;
            &.icon {
              margin: 0;
            }
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
                background-color: #fff;
                border-color: #d9d9d9;
                animation: none;
                &:after {
                  width: 0.06rem;
                  height: 0.06rem;
                  content: "";
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
                      background-color: #fff;
                      border-color: #d9d9d9;
                      /* &:after {
                        transform: rotate(45deg) scale(0.9);
                        position: absolute;
                        display: table;
                        border: 0.02rem solid #d9d9d9;
                        border-top: 0;
                        border-left: 0;
                        content: " ";
                        left: 0.04rem;
                      } */
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

export default createStyleComponent("transfer", TransferStyle);
