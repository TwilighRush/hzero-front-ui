import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getShadowStyle(d) {
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
      border-radius: ${d.radius}px;
      box-shadow: ${d.shadow};
      opacity: 0;
    }
  `;
}

/**
 * 获取输入框边框
 * @param props
 * @returns {string}
 */
const getBorder = (d) => {
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

function getOneStyle(type, props) {
  const sd = getThemeData(props, "select");
  const d = getThemeData(props, "input");
  const shadowStyle = getShadowStyle(d);
  const border = getBorder(d);
  const common = getThemeData(props, "common");
  const selector = `${type}-wrapper`;
  return css`
    .${type}-multiple.${type}-multiple .${type} {
      min-height: initial;
      ul {
        > .${type}-range-text {
          width: 100%;
          height: ${d.rangeTextLineHeight}px;
          line-height: ${d.rangeTextLineHeight}px;
          margin: 0;
          .${type}-range-split, .${type}-range-start, .${type}-range-end {
            height: ${d.rangeTextLineHeight - 2}px;
            line-height: ${d.rangeTextLineHeight - 2}px;
            vertical-align: initial;
          }
        }
      }
    }
    .${selector} {
      padding: 0;
      position: relative;
      line-height: 0;
      border-radius: ${d.radius}px;
      font-size: ${d.fontSize}px; // 新增控制字体大小
      overflow: visible;
      ${border};
      ${shadowStyle};
      label {
        position: relative;
        padding: 0;
        border: none;
        border-radius: ${d.radius - d.borderWidth}px;
        z-index: 1;
        .${type}-clear-button:hover {
          color: inherit;
        }
        :after,
        :before {
          border-radius: ${d.radius}px;
        }
        .c7n-pro-color-picker {
          border: none;
        }
        .c7n-pro-field-label-wrapper {
          .c7n-pro-field-label {
            background: ${d.labelBackGround || "#fff"};
          }
        }
        input,
        & > span {
          height: ${d.inputHeight - d.borderWidth * 2}px;
          padding-top: 0;
          padding-bottom: 0;
          font-weight: ${d.inputFontWeight};
          border: none;
          z-index: 5;
          border-radius: ${d.radius}px;
          color: ${d.fontColor}; // 颜色控制
          &::selection {
            background-color: ${common.primary};
          }
        }
        .${type}-multiple-block {
          background-color: ${common.multipleColor || common.primary};
          border-radius: ${d.mutipleBorderRadius};
          color: ${sd.mutiSelectItemFontColor};
          /* 修改 icon 下偏的问题 */
          i.icon {
            vertical-align: top;
          }
        }
        .c7n-pro-color-picker-suffix,
        .c7n-pro-input-suffix,
        .c7n-pro-input-prefix,
        .c7n-pro-select-suffix {
          border: none;
          z-index: 6;
          & > * {
            vertical-align: middle;
            color: ${d.PrefixSuffixColor};
          }
          &:before {
            content: "";
            display: inline-block;
            color: ${d.PrefixSuffixColor};
            height: 100%;
            width: 0;
            vertical-align: middle;
          }
        }
        &:hover .${type}-inner-button, div {
          z-index: 6;
        }
        .${type}-inner-button {
          display: flex;
          align-items: center;
        }
      }
      &.${type}-focused {
        label {
          :before,
          :after {
            display: block;
          }
        }
        :before {
          opacity: 1;
          border-top: ${d.focusBordertop};
          border-bottom: ${d.focusBorderbottom};
          border-left: ${d.focusBorderleft};
          border-right: ${d.focusBorderright};
          bottom: -${d.borderWidthFocused}px;
        }
      }
      &.${type}-required {
        border-color: ${d.requiredBorderColor};
        background: ${d.requiredBgColor};
        input,
        textarea,
        .c7n-pro-input-number {
          border: none;
        }
      }

      &.${type}-invalid {
        border-color: ${d.errorColor};
        box-shadow: ${d.errorShadow};
        background-color: ${d.errorBgColor};
        &[class*="focused"]:before {
          opacity: 0;
        }
        label {
          &:before,
          &:after {
            border: none;
          }
          &:hover:before,
          &:hover:after {
            display: none !important;
          }
          input {
            background-color: ${d.errorBgColor};
            color: ${d.errorFontColor};
          }
        }
        input {
          background-color: ${d.errorBgColor};
          color: ${d.errorFontColor};
          &:hover {
            color: ${d.errorFontColor};
          }
        }
        &:before {
          border: ${d.errorFocusBorder};
        }
        .c7n-pro-field-label-wrapper .c7n-pro-field-label {
          color: ${d.errorTitleColor};
        }
        &,
        .c7n-pro-select-focused {
          :before {
            bottom: -${d.borderWidthFocused}px;
            border-bottom: ${d.errorFocusBorderbottom} !important;
          }
        }
      }
      &.${type}-disabled {
        border-color: ${d.disabledBorderColor};
        label {
          background: ${d.disabledBgColor};
          :before,
          :after,
          :hover:before,
          :hover:after {
            display: none;
          }
          input {
            color: ${d.disabledFontColor};
          }
        }
      }
      &.${type}-float-label {
        label input {
          border-radius: ${d.radius}px;
          background: #fff;
          height: ${d.inputHeight - d.borderWidth * 2}px;
        }
        &.c7n-pro-input-required {
          label input {
            height: ${d.inputHeight - d.borderWidth * 2}px;
            border-radius: ${d.radius}px;
          }
        }
        .c7n-pro-field-label-wrapper {
          .c7n-pro-field-label {
            margin-top: -2px;
            height: ${d.inputHeight - 2}px;
            line-height: ${d.inputHeight - 2}px;
          }
        }
      }
      && {
        .c7n-pro-auto-complete,
        input {
          border: none;
        }
      }
    }
    // 消除range重影
    .${type}-range .${type} {
      border: none !important;
    }
    .${type}-group-wrapper {
      line-height: 0;
      .${type}-group-before {
        ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
        border-right:none;
        padding: ${d.groupAddonPadding || "0 4px"};
        background-color: ${d.groupAddonBackground || "initial"};
        border-bottom-left-radius: ${d.radius}px;
        border-top-left-radius: ${d.radius}px;
      }
      .${type}-group-after, .${type}-group-help {
        ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
        border-left: none;
        padding: ${d.groupAddonPadding || "0 4px"};
        background-color: ${d.groupAddonBackground || "transparent"};
        border-bottom-right-radius: ${d.radius}px;
        border-top-right-radius: ${d.radius}px;
      }
      .${type}-group {
        [class$="-wrapper"] {
          border-radius: 0px;
        }
        > div:first-child [class$="-wrapper"] {
          border-bottom-left-radius: ${d.radius}px;
          border-top-left-radius: ${d.radius}px;
        }
        > div:last-child [class$="-multiple"] {
          border-bottom-right-radius: ${d.radius}px;
          border-top-right-radius: ${d.radius}px;
        }
      }
    }
    .${type}-empty.${type}-empty {
      .${type}-clear-button {
        display: none;
      }
      .${type}-inner-button, .${type}-clear-button {
        .icon-close:before {
          display: none;
        }
      }
    }
    .${type}-compact {
      &:not(:first-child) {
        .${selector}, .${selector} > label,
        .${selector} > label::before,
        .${selector} > label::after {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
      &:not(:last-child) {
        .${selector}, .${selector} > label,
        .${selector} > label::before,
        .${selector} > label::after {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
  `;
}

function getInputStyle(props) {
  const sd = getThemeData(props, "select");
  const d = getThemeData(props, "input");
  const common = getThemeData(props, "common");
  const { primary } = common;
  const types = [
    "c7n-pro-color-picker",
    "c7n-pro-cascader",
    // 'c7n-pro-input-number-multiple',
    // 'c7n-pro-auto-complete-multiple',
    // 'c7n-pro-input-multiple',
    "c7n-pro-auto-complete",
    "c7n-pro-icon-picker",
    "c7n-pro-calendar-picker",
    "c7n-pro-input",
    "c7n-pro-password",
    "c7n-pro-textarea",
    "c7n-pro-input-number",
    "c7n-pro-select",
    "c7n-pro-tree-select",
  ];
  return css`
    ${types.map((t) => getOneStyle(t, props))}
    .c7n-pro-tree-select-multiple .c7n-pro-tree-select {
      min-height: initial;
      .c7n-pro-tree-select-multiple-block {
        background-color: ${common.multipleColor || common.primary};
        color: ${sd.mutiSelectItemFontColor};
      }
    }
    /* 范围钱币输入行高 */
    .c7n-pro-input-number-range-start,
    .c7n-pro-input-number-range-end,
    /* .c7n-pro-input-number-range-split, */ // 对Currency NumberField多余
    .c7n-pro-input-number-range-input {
      line-height: inherit;
    }
    .c7n-pro-calendar-picker-multiple {
      .c7n-pro-calendar-picker > ul {
        padding: 0.01rem 0;
      }
    }
    .c7n-pro-calendar-picker-popup {
      .c7n-pro-calendar-footer {
        a {
          color: ${common.primary};
        }
        .c7n-pro-calendar-footer-view-select {
          background-color: ${common.primary};
          color: #fff;
        }
      }
    }
    .c7n-upload.c7n-upload.c7n-upload-select-picture-card:hover {
      border-color: ${primary};
    }
    .c7n-pro-input {
      && {
        border: none !important;
      }
      border-radius: 0.02rem;
    }
    .c7n-pro-password-border .c7n-pro-password,
    .c7n-pro-password-border.c7n-pro-password-float-label::before {
      border: none !important;
    }
    .c7n-pro-textarea-border.c7n-pro-textarea-wrapper .c7n-pro-textarea,
    .c7n-pro-textarea-border.c7n-pro-textarea-float-label::before {
      border: none;
    }
    .c7n-pro-input-number-wrapper {
      .c7n-pro-input-number-range-input {
        color: gray;
      }
      .c7n-pro-input-number {
        text-align: left;
      }
      .c7n-pro-input-number-inner-button {
        margin: ${d.numberInputButtonMargin};
        height: ${d.numberInputButtonHeight};
        top: ${d.numberInputButtonTop};
        right: ${d.numberInputButtonRight};
        > div {
          height: ${d.numberInputButtonHeight};
          > div:hover,
          > div:active {
            color: ${primary};
          }
          .c7n-pro-input-number-plus {
            margin: ${d.numberInputMarginItemPlus || 0};
            height: ${d.numberInputButtonHeightItem ||
            `${d.inputHeight / 2 - 1}px`};
            border-top: ${d.numberInputButtonIconBorderFirstTop};
            .icon {
              height: ${d.numberInputButtonHeight};
            }
          }
          .c7n-pro-input-number-minus {
            height: ${d.numberInputButtonHeightItem ||
            `${d.inputHeight / 2 - 1}px`};
            border-bottom: ${d.numberInputButtonIconBorderLastBottom};
            .icon {
              height: ${d.numberInputButtonHeight};
              color: ${d.numberInputButtonIconColor};
            }
          }
          .icon {
            height: ${d.numberInputButtonIconHeight};
            border: ${d.numberInputButtonIconBorder};
            color: ${d.numberInputButtonIconColor};
            border-right: ${d.numberInputButtonIconBorderRight};
            &:before {
              vertical-align: ${d.numberInputButtonIconVertical};
            }
          }
        }
      }
    }
    .c7n-pro-textarea-wrapper:not(.c7n-pro-textarea-disabled) {
      padding: 0;
      position: relative;
      label {
        textarea {
          background: #fff;
          z-index: 5;
          border: none;
        }
      }
    }
    .c7n-pro-textarea-required.c7n-pro-textarea-required label {
      .c7n-pro-textarea {
        background: initial;
      }
    }

    .c7n-pro-select-box-required.c7n-pro-select-box-required:not(.c7n-pro-select-box-float-label):not(.c7n-pro-select-box-disabled)
      .c7n-pro-radio-inner,
    .c7n-pro-select-box-required.c7n-pro-select-box-required:not(.c7n-pro-select-box-float-label):not(.c7n-pro-select-box-disabled)
      .c7n-pro-checkbox-inner {
      background-color: ${d.requiredBgColor};
    }

    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple {
      .c7n-pro-input {
        min-height: 0;
      }
      &.c7n-pro-auto-complete-float-label > label > div,
      &.c7n-pro-input-float-label > label > div {
        height: auto;
        > ul {
          margin: 0;
        }
      }
      &.c7n-pro-input-number-border > label > div {
        border: none;
      }
      > label > div {
        height: auto;
        border: none;
        > ul {
          overflow: hidden;
          padding: 0;
          line-height: 0;
          height: auto;
          min-height: ${d.inputHeight - 2 * d.borderWidth}px;
          > li {
            background: ${sd.mutiSelectItemBg};
            height: ${d.inputHeight - 2 * d.borderWidth - 4}px;
            color: ${sd.mutiSelectItemFontColor};
            font-size: ${sd.mutiSelectItemFontSize}px;
            :last-of-type:not(&[class$="multiple-block"]) {
              background: none;
              > input {
                background: none;
              }
            }
            > input {
              height: 100%;
            }
            margin: 2px 4px;
            div,
            .icon {
              line-height: ${d.inputHeight - 2 * d.borderWidth - 4}px;
            }
            .icon {
              font-family: "icomoon";
              color: ${d.mutiSelectItemFontColor};
              font-size: ${d.mutiSelectItemFontSize}px;
              :before {
                content: "\\e5cd";
              }
            }
          }
        }
      }
    }
  `;
}

const inputCss = css`
  /* Input--pro 全局样式实现 */
  ${getInputStyle}
`;

export default createStyleComponent("input", inputCss);
