import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";
import { getBorder } from "./Select.style";

const getCascaderDropdown = (props) => {
  const {
    fontFamily,
    activeBgColor,
    activeFontWeight,
    hoverBgColor,
    dropdownWrapperBorderColor,
  } = getThemeData(props, "select");
  const {
    rightItemHeight = "", // auto | ''
    noShadow = false,
    columnGap = 8,
    columnBorder = "none",
    columnShadow = "0 1px 3px 0 rgba(0,0,0,0.20)",
    itemHeight,
  } = getThemeData(props, "cascader");
  return css`
    .ant-cascader-menus.ant-cascader-menus {
      box-shadow: ${noShadow ? "none" : ""};
      > div {
        /* border: 1px solid ${dropdownWrapperBorderColor}; */
      }
      border-radius: 2px;
      .ant-cascader-menu {
        & + .ant-cascader-menu {
          height: ${rightItemHeight};
          margin-left: ${columnGap}px;
        }
        border: ${columnBorder};
        box-shadow: ${columnShadow};
        border-radius: 0.02px;
        position: relative;
        background: #fff;
        z-index: 10;
        .ant-cascader-menu-item {
          font-family: ${fontFamily};
          padding: ${(itemHeight - 22) / 2}px 8px;
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
const getCascaderStyle = (props) => {
  const { radius, disabledBorderColor } = getThemeData(props, "input");
  const { baseHeight } = getThemeData(props, "common");
  return css`
    .ant-cascader-picker {
      height: ${baseHeight}px;
      border-radius: ${radius}px;
      border: none;
      ${getBorder};
      &&:focus {
        .ant-input {
          box-shadow: none;
        }
      }
      &.ant-cascader-picker-disabled {
        border-color: ${disabledBorderColor};
      }
      :focus {
        .ant-input {
          box-shadow: none;
        }
      }
      .ant-input {
        border: none;
        height: ${baseHeight - 2}px;
        border-radius: ${radius - 2}px;
      }
    }
    ${getCascaderDropdown}
  `;
};

export default createStyleComponent("cascader", getCascaderStyle);
