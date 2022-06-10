import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getShadowStyle(props) {
  const d = getThemeData(props, "input");
  return css`
    :before {
      content: "";
      display: block;
      position: absolute;
      top: -${d.borderWidth}px;
      left: -${d.borderWidth}px;
      right: -${d.borderWidth}px;
      bottom: -${d.borderWidth}px;
      transition: all ${d.shadowTransition};
      border-radius: ${d.radius};
      box-shadow: ${d.shadow};
      opacity: 0;
    }
    &.t-field-focused {
      :before {
        opacity: 1;
      }
    }
  `;
}

// 输入框阴影
const shadowStyle = css`
  ${getShadowStyle}
`;

/**
 * 获取输入框边框
 * @param props
 * @returns {string}
 */
const getBorder = (props) => {
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
  } else {
    return `border: ${border};`;
  }
  return style;
};

const inputWrapperStyle = (props) => {
  const { radius, hasShadow, disabledBorderColor } = getThemeData(
    props,
    "input"
  );
  const { baseHeight } = getThemeData(props, "common");
  return css`
    display: inline-block;
    width: 100%;
    height: ${baseHeight}px;
    border-width: 0;
    border-radius: ${radius}px;
    ${getBorder}
    ${hasShadow ? shadowStyle : ""};
    &.t-textarea {
      height: auto;
    }
    &.t-field-disabled {
      :after,
      :before {
        display: none !important;
      }
      border-color: ${disabledBorderColor}!important;
    }
  `;
};

const disabledStyle = css`
  background-color: ${(p) =>
    getThemeData(p, "input", "disabledBgColor")} !important;
  :after,
  :before {
    display: none !important;
  }
`;

const innerStyle = (props) => {
  const {
    radius,
    disabledBgColor,
    disabledFontColor,
    borderWidth,
  } = getThemeData(props, "input");
  const { baseHeight } = getThemeData(props, "common");
  return css`
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    line-height: 0;
    border-radius: ${radius}px;
    z-index: 1;
    :before,
    :after {
      border-radius: ${radius}px;
    }
    .ant-input-affix-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      border: none;
      .ant-input-suffix {
        z-index: 2;
        font-size: 16px;
      }
    }
    .ant-input-group-wrapper {
      position: relative;
      height: 100%;
      top: 0;
      z-index: 2;
      .ant-input-wrapper {
        position: relative;
        width: 100%;
        letter-spacing: 0;
        height: 100%;
        display: flex;
        z-index: 1;
      }
      .ant-input-affix-wrapper {
        height: 100%;
        display: inline-block;
        box-sizing: border-box;
        padding: 0 1px;
        border: none;
        z-index: 1;
      }
      .ant-input-group-addon {
        flex: 0 0 auto;
        width: auto;
        position: relative;
        box-sizing: border-box;
        border: none;
        height: 100%;
        border-radius: 0;
        line-height: ${baseHeight - 2}px;
        overflow: hidden;
        z-index: 2;
        .ant-select {
          position: relative;
          padding: 0;
          margin: 0 -11px;
          width: auto;
          :before,
          :after {
            display: none !important;
          }
          .ant-select-selection {
            margin: 0;
            background: #fafafa;
            border: none;
          }
        }
        :first-of-type {
          border-radius: ${radius}px 0 0 ${radius}px;
        }
        :last-of-type {
          border-radius: 0 ${radius}px ${radius}px 0;
          .ant-select {
            margin-right: -12px;
          }
        }
      }
    }
    .ant-input-search {
      z-index: 2;
      .ant-input {
        border: none;
      }
    }
    .ant-input,
    .ant-input-number-input,
    .ant-input-number {
      position: relative;
      box-sizing: border-box;
      border: none;
      border-radius: ${radius}px;
      box-shadow: none;
      z-index: 2;
      &.ant-input-disabled {
        background-color: ${disabledBgColor};
        color: ${disabledFontColor};
      }
    }
    .ant-input-group-wrapper,
    .ant-input-number {
      position: relative;
      width: 100%;
      z-index: 2;
      .ant-input-group-addon {
        height: 100%;
        .ant-select {
          border: none;
          //border-left: 1px solid #d4d4d4;
        }
      }
    }
    .ant-input-search {
      height: 100%;
      .ant-input-search-button {
        height: 100%;
      }
    }
    .ant-input-number-input-wrap {
      position: relative;
      z-index: 0;
    }
    input,
    .ant-input,
    .ant-input-number-input {
      height: 100%;
      line-height: ${baseHeight - 2 * borderWidth}px;
      box-sizing: border-box;
      padding-top: 0;
      padding-bottom: 0;
    }
    :focus-within {
      :after,
      :before {
        display: block !important;
      }
    }
    &.t-field-disabled-inner {
      ${disabledStyle}
    }
    .ant-input-group {
      .ant-input:hover {
        z-index: 1;
      }
    }
  `;
};

function getTextAreaStyle(props) {
  const {
    borderColor,
    borderWidth,
    disabledBorderColor,
    shadow,
    radius,
    disabledFontColor,
    disabledBgColor,
    focusedBorderColor,
  } = getThemeData(props, "input");
  return css`
    textarea.ant-input {
      border: none;
      /* border: ${borderWidth}px solid ${borderColor}; */
      ${getBorder}
      border-radius: ${radius}px;
      &.ant-input-disabled,
      &.ant-input-disabled:hover {
        border-color: ${disabledBorderColor} !important;
        color: ${disabledFontColor};
        background: ${disabledBgColor};
      }
      :hover,
      :focus {
        border-color: ${focusedBorderColor || "rgba(0,0,0,0.15)"};
      }
      :focus {
        box-shadow: ${shadow || "0 0 0 0 rgba(0,0,0,0)"};
      }
    }
  `;
}

const getInputNumberStyle = (props) => {
  const { numberShowHandle, numberTextAlign, radius } = getThemeData(
    props,
    "input"
  );
  return css`
    .themed-input-wrapper {
      .themed-input-inner {
        .ant-input-number,
        .ant-input-number-input {
          position: relative;
          width: 100%;
          padding-right: ${numberShowHandle ? "11px" : ""};
          height: auto;
          border: none;
          box-sizing: border-box;
          border-radius: ${radius}px;
          box-shadow: none;
          z-index: 2;
          .ant-input-number-handler-wrap {
            display: ${numberShowHandle ? "block" : "none"};
            z-index: 3;
            border-top-right-radius: ${radius}px;
            border-bottom-right-radius: ${radius}px;
          }
        }
        .ant-input-number-input-wrap .ant-input-number-input {
          text-align: ${numberTextAlign};
        }
      }
    }
  `;
};

const inputStyle = css`
  .themed-input-wrapper {
    ${inputWrapperStyle};
    &.t-textarea .themed-input-inner .ant-input {
      height: 100%;
    }
    .themed-input-inner {
      ${innerStyle};
    }
  }
  ${getTextAreaStyle};
  ${getInputNumberStyle};
`;

export default createStyleComponent("input", inputStyle);
