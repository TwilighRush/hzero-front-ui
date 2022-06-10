import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const dropDownStyle = (props) => {
  const { primary6, primary1 } = getThemeData(props, 'common');
  return css`
    li[class*='-disabled'] {
      &.ant-dropdown-menu-item.ant-dropdown-menu-item:hover,
      .ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title:hover {
        background-color: #fff;
      }
    }
    li:not([class*='-disabled']) {
      &.ant-dropdown-menu-item.ant-dropdown-menu-item:hover,
      .ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title:hover {
        background-color: ${primary1};
        color: ${primary6};
        a,
        i,
        i:after {
          color: ${primary6};
        }
      }
    }
  `;
};

export default dropDownStyle;
