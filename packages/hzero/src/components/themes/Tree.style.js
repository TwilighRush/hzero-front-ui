import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getTreeCheckStyle = props => {
  const { primary } = getThemeData(props, "common");
  const {
    checkboxPosition,
    checkboxRadius,
    checkboxDisabledBorder,
    checkboxDisabledBgColor,
    checkboxWidth,
    checkboxHeight,
  } = getThemeData(props, "treeCheck");
  if (checkboxPosition === "default") {
    return css`
      .ant-tree.ant-tree {
        .ant-tree-checkbox {
          transform: scale(${checkboxWidth / 16});
          &.ant-tree-checkbox-disabled {
            background-color: ${checkboxDisabledBgColor} !important;
          }
          width: ${checkboxWidth}px;
          height: ${checkboxHeight}px;
          border: 1px solid ${checkboxDisabledBorder};
          border-radius: ${checkboxRadius}px;
          .ant-tree-checkbox-inner {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            width: 0px;
            height: 0px;
            transition: all 0.2s linear;
          }
          &.ant-tree-checkbox-checked {
            &.ant-tree-checkbox-disabled {
              border: 1px solid ${checkboxDisabledBorder};
              .ant-tree-checkbox-inner {
                background-color: ${checkboxDisabledBgColor} !important;
              }
            }
            .ant-tree-checkbox-inner {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: ${primary};
              width: 15px;
              height: 15px;
              border: none;
              transition: all 0.2s linear;
            }
            &:after {
              display: none;
            }
          }
          &.ant-tree-checkbox-indeterminate {
            &.ant-tree-checkbox-disabled {
              .ant-tree-checkbox-inner {
                background-color: ${checkboxDisabledBgColor} !important;
              }
            }
            width: ${checkboxWidth}px;
            height: ${checkboxHeight}px;
            border: 1px solid ${checkboxDisabledBorder};
            border-radius: ${checkboxRadius}px;
            .ant-tree-checkbox-inner {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: ${primary};
              width: 15px;
              height: 15px;
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
      .ant-tree.ant-tree {
        &:hover span.ant-tree-checkbox,
        span.ant-tree-checkbox {
          position: absolute;
          right: 16px;
          top: 4px;
          &.ant-tree-checkbox-indeterminate {
            .ant-tree-checkbox-inner {
              display: block;
              background-color: white;
              border-color: ${primary};
              &:after {
                border-color: ${primary};
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
          .ant-tree-checkbox-inner {
            display: none;
          }
          &.ant-tree-checkbox-checked {
            .ant-tree-checkbox-inner {
              display: block;
              width: ${checkboxWidth}px;
              height: ${checkboxHeight}px;
              border: 0;
              border-left: 1px solid ${primary};
              border-bottom: 1px solid ${primary};
              background-color: transparent;
              transform: translateX(-2.5px) rotate(-45deg) scale(1.3);
              &:after {
                display: none;
              }
            }
          }
        }
        &:hover span.ant-tree-checkbox {
          .ant-tree-checkbox-inner {
            display: block;
            &:hover {
              border-color: ${primary};
            }
          }
        }
      }
    `;
  }
};

const getIconStyle = props => {
  const {
    treeNormalIcon = "",
    treeOpenIcon = "",
    treeNodeIcon = "",
    iconSize,
  } = getThemeData(props, "tree");
  return css`
    :before,
    :after {
      content: "";
      display: ${treeNormalIcon ? "none !important" : ""};
    }
    background-image: url(${treeNormalIcon});
    background-size: ${iconSize}px ${iconSize}px;
    background-position: center;
    background-repeat: no-repeat;
    &.ant-tree-switcher_open {
      background-image: url(${treeOpenIcon});
    }
    &.ant-tree-switcher-noop {
      background-image: url(${treeNodeIcon});
    }
  `;
};

const getTreeStyle = props => {
  const {
    fontFamily,
    fontSize,
    color,
    arrowWidth,
    arrowHeight,
    selectedBackColor,
    selectedFontColor,
  } = getThemeData(props, "tree");
  return css`
    .ant-tree.ant-tree {
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      color: ${color};
      li {
        position: relative;
        /* 箭头改造 */
        span.ant-tree-switcher {
          &.ant-tree-switcher_open:after,
          &.ant-tree-switcher_close:after {
            content: "";
            width: ${arrowWidth}px;
            height: ${arrowHeight}px;
            border-left: 1px solid ${color};
            border-bottom: 1px solid ${color};
          }
          ${getIconStyle}
          /* 开 */
          &.ant-tree-switcher_open:after {
            transform: rotate(-45deg);
          }
          /* 关 */
          &.ant-tree-switcher_close:after {
            transform: rotate(-135deg);
          }
        }
        /* 选中菜单背景颜色和字体颜色 */
        .ant-tree-node-content-wrapper.ant-tree-node-selected,
        .ant-tree-node-content-wrapper:hover {
          background-color: ${selectedBackColor};
          .ant-tree-title {
            color: ${selectedFontColor};
          }
        }
      }
    }
    .ant-tree.ant-tree.ant-tree-directory
      .ant-tree-child-tree
      > li.ant-tree-treenode-selected
      > span.ant-tree-node-content-wrapper:before,
    .ant-tree.ant-tree.ant-tree-directory
      > li.ant-tree-treenode-selected
      > span.ant-tree-node-content-wrapper:before {
      background: ${selectedBackColor};
    }
    /* 未选中时 */
    .ant-tree.ant-tree.ant-tree-directory
      .ant-tree-child-tree
      > li
      span.ant-tree-node-content-wrapper:before,
    .ant-tree.ant-tree.ant-tree-directory
      > li
      span.ant-tree-node-content-wrapper:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 24px;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
    /* 选中时标题颜色变浅 */
    .ant-tree.ant-tree.ant-tree-directory
      > li
      span.ant-tree-node-content-wrapper.ant-tree-node-selected,
    .ant-tree.ant-tree.ant-tree-directory
      .ant-tree-child-tree
      > li
      span.ant-tree-node-content-wrapper.ant-tree-node-selected {
      color: ${selectedFontColor};
    }
    /* 选中时箭头变浅 */
    .ant-tree.ant-tree.ant-tree-directory
      > li.ant-tree-treenode-selected
      > span.ant-tree-switcher,
    .ant-tree.ant-tree.ant-tree-directory
      .ant-tree-child-tree
      > li.ant-tree-treenode-selected
      > span.ant-tree-switcher {
      color: ${selectedFontColor};
    }
  `;
};

export default createStyleComponent(
  "tree",
  css`
    ${getTreeCheckStyle}
    ${getTreeStyle}
  `
);
