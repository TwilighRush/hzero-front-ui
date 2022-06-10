import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const MenuStyle = (props) => {
  const { fontColor } = getThemeData(props, 'menu');
  return css`
    .c7n-menu.c7n-menu {
      color: ${fontColor};
    }
  `;
};

export default MenuStyle;
