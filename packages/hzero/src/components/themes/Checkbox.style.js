import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getOriginalStyle(props) {
  const d = getThemeData(props, "checkbox");
  const {
    primary,
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");

  return css`
    .ant-checkbox {
      border-radius: ${d.radius}px;
      box-sizing: border-box;
      border: 1px solid ${d.borderColor};
      & + span {
        color: ${d.fontColor};
        font-size: ${d.fontSize}px;
      }
      &.ant-checkbox-disabled {
        border-color: ${disabledBorderColor} !important;
        background: ${disabledBg};
        .ant-checkbox-inner {
          background: ${disabledBg};
        }
      }
      &.ant-checkbox-disabled + span {
        color: ${disabledColor};
      }
      .ant-checkbox-inner {
        width: ${d.boxSize - 1}px;
        height: ${d.boxSize - 1}px;
        background: ${primary};
        border-radius: ${d.radius - 1}px;
        border: none;
        transition: all 0.5s;
        transform: scale(0);
      }
      &.ant-checkbox-checked,
      &.ant-checkbox-indeterminate {
        border-color: ${primary};
        .ant-checkbox-inner {
          transform: scale(1);
          transition: all 0.5s cubic-bezier(0.17, 2.24, 0.78, 0.57);
          :after {
            left: calc(50% - 3px);
            top: calc(50% - ${d.boxSize / 2 - 1}px);
          }
        }
      }
      &.ant-checkbox-indeterminate {
        .ant-checkbox-inner {
          :after {
            width: 10px;
            height: 2px;
            border: none;
            background: #fff;
            border-radius: ${d.radius}px;
            left: calc(50% - 5px);
            top: calc(50% - 1px);
            transform: scale(1);
          }
        }
        &.ant-checkbox-disabled {
          .ant-checkbox-inner:after {
            background: rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  `;
}

function getButtonStyle(props) {
  const d = getThemeData(props, "checkboxBtn");
  const {
    disabledBg = "#f8f8f8",
    disabledColor = "#aaadba",
    disabledBorderColor = "#E7EAED",
  } = getThemeData(props, "common");
  return css`
    .ant-checkbox-disabled {
      & + span {
        background: ${disabledBg};
        color: ${disabledColor};
        border-color: ${disabledBorderColor};
      }
    }
    .ant-checkbox {
      display: none;
      &.ant-checkbox-checked + span {
        background: ${d.checkedBgColor};
        border: 1px solid ${d.checkedBorderColor};
        color: ${d.checkedFontColor};
      }
    }
    span:not(.ant-checkbox) {
      display: inline-block;
      height: ${d.height}px;
      line-height: ${d.height - 2}px;
      border-radius: ${d.radius}px;
      border: 1px solid ${d.borderColor};
      font-family: MicrosoftYaHei;
      font-size: ${d.fontSize}px;
      color: ${d.fontColor};
      transition: all 0.3s;
    }
  `;
}

const checkboxStyle = css`
  .ant-checkbox-wrapper {
    ${getOriginalStyle}
  }
  .t-checkbox-btn {
    margin-right: 8px;
    ${getButtonStyle}
  }
`;

export default createStyleComponent("checkbox", checkboxStyle);
