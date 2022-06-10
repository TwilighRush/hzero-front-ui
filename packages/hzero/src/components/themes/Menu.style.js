import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const MenuStyle = props => {
  const { primary } = getThemeData(props, "common");
  const {
    fontFamily,
    fontSize,
    fontColor,
    arrowWidth,
    arrowHeight,
    arrowRightDistance,
    arrowColor,
  } = getThemeData(props, "menu");
  return css`
    .ant-menu.ant-menu {
      &.ant-menu-inline.ant-menu-root {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        color: ${fontColor};
        /* 主题设置为白色的情况 */
        &.ant-menu-light {
          .ant-menu-item.ant-menu-item-active,
          .ant-menu-item.ant-menu-item-selected,
          .ant-menu-submenu.ant-menu-item-active,
          .ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-active {
            color: ${primary};
          }
          .ant-menu-item {
            /* 当前选中的菜单项 */
            &.ant-menu-item-selected {
              &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                border-left: 3px solid ${primary};
              }
              &:after {
                content: "";
                position: absolute;
                right: ${arrowRightDistance}px;
                top: 50%;
                bottom: 0;
                width: ${arrowWidth}px;
                height: ${arrowHeight}px;
                border: none;
                border-right: 1px solid ${primary};
                border-bottom: 1px solid ${primary};
                background-color: transparent;
                transform: translateY(-50%) rotate(-45deg);
              }
            }
          }
          .ant-menu-submenu.ant-menu-submenu-inline {
            .ant-menu-submenu-title {
              .ant-menu-submenu-arrow:after,
              .ant-menu-submenu-arrow:before {
                display: none;
              }
              .ant-menu-submenu-arrow {
                content: "";
                position: absolute;
                right: ${arrowRightDistance}px;
                top: 50%;
                bottom: 0;
                width: ${arrowWidth}px;
                height: ${arrowHeight}px;
                border: none;
                border-left: 1px solid ${arrowColor};
                border-bottom: 1px solid ${arrowColor};
                background-color: transparent;
                transform: translateY(-50%) rotate(-45deg);
              }
            }
            &.ant-menu-submenu-open {
              .ant-menu-submenu-title {
                .ant-menu-submenu-arrow {
                  transform: translateY(-50%) rotate(135deg);
                }
              }
            }
            &.ant-menu-submenu-active {
              .ant-menu-submenu-title {
                color: ${primary};
                .ant-menu-submenu-arrow {
                  border-color: ${primary};
                }
              }
            }
          }
        }
      }
      &.ant-menu.ant-menu-inline-collapsed.ant-menu-root.ant-menu-vertical {
        .ant-menu-item.ant-menu-item-selected .anticon:before,
        .ant-menu-item.ant-menu-item-active .anticon:before {
          color: ${primary};
          .ant-menu-item {
            color: ${primary};
          }
        }
        .ant-menu-submenu.ant-menu-submenu-open.ant-menu-submenu-active {
          .ant-menu-submenu-title {
            color: ${primary};
            .ant-menu-submenu-arrow {
              border-color: ${primary};
            }
          }
          .ant-menu-item:hover {
            color: ${primary};
          }
        }
      }
    }
  `;
};

export default createStyleComponent("menu", MenuStyle);
