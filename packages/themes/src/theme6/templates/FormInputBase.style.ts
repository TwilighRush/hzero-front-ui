import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getInputStyle(props: any) {
  const d = getThemeData(props, 'input');
  const { placeholderColor } = getThemeData(props, 'common');
  return css`
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${placeholderColor};
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${placeholderColor};
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${placeholderColor};
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${placeholderColor};
    }
    .c7n-input-label.c7n-input-label {
      color: ${placeholderColor};
    }
    .c7n-input-has-border.c7n-input-has-border.c7n-input-wrapper::before {
      border: 1px solid #d9e6f2;
      &:hover {
        border: 1px solid #d9e6f2;
      }
    }
    .c7n-form.c7n-form {
      // color
      [class$='-placeholder'][class$='-placeholder'] {
        color: ${placeholderColor};
      }
      // border
      [class$='-has-border'][class$='-has-border'].c7n-input-wrapper::before {
        border-radius: ${d.radius}px;
        border: 1px solid #d9e6f2;
      }
      [class$='-has-border'][class$='-has-border'].c7n-input-disabled {
        &::before {
          border: 1px solid ${d.borderColor} !important;
        }
      }
      [class$='-has-border'][class$='-has-border'].c7n-input-focused::before {
        border-radius: ${d.radius}px ${d.radius}px 0 0;
        /* border-bottom: ${d.focusBorderbottom}; */
      }
      [class$='-input-focused'][class$='-input-focused'] {
        [class$='-has-border']::before {
          border-radius: ${d.radius}px ${d.radius}px 0 0;
          /* border-bottom: ${d.focusBorderbottom}; */
        }
      }
      .has-error {
        [class$='-has-border'][class$='-has-border'].c7n-input-wrapper::before {
          border-color: ${d.errorColor};
        }
        [class$='-has-border'][class$='-has-border'].c7n-input-focused::before {
          /* border-bottom: ${d.errorFocusBorderbottom}; */
        }
        [class$='-input-focused'][class$='-input-focused'] {
          [class$='-has-border']::before {
            /* border-bottom: ${d.errorFocusBorderbottom}; */
          }
        }
      }
      // select height
      .c7n-select.c7n-select:not(.c7n-select-auto-complete) .c7n-select-selection__rendered,
      .c7n-input-wrapper:not(.c7n-calendar-range-picker) .c7n-input.c7n-input {
        padding-top: 0.2rem;
        height: 0.48rem;
        line-height: 0.46rem;
        position: static;
        color: #0f1358;

        .c7n-select-selection-selected-value {
          margin-top: -0.2rem;
        }
      }
      .c7n-calendar-range-picker.c7n-calendar-range-picker {
        .c7n-calendar-picker-input.c7n-calendar-picker-input {
          height: 0.48rem;
          .c7n-calendar-range-picker-input {
            padding-top: 0.2rem;
            height: 0.48rem;
            line-height: 0.46rem;
            position: static;
            color: #0f1358;
          }
        }
      }
      .c7n-select-selection__rendered.c7n-select-selection__rendered {
        &:hover {
          .c7n-select-clear {
            opacity: 1;
            width: 0.18rem;
            height: 0.18rem;
            background: transparent;
            z-index: 2;
          }
          .c7n-select-clear + .c7n-select-arrow {
            opacity: 0;
          }
        }
        .c7n-select-clear {
          opacity: 0;
          right: 0.06rem;
          .icon-close:before {
            content: '${d.floatCloseIcon}';
            color: ${d.PrefixSuffixColor};
          }
          &:hover {
            .icon-close:before {
              color: ${d.floatCloseIconHoverColor};
            }
          }
        }
      }

      .c7n-input-disabled.c7n-input-disabled {
        color: rgba(15, 19, 88, 0.25);
        .c7n-input-label {
          color: rgba(15, 19, 88, 0.25);
        }
      }
      .c7n-input-suffix,
      .c7n-input-prefix,
      .c7n-input-icon.c7n-input-icon {
        color: #abbccf;
        &:hover {
          color: ${d.floatCloseIconHoverColor};
        }
      }

      .c7n-input-number-handler-wrap.c7n-input-number-handler-wrap {
        height: 94%;
        background-color: transparent;
        width: 0.24rem;

        .c7n-input-number-handler {
          border-left: 1px solid #d9e6f2;
          height: 50%;
          color: #5365ea;

          .icon {
            top: 0.03rem;
            bottom: 0;
          }
        }
        .c7n-input-number-handler-up {
          border-bottom: 1px solid #d9e6f2;

          & .icon-baseline-arrow_drop_up:before {
            content: '\\e316';
          }
        }
        .c7n-input-number-handler-down {
          & .icon-baseline-arrow_drop_down:before {
            content: '\\E5CF';
          }
        }
      }
    }
  `;
}

function getInputNumberStyle() {
  return css``;
}

const inputStyle = css`
  /* Input--components 全局样式实现 */
  ${getInputStyle}
  ${getInputNumberStyle}
`;

export default inputStyle;
