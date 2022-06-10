import { css } from 'styled-components';
//import { getThemeData } from '@hzero-front-ui/core';
const BadgeStyle = (props) => {
  return css`
    .c7n-badge-status-processing {
      position: absolute;
    }
    .c7n-badge-status-default{
      background-color:#d50000
    }
  `;
};
export default BadgeStyle;
