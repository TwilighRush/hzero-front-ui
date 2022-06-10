import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function DropdownStyle(props: any) {
  const { activeFontColor, activeBg, fontColor } = getThemeData(props, 'dropdown');

  return css`
    .c7n-pro-popup.c7n-pro-popup {
      box-shadow: 0 10px 32px 0 rgba(38, 38, 38, 0.18);
    }
    .c7n-menu-submenu-popup.c7n-menu-submenu-popup,
    .c7n-pro-dropdown-popup.c7n-pro-dropdown-popup {
      .c7n-menu.c7n-menu {
        padding: 0.04rem 0;
        border: none;
        color: ${fontColor};
        .c7n-menu-item {
          height: 0.32rem;
          line-height: 0.32rem;
          padding: 0 0.15rem 0 0.12rem;
          text-align: left;
          &.c7n-menu-item-selected {
            background: ${activeBg};
            border-radius: 0.02rem;
            color: ${activeFontColor};
          }
          &.c7n-menu-item-active {
            background: ${activeBg};
            border-radius: 0.02rem;
            color: ${activeFontColor};
          }
        }
        .c7n-menu-submenu {
          background: transparent;
          .c7n-menu-submenu-title {
            background: transparent;
            height: 0.32rem;
            line-height: 0.32rem;
          }
          &.c7n-menu-submenu-open.c7n-menu-submenu-active {
            background: transparent;
            color: ${activeFontColor};
          }
        }
      }
    }
    .c7n-select-dropdown-menu-item.c7n-select-dropdown-menu-item {
      padding: 0.04rem 0.06rem;
    }
    .c7n-pro-auto-complete-dropdown-menu.c7n-pro-auto-complete-dropdown-menu {
      .c7n-pro-auto-complete-dropdown-menu-item {
        padding: 0.04rem 0.06rem;
        &.c7n-pro-auto-complete-dropdown-menu-item-active {
          background: ${activeBg};
          border-radius: 0.02rem;
          color: ${activeFontColor};
        }
      }
    }
    .c7n-pro-table-dropdown-menu.c7n-pro-table-dropdown-menu {
      .c7n-pro-table-dropdown-menu-item {
        padding: 0.06rem;
        color: #465476;
        height: 0.32rem;
        min-width: 1.44rem;
        font-size: 0.14rem;
        &.c7n-pro-table-dropdown-menu-item-active {
          color: ${activeFontColor};
        }
      }
    }
    .c7n-dropdown.c7n-dropdown {
      .c7n-dropdown-menu {
        padding: 0.04rem 0rem;
        .c7n-dropdown-menu-item {
          min-width: 1.14rem;
          height: 0.32rem;
          line-height: 0.32rem;
          padding: 0rem 0.08rem;
          &:hover {
            background: ${activeBg};
            border-radius: 0.02rem;
            color: ${activeFontColor};
          }
        }
      }
    }
  `;
}

export default DropdownStyle;
