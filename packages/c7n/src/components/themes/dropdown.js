import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import { css } from "styled-components";
import { getDropdownItemCss } from "./utils";

/**
 * 因为这里的样式需要作为全局渲染，并不需要作用域，所有单独处理
 * @param {*} props
 * @returns css
 */

function getDatePickerLanguageRedColCss(props) {
  const { weekendFontColor } = getThemeData(props, "datePicker");
  let locale = "";
  if (typeof window !== "undefined") {
    locale = (window.sessionStorage.getItem("language") || "").toLowerCase();
  }
  if (!(locale.indexOf("zh_cn") > -1 || locale.indexOf("en_us") > -1)) {
    return "";
  }
  const enCss = css`
    :first-of-type,
    :last-of-type {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;

  const zhCss = css`
    :nth-of-type(6),
    :nth-of-type(7) {
      .c7n-pro-calendar-cell-inner {
        color: ${weekendFontColor};
      }
    }
  `;
  const isZh = locale.toLowerCase().indexOf("zh_cn") > -1;
  return css`
    .c7n-pro-calendar-picker-popup
      .c7n-pro-calendar-view
      .c7n-pro-calendar-body
      table.c7n-pro-calendar-day-panel {
      tr {
        td,
        th {
          ${isZh ? zhCss : enCss}
        }
      }
    }
  `;
}

const getAutoCompleteDropdown = (props) => {
  const { dropdownWrapperBorderColor, dropdownWrappertop } = getThemeData(
    props,
    "select"
  );
  return css`
    .c7n-pro-auto-complete-popup {
      > div > div {
        /* border: 1px solid ${dropdownWrapperBorderColor}; */
      }
      && {
        background: #fff;
        > div > div {
          background: #fff;
          margin-top: ${dropdownWrappertop || "-6px"};
          z-index: 5;
        }
      }
      .c7n-pro-auto-complete-dropdown-menu-item {
        ${getDropdownItemCss}
      }
    }
  `;
};
const selectDropdownCss = (props) => {
  const {
    activeBgColor,
    hoverBgColor,
    activeFontWeight,
    fontFamily,
    paddingTopPopup,
  } = getThemeData(props, "select");
  const {
    rightItemHeight = "", // auto | ''
    noShadow = false,
    columnGap = 8,
    columnBorder = "none",
    columnShadow = "0 1px 3px 0 rgba(0,0,0,0.20)",
    itemHeight,
  } = getThemeData(props, "cascader");
  const colors = getThemeData(props, "colors");
  return css`
    .c7n-pro-select-popup.c7n-pro-select-popup {
      &.c7n-pro-select-popup-placement-bottomLeft {
        padding-top: ${paddingTopPopup};
      }
      .c7n-pro-select-select-all-none span {
        color: ${colors.primary};
      }
    }
    .c7n-select-dropdown {
      background: transparent;
      box-shadow: none;
      .c7n-ripple-wrapper {
        display: none;
      }
      > div {
        background-color: #fff;
        border: 0.01rem solid #ccc;
      }
      a {
        color: ${colors.primary};
      }
      &.c7n-select-dropdown-placement-bottomLeft {
        > div {
          border-top: none;

          > div {
            margin-top: -5px;
          }
        }
      }
      &.c7n-select-dropdown-placement-topLeft {
        > div {
          border-bottom: none;
        }
      }
      div {
        z-index: 5;
        ul {
          background-color: #fff;
          margin: 0;
          .c7n-select-dropdown-menu-item {
            ${getDropdownItemCss}
          }
        }
      }
    }
    .c7n-cascader-menus {
      box-shadow: ${noShadow ? "none" : ""};

      .c7n-cascader-menu {
        :last-child {
          margin: 0;
        }
        & + .c7n-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        border-radius: 0.02rem;
        position: relative;
        background: #fff;
        z-index: 10;
        .c7n-cascader-menu-item {
          padding: ${(itemHeight - 22) / 2}px 0.08rem;
          font-family: ${fontFamily};
          :hover {
            background-color: ${hoverBgColor};
          }
          &-active {
            background-color: ${activeBgColor};
            font-weight: ${activeFontWeight};
          }
        }
      }
    }
  `;
};

const getCascaderProDropdown = (props) => {
  const {
    tabActiveBorderColor = "#D9D9D9",
    tabBorderColor = "#D9D9D9",
    tabHeight = 24,
    tabType,
    rightItemHeight = "", // auto | ''
    noShadow = false,
    columnGap = 8,
    columnBorder = "none",
    columnShadow = "0 1px 3px 0 rgba(0,0,0,0.20)",
    itemHeight,
    singleMenuItemCurrentBg = "initial",
    singleMenuItemCurrentColor = "#3889FF",
  } = getThemeData(props, "cascader");

  const { primary } = getThemeData(props, "common");

  const getTabStyle = (color, type) => {
    return type === "tab"
      ? css`
          .c7n-pro-cascader-menu-tab-item {
            border: none;
            &:last-of-type {
              border: none !important;
              border-bottom: 1px solid ${color} !important;
            }
            &:after {
              display: none;
            }
          }
        `
      : "";
  };

  return css`
    // 修复表格中二级下拉被一级下拉遮挡问题
    .c7n-pro-popup.c7n-pro-popup-wrapper {
      &.c7n-pro-select-popup {
        z-index: 0;
      }
    }
    .c7n-pro-popup.c7n-pro-cascader-popup {
      box-shadow: ${noShadow ? "none" : ""};
      .c7n-pro-cascader-select-all-none span {
        color: ${primary};
      }
      .c7n-pro-cascader-menu {
        & + .c7n-pro-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        .c7n-pro-cascader-menu-item {
          ${getDropdownItemCss}
          padding: ${(itemHeight - 22) / 2}px 0.08rem;
          &-active {
            font-weight: normal;
          }
          &-expand {
            padding-right: 35px;
          }
        }
        &.c7n-pro-cascader-menu-single {
          .c7n-pro-cascader-menu-item:hover,
          .c7n-pro-cascader-menu-item-active {
            background: ${singleMenuItemCurrentBg};
            color: ${singleMenuItemCurrentColor};
          }
        }
      }
      .c7n-pro-cascader-menu-tab {
        padding-bottom: 0;
        border-width: 1px;
        border-color: ${tabBorderColor};
      }
      .c7n-pro-cascader-menu-tab-item {
        display: inline-block;
        height: ${tabHeight}px;
        border-width: 1px;
        line-height: ${tabHeight - 2}px;
        padding: 0 8px;
        box-sizing: border-box;
        border-color: ${tabBorderColor};
        font-size: 12px;
        color: #666666;
        .icon.icon-arrow_drop_down {
          display: none;
        }
      }
      .c7n-pro-cascader-menu-tab-item:last-child {
        border-color: ${tabActiveBorderColor};
      }

      ${getTabStyle(tabActiveBorderColor, tabType)}
    }
  `;
};

export default createStyleComponent(
  "commonDropdown",
  css`
    ${getDatePickerLanguageRedColCss}
    ${getAutoCompleteDropdown}
    ${selectDropdownCss}
    ${getCascaderProDropdown}
  `,
  true
);
