import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const getScaleStyle = (color: any) => css`
  transform: scale(0.9);
  color: ${color};
`;

function getVerticalStyle(d: any, c: any) {
  return css``;
}

function getHorizontalStyle(d: any) {
  return css``;
}

function getFormStyle(props: any) {
  const d = getThemeData(props, 'input');
  const c = getThemeData(props, 'common');
  return d.layout === 'horizontal' ? getHorizontalStyle(d) : getVerticalStyle(d, c);
}

function getFloatStyle(props: any) {
  const d = getThemeData(props, 'input');
  return css`
    .c7n-pro-tree-select-range {
      label {
        .c7n-pro-tree-select {
          border: none;
        }
      }
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${d.placeholderColor};
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${d.placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${d.placeholderColor};
    }
    ${d.formInputOtherHeight ? setFromOtherInputStyle(d, d.formInputOtherHeight) : ''}
    .c7n-pro-form-float.c7n-pro-form-float {
      ${setFromInputStyle(d, d.formInputHeight)}
      table tbody tr {
        margin-bottom: 8px;
      }
      // 修复flaot Form下在mutiple+range属性下的样式问题
      .c7n-pro-input-multiple .c7n-pro-input-range-text,
      .c7n-pro-input-number-multiple .c7n-pro-input-number-range-text,
      .c7n-pro-password-multiple .c7n-pro-password-range-text,
      .c7n-pro-cascader-multiple .c7n-pro-cascader-range-text,
      .c7n-pro-color-picker-multiple .c7n-pro-color-picker-range-text,
      .c7n-pro-calendar-picker-multiple .c7n-pro-calendar-picker-range-text,
      .c7n-pro-select-multiple .c7n-pro-select-range-text,
      .c7n-pro-auto-complete-multiple .c7n-pro-auto-complete,
      .c7n-pro-tree-select-multiple .c7n-pro-tree-select-range-text {
        min-height: ${d.floatLableMutipleRangeHeight};
        height: auto;
        input {
          padding-top: 0;
          height: ${d.floatLableMutipleRangeHeight};
        }
        span {
          line-height: ${d.floatLableMutipleRangeHeight};
        }
      }
      .c7n-pro-color-picker-multiple.c7n-pro-color-picker-range {
        .c7n-pro-color-picker {
          ul {
            padding-top: 0.14rem;
          }
        }
      }
      .c7n-pro-transfer-body-search-wrapper label input {
        height: 0.3rem;
        padding-top: 0;
      }
      .c7n-pro-input,
      .c7n-pro-input-number,
      .c7n-pro-password,
      .c7n-pro-auto-complete,
      .c7n-pro-calendar-picker,
      .c7n-pro-color-picker,
      .c7n-pro-cascader,
      .c7n-pro-tree-select {
        min-height: 48px;
        height: auto;
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
      .c7n-pro-tree-select-wrapper,
      .c7n-pro-select-wrapper,
      .c7n-pro-cascader-wrapper,
      .c7n-pro-color-picker-wrapper {
        .c7n-pro-field-label-wrapper.c7n-pro-field-label-wrapper {
          width: ${d.floatLabelWith};
          height: 0;
          top: ${d.floatLabelTop};
          left: ${d.floatLabelLeft};
          margin-left: ${d.floatLabelMarginLeft};
          border-top: ${d.floatLabelMarginTop};
        }
      }
      .c7n-pro-select-box-wrapper {
        line-height: 0.28rem;
        padding-top: 0.22rem;
        .c7n-pro-field-label-wrapper {
          top: 0.2rem;
          // left: -0.05rem;
          // .c7n-pro-field-label {
          //
          // }
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
            margin-top: 0.23rem;
          }
        }
        &.c7n-pro-textarea-invalid {
          label {
            background-color: ${d.errorAllBgColor};
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
        color: ${d.baseLabelFontColor};
        font-weight: 400;
      }
      .c7n-pro-field-wrapper {
        margin: ${d.floatMargin || '0 8px 0 0'};
        .c7n-pro-range-track {
          /* margin-top: 0.15rem; */
        }
        .c7n-pro-validation-message {
          color: ${d.errorTitleColor};
        }
        .c7n-pro-select-box-float-label {
          .c7n-pro-input-float-label {
            .c7n-pro-input {
              padding-top: 0;
            }
          }
        }
      }
      .c7n-pro-input-number-multiple,
      .c7n-pro-auto-complete-multiple,
      .c7n-pro-input-multiple,
      .c7n-pro-calendar-picker-multiple .c7n-pro-calendar-picker,
      .c7n-pro-select-multiple,
      .c7n-pro-tree-select-multiple,
      .c7n-pro-select,
      .c7n-pro-color-picker-multiple,
      .c7n-pro-password-multiple {
        height: auto;
        min-height: 0.48rem;
        ul {
          margin: 0;
          padding-top: 0.22rem;
          padding-bottom: 0.04rem;
          .c7n-pro-calendar-picker-multiple-block,
          .c7n-pro-tree-select-multiple-block,
          .c7n-pro-input-number-multiple-block,
          .c7n-pro-auto-complete-multiple-block,
          .c7n-pro-input-multiple-block .c7n-pro-select-multiple-block {
            margin: 0.01rem 0 0.01rem 0.06rem;
            padding: 0 0.04rem;

            .icon-cancel:before {
              color: ${d.floatMutipleItemColor};
              font-size: 0.14rem;
              content: '\\E5CD';
            }
          }
          li {
            // height: 100%;
            // margin: 0;

            input {
              padding: 0;
              height: 100%;
            }
          }
        }
      }
    }
  `;
}

// const getOutputStyle = (props: any) => {
//   const { fontColor, baseLabelFontColor, fontSize } = getThemeData(props, 'input');
//   return css`
//     .c7n-pro-form {
//       .c7n-pro-field-label-output {
//         color: ${baseLabelFontColor};
//       }
//       .c7n-pro-output {
//         font-size: ${fontSize}px;
//         color: ${fontColor};
//       }
//     }
//   `;
// };

function setFromOtherInputStyle(d: any, inputHeight: any) {
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
          // height: ${inputHeight - d.borderWidth * 2}px;
        }
      }
    }
  `;
}

// 设置 input 高度和formInput一致主要满足form中高度自定义
function setFromInputStyle(d: any, inputHeight: any) {
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
    .c7n-pro-tree-select-wrapper,
    .c7n-pro-select-wrapper,
    .c7n-pro-cascader-wrapper,
    .c7n-pro-color-picker-wrapper {
      label {
        input {
          padding-top: ${d.inputPaddingTop};
          height: ${inputHeight - d.borderWidth * 2}px;
          position: static;
        }
        .c7n-pro-color-picker-prefix {
          top: ${d.inputPaddingTop};
        }
      }
    }
    .c7n-pro-table-advanced-query-bar .c7n-pro-table-filter-select-wrapper {
      .c7n-pro-select-wrapper,
      .c7n-pro-tree-select-wrapper,
      .c7n-pro-input-number-multiple,
      .c7n-pro-auto-complete-multiple,
      .c7n-pro-input-multiple,
      .c7n-pro-auto-complete-wrapper,
      .c7n-pro-icon-picker-wrapper,
      .c7n-pro-calendar-picker-wrapper,
      .c7n-pro-input-wrapper,
      .c7n-pro-input-group-input,
      .c7n-pro-password-wrapper,
      .c7n-pro-input-number-wrapper {
        .c7n-pro-table-filter-select {
          label {
            input {
              padding: 0.01rem 0 !important;
              height: initial !important;
            }
          }
        }
      }
    }
    .c7n-pro-select-wrapper {
      label {
        input {
          position: static;
        }
      }
    }
    // 多选高度调整
    .c7n-pro-input-number-multiple,
    .c7n-pro-password-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple {
      .c7n-pro-input-number {
        height: auto;
        min-height: 0.48rem;
      }
      & > label > div {
        > ul {
          margin: 0;
          padding-top: 0.22rem;

          .c7n-pro-input-number-multiple-block,
          .c7n-pro-auto-complete-multiple-block,
          .c7n-pro-password-multiple-block,
          .c7n-pro-input-multiple-block {
            margin: 0.01rem 0 0.02rem 0.06rem;
            padding: 0 0.04rem;
          }
          > li {
            &:last-child {
              background-color: ${d.cursorBackgroundColor};
            }
            height: 20px;
            margin: 0;
            input {
              padding: 0;
              height: 100%;
            }
            div,
            .icon {
              color: ${d.mutipleIconColor};
              line-height: 0.21rem;
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

const allCss = css`
  /* Form Pro 演示实现 */
  .c7n-pro-field-label,
  .c7n-pro-field-label label {
    font-size: ${(p) => getThemeData(p, 'input', 'labelFontSize')}px;
    color: ${(p) => getThemeData(p, 'input', 'baseLabelFontColor')};
  }

  .c7n-pro-field-label.c7n-pro-field-label-useColon::after {
    color: initial !important;
  }
  .c7n-pro-form .c7n-pro-field-label::after {
    margin-right: 0.02rem;
    margin-left: 0.04rem;
    color: #fd6868;
  }
  .c7n-pro-form-float .c7n-pro-input-number-wrapper {
    .c7n-pro-input-number-inner-button.c7n-pro-input-number-inner-button > div {
      height: 100%;

      div {
        height: 50%;
      }
    }
  }
  .c7n-pro-form .c7n-pro-field-label.c7n-pro-field-label-useColon::after {
    width: 4px;
  }

  .c7n-pro-form-horizontal {
    /* 去除 Output 混用情况下label的左右 padding */
    .c7n-pro-field-label.c7n-pro-field-label-output-mix {
      label {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .c7n-pro-field-wrapper {
      padding: 0;
    }
    .c7n-pro-field-col-control {
      .c7n-pro-field-wrapper {
        padding: 0.1rem 0.05rem;
      }
    }
    .c7n-pro-field-label + td {
      .c7n-pro-field-wrapper:not(.c7n-pro-field-output:not(.c7n-pro-field-output-mix)) {
        padding: 0.1rem 0.05rem;
      }
    }
    /* 解决 horizontal下 value行高比label低 导致value相对label偏上的问题 */
    .c7n-pro-field-wrapper.c7n-pro-field-output:not(.c7n-pro-field-output-mix) {
      .c7n-pro-output-wrapper.c7n-pro-field.c7n-pro-output {
        line-height: 0.3rem;
      }
    }
  }
  .c7n-pro-form-vertical {
    td > :first-child {
      &.c7n-pro-field-wrapper {
        padding: 0;
      }
    }
  }
  .c7n-pro-form-placeholder,
  .c7n-pro-form-none {
    .c7n-pro-field-wrapper .c7n-pro-field-wrapper {
      padding: 0;
    }
  }
  ${getFormStyle}
  ${getFloatStyle}
`;

export default allCss;
