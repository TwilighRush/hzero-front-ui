import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

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
    disabledBg = '#f8f8f8',
    disabledColor = '#aaadba',
    disabledBorderColor = '#E7EAED',
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-pagination.c7n-pro-pagination-wrapper {
      > * {
        vertical-align: middle;
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
        &.c7n-pro-pagination-pager-jump-next,
        &.c7n-pro-pagination-pager-jump-prev {
          border: ${d.jumpBorder};
          > span {
            font-family: inherit;
            color: ${disabledColor};
            display: ${d.jumpSpan};
            margin-right: ${d.jumpRight}px;
          }
        }
        &.c7n-pro-pagination-pager-page {
          /* 页码显示过长时自适应 */
          min-width: ${itemWidth}px;
          width: auto;
          padding: 0 6px;
          /* 当前active的页码 */
          &.c7n-pro-btn-raised {
            // 选中的页码
            color: ${activeFontColor};
            background: ${activeBg};
            border-color: ${activeBorderColor};
            ${tight ? `box-shadow: 1px 0px 0px 0px ${activeBorderColor};` : ''}
            z-index: 2;
          }

          :hover {
            background: ${hoverBg};
            border: ${hoverBorder};
            border-right-width: 0;
            ${tight ? `box-shadow: 1px 0px 0px 0px ${activeBorderColor};` : ''}
            color: ${hoverFontColor};
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
        margin-left: 10px;
        &:before {
          display: ${d.selectPageSizeBefore};
        }
        .c7n-pro-select {
          height: ${d.selectPageSizeHeight}px;
        }
        &.c7n-pro-select-not-editable {
          border-radius: ${d.selectRadius}px;
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
        padding: 0 0.1rem;
        line-height: 0;
        height: auto;
        > * {
          vertical-align: middle;
        }
        input {
          width: 0.16rem;
          padding: 0.04rem 0;
        }
        .c7n-pro-input-number-wrapper {
          margin: 0 0.1rem;
          border-radius: ${d.selectRadius}px;
          label input {
            height: ${d.selectPageSizeHeight}px;
          }
          &.c7n-pro-input-number-focused {
            &:before {
              border: ${border};
            }
          }
        }
      }
      .c7n-pro-pagination-quick-jumper-input,
      .c7n-pro-pagination-quick-jumper-input-focused {
        .c7n-pro-input-number-wrapper {
          &::before {
            display: none;
          }
          border: none;
          label {
            &::before {
              display: none;
            }
          }
        }
      }
    }
  `;
};

export default PaginationStyle;
