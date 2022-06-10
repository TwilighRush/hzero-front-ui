import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

export function myButtonStyle(props) {
  const { primary, primary4 } = getThemeData(props, 'common');
  return css`
    .my-button {
      background-color: ${primary};
      color: #fff;
      transition: all 0.3s;
      border: 1px solid ${primary};
      outline: none;
      &:hover {
        background-color: ${primary4};
      }
    }
  `;
}
