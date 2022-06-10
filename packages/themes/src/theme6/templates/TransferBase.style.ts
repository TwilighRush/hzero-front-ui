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
    .c7n-transfer-list.c7n-transfer-list {
      &:first-child {
        /* 合并时去除圆角 */
        border-top-right-radius: ${topRightRadius};
        border-bottom-right-radius: ${bottomRightRadius};
        margin-right: ${firstMarginRight}px;
        .c7n-transfer-list-header {
          padding-left: ${leftDistance * 2}px;
          padding-right: ${rightDistance * 2}px;
        }
        .c7n-transfer-list-body-search-wrapper {
          padding-left: ${rightDistance * 2}px;
          .c7n-transfer-list-search-action {
            transform: translateX(-${rightDistance - 12}px);
          }
        }
        .c7n-transfer-list-content {
          /* 每一项 */
          .c7n-transfer-list-content-item {
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
        .c7n-transfer-list-header {
          padding-left: ${leftDistance * 2}px;
          padding-right: ${rightDistance * 2}px;
        }
        .c7n-transfer-list-body-search-wrapper {
          padding-left: ${leftDistance * 2}px;
        }
        .c7n-transfer-list-content {
          /* 每一项 */
          .c7n-transfer-list-content-item {
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

const changeThemeOneZindex = () => {
  return css`
    .c7n-transfer-list-header.c7n-transfer-list-header,
    .c7n-transfer-list-body.c7n-transfer-list-body {
      z-index: 2;
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
    .c7n-transfer.c7n-transfer.c7n-transfer {
      border-color: ${borderColor};
      /* 左右列表公共样式 */
      .c7n-transfer-list {
        position: relative;
        border-radius: ${listRadius}px;
        width: ${listWidth}px;
        height: ${listHeight}px;
        padding-top: 0.32rem;
        //覆盖原有的复选框样式
        .c7n-checkbox-inner {
          background: #ffffff;
          border: 1px solid #dbe1f1;
        }
        /* 搜索框 */
        .c7n-transfer-list-header {
          font-size: ${headFontSize}px;
          color: ${headFontColor};
          height: 0.44rem;
          line-height: 0.3rem;
          border-bottom: none;
          .c7n-checkbox-label {
            color: ${headFontColor};
          }
          .c7n-transfer-list-header-title {
            right: 0.16rem;
            font-weight: 500;
          }
        }
        .c7n-transfer-list-body-search-wrapper {
          .c7n-input-wrapper {
            height: 28px;
            width: 208px;
            &.c7n-input-has-border:before {
              border-radius: 2px;
            }
            .c7n-input {
              height: 28px;
              border-radius: 2px;
            }
            .c7n-input-label-wrapper {
              border: 0;
              .c7n-input-label {
                height: 28px;
                line-height: 28px;
              }
            }
          }

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
          .c7n-transfer-list-content-item:hover {
            background: rgba(56, 107, 215, 0.1);
            border-radius: 2px;
            cursor: pointer;
          }
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
        &.c7n-transfer-operation button {
          border-radius: 50% !important;
          &:first-child {
            margin-bottom: 0.1rem !important;
          }
        }
        .c7n-btn.c7n-btn-primary {
          padding: 0;
          min-width: unset;
          width: ${buttonWidth}px;
          height: ${buttonHeight}px;
          border-radius: ${buttonRadius}px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          &:before,
          &:after {
            display: none !important;
          }
          &:disabled,
          &:disabled&:hover {
            border-color: #e8e8e8 !important;
            background-color: #f9f9f9 !important;
            color: #a6acbd !important;
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
                  background: #ffffff;
                  border: 1px solid #dbe1f1;
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
  `;
};

export default TransferStyle;
