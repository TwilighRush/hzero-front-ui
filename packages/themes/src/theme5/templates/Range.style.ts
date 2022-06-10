import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const RangeStyle = (props: any) => {
  const { primary6, lineColor2, titleColor2 } = getThemeData(props, 'common');
  return css`
    .c7n-pro-range.c7n-pro-range {
      .c7n-pro-range-mark-text {
        font-size: 12px;
      }
      .c7n-pro-range-rail {
        background-color: ${lineColor2};
      }
      &,
      &:hover {
        .c7n-pro-range-track {
          background-color: ${primary6};
        }
      }
      .c7n-slider-indicator {
        color: ${titleColor2};
        font-size: 12px;
        top: 17px;
      }
      :hover:not(.c7n-pro-range-disabled) {
        .c7n-pro-range-handle {
          border-color: ${primary6};
          box-shadow: none;
        }
      }
      .c7n-pro-range-handle {
        border-color: ${primary6};
        &:hover,
        &:focus,
        &.c7n-pro-range-handle-focused {
          border-color: ${primary6};
          box-shadow: none;
        }
      }
      &.c7n-pro-range-disabled {
        border-color: ${titleColor2};
        .c7n-pro-range-handle {
          &:hover,
          &:focus,
          &.c7n-pro-range-handle-focused {
            border-color: ${titleColor2};
            box-shadow: none;
          }
        }
      }
      &.c7n-pro-range-vertical {
        .c7n-slider-indicator {
          top: 0px;
          left: 14px;
        }
      }
    }
  `;
};

export default RangeStyle;
