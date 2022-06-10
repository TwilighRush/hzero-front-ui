import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const Rate = (props: any) => {
  const { Color, fontSize } = getThemeData(props, 'rate');
  return css`
    .c7n-rate.c7n-rate {
      color: ${Color};
      line-height: 1;
      .icon {
        font-size: ${fontSize}px;
      }
    }
    .c7n-rate-text.c7n-rate-text {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px;
    }
  `;
};

export default Rate;
