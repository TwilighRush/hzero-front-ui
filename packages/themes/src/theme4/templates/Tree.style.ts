import { css } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const getTreeCheckStyle = (props: any) => {
  const { primary } = getThemeData(props, 'common');
  const {
    checkboxPosition,
    checkboxRadius,
    checkboxDisabledBorder,
    checkboxDisabledBgColor,
    checkboxWidth,
    checkboxHeight,
    checkboxPrimaryColor,
    checkboxMargin,
  } = getThemeData(props, 'treeCheck');

  if (checkboxPosition === 'default') {
    return css`
      .c7n-tree.c7n-tree {
        .c7n-tree-treenode.c7n-tree-treenode-checkable {
          span.c7n-tree-switcher {
            ${(p) => getIconStyle(p, 'treeCheck')}
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
  } else if (checkboxPosition === 'right') {
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

const getIconStyle = (props: any, check: any) => {
  const {
    treeNormalIcon = '',
    treeOpenIcon = '',
    treeNodeIcon = '',
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
  } = getThemeData(props, check || 'tree');

  return css`
    :before,
    :after {
      content: '';
      display: ${treeNormalIcon ? 'none !important' : ''};
    }
    background-image: url(${treeNormalIcon});
    background-size: ${iconSize}px ${iconSize}px;
    background-position: center;
    background-repeat: no-repeat;
    &.c7n-tree-switcher_open {
      background-image: url(${treeOpenIcon});
    }
    &.c7n-tree-switcher-noop {
      background-image: url(${treeNodeIcon});
      background-color: ${switcherNoopBackground};
      border: ${switcherNoopBorder};
      border-radius: ${switcherNoopBorderRadiuses};
      padding-bottom: ${switcherNoopPaddingBottom};
      margin-top: ${switcherNoopMarginTop};
      padding-top: ${switcherNoopPaddingTop};
      right: ${switcherNoopRight};
      .icon {
        display: ${switcherNoopDispalyIcon};
        color: ${treeSwitcherBgColor};
      }
    }
  `;
};

const getTreeStyle = (props: any) => {
  const {
    fontFamily,
    fontSize,
    color,
    selectedBackColor,
    selectedFontColor,
    treeNormalIcon,
    treeOpenIcon,
    treeCloseIcon,
    treeNodeIcon,
    titleLeft,
    hoverBackColor,
    treeLineColor,
    treeNodeHeight,
  } = getThemeData(props, 'tree');
  return css`
    .c7n-tree.c7n-tree {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      color: ${color};
      .c7n-tree-treenode {
        align-items: center;
        height: ${treeNodeHeight}px;
        .icon {
          width: 24px;
          height: 24px;
          line-height: 24px;
        }
      }
      i.icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
        margin-top: -3px;
        font-size: 0.2rem;
        color: #0f1358;
        &:hover {
          background: rgba(83, 101, 234, 0.08);
          border-radius: 0.04rem;
        }
      }
      .c7n-tree-treenode,
      li {
        position: relative;
        width: 100%;
        padding: 0.02rem 0;
        /* 选中菜单背景颜色和字体颜色 */
        .c7n-tree-node-content-wrapper.c7n-tree-node-selected {
          background-color: ${selectedBackColor};
          .c7n-tree-title {
            color: ${selectedFontColor};
          }
        }

        .c7n-tree-node-content-wrapper:hover {
          background: ${hoverBackColor};
        }
      }
    }
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-node-content-wrapper:before,
    .c7n-tree.c7n-tree > li.c7n-tree-treenode-selected > span.c7n-tree-node-content-wrapper:before {
      background: ${selectedBackColor};
    }
    /* 未选中时 */
    .c7n-tree.c7n-tree .c7n-tree-child-tree > li span.c7n-tree-node-content-wrapper:before,
    .c7n-tree.c7n-tree > li span.c7n-tree-node-content-wrapper:before {
      content: '';
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
    .c7n-tree.c7n-tree > li span.c7n-tree-node-content-wrapper.c7n-tree-node-selected,
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li
      span.c7n-tree-node-content-wrapper.c7n-tree-node-selected {
      color: ${selectedFontColor};
    }
    /* 选中时箭头变浅 */
    .c7n-tree.c7n-tree > li.c7n-tree-treenode-selected > span.c7n-tree-switcher,
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-switcher {
      color: ${selectedFontColor};
    }
    /* 调整指向线对齐 */
    .c7n-tree.c7n-tree-show-line {
      .c7n-tree-treenode {
        height: 0.36rem;
      }
      .c7n-tree-switcher_open .icon-arrow_drop_down {
        :before {
          background: url(${treeOpenIcon}) no-repeat 30% center;
        }
      }
      .c7n-tree-switcher_close .icon-arrow_drop_down {
        :before {
          background: url(${treeCloseIcon}) no-repeat 30% center;
        }
      }
      .c7n-tree-switcher_open .icon-arrow_drop_down,
      .c7n-tree-switcher_close .icon-arrow_drop_down {
        :before {
          display: block;
          content: '';
          width: 100%;
          height: 100%;
        }
      }
      i.icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
        transform: none;
      }
      /* 修改指示线颜色 */
      .c7n-tree-indent {
        &-unit {
          &::before {
            border-color: ${treeLineColor};
            top: -0.02rem;
            right: 0.13rem;
          }
          &-end {
            &::before {
              display: block;
            }
          }
        }
      }
      .c7n-tree-switcher-leaf-line {
        &::before {
          height: ${treeNodeHeight}px;
          top: -0.06rem;
        }
        &::before,
        &::after {
          border-color: ${treeLineColor};
        }
      }
      /* 调整内容区域样式 */
      .c7n-tree-node-content-wrapper {
        height: 100%;
        line-height: 0.32rem;
        display: flex;
        align-items: center;
      }
      /* checkbox样式调整 */
      .c7n-tree-checkbox .c7n-tree-checkbox-inner {
        margin-left: 0.04rem;
      }
      /* 修改switcher样式 */
      .c7n-tree-switcher {
        width: 0.2rem;
        height: 0.2rem;
        margin-top: 0.04rem;
        &-noop {
          display: flex;
          align-items: center;
          .c7n-tree-switcher-leaf-line {
            margin-top: 0.03rem;
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            background: url(${treeOpenIcon}) no-repeat 30% center;
            cursor: pointer;
            position: absolute;
            &::before,
            &::after {
              display: none;
            }
          }
          .icon.icon-note.c7n-tree-switcher-line-icon {
            width: 100%;
            height: 100%;
          }
        }
        .icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
  `;
};

const leftIconStyle = (props: any) => {
  const { borderWidth, color } = getThemeData(props, 'tree');
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

const treeAllStyle = css`
  ${getTreeStyle}
  ${getTreeCheckStyle}
`;

export { treeStyle, treeCheckStyle, treeAllStyle };
