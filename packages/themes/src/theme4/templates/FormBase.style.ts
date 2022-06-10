import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getFormStyle(props: any) {
  const d = getThemeData(props, 'input');
  const c = getThemeData(props, 'formColor');
  return css`
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${c.placeholderColor};
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${c.placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${c.placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${c.placeholderColor};
    }
    .c7n-form.c7n-form {
      .c7n-cascader-picker-label {
        margin-top: 0;
      }
      .c7n-form-item.c7n-form-item {
        padding-top: 0;
      }
      .c7n-select-has-value,
      .c7n-input-has-value,
      .c7n-select-focused,
      .c7n-input-focused {
        [class$='-label'][class$='-label'] {
          color: #4a5c90;
        }
      }
      [class$='-label-wrapper'] {
        top: ${d.floatLabelTop};
        left: ${d.floatLabelLeft};
        margin-left: ${d.floatLabelMarginLeft};
        border-top: ${d.floatLabelMarginTop};

        [class$='-label'] {
          line-height: normal;
          color: #9eadbe;
        }
      }
    }
  `;
}

export default getFormStyle;
