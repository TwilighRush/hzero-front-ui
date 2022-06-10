import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const RateStyle = (props: any) => {
  const { lineColor1, warningColor } = getThemeData(props, 'common');
  return css`
    .c7n-rate.c7n-rate {
      color: ${warningColor};
      .c7n-rate-star-first,
      .c7n-rate-star-second {
        color: ${lineColor1};
      }
      .c7n-rate-star-half .c7n-rate-star-first,
      .c7n-rate-star-full .c7n-rate-star-second {
        color: inherit;
      }
    }
  `;
};
export default RateStyle;
