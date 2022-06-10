import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

// pro-select的下拉框
const proSelectDropdown = (props) => {
  const d = getThemeData(props, "select");
  const { primary } = getThemeData(props, "common");
  return css`
    .c7n-pro-select-popup.c7n-pro-select-popup {
      & {
        .c7n-ripple-wrapper {
          display: none;
        }
        background: #fff;
        border: ${d.selectPopupBorder || "1px solid #ccc"};
        .c7n-pro-select-select-all-none span {
          color: ${primary};
        }

        > div > div {
          background: #fff;
          /* margin-top: -6px; */
          z-index: 5;
        }
      }
      .c7n-pro-select-dropdown-menu-item {
        font-family: ${d.fontFamily};
        font-size: ${d.dropdownItemFontSize}px;
        &-selected {
          background: ${d.activeBgColor};
          font-weight: ${d.activeFontWeight};
        }
        &-active {
          background: ${d.hoverBgColor};
        }
      }
    }
  `;
};
function getSelectStyle(props) {
  const d = getThemeData(props, "select");
  const { inputHeight, borderWidth, inputFontWeight, selectMultiplePading } =
    getThemeData(props, "input");
  const { primary, multipleColor } = getThemeData(props, "common");

  return css`
    .c7n-pro-select-group-wrapper {
      .c7n-pro-select-group-before,
      .c7n-pro-select-group-after,
      .c7n-pro-select-group-help {
        background-color: initial;
      }
    }
    .c7n-pro-select-multiple label .c7n-pro-select {
      min-height: initial;
    }
    .c7n-pro-select-wrapper {
      .c7n-pro-select-trigger:before {
        content: "\\E5CF";
        font-family: icomoon, sans-serif;
        font-size: 0.16rem;
      }
    }
    .c7n-pro-select-wrapper.c7n-pro-select-empty {
      .c7n-pro-select-inner-button.c7n-pro-select-clear-button {
        display: none;
      }
    }
    .c7n-pro-select-select-all-none span {
      color: ${primary};
    }
    .c7n-pro-select:not(textarea):not(:last-child) {
      /* padding-left: 0.1rem;   // 多选情况下 lov select多余padding问题 */
    }
    .c7n-pro-select-wrapper {
      .c7n-pro-select > ul > li {
        height: auto;
      }
      &.c7n-pro-select-expand {
        label > .c7n-pro-select-suffix {
          > .c7n-pro-select-trigger:not(.icon-search) {
            transform: translateY(-50%) rotateZ(180deg) !important;
          }
        }
      }
      :hover {
        label .c7n-pro-select-clear-button {
          z-index: 6;
        }
      }
      :before {
        display: none;
      }
      label .c7n-pro-select {
        border: none;
        margin: 0;
      }
      .c7n-pro-select-placeholder {
        border: none;
        margin: 0;
        height: ${inputHeight - 2 * borderWidth}px;
        line-height: ${inputHeight - 2 * borderWidth}px;
      }
      label {
        .c7n-pro-select-clear-button,
        .c7n-pro-select-suffix {
          top: 0;
          bottom: 0;
          height: 100%;
          border: none;
          background: none;
          margin: 0;
          z-index: 6;
          > .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 6px;
          }
        }
      }
      .c7n-pro-select {
        /* padding: 0 ${d.multiSelectPadding}px; */
        ul {
          display: flex;
          flex-flow: row wrap;
          line-height: 0;
          height: ${d.inputSelectHeight + 2}px;
          padding: 0;
          width: 100%;
          min-height: ${inputHeight - 2 * borderWidth}px;
          li {
            height: ${d.inputSelectHeight}px;
            > input.c7n-pro-select-multiple-input {
              background: transparent;
            }
          }
        }
        .c7n-pro-select-multiple-block {
          background: ${d.mutiSelectItemBg};
          height: ${inputHeight - 2 * borderWidth - 4}px;
          line-height: ${inputHeight - 2 * borderWidth - 4}px;
          margin: ${selectMultiplePading || "0.02rem 0.04rem"};
          border-radius: ${d.mutiSelectItemBorderRadius}px;
          flex: 0 0 auto;
          width: auto;
          font-weight: ${inputFontWeight};
          div {
            color: ${d.mutiSelectItemFontColor};
            font-size: ${d.mutiSelectItemFontSize}px;
            width: auto;
            max-width: 200%;
            line-height: inherit;
          }
          .icon {
            font-family: "icomoon";
            color: ${d.mutiSelectItemFontColor};
            font-size: ${d.mutiSelectItemIconSize}px;
            margin-left: ${d.multiSelectPadding}px;
            /* margin-top: ${d.multiSelectItemIconMargin}px; */
            :before {
              content: "\\e5cd";
            }
            &.icon {
              line-height: inherit;
            }
          }
        }
      }
    }
    .c7n-pro-select-common-item-wrapper {
      display: flex;
      .c7n-pro-select-common-item-label {
        border: none;
        font-size: 12px;
        color: #717171;
      }
      .c7n-pro-select-common-item {
        margin-right: 8px;
        height: 18px;
        line-height: 16px;
        background: #fff;
        border: 1px solid #d3d3d3;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #717171;
        letter-spacing: 0;
        :active {
          background: ${primary};
          color: #fff;
        }
      }
    }
  `;
}

export default createStyleComponent(
  "select",
  css`
    ${getSelectStyle}
    ${proSelectDropdown}
  `
);
