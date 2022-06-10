import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
function getOneStyle(type, props) {
  const { fontSize, lineHeight } = getThemeData(props, 'input');
  const { floatInputHeight } = getThemeData(props, 'form');
  const { titleColor3 } = getThemeData(props, 'common');
  return css`
    .${type}-wrapper {
      .${type} {
        height: ${floatInputHeight}px;
        min-height: ${floatInputHeight}px;
        ul {
          margin: 0;
          padding: 2px;
        }
      }
      .c7n-pro-field-label-wrapper {
        border: none;
        .c7n-pro-field-label {
          font-size: ${fontSize}px;
          padding: 0px;
          line-height: 16px;
          background-color: #fff;
          color: ${titleColor3};
        }
      }
      &.${type}-empty:not([class*='-focused']) {
        .c7n-pro-field-label-wrapper {
          .c7n-pro-field-label {
            line-height: ${floatInputHeight}px;
            background-color: transparent;
          }
        }
      }
      .${type}-focused {
        .c7n-pro-field-label {
          color: ${titleColor3};
        }
      }
      &.${type}-multiple {
        &.${type}-float-label {
          .${type}-multiple-block .icon {
            vertical-align: middle;
          }
          > label > div {
            height: auto;
          }
        }
        .${type} {
          ul {
            padding: ${-(lineHeight - 22)}px 0;
          }
        }
      }
      &.${type}-disabled {
        .c7n-pro-field-label-wrapper {
          .c7n-pro-field-label {
            background: transparent;
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
  const { numberInputButtonHeight, floatNumberInputButtonIconVertical } = getThemeData(
    props,
    'input'
  );
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
    .c7n-pro-table-advanced-query-bar.c7n-pro-table-advanced-query-bar {
      ${types.map((t) => setqueryBarStyle(t, props))}
    }
    .c7n-pro-form-float.c7n-pro-form-float {
      ${types.map((t) => getOneStyle(t, props))}
      .c7n-pro-field-wrapper {
        margin: 8px;
        padding: 0;
        padding-top: 4px;
        > .c7n-pro-field-wrapper {
          margin: 0;
          padding: 0;
        }
      }
      .c7n-pro-input-number-wrapper.c7n-pro-input-number-wrapper {
        min-height: auto;
        .c7n-pro-input-number-inner-button.c7n-pro-input-number-inner-button > div {
          height: 100%;
          div {
            height: 50%;
          }
        }
        .c7n-pro-input-number-inner-button {
          height: 100%;
          > div {
            height: ${numberInputButtonHeight};
            .icon {
              line-height: 0.7;
              &:before {
                vertical-align: ${floatNumberInputButtonIconVertical};
              }
            }
          }
        }
      }
    }
  `;
}
const allCss = (props: any) => {
  const { primary6, errorColor, titleColor3 } = getThemeData(props, 'common');
  const { fontSize, baseLabelFontColor, inputHeight, lineHeight } = getThemeData(props, 'input');
  return css`
    //校验样式
    .c7n-pro-validation-message.c7n-pro-validation-message {
      color: ${errorColor};
      line-height: 20px;
    }
    .c7n-pro-field-help.c7n-pro-field-help {
      line-height: 20px;
    }
    //label样式
    .c7n-pro-field-label.c7n-pro-field-label.c7n-pro-field-label {
      font-size: ${fontSize}px;
      color: ${titleColor3};
      line-height: ${inputHeight}px;
      /* 去除 c7n-ui1.5.2版本新增 separateSpacing 属性导致的相关样式影响 */
      padding: 0;
      > label {
        padding: 4px;
      }
      + td {
        padding: 0;
        .c7n-pro-field-wrapper {
          padding: 4px;
        }
      }
      + .icon {
        color: ${titleColor3};
      }
      // 校验样式
      &.c7n-pro-field-required.c7n-pro-field-required {
        label:after,
        :after {
          color: ${errorColor};
        }
        :before {
          color: ${errorColor};
        }
        &.c7n-pro-field-label-useColon {
          label:after,
          :after {
            color: ${baseLabelFontColor};
            width: 4px;
            margin-top: 0;
          }
        }
        &.c7n-pro-field-label-useColon {
          label > span:before,
          :before {
            color: ${errorColor};
          }
        }
      }
      //label图标hover样式
      .icon {
        :hover {
          color: ${primary6};
        }
        top: 1px;
        margin-left: 4px;
      }
      //垂直布局
      &.c7n-pro-field-label-vertical {
        padding-top: 0;
        padding-bottom: 4px;
        line-height: ${lineHeight}px;
      }
    }
    .c7n-pro-form-placeholder,
    .c7n-pro-form-none {
      .c7n-pro-field-wrapper.c7n-pro-field-wrapper {
        padding: 4px;
        .c7n-pro-field-wrapper {
          padding: 0;
        }
      }
    }
    //输入框样式
    .c7n-pro-field-wrapper.c7n-pro-field-wrapper.c7n-pro-field-wrapper {
      padding: 0;
    }
    .c7n-pro-field-row.c7n-pro-field-row .c7n-pro-field-label,
    .c7n-pro-field-label.c7n-pro-field-label label > span,
    .c7n-pro-field-label-vertical.c7n-pro-field-label-vertical {
      line-height: ${inputHeight}px;
    }
    .c7n-pro-form-float-label {
      .c7n-pro-field-wrapper.c7n-pro-field-wrapper {
        line-height: 32px;
      }
      .c7n-pro-textarea-wrapper.c7n-pro-textarea-wrapper {
        label {
          .c7n-pro-textarea.c7n-pro-textarea {
            padding: 5px 8px;
          }
        }
      }
    }
    //其余form样式
    .c7n-pro-form.c7n-pro-form {
      &.c7n-pro-form-vertical {
        .c7n-pro-field-wrapper.c7n-pro-field-wrapper {
          padding-bottom: 8px;
          padding-left: 4px;
          padding-right: 4px;
          /* 垂直下边距问题 */
          > .c7n-pro-field-wrapper {
            padding: 0px 4px;
          }
        }
      }
    }
    /* 栅栏布局的样式 */
    .c7n-pro-form-wrapper {
      .c7n-pro-field-row,
      .c7n-pro-field-wrapper {
        /* 去除 c7n-ui1.5.2版本新增 separateSpacing 属性导致的相关样式影响 */
        label.c7n-pro-field-label {
          padding: 4px;
        }
        .c7n-pro-field-col-control {
          padding: 4px;
        }
      }
    }
    ${getFloatStyle}
  `;
};

export default allCss;
