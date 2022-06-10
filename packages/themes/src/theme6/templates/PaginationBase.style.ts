import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const PaginationStyle = (props: any) => {
  const {
    itemWidth,
    itemHeight,
    hoverFontColor,
    activeBg,
    hoverBorder,
    hoverBg,
    tight,
    activeFontColor,
    activeBorderColor,
    nextBorderRadius,
    prevBorderRadius,
    borderRight,
  } = getThemeData(props, 'pagination');
  const d = getThemeData(props, 'pagination');
  const {
    disabledBg = '#f8f8f8',
    disabledColor = '#aaadba',
    disabledBorderColor = '#E7EAED',
  } = getThemeData(props, 'common');
  return css`
    .c7n-pagination.c7n-pagination {
      .c7n-pagination-options {
        height: 0.26rem;
        line-height: 0.26rem;
      }
      .c7n-pagination-options-size-changer {
        &.c7n-select {
          float: none;
          height: 0.26rem;
          line-height: 0.26rem;
          width: 0.58rem;
          border: 1px solid #d9e6f2;
          border-radius: 0.05rem;
        }
        .c7n-select-selection__rendered {
          padding: 0;
          height: 0.26rem;
          line-height: 0.26rem;

          .c7n-select-selection-selected-value {
            margin-top: -0.05rem;
            width: 0.58rem;
            text-align: left;
          }
          .c7n-select-arrow {
            right: 0.15rem;
            .icon-arrow_drop_down:before {
              content: '\\E5CF';
              color: #abbccf;
            }
          }
        }
      }
      .c7n-btn-circle,
      .c7n-pagination-item {
        padding: 0;
        min-width: ${itemWidth}px;
        width: ${itemWidth}px;
        height: ${itemHeight}px;
        a {
          padding: 0;
          margin: 0;
        }
      }
      // ... 修改样式
      .c7n-pagination-next,
      .c7n-pagination-jump-prev,
      .c7n-pagination-jump-next,
      .c7n-pagination-prev {
        border: ${d.jumpBorder};
        min-width: ${itemWidth}px;
        width: ${itemWidth}px;
        height: ${itemHeight}px;
        line-height: ${itemHeight}px;
        > button,
        a {
          color: ${disabledColor};
        }
      }
      &.c7n-pagination-pager-page {
        /* 当前active的页码 */
        &.c7n-btn-raised {
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
        &.c7n-pagination-pager-prev {
          border-radius: ${prevBorderRadius};
        }
        &.c7n-pagination-pager-next {
          border-radius: ${nextBorderRadius};
        }
      }
      &.c7n-pagination-pager-page:disabled,
      &.c7n-pagination-pager-page:disabled:hover,
      &.c7n-pagination-pager-page.c7n-btn-raised:disabled {
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
      &.c7n-btn-disabled {
        background: ${d.disableBgColor};
        border: ${d.disableBorder};
        i.icon.icon:before {
          color: ${disabledColor};
        }
      }
    }
  `;
};

export default PaginationStyle;
