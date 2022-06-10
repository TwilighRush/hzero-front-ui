import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const PaginationStyle = (props: any) => {
  const {
    itemWidth,
    itemHeight,
    itemRadius,
    itemFontSize,
    itemMargin,
    jumpSpan,
    jumpRight,
  } = getThemeData(props, 'pagination');
  const {
    primary1,
    primary6,
    titleColor2,
    titleColor3,
    lineColor1,
    lineColor3,
    bgColor,
    fontColor,
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-pagination.c7n-pro-pagination-wrapper {
      //居中
      > * {
        vertical-align: middle;
      }
      //文字类
      .c7n-pro-pagination-quick-jumper,
      .c7n-pro-pagination-perpage,
      .c7n-pro-pagination-page-info {
        font-size: ${itemFontSize}px;
        color: ${titleColor3};
      }
      //按钮
      .c7n-pro-btn {
        &.c7n-pro-btn-flat,
        &.c7n-pro-btn-raised {
          &.c7n-pro-btn-wrapper.c7n-pro-pagination-pager {
            &,
            &:hover {
              display: inline-block;
              line-height: 0;
              margin: ${itemMargin};
              padding: 0 4px;
              vertical-align: middle;
              width: auto !important;
              min-width: ${itemWidth}px !important;
              height: ${itemHeight}px;
              font-size: ${itemFontSize}px;
              background: ${bgColor};
              border-radius: ${itemRadius}px;
              color: ${titleColor2};
              border: 1px solid ${lineColor1};
              span {
                white-space: nowrap;
              }
              i.icon {
                animation: none; /* 消除 Button 的动画 */
                margin: 0;
                &:before {
                  color: ${titleColor2};
                }
                &:hover:before {
                  color: ${primary6};
                }
              }
              // ... 修改样式
              &.c7n-pro-pagination-pager-jump-next,
              &.c7n-pro-pagination-pager-jump-prev {
                border: none;
                > span {
                  color: ${titleColor2};
                  display: ${jumpSpan};
                  margin-right: ${jumpRight}px;
                }
                &:disabled {
                  > span {
                    color: ${titleColor3};
                  }
                }
              }
              // 页码按钮
              &.c7n-pro-pagination-pager-page {
                /* 当前active的页码 */
                &.c7n-pro-btn-raised.c7n-pro-btn-raised {
                  color: ${fontColor};
                  background: ${primary6};
                  border-color: ${primary6};
                  z-index: 2;
                }
                //hover样式
                :hover {
                  background: ${primary1};
                  border: 1px solid ${primary1};
                  color: ${primary6};
                  z-index: 2;
                }
                &:disabled,
                &:disabled:hover,
                &.c7n-pro-btn-raised:disabled {
                  background: ${lineColor3};
                  color: ${titleColor3};
                  border-color: ${lineColor1};
                  box-shadow: none;
                  span,
                  i.icon.icon:before {
                    color: ${titleColor3};
                  }
                }
              }
              &.c7n-pro-btn-disabled {
                background: ${lineColor3};
                border-color: ${lineColor1};
                i.icon.icon:before {
                  color: ${titleColor3};
                }
              }
            }
          }
        }
      }
      /* 下拉框 */
      .c7n-pro-select-wrapper.c7n-pro-select-suffix-button {
        margin-left: 10px;
        + button {
          margin-left: 10px;
        }
        &:before {
          display: none;
        }
        .c7n-pro-select-rendered-value {
          height: ${itemHeight}px;
        }
        .c7n-pro-select {
          height: ${itemHeight - 2}px;
        }
      }
      /**** 快速跳转 **********/
      .c7n-pro-pagination-quick-jumper-input {
        border: none;
        .c7n-pro-input-number {
          height: ${itemHeight - 2}px;
        }
        .c7n-pro-input-number-wrapper {
          margin-right: 8px;
        }
      }
      .c7n-pro-pagination-quick-jumper {
        padding: 0 0.1rem;
        line-height: 0;
        height: auto;
        margin-left: 10px;
      }
      // 特殊情况处理
      .c7n-pro-pagination-size-changer.c7n-pro-pagination-size-changer.c7n-pro-pagination-size-editable
        .c7n-pro-select:not(:hover):not(:focus) {
        border-color: ${lineColor1};
      }
    }
  `;
};

export default PaginationStyle;
