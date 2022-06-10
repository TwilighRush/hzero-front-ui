import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

/* 样式二 整合列表一 列表二 */
const changeThemeTwo = props => {
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
    .c7n-transfer-list {
      &:first-child {
        /* 合并时去除圆角 */
        border-top-right-radius: ${topRightRadius};
        border-bottom-right-radius: ${bottomRightRadius};
        .c7n-transfer-list-header {
          padding-right: ${rightDistance}px;
        }
        .c7n-transfer-list-body-search-wrapper {
          padding-right: ${rightDistance}px;
          .c7n-transfer-list-search-action {
            transform: translateX(-${rightDistance - 12}px);
          }
        }
        .c7n-transfer-list-content {
          /* 每一项 */
          .c7n-transfer-list-content-item {
            padding-right: ${rightDistance}px;
          }
        }
      }
      &:last-child {
        /* 合并时去左边框和除圆角 */
        border-left: ${borderLeft};
        border-top-left-radius: ${topLeftRadius};
        border-bottom-left-radius: ${bottomLeftRadius};
        .c7n-transfer-list-header {
          padding-left: ${leftDistance}px;
        }
        .c7n-transfer-list-body-search-wrapper {
          padding-left: ${leftDistance}px;
        }
        .c7n-transfer-list-content {
          /* 每一项 */
          .c7n-transfer-list-content-item {
            padding-left: ${leftDistance}px;
          }
        }
      }
    }
  `;
};

const changeThemeOneZindex = () => {
  return css`
    .c7n-transfer-list-header,
    .c7n-transfer-list-body {
      z-index: 2;
    }
  `;
};

const TransferStyle = props => {
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
    buttonDisabledBorderColor,
    buttonDisabledBgColor,
    buttonDistance,
    // selectedFontColor,
    fontFamily,
    bodyFontSize,
    fontColor,
    headFontColor,
    borderColor,
    headFontSize,
  } = getThemeData(props, "transfer");
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-transfer.c7n-transfer.c7n-transfer {
      font-family: ${fontFamily};
      border-color: ${borderColor};
      /* 左右列表公共样式 */
      .c7n-transfer-list {
        position: relative;
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        padding-top: 0.32rem;
        /* 搜索框 */
        .c7n-transfer-list-body-search-wrapper {
          padding: 0.08rem 0.12rem;
          .c7n-input.c7n-transfer-list-search {
            &:hover,
            &:focus {
              outline: none;
              border-color: ${primary};
            }
          }
          /* 搜索放大镜垂直居中 */
          .c7n-transfer-list-search-action {
            display: flex;
            align-items: center;
          }
        }
        /* 样式一加边框动画时，增加子组件层级，防止被覆盖 */
        ${changeThemeOneZindex}
        .c7n-transfer-list-content {
          /* 每一项 */
          .c7n-transfer-list-content-item {
            min-height: 0.34rem;
            color: ${fontColor};
            font-size: ${bodyFontSize}px;
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
      .c7n-transfer-operation {
        margin: 0;
        width: ${buttonWrapWidth}px;
        padding: ${buttonWrapPadding};
        position: ${buttonWrapPosition};
        z-index: 3;
        transform: ${buttonWrapTransform};
        top: ${buttonWrapTop};
        .c7n-btn.c7n-btn-primary {
          padding: 0;
          min-width: unset;
          width: ${buttonWidth}px;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:before,
          &:after {
            display: none !important;
          }
          /**
            background-color: ${primary};
            border-color: ${primary};
           */
          &:disabled,
          &:disabled&:hover {
            border: 0.01rem solid !important;
            border-color: ${buttonDisabledBorderColor}!important;
            background-color: ${buttonDisabledBgColor}!important;
            color: ${buttonDisabledBorderColor}!important;
          }
          &:first-child {
            margin-bottom: ${buttonDistance};
          }
          i {
            animation: none;
            font-size: 0.16rem;
            margin: 0;
          }
        }
      }
      .c7n-transfer-list-header {
        font-size: ${headFontSize};
        color: ${headFontColor};
      }
      /* 样式二左右列表样式 */
      ${changeThemeTwo(props)}
      .c7n-transfer-list:last-child {
        /* 第二个列表头复选框 */
        .c7n-transfer-list-header {
          .c7n-checkbox-wrapper {
            .c7n-checkbox {
              &.c7n-checkbox-indeterminate {
                .c7n-checkbox-inner {
                  background-color: #fff;
                  border-color: #d9d9d9;
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
                }
              }
            }
          }
        }
        /* 第二个列表内容复选框 */
        .c7n-transfer-list-content {
          .c7n-checkbox-wrapper {
            .c7n-checkbox {
              .c7n-checkbox-inner {
                background-color: #fff;
                border-color: #d9d9d9;
                &:after {
                  transform: rotate(45deg) scale(0.9);
                  position: absolute;
                  display: table;
                  border: 0.02rem solid #d9d9d9;
                  border-top: 0;
                  border-left: 0;
                  content: " ";
                  left: 0.04rem;
                }
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

  `;
};

export default createStyleComponent("comp/transfer", TransferStyle);
