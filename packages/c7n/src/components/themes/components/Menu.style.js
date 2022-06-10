import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const MenuStyle = props => {
  const {
    fontFamily = "MicrosoftYaHei",
    fontSize = 14,
    fontColor = "#6a6a6a",
    arrowWidth = 8,
    arrowHeight = 8,
    arrowRightDistance = 16,
    arrowColor = "#333333",
  } = getThemeData(props, "menu");
  const d = getThemeData(props, "steps");

  const { primary, primary2 } = getThemeData(props, "common");
  return css`
    .c7n-menu.c7n-menu {
      .c7n-ripple-wrapper {
        display: none;
      }
      &.c7n-menu-horizontal {
        .c7n-menu-item-selected {
          color: ${primary};
          border-bottom-color: ${primary};
        }
      }
      .c7n-menu-item-selected > a,
      .c7n-menu-item-selected > a:hover {
        color: ${primary};
      }
      &.c7n-menu.c7n-menu-inline.c7n-menu-root {
        font-family: ${fontFamily};
        font-size: ${fontSize}px;
        color: ${fontColor};
        /* 主题设置为白色的情况 */
        &.c7n-menu-light {
          .c7n-menu-item.c7n-menu-item-active,
          .c7n-menu-item.c7n-menu-item-selected,
          .c7n-menu-submenu.c7n-menu-item-active,
          .c7n-menu-submenu.c7n-menu-submenu-inline.c7n-menu-submenu-active {
            color: ${primary};
          }
          .c7n-menu-item {
            > a {
              color: ${fontColor};
            }
            &:hover {
              color: ${primary};
              background-color: rgba(0, 0, 0, 0);
              > a {
                color: ${primary};
              }
            }
            /* 当前选中的菜单项 */
            &.c7n-menu-item-selected {
              background-color: ${primary2};
              > a {
                color: ${primary};
              }
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
          .c7n-menu-submenu.c7n-menu-submenu-inline {
            .c7n-menu-submenu-title {
              .c7n-menu-submenu-arrow:after,
              .c7n-menu-submenu-arrow:before {
                display: none;
              }
              .c7n-menu-submenu-arrow {
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
            &.c7n-menu-submenu-open {
              .c7n-menu-submenu-title {
                .c7n-menu-submenu-arrow {
                  transform: translateY(-50%) rotate(135deg);
                }
              }
            }
            &.c7n-menu-submenu-active {
              .c7n-menu-submenu-title {
                color: ${primary};
                .c7n-menu-submenu-arrow {
                  border-color: ${primary};
                }
              }
            }
          }
        }
      }
      &.c7n-menu.c7n-menu-inline-collapsed.c7n-menu-root.c7n-menu-vertical {
        .c7n-menu-item.c7n-menu-item-selected .c7nicon:before,
        .c7n-menu-item.c7n-menu-item-active .c7nicon:before {
          color: ${primary};
          .c7n-menu-item {
            color: ${primary};
          }
        }
        .c7n-menu-submenu.c7n-menu-submenu-open.c7n-menu-submenu-active {
          .c7n-menu-submenu-title {
            color: ${primary};
            .c7n-menu-submenu-arrow {
              border-color: ${primary};
            }
          }
          .c7n-menu-item:hover {
            color: ${primary};
          }
        }
      }
      /* steps */
      &.c7n-steps-dropdown-menu {
        .c7n-steps-item {
          &.c7n-steps-item-finish {
            .c7n-steps-item-icon {
              background: ${d.finishIconBg};
              border: ${d.finishIconBorder};
              span {
                color: ${d.finishIconColor};
              }
            }
          }
          &.c7n-steps-item-process {
            .c7n-steps-item-icon {
              border: ${d.processIconBorder};
              background: ${d.processIconBg};
              .c7n-steps-icon {
                color: ${d.processIconColor};
              }
            }
          }
          &.c7n-steps-item-error {
            .c7n-steps-item-icon {
              border: ${d.errorIconBorder || "#fd6868"};
              background: ${d.errorIconBg || "#fd6868"};
              .c7n-steps-icon {
                color: ${d.errorIconColor || "#fff"};
              }
            }
          }
          &.c7n-steps-item-wait {
            .c7n-steps-item-icon {
              border: ${d.waitingIconBorder};
              background: ${d.waitingIconBg};
              .c7n-steps-icon {
                color: ${d.waitingIconColor};
              }
            }
            div.c7n-steps-item-title {
              color: ${d.titleFontColor};
              > span {
                color: ${d.titleFontColor};
              }
            }
          }
        }
      }
    }
  `;
};

export default createStyleComponent("comp/menu", MenuStyle);
