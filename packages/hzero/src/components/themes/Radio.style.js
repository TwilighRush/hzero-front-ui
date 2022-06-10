import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const borderStyle = props => {
  const borderList = getThemeData(props, "radio", "checkedBorder");
  const border = (borderList || [])
    .map(
      item =>
        `border${item}: 1px solid ${getThemeData(props, "common", "primary")}`
    )
    .join(";");
  return css`
    ${border};
  `;
};

const radioStyle = props => {
  const d = getThemeData(props, "radio");
  const c = getThemeData(props, "common");
  return css`
  /* hover 时覆盖以前的颜色 */
  .ant-radio-wrapper.ant-radio-wrapper {
    &:hover {
      .ant-radio {
        .ant-radio-inner {
          border-color: ${c.primary};
        }
      }
    }
  }
  &.ant-radio-wrapper,
  &.ant-radio-wrapper-checked {
    font-family: ${d.fontFamily};
    font-size: ${d.fontSize}px;
    color: ${d.color};
   .ant-radio-disabled {
      .ant-radio-inner {
        opacity: ${d.disabledCheckedOpacity};
      }
    }
    .ant-radio {
      .ant-radio-inner {
        border: 1px solid ${d.borderGrayColor};
        &:after {
          position: absolute;
          width: ${d.checkedWidth};
          height: ${d.checkedHeight};
          background-color: ${d.checkedBackgroundColor || c.primary};
          transform: ${d.checkedTransform};
          top: ${d.checkedTop};
          left: ${d.checkedLeft};
          ${borderStyle}
          border-radius: ${d.borderRadius};
          border: ${d.checkedBorderNew};
        }
      }
      &.ant-radio-checked {
        &:after {
          border: 1px solid ${c.primary};
        }
        .ant-radio-inner {
          border: 1px solid ${c.primary};
          background: ${d.checkedBgColor};
          border: ${d.checkedWrapBorder};
        }
      }
    }
  }
`;
};

const ButtonCss = props => {
  const d = getThemeData(props, "radioButton");
  const style = css`
    .ant-radio-button-wrapper.ant-radio-button-wrapper {
      font-family: ${d.fontFamily};
      height: ${d.btnHeight}px;
      font-size: ${d.fontSize}px;
      line-height: ${d.btnHeight - 2}px;
      color: ${d.fontColor};
      padding: ${d.btnPadding};
      margin-right: ${d.btnMarginRight}px;
      border-radius: ${d.radius}px;
      border: 1px solid ${d.borderColor};
      box-shadow: ${d.btnBoxShadow};
      &:first-child {
        border-radius: ${d.btnOneRadius}px;
      }
      &:last-child {
        border-radius: ${d.btnOneRadius}px;
        margin-right: 0;
      }
      &:not(:first-child)::before {
        width: 0;
      }
      &.ant-radio-button-wrapper-checked {
        border-radius: ${d.radius}px;
        color: ${d.checkedFontColor};
        border: 1px solid ${d.checkedBorderColor};
        background: ${d.checkedBgColor};
      }
      &.ant-radio-button-wrapper-disabled {
        color: ${d.disabledFontColor};
        background: ${d.disabledBgColor};
        border-color: ${d.disabledBorderColor};
      }
    }
  `;
  return css`
    .ant-radio-group-solid.ant-radio-group-solid {
      ${style};
    }
    ${style};
  `;
};

const RadioCss = css`
  ${radioStyle}
  ${ButtonCss}
`;

export default createStyleComponent("radio", RadioCss);
