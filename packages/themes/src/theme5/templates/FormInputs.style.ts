import { css, FlattenSimpleInterpolation } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const tinycolor = require('tinycolor2');

/*
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
function getOneStyle(type, props) {
  const d = getThemeData(props, 'input');
  const border = getBorder(d);
  const {
    primary1,
    primary6,
    yellowColor6,
    warningColor,
    errorColor,
    bgColor,
    titleColor1,
    titleColor2,
    titleColor3,
    lineColor1,
    lineColor3,
    iconfontFamily,
  } = getThemeData(props, 'common');
  const boxShadowColor = tinycolor(primary6).setAlpha(0.2).toRgbString();
  const requiredBoxShadowColor = tinycolor(yellowColor6).setAlpha(0.2).toRgbString();
  const {
    fontSize,
    radius,
    inputHeight,
    groupAddonBorder,
    groupAddonPadding,
    mutipleBorderRadius,
    labelBackGround,
    PrefixSuffixColor,
    addPadding,
    iconFontSize,
  } = getThemeData(props, 'input');
  const selector = `${type}-wrapper`;
  return css`
    .${selector}.${selector} {
      padding: 0;
      position: relative;
      line-height: 0;
      font-size: ${fontSize}px;
      overflow: visible;
      label {
        position: relative;
        padding: 0;
        z-index: 1;
        .${type} {
          border-radius: ${radius}px;
          height: ${inputHeight}px;
          ${border};
          :not(textarea):not(:last-child) {
            padding-right: ${inputHeight}px;
          }
          :not(textarea):not(:first-child) {
            padding-left: ${inputHeight}px;
          }
          &.c7n-pro-textarea {
            padding: 3px 8px;
            line-height: 20px;
          }
        }
        .c7n-pro-input-inner-button {
          top: 0;
        }
        .${type}-clear-button:hover {
          color: inherit;
        }
        :after,
        :before {
          border-radius: ${radius}px;
        }
        .c7n-pro-field-label-wrapper {
          .c7n-pro-field-label {
            background: ${labelBackGround || '#fff'};
          }
        }
        input,
        & > span {
          padding-top: 0;
          padding-bottom: 0;
          z-index: 5;
          border-radius: ${radius}px;
          font-size: ${fontSize}px;
          color: ${titleColor1}; // 颜色控制
          &::selection {
            background-color: ${primary6};
          }
        }

        .${type}-suffix, .${type}-prefix, .c7n-pro-input-number-inner-button {
          z-index: 6;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          line-height: 1;
          text-align: center;
          & > * {
            vertical-align: middle;
            color: ${titleColor2};
          }
          .icon {
            color: ${titleColor2};
          }
          &:before {
            content: '';
            display: inline-block;
            color: ${PrefixSuffixColor};
            height: 100%;
            width: 0;
            vertical-align: middle;
          }
        }
        //右侧边框
        &:hover .${type}-inner-button, div {
          z-index: 6;
        }
      }

      //Lov的边框
      &.c7n-pro-textarea-intl {
        &:before {
          position: absolute;
          height: 100%;
          border-left: 1px solid ${lineColor1};
          content: '';
          right: ${inputHeight - 1}px;
        }
        label {
          .c7n-pro-input,
          .c7n-pro-textarea {
            padding-right: ${inputHeight + 8}px;
          }
          .c7n-pro-input-suffix,
          .c7n-pro-textarea-suffix {
            position: absolute !important;
          }
        }
      }
      &.c7n-pro-input-intl,
      &.c7n-pro-select-lov {
        label {
          .c7n-pro-input-suffix,
          .c7n-pro-select-suffix {
            border-left: 1px solid ${lineColor1};
            height: 100%;
            position: absolute;
          }
        }
      }
      :hover,
      :active {
        .${type} {
          border-color: ${primary6};
        }
        .${type}-suffix {
          .icon {
            color: ${primary6};
          }
        }
        &.c7n-pro-textarea-intl {
          &:before {
            border-color: ${primary6};
          }
        }
        &.c7n-pro-textarea-intl .c7n-pro-textarea-suffix,
        &.c7n-pro-input-intl .c7n-pro-input-suffix,
        &.c7n-pro-select-lov .c7n-pro-select-suffix {
          border-color: ${primary6};
        }
      }
      &.${type}-focused {
        .${type} {
          border-color: ${primary6};
          box-shadow: 0 0 0 2px ${boxShadowColor};
        }
        .${type}-suffix {
          .icon {
            color: ${primary6};
          }
        }
        &.c7n-pro-textarea-intl {
          &:before {
            border-color: ${primary6};
          }
        }
        &.c7n-pro-textarea-intl .c7n-pro-textarea-suffix,
        &.c7n-pro-input-intl .c7n-pro-input-suffix,
        &.c7n-pro-select-lov .c7n-pro-select-suffix {
          border-color: ${primary6};
        }
        label {
          :before,
          :after {
            display: none;
          }
        }
      }
      &.${type}-required {
        .${type} {
          border-color: ${warningColor};
        }
        background: ${bgColor};
        &.${type}-focused {
          .${type} {
            box-shadow: 0 0 0 2px ${requiredBoxShadowColor};
          }
        }
        &.c7n-pro-textarea-intl {
          &:before {
            border-color: ${warningColor};
          }
        }
        &.c7n-pro-textarea-intl .c7n-pro-textarea-suffix,
        &.c7n-pro-input-intl .c7n-pro-input-suffix,
        &.c7n-pro-select-lov .c7n-pro-select-suffix {
          border-color: ${warningColor};
        }
      }

      &.${type}-invalid {
        .${type} {
          border-color: ${errorColor};
        }
        .${type}-suffix {
          .icon {
            color: ${errorColor};
          }
        }
        background-color: ${bgColor};
        &.${type}-focused {
          .${type} {
            box-shadow: none;
          }
        }
        &.c7n-pro-textarea-intl {
          &:before {
            border-color: ${errorColor};
          }
        }
        &.c7n-pro-textarea-intl .c7n-pro-textarea-suffix,
        &.c7n-pro-input-intl .c7n-pro-input-suffix,
        &.c7n-pro-select-lov .c7n-pro-select-suffix {
          border-color: ${errorColor};
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
          .${type}-clear-button, .${type}-inner-button {
            background: transparent !important;
          }
          input {
            background-color: transparent;
            color: ${titleColor1};
          }
        }
        input {
          background-color: transparent;
          color: ${titleColor1};
          &:hover {
            color: ${titleColor1};
          }
        }
      }
      &.${type}-disabled {
        .${type} {
          border-color: ${lineColor1};
        }
        background: ${lineColor3};
        color: ${titleColor3};
        .${type}-suffix {
          .icon {
            color: ${titleColor2};
          }
        }
        &.c7n-pro-textarea-intl {
          &:before {
            border-color: ${lineColor1};
          }
        }
        &.c7n-pro-textarea-intl .c7n-pro-textarea-suffix,
        &.c7n-pro-input-intl .c7n-pro-input-suffix,
        &.c7n-pro-select-lov .c7n-pro-select-suffix {
          border-color: ${lineColor1};
          .icon {
            color: ${titleColor2};
          }
        }
        :hover,
        :active {
          .${type} {
            border-color: ${lineColor1};
          }
          box-shadow: none;
        }
        label {
          background: ${lineColor3};
          :before,
          :after,
          :hover:before,
          :hover:after {
            display: none;
          }
          textarea {
            background: ${lineColor3};
          }
          textarea,
          input {
            color: ${titleColor3};
          }
        }
      }
      &.${type}-suffix-button,&.${type}-prefix-button {
        .${type}-suffix, .${type}-prefix {
          /* width: auto; */
          width: ${inputHeight}px;
          /* padding-left: ${6 + addPadding}px;
          padding-right: ${6 + addPadding}px; */
          .icon {
            font-size: ${iconFontSize}px;
          }
        }
      }
      &.${type}-suffix-button {
        .${type}-placeholder, .${type}-rendered-value {
          padding-right: ${inputHeight}px;
        }
      }
      &.${type}-prefix-button {
        .${type}-placeholder, .${type}-rendered-value {
          padding-left: ${inputHeight}px;
        }
      }
    }
    // input左右padding
    input.${type} {
      padding: 0 8px;
    }
    .${type}.${type} {
      .${type}-multiple-input {
        margin-left: 0;
      }
    }
    // 消除range重影
    .${type}-range.${type}-range .${type} {
      border: none;
    }
    .${type}-group-wrapper.${type}-group-wrapper {
      line-height: 0;
      .${type}-group-before {
        ${groupAddonBorder ? `border: ${groupAddonBorder};` : border}
        border-right:none;
        padding: ${groupAddonPadding || '0 4px'};
        background-color: #fff;
        border-bottom-left-radius: ${radius}px;
        border-top-left-radius: ${radius}px;
        font-size: ${fontSize}px;
        .c7n-pro-select {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
        .icon {
          font-size: ${iconFontSize}px;
        }
      }
      .${type}-group-after, .${type}-group-help {
        ${groupAddonBorder ? `border: ${groupAddonBorder};` : border}
        border-left: none;
        padding: ${groupAddonPadding || '0 4px'};
        background-color: #fff;
        border-bottom-right-radius: ${radius}px;
        border-top-right-radius: ${radius}px;
        font-size: ${fontSize}px;
        .icon {
          font-size: ${iconFontSize}px;
        }
      }
      .${type}-group {
        [class$='-group-before'] {
          + .${type}-group-input {
            .${type} {
              border-bottom-left-radius: 0;
              border-top-left-radius: 0;
            }
          }
        }
        .${type}-group-input:not(:last-child) {
          .${type} {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          }
        }
      }
    }
    // 组合输入框部分样式
    .${type}-compact.${type}-compact {
      &:not(:first-child) .${type} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &:not(:last-child) .${type} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    //去除边框
    .${type}-border.${type}-border {
      &.${type}-float-label:before {
        border: none;
      }
    }
    //clear按钮
    .${type}-inner-button.${type}-inner-button, .${type}-clear-button.${type}-clear-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent !important;
      .icon-close:before {
        content: '\\e734';
        font-family: ${iconfontFamily};
        color: ${titleColor3};
      }
    }

    .${type}-empty.${type}-empty {
      .${type}-inner-button, .${type}-clear-button {
        .icon-close:before {
          display: none;
        }
      }
    }
    .${type}-multiple.${type}-multiple.${type}-multiple {
      .${type} {
        min-height: initial;
        ul {
          padding: 0;
          text-align: left;
          > span.${type}-range-text {
            width: 100%;
            height: 24px;
            line-height: 24px;
            .${type}-range-split, .${type}-range-start, .${type}-range-end {
              height: 24px;
              line-height: 24px;
              margin: 0;
              padding: 0;
              vertical-align: initial;
            }
          }
          > li {
            i.icon-cancel {
              margin-top: -3px;
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
      &.${type}-readonly {
        > label > div {
          > ul {
            > span {
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              margin: ${(inputHeight - 22) / 2}px 4px;
              background-color: ${primary1};
              border-radius: ${mutipleBorderRadius};
              color: ${primary6};
            }
          }
        }
      }
      > label > div {
        height: auto;
        > ul {
          padding: 0;
          /* 固定高度时希望多值情况下出现滚动条 */
          /* height: auto; */
          > li {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            margin: ${(inputHeight - 22) / 2}px 4px;
            background-color: ${primary1};
            border-radius: ${mutipleBorderRadius};
            padding: 0 4px;
            color: ${primary6};
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
              line-height: 20px;
            }
            &.${type}-multiple-block div,
            div {
              max-width: 100%;
            }
            .icon.icon-cancel {
              color: ${primary6};
              font-size: ${fontSize}px;
              margin-left: 4px;
              :before {
                content: '\\e7a1';
                font-family: ${iconfontFamily};
              }
            }
          }
        }
      }
    }
  `;
}
function getInputStyle(props: any) {
  const fc = getThemeData(props, 'formColor');
  const {
    primary,
    primary1,
    primary6,
    titleColor2,
    titleColor3,
    titleColor4,
    errorColor,
  } = getThemeData(props, 'common');
  const {
    fontSize,
    inputHeight,
    iconFontSize,
    numberInputButtonMargin,
    numberInputButtonHeight,
    numberInputButtonTop,
    numberInputButtonRight,
    numberInputMarginItemPlus,
    numberInputButtonHeightItem,
    numberInputButtonIconBorderLastBottom,
    numberInputButtonIconBorderFirstTop,
    numberInputButtonIconVertical,
    numberInputButtonIconHeight,
  } = getThemeData(props, 'input');
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
    ${types.map((t) => getOneStyle(t, props))}
    //placeholder样式
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: ${titleColor4} !important;
      opacity: 1;
      font-size: ${fontSize}px;
    }

    input:-moz-placeholder,
    textarea:-moz-placeholder {
      color: ${titleColor4} !important;
      opacity: 1;
      font-size: ${fontSize}px;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
      color: ${titleColor4} !important;
      opacity: 1;
      font-size: ${fontSize}px;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
      color: ${titleColor4} !important;
      opacity: 1;
      font-size: ${fontSize}px;
    }
    //自定义的placeholder样式
    [class$='-placeholder'][class$='-placeholder'] {
      color: ${titleColor4} !important;
      height: 28px;
      line-height: 28px;
      padding: 0 8px;
    }
    //输入框内的多选项
    [class$='-multiple-block'][class$='-multiple-block'] {
      height: 0.2rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      background-color: ${primary1};
      color: ${primary6};
    }

    //Lov的loading
    .c7n-pro-select-wrapper.c7n-pro-select-wrapper {
      background-color: #fff;
      .c7n-pro-select-suffix {
        .c7n-spin.c7n-spin-spinning {
          .c7n-spin-dot {
            line-height: ${inputHeight}px;
            width: 0.14rem;
            height: ${inputHeight}px;
          }
        }
      }
    }
    //password
    .c7n-pro-password-wrapper.c7n-pro-password-wrapper {
      .c7n-pro-password-inner-button {
        width: ${inputHeight}px;
        color: #8c8c8c;
        .icon {
          font-size: ${iconFontSize}px;
          &.icon-visibility_off::before {
            font-family: hzero-c7n-font;
            content: '';
          }
          &.icon-visibility::before {
            font-family: hzero-c7n-font;
            content: '';
          }
        }
        :hover {
          color: ${primary};
        }
      }
    }
    /* 范围钱币输入行高 */
    .c7n-pro-input-number-range-start.c7n-pro-input-number-range-start,
    .c7n-pro-input-number-range-end.c7n-pro-input-number-range-end,
    /* .c7n-pro-input-number-range-split, */ // 对Currency NumberField多余
    .c7n-pro-input-number-range-input.c7n-pro-input-number-range-input {
      line-height: inherit;
    }
    /* 日期选择组件 hover 时输入框字体颜色 */
    .c7n-pro-calendar-picker-hover-value {
      color: ${titleColor3} !important;
    }
    .c7n-pro-calendar-picker-popup.c7n-pro-calendar-picker-popup {
      .c7n-pro-calendar-footer {
        a {
          color: ${primary6};
        }
      }
    }
    .c7n-upload.c7n-upload.c7n-upload-select-picture-card:hover {
      border-color: ${primary6};
    }
    //数字输入框设置
    .c7n-pro-input-number-wrapper.c7n-pro-input-number-wrapper {
      .c7n-pro-input-number-range-input {
        color: gray;
      }
      .c7n-pro-input-number {
        text-align: right;
      }
      .c7n-pro-input-number:not(textarea):not(:last-child) {
        padding-right: ${inputHeight}px;
      }
      .c7n-pro-input-number-inner-button {
        margin: ${numberInputButtonMargin};
        height: ${numberInputButtonHeight};
        width: ${inputHeight - 2}px;
        top: ${numberInputButtonTop};
        right: ${numberInputButtonRight};
        opacity: 1;
        > div {
          height: ${numberInputButtonHeight};
          width: 100%;
          > div:hover,
          > div:active {
            color: ${primary6};
          }
          .c7n-pro-input-number-plus {
            width: 100%;
            margin: ${numberInputMarginItemPlus || 0};
            height: ${numberInputButtonHeightItem || `${inputHeight / 2 - 1}px`};
            border-top: ${numberInputButtonIconBorderFirstTop};
            .icon {
              height: ${numberInputButtonHeight};
            }
          }
          .c7n-pro-input-number-minus {
            height: ${numberInputButtonHeightItem || `${inputHeight / 2 - 1}px`};
            border-bottom: ${numberInputButtonIconBorderLastBottom};
            .icon {
              height: ${numberInputButtonHeight};
            }
          }
          .icon {
            height: ${numberInputButtonIconHeight};
            &:before {
              vertical-align: ${numberInputButtonIconVertical};
            }
          }
        }
      }
    }
    .c7n-pro-textarea-wrapper.c7n-pro-textarea-wrapper {
      padding: 0;
      position: relative;
      label {
        textarea {
          z-index: 5;
        }
      }
    }
    .c7n-pro-textarea-wrapper.c7n-pro-textarea-wrapper.c7n-pro-textarea-wrapper
      label
      .c7n-pro-textarea {
      height: auto;
      min-height: 28px;
    }

    .c7n-pro-textarea-required.c7n-pro-textarea-required label {
      .c7n-pro-textarea {
        background: initial;
      }
    }
    .c7n-pro-select-lov {
      .c7n-pro-select-suffix {
        .icon.icon-search:before {
          content: '\\e769';
          font-family: 'iconfont-c7n-font';
        }
      }
      &.c7n-pro-select-suffix-button
        .c7n-pro-select-suffix:not(.c7n-pro-select-allow-clear)
        + .c7n-pro-select-clear-button {
        right: 28px !important;
      }
    }
    .c7n-pro-select-suffix-button.c7n-pro-select-suffix-button
      .c7n-pro-select-suffix:not(.c7n-pro-select-allow-clear)
      + .c7n-pro-select-clear-button {
      right: 26px;
    }
    //Lov的加载动画
    .c7n-pro-select-lov-spin.c7n-pro-select-lov-spin {
      .c7n-progress-inner.c7n-progress-inner {
        width: 14px;
        height: 14px;
        margin-left: -4px;
      }
    }
    //selectbox对应的样式
    .c7n-pro-select-box-required.c7n-pro-select-box-required:not(.c7n-pro-select-box-float-label):not(.c7n-pro-select-box-disabled) {
      .c7n-pro-radio-inner,
      .c7n-pro-checkbox-inner {
        background-color: ${fc.bgColor};
      }
      &.c7n-pro-select-box-invalid.c7n-pro-select-box-invalid {
        .c7n-pro-radio-inner,
        .c7n-pro-checkbox-inner {
          border-color: ${errorColor} !important;
        }
        .c7n-pro-select-box,
        label:hover .c7n-pro-select-box {
          color: ${errorColor};
        }
      }
    }
    .c7n-pro-select-box-float-label.c7n-pro-select-box-float-label {
      &.c7n-pro-select-box-invalid .c7n-pro-field-label {
        color: ${titleColor2};
      }
      .c7n-pro-select-box {
        min-height: 32px;
      }
    }
  `;
}

const inputCss = css`
  /* Input--pro 全局样式实现 */
  ${getInputStyle}
`;

export default inputCss;
