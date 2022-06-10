import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getOneStyle(type, props) {
  const d = getThemeData(props, 'input');
  const form = getThemeData(props, 'form');
  return css`
    .${type}-wrapper {
      height: auto;
      min-height: ${form.floatInputHeight}px;
      .${type}-suffix.${type}-suffix {
        border-left: none;
      }
      .c7n-pro-field-label-wrapper {
        .c7n-pro-field-label.c7n-pro-field-label {
          margin-top: -2px;
          height: ${form.floatTextHeight}px;
          line-height: ${form.floatTextHeight}px;
        }
      }
      .c7n-pro-color-picker-prefix {
        top: ${d.inputPaddingTop};
      }
      label {
        input {
          padding-top: ${d.inputPaddingTop};
          height: ${form.floatInputHeight - d.borderWidth * 2}px;
          position: static;
        }
      }
      .c7n-pro-field-label-wrapper.c7n-pro-field-label-wrapper {
        width: ${d.floatLabelWith};
        height: 0;
        top: ${d.floatLabelTop};
        left: ${d.floatLabelLeft};
        margin-left: ${d.floatLabelMarginLeft};
        border-top: ${d.floatLabelMarginTop};
      }
      ul {
        margin: 0;
        padding-top: 0.22rem;
        .${type}-multiple-block {
          margin: 0.01rem 0 0.01rem 0.06rem;
          padding: 0 0.04rem;

          .icon-cancel:before {
            color: ${d.floatMutipleItemColor};
            font-size: 0.14rem;
            content: '\\E5CD';
          }
        }
        li {
          input {
            padding: 0;
            height: 100%;
          }
        }
      }
    }
    .${type}-multiple {
      & > label > div {
        > ul {
          margin: 0;
          padding-top: 0.22rem;

          .c7n-pro-input-number-multiple-block,
          .c7n-pro-auto-complete-multiple-block,
          .c7n-pro-input-multiple-block {
            margin: 0.01rem 0 0.01rem 0.06rem;
            padding: 0 0.04rem;
          }
          > li {
            &:last-child {
              background-color: ${d.cursorBackgroundColor};
            }
            height: 100%;
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
// 设置 queryBar样式，不在form里面得float输入框
function setqueryBarStyle(type: any, inputHeight: any) {
  return css`
    .${type}-wrapper {
      .c7n-pro-field-label-wrapper {
        padding: 0;
        .c7n-pro-field-label {
          padding: 0;
          background: #fff;
        }
      }
    }
  `;
}
function getFloatStyle(props: any) {
  const d = getThemeData(props, 'input');
  const types = [
    'c7n-pro-color-picker',
    'c7n-pro-cascader',
    'c7n-pro-auto-complete',
    'c7n-pro-icon-picker',
    'c7n-pro-calendar-picker',
    'c7n-pro-input',
    'c7n-pro-password',
    'c7n-pro-textarea',
    'c7n-pro-input-number',
    'c7n-pro-select',
    'c7n-pro-tree-select',
  ];
  return css`
    .c7n-pro-field-label-vertical {
      &.c7n-pro-field-label-vertical + .c7n-pro-field-wrapper {
        padding: 0 0 0.08rem 0.05rem !important;
      }
    }
    .c7n-pro-form-float.c7n-pro-form-float {
      ${types.map((t) => getOneStyle(t, props))}
      .c7n-pro-select-box-wrapper {
        line-height: 0.28rem;
        padding-top: 0.22rem;
        .c7n-pro-field-label-wrapper {
          top: 0.2rem;
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
          margin-top: 0.15rem;
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
    }
    .c7n-pro-table-advanced-query-bar.c7n-pro-table-advanced-query-bar {
      ${types.map((t) => setqueryBarStyle(t, props))}
    }
  `;
}

// 设置 input 高度和formInput一致主要满足form中高度自定义
function setFromInputStyle(d: any, inputHeight: any) {
  return css`
    .c7n-pro-input-number-multiple.c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple.c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple.c7n-pro-input-multiple,
    .c7n-pro-auto-complete-wrapper.c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-wrapper.c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-wrapper.c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-wrapper.c7n-pro-input-wrapper,
    .c7n-pro-input-group-input.c7n-pro-input-group-input,
    .c7n-pro-password-wrapper.c7n-pro-password-wrapper,
    .c7n-pro-input-number-wrapper.c7n-pro-input-number-wrapper,
    .c7n-pro-tree-select-wrapper.c7n-pro-tree-select-wrapper,
    .c7n-pro-cascader-wrapper.c7n-pro-cascader-wrapper,
    .c7n-pro-color-picker-wrapper.c7n-pro-color-picker-wrapper,
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper {
      .c7n-pro-color-picker-prefix {
        top: ${d.inputPaddingTop};
      }
      label {
        input {
          padding-top: ${d.inputPaddingTop};
          height: ${inputHeight - d.borderWidth * 2}px;
          position: static;
        }
      }
    }
    .c7n-pro-table-advanced-query-bar.c7n-pro-table-advanced-query-bar
      .c7n-pro-table-filter-select-wrapper {
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
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper {
      label {
        input {
          position: static !important;
        }
      }
    }
    // 多选高度调整
    .c7n-pro-input-number-multiple.c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple.c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple.c7n-pro-input-multiple {
      .c7n-pro-input-number {
        min-height: 0.48rem;
      }
      & > label > div {
        > ul {
          margin: 0;
          padding-top: 0.22rem;

          .c7n-pro-input-number-multiple-block,
          .c7n-pro-auto-complete-multiple-block,
          .c7n-pro-input-multiple-block {
            margin: 0.01rem 0 0.01rem 0.06rem;
            padding: 0 0.04rem;
          }
          > li {
            &:last-child {
              background-color: ${d.cursorBackgroundColor};
            }
            height: 100%;
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

const allCss = (props: any) => {
  const { primary6, errorColor, validationColor } = getThemeData(props, 'common');
  const { labelAlign, labelFontSize, baseLabelFontColor, inputHeight } = getThemeData(
    props,
    'input'
  );
  return css`
    /* Form Pro 演示实现 */
    //校验文字颜色
    .c7n-pro-validation-message.c7n-pro-validation-message {
      color: ${validationColor};
    }
    //输入框样式
    .c7n-pro-field-wrapper.c7n-pro-field-wrapper {
      padding: 0.05rem;
    }
    //label样式
    .c7n-pro-field-label.c7n-pro-field-label {
      font-size: ${labelFontSize}px;
      color: ${baseLabelFontColor};
      line-height: ${inputHeight}px;
      font-size: 12px;
      padding: 0.05rem;
      .icon {
        margin-top: -3px;
        margin-left: 8px;
        :hover {
          color: ${primary6};
        }
      }
      :after {
        display: none !important;
      }
      &.c7n-pro-field-required:before {
        content: '*';
        color: ${errorColor};
        font-size: 12px;
      }
      &.c7n-pro-field-label-useColon:after {
        display: inline-block !important;
        width: 4px;
        color: ${baseLabelFontColor};
      }
    }
    //其余样式
    .c7n-pro-form-wrapper.c7n-pro-form-wrapper {
      tr {
        td {
          .c7n-pro-field-wrapper {
            line-height: 30px;
            .c7n-pro-validation-message {
              line-height: 20px;
            }
          }
          .c7n-pro-select-box-wrapper {
            line-height: 0.28rem;
          }
        }
      }
      .c7n-pro-output-required,
      input[required] {
        background-color: ${(p) => getThemeData(p, 'common', 'primary1')};
      }
    }
    .c7n-pro-field-label-vertical.c7n-pro-field-label-vertical {
      line-height: 0.2rem;
      padding: 0.04rem 0.05rem;
      padding-top: 0;
    }

    .c7n-pro-form-float.c7n-pro-form-float .c7n-pro-input-number-wrapper {
      .c7n-pro-input-number-inner-button.c7n-pro-input-number-inner-button > div {
        height: 100%;

        div {
          height: 50%;
          line-height: 1.5;
        }
      }
    }
    //浮动样式
    ${getFloatStyle}
  `;
};

export default allCss;
