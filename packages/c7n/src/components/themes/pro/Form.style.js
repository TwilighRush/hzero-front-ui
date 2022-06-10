import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getScaleStyle = (color) => css`
  transform: scale(0.9);
  color: ${color};
`;

function getVerticalStyle(d, c) {
  return css`
    .c7n-pro-form {
      table {
        width: 100%;
        tbody {
          width: 100%;
          .c7n-pro-field-label,
          .c7n-pro-field-wrapper {
            padding: 0;
          }
          .c7n-pro-field-label-vertical + .c7n-pro-field-wrapper {
            padding: 0;
          }
        }
      }
      &.c7n-pro-form-vertical {
        margin-bottom: 16px;
        tr {
          width: 100%;
          td {
            /* padding: 0 0.05rem; */
            padding: 8px 5px;
            flex: 0 0 100%;
          }
          > td:not(.c7n-pro-field-label) {
            flex: 1;
          }

          td.c7n-pro-field-label {
            text-align: left;
            padding: 0;
            label {
              text-align: left;
              height: ${d.inputHeight}px;
              line-height: ${d.inputHeight}px;
            }
          }
          .c7n-pro-field-wrapper {
            padding: 0;
          }
          .c7n-pro-field-label label,
          .c7n-pro-field-label-vertical {
            line-height: ${d.inputHeight}px;
            transition: all 0.5s;
            transform-origin: left bottom;
          }
          td:focus-within {
            .c7n-pro-field-label label,
            .c7n-pro-field-label-vertical {
              ${d.labelScale ? getScaleStyle(c.primary) : ""};
            }
          }
        }
      }
    }
  `;
}

function getHorizontalStyle(d) {
  return css`
    .c7n-pro-form {
      table {
        width: 100%;
        tbody {
          width: 100%;
          tr {
            width: 100%;
            // margin-top: 0.08rem;
            > td {
              // padding: 0 0 16px 0;
            }
          }
          .c7n-pro-field-label {
            text-align: right;
            box-sizing: border-box;
            padding-right: 4px;
            line-height: ${d.inputHeight}px;
            &.c7n-pro-field-label-useColon {
              padding-right: 8px;
            }
            /* 去除 Output 混用情况下label的左右 padding */
            &.c7n-pro-field-label-output-mix {
              label {
                padding-left: 0;
                padding-right: 0;
              }
            }
          }
          .c7n-pro-field-label,
          .c7n-pro-field-wrapper {
            padding: 0;
          }
        }
      }
      &.c7n-pro-form-horizontal {
        table tbody tr {
          td {
            // padding-bottom: 16px;
            text-align: right;
            &.c7n-pro-field-label {
              &.c7n-pro-field-label-left {
                > label {
                  text-align: left;
                  transition: all 0.5s;
                }
              }
              &.c7n-pro-field-label-right {
                > label {
                  text-align: right;
                  transition: all 0.5s;
                }
              }
            }
          }
        }
      }
    }
  `;
}

function getFormStyle(props) {
  const d = getThemeData(props, "input");
  const c = getThemeData(props, "common");
  return d.layout === "horizontal"
    ? getHorizontalStyle(d)
    : getVerticalStyle(d, c);
}

function getFloatStyle(props) {
  const d = getThemeData(props, "input");
  return css`
    ${d.formInputOtherHeight
      ? setFromOtherInputStyle(d, d.formInputOtherHeight)
      : ""}
    .c7n-pro-form.c7n-pro-form-float {
      ${setFromInputStyle(d, d.formInputHeight)}
      margin: 0;
      [class*="-wrapper"][class*="-focused"] {
        ::before {
          border: none;
        }
      }
      table tbody tr {
        margin-bottom: 8px;
      }
      .c7n-pro-input-number-multiple,
      .c7n-pro-auto-complete-multiple,
      .c7n-pro-input-multiple,
      .c7n-pro-auto-complete-wrapper,
      .c7n-pro-icon-picker-wrapper,
      .c7n-pro-calendar-picker-wrapper,
      .c7n-pro-input-wrapper,
      .c7n-pro-password-wrapper,
      .c7n-pro-input-number-wrapper,
      .c7n-pro-select-wrapper {
        .c7n-pro-field-label-wrapper.c7n-pro-field-label-wrapper {
          width: ${d.floatLabelWith};
          top: ${d.floatLabelTop};
          left: ${d.floatLabelLeft};
          margin-left: ${d.floatLabelMarginLeft};
          border-top: ${d.floatLabelMarginTop};
        }
      }
      .c7n-pro-input-number-wrapper {
        .c7n-pro-input-number-inner-button {
          div {
            height: ${d.numberInputButtonHeight};
            .icon {
              &:before {
                vertical-align: ${d.floatNumberInputButtonIconVertical};
              }
            }
          }
        }
      }
      .c7n-pro-input-prefix-button.c7n-pro-input-float-label {
        .c7n-pro-field-label-wrapper {
          left: ${d.floatPrefixLeft};
        }
        .c7n-pro-input-prefix {
          .icon {
            position: ${d.floatPrefixPosition};
            top: ${d.floatPrefixTop};
            transform: ${d.floatPrefixTransform};
          }
        }
      }
      .c7n-pro-textarea-wrapper {
        padding: ${d.floatTextAreaPadding};
        position: ${d.floatTextAreaPosition};
        .c7n-pro-field-label-wrapper {
          top: ${d.floatTextAreaTop};
        }
        label {
          textarea {
            padding-top: ${d.textAndMutiplePaddingTop};
          }
        }
        &.c7n-pro-textarea-invalid {
          label {
            textarea {
              background-color: ${d.errorAllBgColor};
            }
          }
          &,
          .c7n-pro-select-focused {
            :before {
              border-bottom: ${d.errorFocusBorderbottom} !important;
            }
          }
        }
      }
      .c7n-pro-input-group-help {
        background-color: ${d.groupHelpBackgroundColor};
        color: ${d.groupHelpColor};
      }
      .c7n-pro-field-label {
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 0.08rem;
        line-height: normal;
      }
      .c7n-pro-field-wrapper {
        margin: ${d.floatMargin || "0 8px 0 0"};
        .c7n-pro-validation-message {
          color: ${d.errorTitleColor};
        }
      }
    }
  `;
}

const getOutputStyle = (props) => {
  const { inputHeight, labelFontColor, fontSize, inputFontWeight } =
    getThemeData(props, "input");
  const { primary4 } = getThemeData(props, "common");
  const { mutiSelectItemBg } = getThemeData(props, "select");
  return css`
    .c7n-pro-form {
      .c7n-pro-field-label {
        color: ${labelFontColor};
      }
      .c7n-pro-output {
        font-size: ${fontSize}px;
        line-height: ${inputHeight}px;
        font-weight: ${inputFontWeight};
        color: #333;
        .c7n-pro-output-multiple-block {
          background-color: ${mutiSelectItemBg || primary4};
          color: #333;
        }
      }
    }
  `;
};

function setFromOtherInputStyle(d, inputHeight) {
  return css`
    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple,
    .c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-wrapper,
    .c7n-pro-password-wrapper,
    .c7n-pro-input-number-wrapper,
    .c7n-pro-select-wrapper {
      label {
        input {
          height: ${inputHeight - d.borderWidth * 2}px;
        }
      }
    }
  `;
}

// 设置 input 高度和formInput一致主要满足form中高度自定义
function setFromInputStyle(d, inputHeight) {
  return css`
    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple,
    .c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-wrapper,
    .c7n-pro-input-group-input,
    .c7n-pro-password-wrapper,
    .c7n-pro-input-number-wrapper,
    .c7n-pro-select-wrapper {
      label {
        input {
          padding-top: ${d.inputPaddingTop};
          height: ${inputHeight - d.borderWidth * 2}px;
        }
      }
    }
    .c7n-pro-select-wrapper {
      label {
        input {
          padding-left: ${d.selectPaddingLeft};
        }
      }
    }
    // 多选高度调整
    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple {
      > label > div {
        > ul {
          padding-top: ${d.textAndMutiplePaddingTop};
          padding-left: ${d.mutiplePaddingLeft};
          min-height: ${inputHeight - 2 * d.borderWidth}px;
          > li {
            &:last-child {
              background-color: ${d.cursorBackgroundColor};
            }
            height: ${(inputHeight - 2 * d.borderWidth) / 2 - 4}px;
            background-color: ${d.floatMutipleItemBackground};
            border-radius: ${d.mutipleBorderRadius};
            color: ${d.floatMutipleItemColor};
            input {
              padding-top: ${d.mutipleInputPaddingTop};
              height: ${(inputHeight - d.borderWidth * 2) / 2}px;
            }
            div,
            .icon {
              color: ${d.mutipleIconColor};
              line-height: ${(inputHeight - 2 * d.borderWidth) / 2 - 4}px;
            }
          }
        }
      }
      &.c7n-pro-input-invalid {
        > label > div > ul {
          > li {
            &:last-child {
              background-color: ${d.cursorBackgroundColor};
            }
            background-color: ${d.mutipleErrorBgColor};
            color: ${d.errorFontColor};
            div,
            .icon {
              color: ${d.errorFontColor};
            }
          }
        }
      }
    }
  `;
}

/* 栅栏布局的样式 */
const gridFormStyle = css`
  .c7n-pro-form-wrapper {
    .c7n-pro-field-row,
    .c7n-pro-field-wrapper {
      /* 去除 c7n-ui1.5.2版本新增 separateSpacing 属性导致的相关样式影响 */
      label.c7n-pro-field-label {
        padding: 8px 0;
      }
      .c7n-pro-field-col-control .c7n-pro-field-wrapper {
        padding: 8px;
      }
    }
  }
`;

const allCss = css`
  /* Form Pro 演示实现 */
  .c7n-pro-field-label.c7n-pro-field-label.c7n-pro-field-label {
    text-align: ${(p) => getThemeData(p, "input", "labelAlign")} !important;
    /* 去除 c7n-ui1.5.2版本新增 separateSpacing 属性导致的相关样式影响 */
    > label {
      padding: 8px 0;
    }
    + td {
      padding: 0;
      .c7n-pro-field-wrapper {
        padding: 8px;
      }
    }
  }
  .c7n-pro-field-label,
  .c7n-pro-field-label label {
    font-size: ${(p) => getThemeData(p, "input", "labelFontSize")}px;
  }
  .c7n-pro-field-wrapper {
    text-align: left;
    line-height: ${(p) => getThemeData(p, "input", "inputHeight")}px;
  }
  .c7n-pro-form .c7n-pro-field-label::after {
    margin-right: 0.02rem;
    margin-left: 0;
  }
  .c7n-pro-form .c7n-pro-field-label.c7n-pro-field-label-useColon::after {
    width: 4px;
  }
  /* 修复在 Firefox 下 label 变成省略号 */
  .c7n-pro-form {
    .c7n-pro-field-label.c7n-pro-field-label-useColon:after,
    .c7n-pro-field-required.c7n-pro-field-label-useColon:after {
      display: inline;
    }
  }
  /* 修复 NumberField suffix prefix偏移问题*/
  .c7n-pro-input-number-wrapper {
    .c7n-pro-input-number-prefix,
    .c7n-pro-input-number-suffix {
      line-height: 0.2rem;
    }
  }
  ${getFormStyle}
  ${getFloatStyle}
  ${getOutputStyle}
  ${gridFormStyle}
`;

export default createStyleComponent("form", allCss);
