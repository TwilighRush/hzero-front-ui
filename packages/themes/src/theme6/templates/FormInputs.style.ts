import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

function getShadowStyle(d) {
  return css`
    :before {
      content: '';
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
  let style: any = '';
  if (border === 'all') {
    style = css`
      border: ${borderWidth}px solid ${borderColor};
    `;
  } else if (border && border.length) {
    const borders = border
      .map((v) => `border-${v}: ${borderWidth}px solid ${borderColor};`)
      .join(' ');
    style = css`
      ${borders}
    `;
  }
  return style;
};

function getOneStyle(type, props) {
  const sd = getThemeData(props, 'select');
  const d = getThemeData(props, 'input');
  const shadowStyle = getShadowStyle(d);
  const border = getBorder(d);
  const common = getThemeData(props, 'common');
  const selector = `${type}-wrapper`;
  return css`
    .${type}-multiple.${type}-multiple .${type} {
      min-height: initial;
    }
    .${selector}.${selector} {
      padding: 0;
      position: relative;
      line-height: 0;
      border-radius: ${d.radius}px;
      font-size: ${d.fontSize}px;
      overflow: visible;
      ${border};
      ${shadowStyle};
      :hover,
      :active {
        border-color: ${common.primary5};
      }
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
            background: ${d.labelBackGround || '#fff'};
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
        .c7n-pro-tree-select-suffix,
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
            content: '';
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
      }
      &.${type}-focused {
        border-color: ${common.primary6};
        box-shadow: 0 0 0 2px ${common.primary2};
        label {
          :before,
          :after {
            display: block;
          }
        }
      }
      &.${type}-required {
        background: #fff;
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
        &[class*='focused']:before {
          opacity: 0;
        }
        .${type}-clear-button, .${type}-inner-button {
          background: transparent !important;
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
      && {
        .c7n-pro-auto-complete,
        input {
          border: none;
        }
      }
    }
    // 消除range重影
    .${type}-range.${type}-range .${type} {
      border: none;
    }
    .${type}-group-wrapper.${type}-group-wrapper {
      line-height: 0;
      .${type}-group-before {
        ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
        border-right:none;
        padding: ${d.groupAddonPadding || '0 4px'};
        background-color: ${d.groupAddonBackground || 'initial'};
        border-bottom-left-radius: ${d.radius}px;
        border-top-left-radius: ${d.radius}px;
      }
      .${type}-group-after, .${type}-group-help {
        ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
        border-left: none;
        padding: ${d.groupAddonPadding || '0 4px'};
        background-color: ${d.groupAddonBackground || 'transparent'};
        border-bottom-right-radius: ${d.radius}px;
        border-top-right-radius: ${d.radius}px;
      }
      .${type}-group {
        /* [class*='-wrapper'] {
          border-radius: 0px;
        } */
        [class$='-group-before'] {
          + .${type}-group-input {
            .${selector} {
              border-bottom-left-radius: 0;
              border-top-left-radius: 0;
            }
          }
        }
        .${type}-group-input:not(:last-child) {
          .${selector} {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          }
        }
      }
    }
    //去除边框
    .${type}-border.${type}-border {
      .${type}, .${type}-float-label:before {
        border: none;
      }
    }
    //clear按钮
    .${type}-inner-button.${type}-inner-button, .${type}-clear-button.${type}-clear-button {
      display: flex;
      align-items: center;
      justify-content: center;
      .icon-close:before {
        content: '${d.floatCloseIcon}';
        color: ${d.PrefixSuffixColor};
      }
    }
    .${type}-empty.${type}-empty {
      .${type}-inner-button, .${type}-clear-button {
        .icon-close:before {
          display: none;
        }
      }
    }
    //多选样式
    .${type}-multiple.${type}-multiple {
      .${type} {
        min-height: initial;
        ul {
          padding: 0;
          > li {
            i.icon-cancel {
              margin-top: -2px;
            }
          }
        }
      }
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
      &.${type}-readonly {
        > label > div {
          > ul {
            > span {
              background: ${sd.mutiSelectItemBg};
              height: ${d.inputHeight - 2 * d.borderWidth - 8}px;
              line-height: ${d.inputHeight - 2 * d.borderWidth - 8}px;
              color: ${sd.mutiSelectItemFontColor};
              font-size: ${sd.mutiSelectItemFontSize}px;
              margin: 4px;
            }
          }
        }
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
            height: ${d.inputHeight - 2 * d.borderWidth - 8}px;
            line-height: ${d.inputHeight - 2 * d.borderWidth - 8}px;
            color: ${sd.mutiSelectItemFontColor};
            font-size: ${sd.mutiSelectItemFontSize}px;
            margin: 4px;
            :last-of-type:not(&[class$='multiple-block']) {
              background: none;
              > input {
                background: none;
              }
            }
            > input {
              height: 100%;
            }
            div,
            .icon {
              line-height: ${d.inputHeight - 2 * d.borderWidth - 8}px;
            }
            div {
              max-width: 100%;
            }
            .icon {
              color: ${sd.mutiSelectIconFontColor};
              font-size: ${sd.mutiSelectItemFontSize}px;
              :before {
                content: '\\e5cd';
              }
            }
          }
        }
      }
    }
  `;
}

function getInputStyle(props) {
  const sd = getThemeData(props, 'select');
  const d = getThemeData(props, 'input');
  const fc = getThemeData(props, 'formColor');
  const common = getThemeData(props, 'common');
  const { primary } = common;
  const types = [
    'c7n-pro-color-picker',
    'c7n-pro-cascader',
    // 'c7n-pro-input-number-multiple',
    // 'c7n-pro-auto-complete-multiple',
    // 'c7n-pro-input-multiple',
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
    ${types.map((t) => getOneStyle(t, props))}
    //placeholder样式
     input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${common.placeholderColor} !important;
      opacity: 1;
      font-size: 14px;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${common.placeholderColor} !important;
      opacity: 1;
      font-size: 14px;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${common.placeholderColor} !important;
      opacity: 1;
      font-size: 14px;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${common.placeholderColor} !important;
      opacity: 1;
      font-size: 14px;
    }

    //自定义的placeholder样式
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${common.placeholderColor} !important;
      height: ${d.height}px;
    }

    /* 范围钱币输入行高 */
    .c7n-pro-input-number-range-start.c7n-pro-input-number-range-start,
    .c7n-pro-input-number-range-end.c7n-pro-input-number-range-end,
    .c7n-pro-input-number-range-input.c7n-pro-input-number-range-input {
      line-height: inherit;
    }
    //Lov的loading
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper {
      .c7n-pro-select-suffix {
        .c7n-spin.c7n-spin-spinning {
          .c7n-spin-dot {
            line-height: ${d.inputHeight - d.borderWidth * 2}px;
            width: 0.2rem;
            height: ${d.inputHeight}px;
          }
        }
      }
    }

    .c7n-pro-input.c7n-pro-input {
      border-radius: 0.02rem;
    }
    //数字输入框样式
    .c7n-pro-input-number-wrapper.c7n-pro-input-number-wrapper {
      .c7n-pro-input-number-range-input {
        color: gray;
      }
      .c7n-pro-input-number {
        text-align: left;
      }
      .c7n-pro-input-number-inner-button {
        margin: ${d.numberInputButtonMargin};
        height: ${d.numberInputButtonHeight};
        width: ${d.numberInputButtonWidth}px;
        top: ${d.numberInputButtonTop};
        right: ${d.numberInputButtonRight};
        border-left: ${d.numberInputButtonIconBorderLeft};
        > div {
          width: 100%;
          height: ${d.numberInputButtonHeight};
          > div:hover,
          > div:active {
            color: ${common.primary6};
          }
          .c7n-pro-input-number-plus {
            width: 100%;
            margin: ${d.numberInputMarginItemPlus || 0};
            height: ${d.numberInputButtonHeightItem || `${d.inputHeight / 2 - 1}px`};
            border-top: ${d.numberInputButtonIconBorderFirstTop};
            border-bottom: ${d.numberInputButtonIconBorderLastBottom};
            .icon {
              height: ${d.numberInputButtonHeight};
            }
          }
          .c7n-pro-input-number-minus {
            height: ${d.numberInputButtonHeightItem || `${d.inputHeight / 2 - 1}px`};
            .icon {
              height: ${d.numberInputButtonHeight};
            }
          }
          .icon {
            height: ${d.numberInputButtonIconHeight};
            &:before {
              vertical-align: ${d.numberInputButtonIconVertical};
            }
          }
        }
      }
    }
    //textArea样式
    .c7n-pro-textarea-wrapper {
      padding: 0;
      position: relative;
      label {
        textarea {
          /* background: #fff; */
          z-index: 5;
          border: none;
          padding: 5px 0.1rem;
          line-height: 22px;
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
      background-color: ${fc.bgColor};
    }
    .c7n-pro-calendar-picker-popup.c7n-pro-calendar-picker-popup {
      .c7n-pro-calendar-footer {
        a {
          color: ${common.primary};
        }
      }
    }
    .c7n-upload.c7n-upload.c7n-upload-select-picture-card:hover {
      border-color: ${primary};
    }
  `;
}

const inputCss = css`
  /* Input--pro 全局样式实现 */
  ${getInputStyle}
`;

export default inputCss;
