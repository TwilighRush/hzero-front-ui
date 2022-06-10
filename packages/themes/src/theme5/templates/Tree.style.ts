import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

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

const getTreeCheckStyle = (props: any) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .c7n-tree.c7n-tree {
      .c7n-tree-treenode.c7n-tree-treenode-checkable {
        span.c7n-tree-switcher {
          ${(p) => getIconStyle(p, 'treeCheck')}
        }
      }
      .c7n-tree-treenode.drag-over > [draggable] {
        background-color: ${primary6};
      }
    }
  `;
};
const getTreeStyle = (props: any) => {
  const {
    fontSize,
    selectedFontColor,
    treeNormalIcon,
    treeOpenIcon,
    treeNodeIcon,
    titleLeft,
    lineHeight,
  } = getThemeData(props, 'tree');
  const {
    primary1,
    primary2,
    primary6,
    titleColor1,
    titleColor2,
    lineColor1,
    titleColor3,
    bgColor,
  } = getThemeData(props, 'common');
  return css`
    .c7n-tree.c7n-tree {
      font-size: ${fontSize}px;
      color: ${titleColor1};
      //复选框样式
      .c7n-tree-checkbox {
        :hover {
          .c7n-tree-checkbox-inner {
            border-color: ${primary6};
          }
        }
        .c7n-tree-checkbox-inner {
          border: 0.01rem solid ${lineColor1};
        }
        &.c7n-tree-checkbox-indeterminate:not(.c7n-tree-checkbox-disabled),
        &.c7n-tree-checkbox-checked:not(.c7n-tree-checkbox-disabled) {
          .c7n-tree-checkbox-inner {
            border-color: transparent;
            background-color: ${primary6};
          }
        }
        &.c7n-tree-checkbox-checked {
          .c7n-tree-checkbox-inner:after {
            margin-top: 1px;
            margin-left: 1px;
          }
        }
      }
      .c7n-tree-treenode {
        align-items: center;
        /* .c7n-tree-switcher {
          line-height: ${lineHeight}px;
        } */
        .c7n-tree-node-content-wrapper {
          flex: 1;
          line-height: ${lineHeight}px;
          min-height: ${lineHeight}px;
        }
        .icon {
          width: 24px;
          height: ${lineHeight}px;
          line-height: ${lineHeight}px;
        }
        .c7n-tree-switcher-noop + .c7n-tree-checkbox {
          display: inline-block;
          width: 24px;
        }
      }
      i.icon.icon-arrow_drop_down.c7n-tree-switcher-icon {
        font-size: 0.2rem;
        color: ${titleColor2};
        &:hover {
          width: 24px;
        }
      }
      .c7n-tree-treenode,
      li {
        position: relative;
        width: 100%;
        padding: 0;
        /* 选中菜单背景颜色和字体颜色 */
        .c7n-tree-node-selected {
          background-color: ${primary1} !important;
          .c7n-tree-title {
            color: ${primary6};
          }
        }
        .c7n-tree-node-content-wrapper.c7n-tree-node-content-wrapper:hover {
          background-color: ${primary1}!important;
        }
        &.c7n-tree-treenode-disabled {
          .c7n-tree-node-content-wrapper {
            :hover {
              background-color: ${bgColor}!important;
            }
            text-decoration: line-through;
            color: ${titleColor3};
          }
        }
      }
    }
    //多选
    .c7n-pro-tree-select-popup-multiple {
      .c7n-tree-checkbox {
        + .c7n-tree-node-content-wrapper {
          .c7n-tree-title {
            color: ${titleColor2};
            padding-left: 0;
          }
        }
        &.c7n-tree-checkbox-checked + .c7n-tree-node-selected {
          background-color: #fff !important;
          .c7n-tree-title {
            color: ${titleColor2};
          }
        }
      }
    }
    // 可拖拽
    .draggable-tree.draggable-tree {
      .c7n-tree-list {
        .c7n-tree-treenode {
          .c7n-tree-node-content-wrapper {
            line-height: ${lineHeight - 4}px;
          }
        }
      }
    }
    //单选
    .c7n-tree.c7n-tree
      .c7n-tree-child-tree
      > li.c7n-tree-treenode-selected
      > span.c7n-tree-node-content-wrapper:before,
    .c7n-tree.c7n-tree > li.c7n-tree-treenode-selected > span.c7n-tree-node-content-wrapper:before {
      background: ${primary1};
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

    .c7n-tree-node-content-wrapper-open.c7n-tree-node-content-wrapper-open:before {
      background-image: url(${treeOpenIcon});
    }

    .c7n-tree-node-content-wrapper-close.c7n-tree-node-content-wrapper-close:before {
      background-image: url(${treeNormalIcon});
    }

    .c7n-tree-node-content-wrapper-normal.c7n-tree-node-content-wrapper-normal:before {
      background-image: url(${treeNodeIcon});
    }
    .c7n-tree-title.c7n-tree-title {
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
    /* 拖拽样式 */
    .c7n-tree.c7n-tree {
      .c7n-tree-list {
        .c7n-tree-list-holder-inner {
          .drop-target {
            .c7n-tree-node-content-wrapper {
              background: ${primary2};
            }
          }
          .drag-over {
            .c7n-tree-node-content-wrapper {
              background: ${primary2};
            }
          }
          .drag-over-gap-bottom > [draggable] {
            border-bottom-color: ${primary6};
            background: none;
          }
        }
      }
    }
  `;
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
