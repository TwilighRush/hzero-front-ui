import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getTreeCheckStyle = (props) => {
  const { primary } = getThemeData(props, "common");
  const {
    checkboxPosition,
    checkboxRadius,
    checkboxDisabledBorder,
    checkboxDisabledBgColor,
    checkboxWidth,
    checkboxHeight,
    checkboxPrimaryColor,
    checkboxMargin,
  } = getThemeData(props, "treeCheck");

  if (checkboxPosition === "default") {
    return css`
      .c7n-tree.c7n-tree {
        /* &.c7n-tree-show-line .c7n-tree-indent-unit::before {
          display: none;
        } */
        .c7n-tree-treenode.c7n-tree-treenode-checkable {
          span.c7n-tree-switcher {
            ${(p) => getIconStyle(p, "treeCheck")}
          }
        }
        .c7n-tree-treenode.drag-over > [draggable] {
          background-color: ${primary};
        }
        .c7n-tree-checkbox {
          transform: scale(${checkboxWidth / 16});
          &.c7n-tree-checkbox-disabled {
            border: 0.01rem solid ${checkboxDisabledBorder};
            .c7n-tree-checkbox-inner {
              background-color: ${checkboxDisabledBgColor} !important;
            }
          }
          width: ${checkboxWidth}px;
          margin: ${checkboxMargin};
          height: ${checkboxHeight}px;
          border: 0.01rem solid ${checkboxDisabledBorder};
          border-radius: ${checkboxRadius}px;
          .c7n-tree-checkbox-inner {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            width: 0;
            height: 0;
            transition: all 0.2s linear;
          }
          &.c7n-tree-checkbox-checked {
            .c7n-tree-checkbox-disabled {
              border: 0.01rem solid ${checkboxDisabledBorder};
              .c7n-tree-checkbox-inner {
                background-color: ${checkboxDisabledBgColor} !important;
                width: 0.15rem;
                height: 0.15rem;

                &:after {
                  left: 0.05rem;
                  top: 0;
                }
              }
            }
            .c7n-tree-checkbox-inner {
              background-color: ${checkboxPrimaryColor || primary};
              width: 0.15rem;
              height: 0.15rem;

              &:after {
                left: 0.05rem;
                top: 0;
              }
            }
            &:after {
              display: none;
            }
          }
          &.c7n-tree-checkbox-indeterminate {
            &.c7n-tree-checkbox-disabled {
              .c7n-tree-checkbox-inner {
                background-color: ${checkboxDisabledBgColor} !important;
              }
            }
            width: ${checkboxWidth}px;
            height: ${checkboxHeight}px;
            border: 0.01rem solid ${checkboxDisabledBorder};
            border-radius: ${checkboxRadius}px;
            .c7n-tree-checkbox-inner {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: ${checkboxPrimaryColor || primary};
              width: 0.15rem;
              height: 0.15rem;
              border: none;
              &:after {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }
    `;
  } else if (checkboxPosition === "right") {
    return css`
      .c7n-tree.c7n-tree {
        &:hover span.c7n-tree-checkbox,
        span.c7n-tree-checkbox {
          position: absolute;
          right: 0.16rem;
          top: 0.04rem;
          &.c7n-tree-checkbox-indeterminate {
            .c7n-tree-checkbox-inner {
              display: block;
              background-color: white;
              border-color: ${checkboxPrimaryColor || primary};
              border-width: 1px;
              &:after {
                border-color: ${checkboxPrimaryColor || primary};
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }

          .c7n-tree-checkbox-inner {
            display: none;
            transition: all 0.3s;
            border-radius: ${checkboxRadius}px;
          }
          &.c7n-tree-checkbox-checked {
            .c7n-tree-checkbox-inner {
              display: block;
              width: ${checkboxWidth}px;
              height: ${checkboxHeight}px;
              border: 0;
              border-left: 0.01rem solid ${checkboxPrimaryColor || primary};
              border-bottom: 0.01rem solid ${checkboxPrimaryColor || primary};
              background-color: transparent;
              transform: translateX(-0.025rem) rotate(-45deg) scale(1.3);
              &:after {
                display: none;
              }
            }
          }
        }
        &:hover span.c7n-tree-checkbox {
          .c7n-tree-checkbox-inner {
            display: block;
            border: 1px solid #dbdfe6;
            &:hover {
              border-color: ${checkboxPrimaryColor || primary};
            }
          }
        }
      }
    `;
  }
};

const getIconStyle = (props, check) => {
  const {
    treeNormalIcon = "",
    treeOpenIcon = "",
    treeNodeIcon = "",
    iconSize = 14,
    switcherNoopBorder,
    switcherNoopBorderRadiuses,
    switcherNoopBackground,
    switcherNoopDispalyIcon,
    treeSwitcherBgColor,
    switcherNoopPaddingBottom,
    switcherNoopMarginTop,
    switcherNoopPaddingTop,
    switcherNoopRight,
    iconBefore,
  } = getThemeData(props, check || "tree");

  return css`
    :before,
    :after {
      content: "";
      display: ${treeNormalIcon ? "none !important" : "none"};
    }
    .icon.c7n-tree-switcher-icon {
      /* display: ${treeNormalIcon ? "block !important" : "none"}; */
      display: block;
      width: 100%;
      height: 100%;
      background-image: url(${treeNormalIcon});
      background-size: ${iconSize}px ${iconSize}px;
      background-position: center;
      background-repeat: no-repeat;
      transform: ${treeNormalIcon ? "none !important" : ""};
      ::before {
        display: none;
      }
      ::after {
        display: ${treeNormalIcon ? "none !important" : "block"};
      }
    }
    &.c7n-tree-switcher_open {
      .icon.c7n-tree-switcher-icon {
        background-image: url(${treeOpenIcon});
      }
    }
    &.c7n-tree-switcher-noop {
      background-image: none;
      border: ${switcherNoopBorder};
      border-radius: ${switcherNoopBorderRadiuses};
      padding-bottom: ${switcherNoopPaddingBottom};
      margin-top: ${switcherNoopMarginTop};
      padding-top: ${switcherNoopPaddingTop};
      right: ${switcherNoopRight};

      i.c7n-tree-switcher-line-icon {
        display: block;
        width: 24px;
        height: 24px;
        :before {
          display: ${iconBefore ? "block" : "none"};
          padding-top: 4px;
        }
        :after {
          background-image: url(${treeNodeIcon});
          background-color: ${switcherNoopBackground};
          background-size: 0.1rem 0.1rem;
          background-position: center center;
          background-repeat: no-repeat;
          /* display: ${iconBefore ? "none" : "block"}; */
          content: "";
          width: 24px;
          height: 24px;
        }
      }
      .icon {
        display: ${switcherNoopDispalyIcon};
        color: ${treeSwitcherBgColor};
      }
    }
  `;
};

const getTreeStyle = (props) => {
  const {
    fontFamily,
    fontSize,
    color,
    arrowWidth,
    arrowHeight,
    selectedBackColor,
    selectedItemFontColor,
    rotateOpen,
    rotateClose,
    treeNormalIcon,
    treeOpenIcon,
    treeNodeIcon,
    titleLeft,
    switcherLineHeight,
    switcherWidth,
    switcherHeight,
    switcherColor,
    switcherCloseBgColor,
    treeSwitcherBgColor,
    treeSwitcherBorder,
    switcherOrign,
    treeSwitcherMarginRight,
  } = getThemeData(props, "tree");
  return css`
    .c7n-tree.c7n-tree {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      color: ${color};
      .c7n-tree-treenode {
        align-items: center;
      }
      .c7n-tree-treenode,
      li {
        position: relative;
        width: 100%;
        /* 箭头改造 */
        span.c7n-tree-switcher {
          line-height: ${switcherLineHeight || 0.22}px;
          height: ${switcherHeight}px;
          width: ${switcherWidth}px;
          background-color: ${treeSwitcherBgColor};
          border-radius: ${treeSwitcherBorder};
          margin-right: ${treeSwitcherMarginRight};
          /* 调整箭头位置垂直居中 */
          &::after {
            margin-top: 6px;
          }
          /* .icon {
            display: none;
          } */
          &.c7n-tree-switcher_open .icon.c7n-tree-switcher-icon:after,
          &.c7n-tree-switcher_close .icon.c7n-tree-switcher-icon:after {
            content: "";
            width: ${arrowWidth}px;
            height: ${arrowHeight}px;
            border-left: 0.015rem solid ${color};
            border-bottom: 0.015rem solid ${color};
            display: inline-block;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            transition: transform 0.3s, -webkit-transform 0.3s;
            transform-origin: ${switcherOrign};

            ${leftIconStyle}
          }
          /* 开 */
          &.c7n-tree-switcher_open .icon.c7n-tree-switcher-icon {
            ::after {
              transform: rotate(${rotateOpen});
              border-left: 0.01rem solid ${switcherColor || color};
              border-bottom: 0.01rem solid ${switcherColor || color};
              transform-origin: center 50%;
            }
          }
          /* 关 */
          &.c7n-tree-switcher_close {
            background-color: ${switcherCloseBgColor};
          }
          &.c7n-tree-switcher_close .icon.c7n-tree-switcher-icon {
            transform: rotate(0);
            ::after {
              transform: rotate(${rotateClose});
              border-left: 0.01rem solid ${color};
              border-bottom: 0.01rem solid ${color};
              transform-origin: center 60%;
            }
          }

          ${getIconStyle}
        }
        /* 选中菜单背景颜色和字体颜色 */
        .c7n-tree-node-content-wrapper.c7n-tree-node-selected {
          background-color: ${selectedBackColor};
          .c7n-tree-title {
            color: ${selectedItemFontColor};
          }
        }

        .c7n-tree-node-content-wrapper:hover {
          opacity: 0.5;
          background: ${selectedBackColor};
        }
      }
    }
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-node-content-wrapper:before,
    .c7n-tree.c7n-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-node-content-wrapper:before {
      background: ${selectedBackColor};
    }
    /* 未选中时 */
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li
      span.c7n-tree-node-content-wrapper:before,
    .c7n-tree.c7n-tree > li span.c7n-tree-node-content-wrapper:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0.24rem;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      background-size: contain;
      background-repeat: no-repeat;

      width: 0.1rem;
      height: 0.1rem;
      top: 0.08rem;
    }

    &.c7n-tree-node-content-wrapper-open:before {
      background-image: url(${treeOpenIcon});
    }

    &.c7n-tree-node-content-wrapper-close:before {
      background-image: url(${treeNormalIcon});
    }

    &.c7n-tree-node-content-wrapper-normal:before {
      background-image: url(${treeNodeIcon});
    }
    &.c7n-tree-title {
      margin-left: ${titleLeft}px;
    }

    /* 选中时标题颜色变浅 */
    .c7n-tree.c7n-tree
      > li
      span.c7n-tree-node-content-wrapper.c7n-tree-node-selected,
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li
      span.c7n-tree-node-content-wrapper.c7n-tree-node-selected {
      color: ${selectedItemFontColor};
    }
    /* 选中时箭头变浅 */
    .c7n-tree.c7n-tree > li.c7n-tree-treenode-selected > span.c7n-tree-switcher,
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-switcher {
      color: ${selectedItemFontColor};
    }
  `;
};

const leftIconStyle = (props) => {
  const { borderWidth, color } = getThemeData(props, "tree");
  return (
    borderWidth &&
    css`
      border-width: ${borderWidth}px;
      border-style: solid;
      border-color: transparent transparent transparent ${color};
    `
  );
};

const treeStyle = css`
  /* Tree--components 全局样式实现 */
  ${getTreeStyle}
`;
const treeCheckStyle = css`
  /* TreeCheck--components 全局样式实现 */
  ${getTreeCheckStyle}
`;

export { treeStyle, treeCheckStyle };

export default createStyleComponent(
  "comp/tree",
  css`
    ${getTreeStyle}
    ${getTreeCheckStyle}
  `
);
