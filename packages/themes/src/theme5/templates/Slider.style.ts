import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function sliderStyle(props: any) {
  const { primary6, primary4, primary1 } = getThemeData(props, 'common');
  return css`
    .c7n-slider.c7n-slider:not(.c7n-slider-disabled)  {
      .c7n-slider-track {
        background-color: ${primary4};
      }
      .c7n-slider-handle {
        border-color: ${primary4};
      }
      .c7n-slider-dot-active {
        border-color: ${primary4};
      }
      .c7n-slider-handle:focus {
        border-color: ${primary6};
        box-shadow: 0 0 0 2px ${primary1};
      }
      &:hover{
        .c7n-slider-track {
          background-color: ${primary6};
        }
        .c7n-slider-handle.c7n-slider-handle {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${primary1};
        }
        .c7n-slider-dot-active {
          border-color: ${primary6};
        }
      }
    }
  `;
}
export default sliderStyle;
