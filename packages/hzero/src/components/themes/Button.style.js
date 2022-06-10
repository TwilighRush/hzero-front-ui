import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

export const btnCss = (props) => {
  const {
    fontFamily,
    fontSize,
    radius,
    height,
    borderWidth,
    primaryBgColor,
    primaryColor,
    primaryBorderColor,
    primaryHoverBgColor,
    primaryHoverColor,
    primaryHoverBorderColor,
    defaultBorderColor,
    defaultColor,
    defaultBgColor,
    defaultHoverBgColor,
    defaultHoverColor,
    defaultHoverBorderColor,
    defaultDisabledColor,
    defaultDisabledBgColor,
    defaultDisabledBorderColor,
    primaryDisabledBorderColor,
    primaryDisabledBgColor,
    primaryDisabledColor,
    leftRightPadding,

    errorBorderColor = "#F13131",
    errorFontColor = "#F13131",
    errorBg = "#fff",
    errorDisabledBorderColor = "#FAADAD",
    errorDisabledFontColor = "#FAADAD",
    errorDisabledBg = "#fff",
  } = getThemeData(props, "button");
  return css`
    .ant-btn.ant-btn {
      height: ${height}px;
      border-radius: ${radius}px;
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      padding: 0 ${leftRightPadding}px;
      text-align: center;
      border-color: ${defaultBorderColor};
      border-style: solid;
      border-width: ${borderWidth}px;
      color: ${defaultColor};
      background-color: ${defaultBgColor};
      > .anticon + span,
      > span + .anticon {
        margin-left: 6px;
      }
      &:focus,
      &:hover,
      &:active {
        color: ${defaultHoverColor};
        border-color: ${defaultHoverBorderColor};
        background-color: ${defaultHoverBgColor};
        i {
          border-radius: 2px;
        }
      }
      &:disabled,
      &:disabled:hover {
        border-color: ${defaultDisabledBorderColor};
        background: ${defaultDisabledBgColor};
        color: ${defaultDisabledColor};
        i {
          animation: none;
        }
      }
      &.ant-btn-primary {
        background-color: ${primaryBgColor};
        color: ${primaryColor};
        border-color: ${primaryBorderColor};
        &:hover,
        &:focus,
        &:active {
          color: ${primaryHoverColor};
          background-color: ${primaryHoverBgColor};
          border-color: ${primaryHoverBorderColor};
        }
        &:disabled,
        &:disabled&:hover {
          background-color: ${primaryDisabledBgColor};
          border-color: ${primaryDisabledBorderColor};
          color: ${primaryDisabledColor};
          i {
            animation: none;
          }
        }
      }
      &.ant-btn-danger {
        color: ${errorFontColor};
        border-color: ${errorBorderColor};
        background-color: ${errorBg};
        &:hover,
        &:focus,
        &:active {
          color: ${errorFontColor};
          border-color: ${errorBorderColor};
          background-color: ${errorBg};
          opacity: 0.9;
          span {
            color: ${errorFontColor};
          }
          &:after,
          &:before {
            border-color: ${errorBorderColor};
          }
        }
        &:disabled,
        &:disabled:hover,
        &:disabled:active {
          color: ${errorDisabledFontColor};
          border-color: ${errorDisabledBorderColor};
          background-color: ${errorDisabledBg};
          span {
            color: ${errorDisabledFontColor};
          }
        }
      }
    }
  `;
};

const getGroupStyle = (props) => {
  const { radius } = getThemeData(props, "button");
  return css`
    .ant-btn-group.ant-btn-group {
      > .ant-btn,
      > span > .ant-btn {
        line-height: initial;
        > span {
          line-height: 0;
        }
        &:first-of-type:not(:last-of-type) {
          border-top-left-radius: ${radius}px;
          border-bottom-left-radius: ${radius}px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-of-type:not(:first-of-type) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: ${radius}px;
          border-bottom-right-radius: ${radius}px;
        }
        &:only-child {
          border-radius: ${radius}px;
        }
      }
    }
  `;
};
// export default createGlobalStyle`
//   /* Button 全局样式组件 */
//   ${btnCss}
//   ${getGroupStyle}
// `;

const allBtnCss = css`
  ${btnCss}
  ${getGroupStyle}
`;

export default createStyleComponent("button", allBtnCss);
