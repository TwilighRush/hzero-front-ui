import { css, FlattenSimpleInterpolation } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getShadowStyle(d: any) {
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
      border-radius: ${d.radius}px ${d.radius}px 0 0;
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
const getBorder = (d: any) => {
  const { border, borderWidth, borderColor } = d;
  let style: FlattenSimpleInterpolation;
  if (border === 'all') {
    style = css`
      border: ${borderWidth}px solid ${borderColor};
    `;
  } else if (border && border.length) {
    const borders = border
      .map((v: any) => `border-${v}: ${borderWidth}px solid ${borderColor};`)
      .join(' ');
    style = css`
      ${borders}
    `;
  }
  // @ts-ignore
  return style;
};

function getInputStyle(props: any) {
  const sd = getThemeData(props, 'select');
  const td = getThemeData(props, 'tag');
  const d = getThemeData(props, 'input');
  const fc = getThemeData(props, 'formColor');
  const { primary } = getThemeData(props, 'colors');
  const shadowStyle = getShadowStyle(d);
  const border = getBorder(d);
  const color = getThemeData(props, 'common');
  return css`
    /* 修复float From下range + mutilple后的范围图标偏移问题 */
    .c7n-pro-form-float {
      .c7n-pro-input-range:not(.c7n-pro-input-multiple) .c7n-pro-input-range-split,
      .c7n-pro-input-number-range:not(.c7n-pro-input-number-multiple)
        .c7n-pro-input-number-range-split,
      .c7n-pro-password-range:not(.c7n-pro-password-multiple) .c7n-pro-password-range-split,
      .c7n-pro-cascader-range:not(.c7n-pro-cascader-multiple) .c7n-pro-cascader-range-split,
      .c7n-pro-color-picker-range:not(.c7n-pro-color-picker-multiple)
        .c7n-pro-color-picker-range-split,
      .c7n-pro-calendar-picker-range:not(.c7n-pro-calendar-picker-multiple)
        .c7n-pro-calendar-picker-range-split,
      .c7n-pro-select-range:not(.c7n-pro-select-multiple) .c7n-pro-select-range-split,
      .c7n-pro-auto-complete-range:not(.c7n-pro-auto-complete-multiple)
        .c7n-pro-auto-complete-range-split,
      .c7n-pro-tree-select-range:not(.c7n-pro-tree-select-multiple)
        .c7n-pro-tree-select-range-split {
        padding-top: ${d.rangeSplitPaddingTop};
      }
      /* 浮动布局下 只保留底边框 */
      .c7n-pro-field-wrapper {
        .c7n-pro-field:before {
          border-style: none none solid;
        }
      }
      /* 浮动标签下 placeholder 位置问题修复 */
      [class*='-wrapper']:not([class*='-multiple']) {
        [class*='-placeholder'] [class*='-placeholder-inner'] {
          padding: 20px 24px 1px 0;
        }
      }
      .c7n-pro-input-multiple-input {
        padding-left: 10px;
        margin-left: 0;
      }
    }

    /*border设置为none;*/
    .c7n-pro-auto-complete-border.c7n-pro-auto-complete-border {
      .c7n-pro-auto-complete,
      .c7n-pro-auto-complete-float-label:before {
        border: none;
      }
    }
    .c7n-pro-password-border.c7n-pro-password-border {
      .c7n-pro-password,
      .c7n-pro-password-float-label::before {
        border: none;
      }
    }
    .c7n-pro-textarea-border.c7n-pro-textarea-border.c7n-pro-textarea-border.c7n-pro-textarea-border {
      ::before {
        bottom: -2px;
      }
      .c7n-pro-textarea,
      .c7n-pro-textarea-float-label:before {
        border: none;
      }
    }
    .c7n-pro-select-border.c7n-pro-select-border {
      .c7n-pro-select,
      .c7n-pro-select-float-label:before {
        border: none;
      }
    }
    .c7n-pro-tree-select-border.c7n-pro-tree-select-border {
      .c7n-pro-tree-select,
      .c7n-pro-tree-select-float-label:before {
        border: none;
      }
    }
    .c7n-pro-color-picker-border.c7n-pro-color-picker-border {
      .c7n-pro-color-picker,
      .c7n-pro-color-picker-float-label:before {
        border: none;
      }
    }
    .c7n-pro-icon-picker-border.c7n-pro-icon-picker-border {
      .c7n-pro-icon-picker,
      .c7n-pro-icon-picker-float-label:before {
        border: none;
      }
    }
    .c7n-pro-cascader-border.c7n-pro-cascader-border {
      .c7n-pro-cascader,
      .c7n-pro-cascader-float-label:before {
        border: none;
      }
    }
    .c7n-pro-calendar-picker-border.c7n-pro-calendar-picker-border {
      .c7n-pro-calendar-picker,
      .c7n-pro-calendar-picker-float-label:before {
        border: none;
      }
    }
    .c7n-pro-input-number-border.c7n-pro-input-number-border {
      .c7n-pro-input-number,
      .c7n-pro-input-number-float-label:before {
        border: none;
      }
    }
    .c7n-pro-input-border.c7n-pro-input-border {
      .c7n-pro-input,
      .c7n-pro-input-float-label:before {
        border: none;
      }
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${color.placeholderColor} !important;
      opacity: 1 !important;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${color.placeholderColor} !important;
      opacity: 1 !important;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${color.placeholderColor} !important;
      opacity: 1 !important;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${color.placeholderColor} !important;
      opacity: 1 !important;
    }
    /* 范围钱币输入行高 */
    .c7n-pro-input-number-range-start,
    .c7n-pro-input-number-range-end,
    /* .c7n-pro-input-number-range-split, */ // 对Currency、NumberFiled多余
    .c7n-pro-input-number-range-input {
      line-height: inherit;
    }
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${color.placeholderColor};
    }
    [class*='-group-wrapper'] {
      line-height: 0;
      /* 去除圆角导致的间隙 */
      [class$='-group'] {
        [class$='-group-input']:not(:last-child) {
          > span {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      }
    }
    [class*='-group-wrapper'] [class$='-group-before'] {
      ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
      padding: ${d.groupAddonPadding || '0'};
      background-color: ${d.groupAddonBackground || 'initial'};
      border-bottom-left-radius: ${d.radius}px;
      border-top-left-radius: ${d.radius}px;
      border-right: none;
      > span[class*='-wrapper'] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      /* 去除圆角导致的间隙 */
      & + [class$='-group-input'] > span {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    [class$='-float-label']:before {
      border-radius: 0;
    }
    [class$='-group-input']:not(:first-child) .c7n-pro-field {
      border-radius: 0;
    }
    [class$='-group-input']:not(:last-child) .c7n-pro-field {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    [class*='-group-wrapper'] [class$='-group-after'],
    [class*='-group-wrapper'] [class$='-group-help'] {
      ${d.groupAddonBorder ? `border: ${d.groupAddonBorder};` : border}
      padding: ${d.groupAddonPadding || '0'};
      background-color: ${d.groupAddonBackground || 'transparent'};
      border-bottom-right-radius: ${d.radius}px;
      border-top-right-radius: ${d.radius}px;
      border-left: none;
      .icon {
        color: ${d.PrefixSuffixColor};
      }
    }
    // Select Border层级修复
    .c7n-pro-select-wrapper {
      .c7n-pro-select.c7n-pro-select {
        border: none;
      }
    }
    // 消除range重影
    [class$='-range'][class$='-range'] {
      [class$='-input'],
      [class$='-input-number'] {
        height: 100%;
      }
    }
    .c7n-pro-color-picker-range,
    .c7n-pro-cascader-range,
    .c7n-pro-auto-complete-range,
    .c7n-pro-icon-picker-range,
    .c7n-pro-calendar-picker-range,
    .c7n-pro-input-range,
    .c7n-pro-password-range,
    .c7n-pro-textarea-range,
    .c7n-pro-input-number-range,
    .c7n-pro-select-range {
      .c7n-pro-color-picker,
      .c7n-pro-cascader,
      .c7n-pro-auto-complete,
      .c7n-pro-icon-picker,
      .c7n-pro-calendar-picker,
      .c7n-pro-input,
      .c7n-pro-password,
      .c7n-pro-textarea,
      .c7n-pro-input-number,
      .c7n-pro-select {
        border: none;
        > ul {
          [class$='-range-text'] {
            width: 100%;
          }
        }
      }
      .c7n-pro-calendar-picker {
        height: auto;
      }
    }
    .c7n-pro-calendar-picker-popup {
      .c7n-pro-calendar-footer {
        a {
          color: ${color.primary};
        }
      }
    }
    .c7n-upload.c7n-upload.c7n-upload-select-picture-card:hover {
      border-color: ${primary};
    }
    .c7n-pro-input {
      && {
        border: none;
      }
      border-radius: 0.02rem;
      // 为了覆盖hzero-front他们自定义的乱七八糟的全局样式
      &&,
      &&:focus {
        box-shadow: none;
      }
    }
    .c7n-pro-input-number-wrapper {
      .c7n-pro-input-number {
        text-align: left;
      }
      .c7n-pro-input-number-inner-button {
        height: ${d.numberInputButtonHeight};
        margin-right: -1px;
        border-left: ${d.numberInputButtonIconBorder};

        .c7n-pro-input-number-plus {
          margin-top: 0;
          border-bottom: ${d.numberInputButtonIconBorder};
        }
        .icon {
          color: ${d.numberInputButtonIconColor};
        }
      }
    }
    &.c7n-pro-color-picker-invalid,
    &.c7n-pro-auto-complete-multiple-invalid,
    &.c7n-pro-auto-complete-invalid,
    &.c7n-pro-input-multiple-invalid,
    &.c7n-pro-icon-picker-invalid,
    &.c7n-pro-calendar-picker-invalid,
    &.c7n-pro-textarea-invalid,
    &.c7n-pro-password-invalid,
    &.c7n-pro-input-number-invalid,
    &.c7n-pro-select-invalid,
    &.c7n-pro-input-invalid {
      border-color: ${d.errorColor};
      box-shadow: ${d.errorShadow};
      label {
        input {
          color: ${d.errorFontColor};
        }
      }
      input {
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
    .c7n-pro-password-border .c7n-pro-password,
    .c7n-pro-password-border.c7n-pro-password-float-label::before {
      border: none;
    }
    .c7n-pro-textarea-border.c7n-pro-textarea-wrapper .c7n-pro-textarea,
    .c7n-pro-textarea-border.c7n-pro-textarea-float-label::before {
      border: none;
    }
    .c7n-pro-color-picker-compact:not(:first-child) .c7n-pro-color-picker-wrapper,
    .c7n-pro-cascader-compact:not(:first-child) .c7n-pro-cascader-wrapper,
    .c7n-pro-auto-complete-compact:not(:first-child) .c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-compact:not(:first-child) .c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-compact:not(:first-child) .c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-compact:not(:first-child) .c7n-pro-input-wrapper,
    .c7n-pro-password-compact:not(:first-child) .c7n-pro-password-wrapper,
    .c7n-pro-textarea-compact:not(:first-child) .c7n-pro-textarea-wrapper,
    .c7n-pro-input-number-compact:not(:first-child) .c7n-pro-input-number-wrapper,
    .c7n-pro-tree-select-compact:not(:first-child) .c7n-pro-tree-select-wrapper,
    .c7n-pro-select-compact:not(:first-child) .c7n-pro-select-wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .c7n-pro-color-picker-compact:not(:last-child) .c7n-pro-color-picker-wrapper,
    .c7n-pro-cascader-compact:not(:last-child) .c7n-pro-cascader-wrapper,
    .c7n-pro-auto-complete-compact:not(:last-child) .c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-compact:not(:last-child) .c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-compact:not(:last-child) .c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-compact:not(:last-child) .c7n-pro-input-wrapper,
    .c7n-pro-password-compact:not(:last-child) .c7n-pro-password-wrapper,
    .c7n-pro-textarea-compact:not(:last-child) .c7n-pro-textarea-wrapper,
    .c7n-pro-input-number-compact:not(:last-child) .c7n-pro-input-number-wrapper,
    .c7n-pro-tree-select-compact:not(:last-child) .c7n-pro-tree-select-wrapper,
    .c7n-pro-select-compact:not(:last-child) .c7n-pro-select-wrapper {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .c7n-pro-color-picker-wrapper,
    .c7n-pro-cascader-wrapper,
    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple,
    .c7n-pro-auto-complete-wrapper,
    .c7n-pro-icon-picker-wrapper,
    .c7n-pro-calendar-picker-wrapper,
    .c7n-pro-input-wrapper,
    .c7n-pro-password-wrapper,
    .c7n-pro-textarea-wrapper,
    .c7n-pro-input-number-wrapper,
    .c7n-pro-tree-select-wrapper,
    .c7n-pro-select-wrapper {
      padding: 0;
      position: relative;
      // line-height: 0;
      border-radius: ${d.radius}px;
      font-size: ${d.fontSize}px; // 新增控制字体大小
      overflow: visible;
      ${border};
      ${shadowStyle};
      .c7n-pro-password-inner-button {
        color: ${d.PrefixSuffixColor};

        &:hover {
          .icon {
            color: ${d.floatCloseIconHoverColor};
          }
        }
      }
      //设置border:none;保险措施
      && {
        .c7n-pro-tree-selection,
        .c7n-pro-auto-complete,
        input {
          border: none;
        }
      }
      .c7n-pro-input-clear-button,
      .c7n-pro-tree-select-clear-button,
      .c7n-pro-auto-complete-clear-button,
      .c7n-pro-calendar-picker-clear-button,
      .c7n-pro-select-clear-button {
        background: transparent !important;

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
      .c7n-pro-input-number-range-input {
        color: gray;
      }
      label {
        position: relative;
        padding: 0;
        border: none;
        border-radius: ${d.radius - d.borderWidth}px;
        // z-index: 1;
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
            white-space: break-spaces;
            text-align: left;
          }
        }
        [class*='-range-input'][class*='-range-input'][class*='-range-input'] {
          position: absolute;
        }
        input,
        textarea,
        & > span {
          border: none;
          border-radius: ${d.radius}px;
          color: ${d.fontColor}; // 颜色控制
          &::selection {
            background-color: ${color.primary};
          }
        }
        .c7n-pro-color-picker-multiple-block,
        .c7n-pro-cascader-multiple-block,
        .c7n-pro-input-number-multiple-block,
        .c7n-pro-auto-complete-multiple-block,
        .c7n-pro-input-multiple-block,
        .c7n-pro-auto-complete-multiple-block,
        .c7n-pro-icon-picker-multiple-block,
        .c7n-pro-calendar-picker-multiple-block,
        .c7n-pro-input-multiple-block,
        .c7n-pro-password-multiple-block,
        .c7n-pro-textarea-multiple-block,
        .c7n-pro-input-number-multiple-block,
        .c7n-pro-tree-select-multiple-block,
        .c7n-pro-select-multiple-block {
          background-color: ${color.multipleColor || color.primary};
          border-radius: ${d.mutipleBorderRadius};
          color: ${sd.mutiSelectItemFontColor};
          padding: ${td.padding};
          margin: 0 0.03rem;
          font-size: 0.12rem;

          &:first-child {
            margin-left: 0.1rem;
          }
          & > div:not(:last-child) {
            max-width: 100%;
          }
          .icon-cancel {
            margin-top: -0.01rem;
            margin-left: 0.04rem;
            &:before {
              color: ${d.floatMutipleItemColor};
              font-size: 0.14rem;
              content: '\\E5CD';
            }
          }
        }
        .c7n-pro-color-picker-suffix,
        .c7n-pro-input-suffix,
        .c7n-pro-input-prefix,
        .c7n-pro-tree-select-suffix,
        .c7n-pro-select-suffix {
          border: none;
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
      }
      &&.c7n-pro-color-picker-focused,
      &&.c7n-pro-cascader-focused,
      &&.c7n-pro-auto-complete-focused,
      &&.c7n-pro-calendar-picker-focused,
      &&.c7n-pro-textarea-focused,
      &&.c7n-pro-icon-picker-focused,
      &&.c7n-pro-input-focused,
      &&.c7n-pro-password-focused,
      &&.c7n-pro-input-number-focused,
      &&.c7n-pro-tree-select-focused,
      &&.c7n-pro-select-focused {
        border-radius: ${d.radius}px ${d.radius}px 0 0;
        label {
          :before,
          :after {
            display: block;
          }
        }
        :before {
          opacity: 1;
          border-radius: 0;
          border-top: ${d.focusBordertop};
          border-bottom: ${d.focusBorderbottom};
          border-left: ${d.focusBorderleft};
          border-right: ${d.focusBorderright};
          /* bottom: -${d.borderWidthFocused}px; */
          bottom: 0;
        }
      }
      &.c7n-pro-color-picker-disabled.c7n-pro-color-picker-disabled,
      &.c7n-pro-cascader-disabled.c7n-pro-cascader-disabled,
      &.c7n-pro-auto-complete-disabled.c7n-pro-auto-complete-disabled,
      &.c7n-pro-icon-picker-disabled.c7n-pro-icon-picker-disabled,
      &.c7n-pro-calendar-picker-disabled.c7n-pro-calendar-picker-disabled,
      &.c7n-pro-textarea-disabled.c7n-pro-textarea-disabled,
      &.c7n-pro-input-disabled.c7n-pro-input-disabled,
      &.c7n-pro-password-disabled.c7n-pro-password-disabled,
      &.c7n-pro-input-number-disabled.c7n-pro-input-number-disabled,
      &.c7n-pro-tree-select-disabled.c7n-pro-tree-select-disabled,
      &.c7n-pro-select-disabled.c7n-pro-select-disabled {
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
        .c7n-pro-field-label {
          color: ${d.disabledFontColor};
        }
      }
      &.c7n-pro-cascader-float-label,
      &.c7n-pro-auto-complete-multiple-float-label,
      &.c7n-pro-auto-complete-float-label,
      &.c7n-pro-input-multiple-float-label,
      &.c7n-pro-icon-picker-float-label,
      &.c7n-pro-calendar-picker-float-label,
      &.c7n-pro-textarea-float-label,
      &.c7n-pro-password-float-label,
      &.c7n-pro-input-number-float-label,
      &.c7n-pro-select-float-label,
      &.c7n-pro-tree-select-float-label,
      &.c7n-pro-input-float-label {
        label input {
          border-radius: ${d.radius}px;
        }
        .c7n-pro-input-multiple-block {
          padding: 0 0.04rem;
        }
        [class$='-rendered-value'] {
          padding-right: 0.24rem;
          padding-top: 0.18rem;
          height: 0.48rem;
        }
      }
      &.c7n-pro-color-picker-invalid,
      &.c7n-pro-auto-complete-multiple-invalid,
      &.c7n-pro-auto-complete-invalid,
      &.c7n-pro-input-multiple-invalid,
      &.c7n-pro-icon-picker-invalid,
      &.c7n-pro-calendar-picker-invalid,
      &.c7n-pro-textarea-invalid,
      &.c7n-pro-password-invalid,
      &.c7n-pro-input-number-invalid,
      &.c7n-pro-select-invalid,
      &.c7n-pro-tree-select-invalid,
      &.c7n-pro-input-invalid {
        border-color: ${d.errorColor};
        box-shadow: ${d.errorShadow};
        // background-color: ${d.errorBgColor};
        [class$='-rendered-value'] {
          color: ${d.errorFontColor};
        }
        .c7n-pro-input-clear-button,
        .c7n-pro-calendar-picker-clear-button,
        .c7n-pro-tree-select-clear-button,
        .c7n-pro-select-clear-button {
          background: transparent !important;

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
        label {
          input {
            // background-color: ${d.errorBgColor};
            color: ${d.errorFontColor};
          }
        }
        input {
          // background-color: ${d.errorBgColor};
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
            border-radius: 0;
            bottom: -${d.borderWidthFocused}px;
            border-bottom: ${d.errorFocusBorderbottom} !important;
          }
        }
      }
      && {
        input,
        .c7n-pro-auto-complete {
          border: none;
        }
      }
    }
    .c7n-pro-textarea-wrapper:not(.c7n-pro-textarea-disabled) {
      padding: 0;
      position: relative;
      label {
        textarea {
          background: #fff;
          border: none;
        }
      }
    }

    .c7n-pro-color-picker-required.c7n-pro-color-picker-required,
    .c7n-pro-cascader-required.c7n-pro-cascader-required,
    .c7n-pro-auto-complete-required.c7n-pro-auto-complete-required,
    .c7n-pro-icon-picker-required.c7n-pro-icon-picker-required,
    .c7n-pro-calendar-picker-required.c7n-pro-calendar-picker-required,
    .c7n-pro-input-required.c7n-pro-input-required,
    .c7n-pro-password-required.c7n-pro-password-required,
    .c7n-pro-textarea-required.c7n-pro-textarea-required,
    .c7n-pro-input-number-required.c7n-pro-input-number-required,
    .c7n-pro-tree-select-required.c7n-pro-tree-select-required,
    .c7n-pro-select-required.c7n-pro-select-required {
      // border-color: ${fc.borderColor};
      background: ${fc.bgColor};
      label {
        /* background: ${fc.bgColor}; */
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

    .c7n-pro-tree-select-multiple,
    .c7n-pro-input-number-multiple,
    .c7n-pro-auto-complete-multiple,
    .c7n-pro-input-multiple {
      /* border: none; */
      .c7n-pro-auto-complete-clear-button,
      .c7n-pro-input-clear-button,
      .c7n-pro-calendar-picker-clear-button,
      .c7n-pro-tree-select-clear-button,
      .c7n-pro-select-clear-button {
        position: absolute;
        top: 0.01rem;
        bottom: 0.01rem;
        z-index: 1;
        height: 0.2rem !important;
        margin: auto 0;
        line-height: 1;
        text-align: center;
      }
      &.c7n-pro-tree-select-float-label > label > div,
      &.c7n-pro-auto-complete-float-label > label > div,
      &.c7n-pro-input-float-label > label > div {
        height: 0.48rem;
        > ul {
          margin: 0;
        }
      }
      &.c7n-pro-input-number-border > label > div {
        border: none;
      }
      > label
        // treeSelect Border层级修复 
        .c7n-pro-tree-select {
        border: none;
      }
      > div {
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
            height: ${d.inputHeight - 2 * d.borderWidth - 5}px;
            color: ${sd.mutiSelectItemFontColor};
            font-size: ${sd.mutiSelectItemFontSize}px;
            :last-of-type {
              margin: 0;
              background: none;
              > input {
                background: none;
              }
            }
            > input {
              height: 100%;
            }
            margin: 2px 4px;
            // div {
            //   line-height: ${d.inputHeight - 2 * d.borderWidth - 4}px;
            // }
          }
        }
      }
    }
    [class*='-group-wrapper'] [class$='-group'] {
      [class$='-wrapper'] {
        border-radius: 0px;
      }
      > div:first-child [class$='-wrapper'] {
        border-bottom-left-radius: ${d.radius}px;
        border-top-left-radius: ${d.radius}px;
      }
      > div:last-child [class$='-multiple'] {
        border-bottom-right-radius: ${d.radius}px;
        border-top-right-radius: ${d.radius}px;
      }
    }
    [class$='-multiple-block'][class$='-multiple-block'] {
      height: 0.2rem;
      background-color: rgba(83, 101, 234, 0.08);
      color: #5365ea;
      .icon {
        line-height: 20px;
        vertical-align: baseline;
      }
    }
    // empty label
    .c7n-pro-color-picker-empty,
    .c7n-pro-cascader-empty,
    .c7n-pro-input-number-multiple-empty,
    .c7n-pro-auto-complete-multiple-empty,
    .c7n-pro-auto-complete-empty,
    .c7n-pro-input-multiple-empty,
    .c7n-pro-auto-complete-empty,
    .c7n-pro-icon-picker-empty,
    .c7n-pro-calendar-picker-empty,
    .c7n-pro-input-empty,
    .c7n-pro-password-empty,
    .c7n-pro-textarea-empty,
    .c7n-pro-input-number-empty,
    .c7n-pro-tree-select-empty,
    .c7n-pro-select-empty {
      .c7n-pro-field-label.c7n-pro-field-label {
        color: ${d.emptyLabelFontColor};
      }
    }
    .c7n-pro-field-help.c7n-pro-field-help {
      color: ${d.emptyLabelFontColor};
    }
    .c7n-pro-input-number-wrapper {
      .c7n-pro-input-number-prefix,
      .c7n-pro-input-number-suffix {
        line-height: 0.2rem;
      }
    }
    /* 日期选择组件 hover 时输入框字体颜色 */
    .c7n-pro-calendar-picker-hover-value {
      color: grey !important;
    }
  `;
}

const inputCss = css`
  /* Input--pro 全局样式实现 */
  ${getInputStyle}
`;

export default inputCss;
