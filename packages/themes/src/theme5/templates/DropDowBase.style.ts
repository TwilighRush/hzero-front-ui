import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function DropdownStyle(props: any) {
  const { itemHeight, minWidth, fontSize } = getThemeData(props, 'dropdown');
  const { primary6, primary1, titleColor2, titleColor3, iconfontFamily } = getThemeData(
    props,
    'common'
  );

  return css`
    .c7n-dropdown.c7n-dropdown {
      .c7n-dropdown-menu {
        padding: 0.04rem 0rem;
        .c7n-dropdown-menu-item {
          margin: 0rem 0.08rem;
          min-width: ${minWidth}px;
          height: ${itemHeight}px;
          line-height: ${itemHeight}px;
          padding: 0rem 0.08rem;
          font-size: ${fontSize}px;
          color: ${titleColor2};
          &:hover {
            background: ${primary1};
            border-radius: 0.02rem;
            color: ${primary6};
          }
          > a {
            margin: 0;
            padding: 0;
          }
          &-disabled {
            cursor: not-allowed;
            color: ${titleColor3};
            :hover {
              color: ${titleColor3};
              background: none;
            }
          }
        }
        .c7n-dropdown-menu-submenu,
        .c7n-dropdown-menu-item,
        .c7n-dropdown-menu-submenu-title {
          margin: 0rem 0.08rem;
        }
        .c7n-dropdown-menu-submenu-title {
          font-size: 14px;
          ::after {
            content: '\\e76e';
            font-family: ${iconfontFamily};
            position: absolute;
            line-height: 22px;
            right: 8px;
            color: ${titleColor2};
          }
          .c7n-dropdown-menu-submenu-arrow::before {
            display: none;
          }

          .c7n-dropdown-menu-submenu-arrow::after {
            display: none;
          }
        }
        .c7n-dropdown-menu-submenu-title:hover {
          background: ${primary1};
          border-radius: 0.02rem;
          color: ${primary6};
        }
        .c7n-dropdown-menu-submenu.c7n-dropdown-menu-submenu.c7n-dropdown-menu-submenu-disabled
          .c7n-dropdown-menu-submenu-title::after {
          background: none;
        }
        .c7n-dropdown-menu-submenu-disabled {
          .c7n-dropdown-menu-submenu-title {
            color: ${titleColor3};
            .c7n-dropdown.c7n-dropdown .c7n-dropdown-menu .c7n-dropdown-menu-submenu-title::after {
              color: ${titleColor3};
            }
          }
        }
        .c7n-dropdown-menu-submenu-disabled :hover {
          .c7n-dropdown-menu-submenu-title {
            cursor: not-allowed;
            background: none;
            color: ${titleColor3};
          }
        }
      }
    }
    ul.c7n-dropdown-menu {
      .c7n-dropdown-menu-item:hover {
        background: ${primary1};
        border-radius: 0.02rem;
        color: ${primary6};
      }
    }
  `;
}

export default DropdownStyle;
