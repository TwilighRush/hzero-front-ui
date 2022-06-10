import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";
// import arrowDown from "../../assets/components/images/arrow-down@2x.png";

const getSelectDropdown = (props) => {
  const { primary } = getThemeData(props, "common");
  const {
    hoverBgColor,
    activeFontWeight,
    activeBgColor,
    fontFamily,
    dropdownItemFontSize,
    dropdownWrapperBorderColor,
  } = getThemeData(props, "select");
  return css`
    .ant-select-dropdown {
      &.ant-select-dropdown--multiple
        .ant-select-dropdown-menu-item-selected:after,
      &.ant-select-dropdown--multiple
        .ant-select-dropdown-menu-item-selected:hover:after {
        color: ${primary};
      }

      > div {
        overflow: visible !important;
        border: 1px solid ${dropdownWrapperBorderColor};
        ul {
          position: relative;
          z-index: 5;
          background-color: #fff;
          margin: 0;
          .ant-select-dropdown-menu-item {
            font-family: ${fontFamily};
            font-size: ${dropdownItemFontSize}px;
            &-selected {
              background-color: ${activeBgColor};
              font-weight: ${activeFontWeight};
            }
            &-active {
              background-color: ${hoverBgColor};
              font-weight: ${activeFontWeight};
            }
          }
        }
      }
    }
  `;
};
/**
 * 获取Select框边框
 * @param props
 * @returns {string}
 */
export const getBorder = (props) => {
  const d = getThemeData(props, "input");
  const { border, borderWidth, borderColor } = d;
  let style = "";
  if (border === "all") {
    style = css`
      border: ${borderWidth}px solid ${borderColor};
    `;
  } else if (border && border.length) {
    const borders = border
      .map((v) => `border-${v}: ${borderWidth}px solid ${borderColor};`)
      .join(" ");
    style = css`
      ${borders}
    `;
  }
  return style;
};

const selectStyle1 = css`
  .ant-select-selection {
    height: auto;
    &.ant-select-selection--multiple {
      min-height: ${(props) =>
        getThemeData(props, "common", "baseHeight") - 2}px;
    }
  }
  .ant-select-selection__rendered {
    height: auto;
    .ant-select-selection-selected-value {
      height: auto;
    }
  }
`;

const disableStyle = css`
  :after,
  :before {
    display: none !important;
  }
`;

function getSelectStyle(props) {
  const d = getThemeData(props, "select");
  const { radius, disabledBorderColor } = getThemeData(props, "input");
  const { baseHeight } = getThemeData(props, "common");
  return css`
    .ant-select.ant-select {
      position: relative;
      border: none;
      height: auto;
      display: inline-block;
      justify-content: center;
      align-items: center;
      border-radius: ${radius}px;
      ${getBorder};
      box-shadow: none;
      &.ant-select-disabled {
        border-color: ${disabledBorderColor} !important;
        ${disableStyle}
      }
      .ant-select-selection {
        flex: 1;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: ${radius - 1}px;
        position: relative;
        box-shadow: none;
        z-index: 3;
        &.ant-select-selection--multiple {
          padding-bottom: 0;
          margin: 0;
          .ant-select-selection__rendered {
            :focus-within:before {
              transform: translateY(-50%) rotate(180deg);
            }
            position: relative;
            :before {
              position: absolute;
              font-family: "anticon" !important;
              content: "\\e61d";
              color: rgba(0, 0, 0, 0.25);
              right: 2px;
              top: 50%;
              transform: translateY(-50%) rotate(0);
              transition: all 0.3s;
              z-index: 5;
            }
          }
          .ant-select-selection__clear {
            z-index: 6;
          }
        }
      }
      .ant-select-selection--multiple > ul > li,
      .ant-select-selection--multiple
        .ant-select-selection__rendered
        > ul
        > li {
        height: 22px;
        margin-top: ${(baseHeight - 2 - 22) / 2}px;
      }
      .ant-select-selection__rendered {
        height: 100%;
        line-height: ${baseHeight - 2}px;
        // 多选样式
        .ant-select-selection__choice {
          height: 22px;
          line-height: 20px;
          border: 2px;
          margin-top: 2px;
          background: ${d.mutiSelectItemBg};
          font-size: ${d.mutiSelectItemFontSize};
          color: ${d.mutiSelectItemFontColor};
        }
      }
      :focus-within {
        :after,
        :before {
          display: block;
        }
      }
      ${selectStyle1};
    }
  `;
}

const selectStyle = css`
  ${getSelectStyle}
  ${getSelectDropdown}
`;

export default createStyleComponent("select", selectStyle);
