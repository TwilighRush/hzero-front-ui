import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

// import { borderAnimMixin } from "./mixin";

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
    .ant-transfer-list {
      &:first-child {
        /* 合并时去除圆角 */
        border-top-right-radius: ${topRightRadius};
        border-bottom-right-radius: ${bottomRightRadius};
        .ant-transfer-list-header {
          padding-right: ${rightDistance}px;
        }
        .ant-transfer-list-body-search-wrapper {
          padding-right: ${rightDistance}px;
          .ant-transfer-list-search-action {
            transform: translateX(-${rightDistance - 12}px);
          }
        }
        .ant-transfer-list-content {
          /* 每一项 */
          .ant-transfer-list-content-item {
            padding-right: ${rightDistance}px;
          }
        }
      }
      &:last-child {
        /* 合并时去左边框和除圆角 */
        border-left: ${borderLeft};
        border-top-left-radius: ${topLeftRadius};
        border-bottom-left-radius: ${bottomLeftRadius};
        .ant-transfer-list-header {
          padding-left: ${leftDistance}px;
        }
        .ant-transfer-list-body-search-wrapper {
          padding-left: ${leftDistance}px;
        }
        .ant-transfer-list-content {
          /* 每一项 */
          .ant-transfer-list-content-item {
            padding-left: ${leftDistance}px;
          }
        }
      }
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
    .ant-transfer.ant-transfer.ant-transfer {
      font-family: ${fontFamily};
      border-color: ${borderColor};
      .ant-transfer-list-header {
        font-size: ${headFontSize}px;
        color: ${headFontColor};
      }
      /* 左右列表公共样式 */
      .ant-transfer-list {
        position: relative;
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        padding-top: 32px;
        /* 搜索框 */
        .ant-transfer-list-body-search-wrapper {
          padding: 8px 12px;
          .ant-input.ant-transfer-list-search {
            &:hover,
            &:focus {
              outline: none;
              border-color: ${primary};
            }
          }
          /* 搜索放大镜垂直居中 */
          .ant-transfer-list-search-action {
            display: flex;
            align-items: center;
          }
        }
        /* 样式一加边框动画时，增加子组件层级，防止被覆盖 */
        .ant-transfer-list-header,
        .ant-transfer-list-body {
          z-index: 2;
        }
        .ant-transfer-list-content {
          /* 每一项 */
          .ant-transfer-list-content-item {
            min-height: 34px;
            color: ${fontColor};
            font-size: ${bodyFontSize}px;
          }
        }
      }
      /* hover 复选框 border 颜色变化 */
      .ant-checkbox-wrapper:hover .ant-checkbox-inner,
      .ant-checkbox:hover .ant-checkbox-inner,
      .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: ${primary};
      }
      .ant-checkbox {
        &.ant-checkbox-checked,
        &.ant-checkbox-indeterminate {
          .ant-checkbox-inner {
            background-color: ${primary};
            border-color: ${primary};
          }
        }
      }
      /* 中间按钮样式 */
      .ant-transfer-operation {
        margin: 0;
        width: ${buttonWrapWidth}px;
        padding: ${buttonWrapPadding};
        position: ${buttonWrapPosition};
        z-index: 4;
        transform: ${buttonWrapTransform};
        top: ${buttonWrapTop};
        .ant-btn.ant-btn-primary {
          width: ${buttonWidth}px;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${primary};
          border-color: ${primary};
          &:disabled,
          &:disabled&:hover {
            border: 1px solid !important;
            border-color: ${buttonDisabledBorderColor}!important;
            background-color: ${buttonDisabledBgColor}!important;
            color: ${buttonDisabledBorderColor}!important;
          }
          &:first-child {
            margin-bottom: ${buttonDistance};
          }
          i {
            animation: none;
          }
        }
      }
      /* 样式二左右列表样式 */
      ${changeThemeTwo(props)}
      .ant-transfer-list:last-child {
        /* 第二个列表头复选框 */
        .ant-transfer-list-header {
          .ant-checkbox-wrapper {
            .ant-checkbox {
              &.ant-checkbox-indeterminate {
                .ant-checkbox-inner {
                  background-color: #fff;
                  border-color: #d9d9d9;
                  &:after {
                    width: 6px;
                    height: 6px;
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
        .ant-transfer-list-content {
          .ant-checkbox-wrapper {
            .ant-checkbox {
              .ant-checkbox-inner {
                background-color: #fff;
                border-color: #d9d9d9;
                &:after {
                  transform: rotate(45deg) scale(1);
                  position: absolute;
                  display: table;
                  border: 2px solid #d9d9d9;
                  border-top: 0;
                  border-left: 0;
                  content: " ";
                }
              }
              &.ant-checkbox-checked {
                .ant-checkbox-inner {
                  background-color: ${primary};
                  border-color: ${primary};
                  &:after {
                    border: 2px solid #fff;
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

export default createStyleComponent("transfer", TransferStyle);
