import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import { getDropdownItemCss } from "../utils";

const getTreeSelectStyle = (props) => {
  const { dropdownItemFontSize } = getThemeData(props, "select");
  const { inputHeight } = getThemeData(props, "input");
  return css`
    .c7n-select {
      .c7n-select-selection__placeholder {
        line-height: ${inputHeight - 2}px;
        margin-top: -2px;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    .c7n-select-dropdown.c7n-select-dropdown.c7n-select-tree-dropdown {
      padding: 0;
      > div {
        > span,
        > div {
          position: relative;
          z-index: 6;
        }
      }
      .c7n-select-tree-treenode {
        .c7n-select-tree-node-content-wrapper:hover {
          background: initial;
        }
        .c7n-select-tree-node-content-wrapper.c7n-select-tree-node-selected {
          background-color: initial;
        }
        .c7n-select-tree-title {
          font-size: ${dropdownItemFontSize}px;
        }
        ${getDropdownItemCss}
        .c7n-select-tree-switcher {
          > .icon {
            line-height: 18px;
            position: relative;
            transform: rotate(0);
          }
          &.c7n-select-tree-switcher_close > .icon {
            transform: rotateZ(-90deg);
          }
          > .icon:before {
            content: "";
            border-left: 1px solid #333;
            border-bottom: 1px solid #333;
            width: 6px;
            height: 6px;
            display: inline-block;
            transform: rotate(-45deg);
            position: absolute;
            left: calc(50% - 3px);
            top: calc(50% - 3px);
          }
        }
      }
    }
  `;
};

export default createStyleComponent("comp/treeSelect", getTreeSelectStyle);
