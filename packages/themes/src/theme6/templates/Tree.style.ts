import { css } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const getTreeCheckStyle = (props: any) => {
  const common = getThemeData(props, 'common');
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
          background-color: ${common.primary6};
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
              background-color: ${checkboxPrimaryColor || common.primary6};
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
              background-color: ${checkboxPrimaryColor || common.primary6};
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
              border-color: ${checkboxPrimaryColor || common.primary6};
              border-width: 1px;
              &:after {
                border-color: ${checkboxPrimaryColor || common.primary6};
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
              border-left: 0.01rem solid ${checkboxPrimaryColor || common.primary6};
              border-bottom: 0.01rem solid ${checkboxPrimaryColor || common.primary6};
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
              border-color: ${checkboxPrimaryColor || common.primary6};
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
    treeNodeIcon,
    titleLeft,
    hoverBackColor,
    treeLineHeight,
    treeColor,
    treeHoverBgColor,
    treeIconColor,
    iconFontFamily,
    iconCheckIconContent,
  } = getThemeData(props, 'tree');
  const common = getThemeData(props, 'common');
  return css`
    .c7n-tree.c7n-tree {
      font-size: ${fontSize}px;
      color: ${color};
      /* .c7n-tree-switcher-noop {
        display: none;
      } */
      .c7n-tree-treenode {
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
          line-height: 24px;
        }
      }
      .c7n-tree-switcher_open {
        i.icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
          color: ${common.primary6};
        }
      }
      i.icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
        margin-top: -3px;
        font-size: 0.2rem;
        color: rgba(0, 0, 0, 0.45);
        width: 24px;
        height: 24px;
        line-height: 24px;
        &:hover {
          width: 24px;
          height: 24px;
          /* background: rgba(83, 101, 234, 0.08); */
          border-radius: 0.04rem;
        }
      }
      .c7n-tree-treenode,
      li {
        position: relative;
        width: 100%;
        padding: 0.02rem 0;
        /* 选中菜单背景颜色和字体颜色 */
        .c7n-tree-node-content-wrapper {
          min-height: ${treeLineHeight}px;
          line-height: ${treeLineHeight}px;
          color: ${treeColor};
          width: 100%;
          margin-right: 0.12rem;
          padding: 0 0.04rem;
          /* padding-right: 0.24rem; */
          border-radius: 4px;
        }

        .c7n-tree-node-content-wrapper:hover {
          background: ${hoverBackColor};
        }
      }
      //选中样式
      .c7n-tree-treenode-selected {
        background: transparent;
        .c7n-tree-node-selected {
          background: ${common.primary2} !important;
          &:after {
            color: ${common.primary6};
            font-family: ${iconFontFamily};
            content: '${iconCheckIconContent}';
            position: absolute;
            right: 0.2rem;
          }
          .c7n-tree-title {
            color: initial;
          }
        }
      }
      .c7n-tree-treenode-checkbox-indeterminate {
        .c7n-tree-checkbox-inner {
          background-color: #ffffff;
          border-color: rgba(0, 0, 0, 0.15);
          position: relative;
          &:after {
            display: none;
          }
          &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 3px;
            left: 3px;
            background-color: ${common.primary6};
          }
        }
      }
      //禁用样式
      .c7n-tree-treenode-disabled {
        .c7n-tree-node-content-wrapper {
          .c7n-tree-title {
            color: rgba(0, 0, 0, 0.25);
            cursor: disabled;
          }
          &:hover {
            background-color: transparent;
          }
        }
        &.c7n-tree-treenode-checkbox-checked {
          .c7n-tree-checkbox-inner {
            background: rgba(0, 0, 0, 0.04) !important;
            border: 1px solid rgba(0, 0, 0, 0.15) !important;
            &:before {
              color: rgba(0, 0, 0, 0.25);
            }
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

const CheckedStyle = (props: any) => {
  const common = getThemeData(props, 'common');
  return css`
    //前图标
    .c7n-tree-switcher {
      line-height: 0.28rem;
      color: rgba(0, 0, 0, 0.45);
      &.c7n-tree-switcher_open {
        .icon-arrow_drop_down {
          color: ${common.primary6};
        }
      }
    }
    //多选框
    .c7n-tree-checkbox-inner {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 2px;
    }
    .c7n-tree-checkbox-checked {
      .c7n-tree-checkbox-inner {
        background: ${common.primary6};
        border: 1px solid ${common.primary6};
        color: #fff;
        line-height: 1;
        &:after {
          display: none !important;
        }
        &:before {
          font-size: 14px;
          font-family: ${common.iconfontFamily} !important;
          content: '\\e712';
        }
      }
    }
  `;
};
const treeStyle = css`
  /* Tree--components 全局样式实现 */
  ${CheckedStyle}
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
