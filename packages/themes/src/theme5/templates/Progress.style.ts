import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const progressStyle = (props: any) => {
  return css`
    .c7n-progress-loading.c7n-progress-loading {
      display: inline-block;
      &.c7n-progress-status-normal {
        .c7n-progress-inner circle {
          /* stroke: url(#c7nProUiProgressLoadingGradient-normal); */
          stroke: #0840f8;
        }
      }
      &.c7n-progress-status-success {
        .c7n-progress-inner circle {
          /* stroke: url(#c7nProUiProgressLoadingGradient-success); */
          stroke: #11d954;
        }
      }
      &.c7n-progress-status-exception {
        .c7n-progress-inner circle {
          /* stroke: url(#c7nProUiProgressLoadingGradient-exception); */
          stroke: #f23a50;
        }
      }
      .c7n-progress-inner {
        width: 24px;
        height: 24px;
      }
      &.c7n-progress-small {
        .c7n-progress-inner {
          width: 14px;
          height: 14px;
        }
      }
      &.c7n-progress-large {
        .c7n-progress-inner {
          width: 40px;
          height: 40px;
        }
      }
    }
  `;
};
export default progressStyle;
