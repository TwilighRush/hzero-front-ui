import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const AutCompleteStyle = (props: any) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    .c7n-pro-auto-complete-dropdown-menu.c7n-pro-auto-complete-dropdown-menu {
      .c7n-pro-auto-complete-dropdown-menu-item {
        margin: 0rem 0.08rem;
        padding: 0.04rem 0.06rem;
        &.c7n-pro-auto-complete-dropdown-menu-item-active {
          background: ${primary1};
          border-radius: 0.02rem;
          color: ${primary6};
        }
      }
    }
  `;
};
export default AutCompleteStyle;
