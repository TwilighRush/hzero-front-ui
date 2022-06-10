import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const RangeStyle = (props: any) => {
  const { primary } = getThemeData(props, 'common');
  return css`
    .c7n-pro-range-track {
      background: ${primary};
    }
    .c7n-pro-range-handle.c7n-pro-range-handle {
      border-color: ${primary};
      :focus {
        box-shadow: 0 0 0 0.05rem #abcaff;
      }
    }
  `;
};

export default RangeStyle;
