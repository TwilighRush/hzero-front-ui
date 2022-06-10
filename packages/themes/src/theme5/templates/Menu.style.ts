import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const MenuStyle = (props) => {
  const {
    fontSize,
    addPadding,
    titleFontSize,
    lineHeight,
    titleLineHeight,
    paddingT,
    paddingL,
    titlePaddingT,
  } = getThemeData(props, 'menu');
  const { primary1, primary6, titleColor2, titleColor3, titleColor4, iconfontFamily } =
    getThemeData(props, 'common');
  return css`
    .c7n-menu.c7n-menu {
      color: ${titleColor2};
      font-size: ${fontSize}px;
      //分组标题样式
      .c7n-menu-item-group {
        .c7n-menu-item-group-title {
          color: ${titleColor3};
          line-height: 22px;
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 14px;
          + .c7n-menu-item-group-list .c7n-menu-item {
            padding-left: 36px;
          }
        }
      }
      //hover样式
      .c7n-menu-item:hover,
      .c7n-menu-item-active,
      .c7n-menu:not(.c7n-menu-inline) .c7n-menu-submenu-open,
      .c7n-menu-submenu-active,
      .c7n-menu-submenu-title:hover {
        border-bottom: none;
        background-color: ${primary1};
        color: ${primary6};
      }
      .c7n-menu-item {
        border-bottom: none;
        &-active {
          color: ${primary6};
        }
      }
      .c7n-menu-item-disabled.c7n-menu-item-disabled,
      .c7n-menu-submenu-disabled.c7n-menu-submenu-disabled {
        > .c7n-menu-submenu-title.c7n-menu-submenu-title {
          i,
          &:after {
            color: ${titleColor4};
          }
          color: ${titleColor4};
          background-color: unset;
        }
      }
      .c7n-menu-item-disabled:hover {
        background: none;
      }

      //选中样式
      .c7n-menu-item-selected {
        color: ${primary6};
        a,
        i {
          color: ${primary6};
        }
        background-color: ${primary1};
        border-bottom: none;
      }

      &&.c7n-menu-vertical,
      &&.c7n-menu-vertical-left,
      &&.c7n-menu-vertical-right,
      &&.c7n-menu-inline {
        //二级标签
        .c7n-menu-item {
          font-size: ${fontSize}px;
          height: ${lineHeight + paddingT * 2 + addPadding * 2}px;
          line-height: ${lineHeight}px;
          padding-top: ${paddingT + addPadding}px;
          padding-bottom: ${paddingT + addPadding}px;
          padding-left: ${paddingL}px;
          [class*='-btn'] {
            height: ${lineHeight}px;
            vertical-align: top;
          }
        }
        //一级标签
        .c7n-menu-submenu-title {
          font-size: ${titleFontSize}px;
          height: ${titleLineHeight + titlePaddingT * 2}px;
          line-height: ${titleLineHeight}px;
          padding: 0.05rem 0.12rem;
          padding-right: 24px;

          .c7n-menu-submenu-arrow {
            right: 8px;
            :before {
              display: none;
            }
            :after {
              display: none;
            }
          }
        }
      }
      &.c7n-menu-vertical,
      &.c7n-menu-vertical-left,
      &.c7n-menu-vertical-right {
        .c7n-menu-submenu-selected {
          color: ${primary6};
          background-color: ${primary1};
          box-shadow: none;
        }
      }
      &.c7n-menu-vertical {
        .c7n-menu-submenu-title:after {
          content: '\\e76e';
          font-family: ${iconfontFamily};
          position: absolute;
          line-height: 22px;
          right: 8px;
          color: ${titleColor2};
        }
      }
      &.c7n-menu-inline {
        .c7n-menu-submenu-title:after {
          content: '\\e737';
          font-family: ${iconfontFamily};
          position: absolute;
          line-height: 22px;
          right: 8px;
          color: ${titleColor2};
        }
        .c7n-menu-submenu-open {
          > .c7n-menu-submenu-title:after {
            content: '\\e774';
            font-family: ${iconfontFamily};
            position: absolute;
            line-height: 22px;
            right: 8px;
            color: ${titleColor2};
          }
        }
      }
      &.c7n-menu-dark {
        .c7n-menu-item:hover,
        .c7n-menu-item-active,
        .c7n-menu-submenu-active,
        .c7n-menu-submenu-title:hover {
          background-color: ${primary6};
          color: #fff;
        }
        //dark主题
        &.c7n-menu.c7n-menu-dark,
        &.c7n-menu-submenu-popup.c7n-menu-dark {
          .c7n-menu-item-selected {
            background-color: ${primary6};
            color: #fff;
          }
        }
      }
      /* steps */
      &.c7n-steps-dropdown-menu {
        padding: 6px 8px;
        .c7n-steps-item-icon {
          /* margin-top:0px; */
          > .icon {
            width: 100%;
            height: 100%;
            vertical-align: top;
            padding-top: 1px;
            ::before {
              vertical-align: top;
            }
          }
        }
        .c7n-steps-item-dropdown-title {
          transform: translateY(-1px);
        }
      }
    }
    .c7n-menu.c7n-menu.c7n-menu-horizontal {
      .c7n-menu-submenu {
        border-bottom: none;
        :hover {
          color: ${primary6};
          a,
          i {
            color: ${primary6};
          }
          background-color: ${primary1};
          border-bottom: none;
        }
      }
      > .c7n-menu-item:hover,
      > .c7n-menu-submenu:hover,
      > .c7n-menu-item-active,
      > .c7n-menu-submenu-active,
      > .c7n-menu-item-open,
      > .c7n-menu-submenu-open,
      > .c7n-menu-item-selected,
      > .c7n-menu-submenu-selected {
        color: ${primary6};
      }
    }
    .c7n-menu-inline-collapsed.c7n-menu-inline-collapsed {
      > .c7n-menu-item .icon,
      > .c7n-menu-item-group > .c7n-menu-item-group-list > .c7n-menu-item .icon {
        line-height: 28px;
      }
      > .c7n-menu-submenu > .c7n-menu-submenu-title {
        .icon {
          line-height: 32px;
        }
        :after {
          display: none;
        }
      }
    }
  `;
};

export default MenuStyle;
