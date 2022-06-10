import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const PaginationStyle = (props: any) => {
  const d = getThemeData(props, 'pagination');
  const {
    itemWidth,
    itemHeight,
    itemRadius,
    itemFontSize,
    itemFontColor,
    hoverFontColor,
    activeBg,
    border,
    hoverBorder,
    itemMargin,
    hoverBg,
    tight,
    activeFontColor,
    activeBorderColor,
    nextBorderRadius,
    prevBorderRadius,
    bgColor,
    borderRight,
    fontFamily,
  } = d;
  const {
    primary1,
    primary6,
    disabledBg = '#f8f8f8',
    disabledColor = '#aaadba',
    disabledBorderColor = '#E7EAED',
    iconfontFamily,
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-pagination.c7n-pro-pagination-wrapper {
      > * {
        vertical-align: middle;
      }

      .c7n-pro-pagination-page-info {
        margin: 0;
        letter-spacing: 0;
      }
      &.c7n-pro-pagination-disabled {
        .c7n-pro-btn.c7n-pro-btn-flat.c7n-pro-btn-wrapper.c7n-pro-pagination-pager
          i.icon.icon:before {
          color: ${disabledColor};
        }
      }
      .c7n-pro-btn.c7n-pro-btn-flat.c7n-pro-btn-wrapper.c7n-pro-pagination-pager,
      .c7n-pro-btn.c7n-pro-btn-flat.c7n-pro-btn-wrapper.c7n-pro-pagination-pager:active,
      .c7n-pro-btn.c7n-pro-btn-raised.c7n-pro-btn-wrapper.c7n-pro-pagination-pager,
      .c7n-pro-btn.c7n-pro-btn-raised.c7n-pro-btn-wrapper.c7n-pro-pagination-pager:active {
        display: inline-block;
        line-height: 0;
        margin: ${itemMargin};
        padding: 0;
        vertical-align: middle;

        width: ${itemWidth}px;
        height: ${itemHeight}px;
        font-size: ${itemFontSize}px;
        background: ${bgColor};
        border-radius: ${itemRadius}px;
        color: ${itemFontColor};
        border: ${border};
        :after,
        :before {
          display: none !important;
        }
        // ... 修改样式
        &.c7n-pro-pagination-pager-last,
        &.c7n-pro-pagination-pager-first {
          display: none;
        }
        &.c7n-pro-pagination-pager-jump-next,
        &.c7n-pro-pagination-pager-jump-prev {
          border: ${d.jumpBorder};
          &.c7n-pro-pagination-pager-jump-prev {
            > span {
              &:hover {
                &:before {
                  font-family: ${iconfontFamily} !important;
                  content: '\\e71b';
                  color: ${primary6};
                }
              }
            }
          }
          > span {
            color: rgba(0, 0, 0, 0) !important;
            :before {
              font-family: ${iconfontFamily} !important;
              content: '\\e72a';
              display: inline-block;
              font-size: 16px;
              color: rgba(0, 0, 0, 0.45);
              width: 28px;
            }
            &:hover {
              &:before {
                font-family: ${iconfontFamily} !important;
                content: '\\e718';
                color: ${primary6};
              }
            }
            width: 0;
            font-family: inherit;
            margin-right: ${d.jumpRight}px;
          }
        }
        &.c7n-pro-pagination-pager-page {
          /* 当前active的页码 */
          
          &.c7n-pro-btn-raised {
            color: ${activeFontColor};
            background: ${primary6};
            border:0.01rem solid ${primary6};
            z-index: 2;
          }

          :hover {
            background: ${primary1};
            color: ${primary6};
            border:0.01rem solid ${primary1};
            border-right-width: 0;
            z-index: 2;
            border-right-width: ${borderRight}px;
          }
          &.c7n-pro-pagination-pager-prev {
            border-radius: ${prevBorderRadius};
          }
          &.c7n-pro-pagination-pager-next {
            border-radius: ${nextBorderRadius};
          }
        }
        ${tight ? 'border-right-width: 0 !important;' : ''};
        span {
          white-space: nowrap;
        }
        :last-of-type {
          ${tight ? 'border-right-width: 0.01rem !important;' : ''};
        }
        &:last-of-type .c7n-pro-pagination-item {
          border: ${border}!important;
        }
        i.icon {
          line-height: 0;
          animation: none; /* 消除 Button 的动画 */
          &.icon {
            height: 14px;
            margin: 0;
            &:before {
              line-height: 0.14rem;
              color: ${itemFontColor};
            }
            &:hover:before {
              color: ${hoverFontColor};
            }
          }
        }
        &.c7n-pro-pagination-pager-jump-next:disabled,
        &.c7n-pro-pagination-pager-jump-prev:disabled {
          > span {
            color: ${disabledColor};
          }
        }
        &.c7n-pro-pagination-pager-page:disabled,
        &.c7n-pro-pagination-pager-page:disabled:hover,
        &.c7n-pro-pagination-pager-page.c7n-pro-btn-raised:disabled {
          span {
            color: ${disabledColor};
          }
          background: ${disabledBg};
          color: ${disabledColor};
          border: ${d.disabledBorder};
          border-color: ${disabledBorderColor};
          box-shadow: none;
          i.icon.icon:before {
            color: ${disabledColor};
          }
        }
        &.c7n-pro-btn-disabled {
          background: ${d.disableBgColor};
          border: ${d.disableBorder};
          i.icon.icon:before {
            color: ${disabledColor};
          }
        }
      }
      /* 下拉框 */
      .c7n-pro-select-wrapper.c7n-pro-select-suffix-button {
        margin-left: 16px;
        min-width: 1.02rem;
        &:before {
          display: ${d.selectPageSizeBefore};
        }
        .c7n-pro-select {
          height: ${d.selectPageSizeHeight}px;
        }
        &.c7n-pro-select-not-editable {
          border-radius: ${d.selectRadius}px;
          width: 1.02rem;
          height: 0.28rem;
          label {
            padding: 0;
          }
          .c7n-pro-select {
            font-weight: 400;
            text-align: left;
          }
          &.c7n-pro-select-expand {
            label {
              .c7n-pro-select-suffix {
                .icon {
                  &:before {
                    transform: translateY(-50%) rotate(-45deg);
                  }
                }
              }
            }
          }
        }
      }
      /**** 快速跳转 **********/
      .c7n-pro-pagination-quick-jumper {
        padding: 0 0.16rem;
        line-height: 0;
        height: auto;
        > * {
          vertical-align: middle;
        }
        input {
          width: 0.28rem;
          padding: 0.04rem 0;
        }
        .c7n-pro-input-number-wrapper {
          margin: 0 0.1rem;
          border-radius: ${d.selectRadius}px;
          min-width: 0.44rem;
          label input {
            cursor: pointer;
            height: 0.26rem;
          }
          &.c7n-pro-input-number-focused {
            &:before {
              border: ${border};
            }
          }
        }
      }
    }
  `;
};

export default PaginationStyle;
