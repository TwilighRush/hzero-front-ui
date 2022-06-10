import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import { getInnerBtnCss } from "../utils";

function getIconPickerStyle(props) {
  const {
    iconPickerIconSize,
    iconPickerIcon,
    iconPickerIconColor,
    iconPickerIconContent,
  } = getThemeData(props, "select");

  return css`
    .c7n-pro-icon-picker-wrapper {
      .c7n-pro-icon-picker-inner-button {
        ${getInnerBtnCss()}
      }
      :hover .c7n-pro-icon-picker-clear-button {
        z-index: 6;
      }
      .c7n-pro-icon-picker-suffix {
        display: flex;
        justify-content: center;
        align-items: center;
        right: 7px;
        width: auto;
        .icon {
          width: ${iconPickerIconSize}px;
          height: ${iconPickerIconSize}px;
          background: url(${iconPickerIcon});
          background-size: cover;
          :before {
            content: ${iconPickerIconContent || "none"};
            color: ${iconPickerIconColor};
          }
        }
      }
    }
  `;
}

function getDropDownStyle(props) {
  const { primary } = getThemeData(props, "common");
  const { dropdownAnimation } = getThemeData(props, "select");
  return css`
    .c7n-pro-icon-picker-popup {
      background: #fff;
      border: 0.01rem solid #ccc;
      ${dropdownAnimation};
      .c7n-tabs {
        z-index: 5;
        .c7n-tabs-nav {
          margin-left: 0.16rem;
        }
      }
      .c7n-pro-icon-picker-category {
        li div {
          transition: all 0.2s;
          i,
          p {
            color: #666;
          }
          :hover {
            opacity: 0.8;
          }
        }
        .c7n-pro-icon-picker-item-selected div {
          background: ${primary};
          transition: all 0.2s;
          i,
          p {
            color: #fff;
          }
          :hover {
            opacity: 0.8;
          }
        }
      }
    }
  `;
}

const allCss = css`
  ${getIconPickerStyle}
  ${getDropDownStyle}
`;

export default createStyleComponent("iconPicker", allCss);
