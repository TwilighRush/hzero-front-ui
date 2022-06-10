import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

function getLabelLayout(props) {
  const iD = getThemeData(props, "input");
  const { baseHeight } = getThemeData(props, "common");
  const { layout } = iD;
  const hCss = css`
    .ant-form-item-label {
      line-height: 0;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      min-height: ${baseHeight}px;
      font-size: 12px;
      &:not([class*="ant-col"]) {
        width: ${(iD.labelCol / 24) * 100}%;
        float: left;
        white-space: pre-wrap;
        line-break: normal;
      }
      label {
        padding-right: 4px;
        line-height: 16px;
        width: fit-content;
        max-width: 100%;
      }
      & + .ant-form-item-control-wrapper:not([class*="ant-col"]) {
        width: ${(iD.formCol / 24) * 100}%;
        float: left;
      }
    }
  `;
  const vCss = css`
    .ant-form-item-control-wrapper[class*="ant-col"] {
      width: 100%;
    }
    .ant-form-item-label {
      line-height: 0;
      transform-origin: left bottom;
      transition: all 0.5s;
      max-width: 100%;
      width: 100%;
      &[class*="ant-col"] {
        display: block;
        width: auto;
        float: none;
        text-align: left;
      }
      label {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.5s;
        padding-right: 8px;
        width: 100%;
        white-space: nowrap;
        text-align: left;
        line-height: ${baseHeight}px;
        &:before {
          display: none;
        }
        &:after {
          display: none;
        }
        &.ant-form-item-required:after {
          display: inline-block;
          margin-left: 4px;
          content: "*";
          font-family: SimSun;
          line-height: 1;
          font-size: 12px;
          color: #f5222d;
        }
      }
    }
  `;
  return layout === "vertical" ? vCss : hCss;
}

function getFormStyle(props) {
  const iD = getThemeData(props, "input");
  const { baseHeight } = getThemeData(props, "common");
  return css`
    .ant-form.ant-form-inline {
      .ant-form-item {
        display: inline-block;
        margin-right: 0;
        > .ant-form-item-label {
          display: flex;
          text-align: ${iD.layout === "vertical" ? "left" : "right"};
        }
      }
    }
    .ant-form-item.ant-form-item {
      display: block;
      position: relative;
      box-sizing: border-box;
      /* padding-right: 8px; */
      padding: 8px 8px 8px 0;
      margin: 0;
      input,
      textarea,
      .ant-form-item-children {
        font-weight: ${iD.inputFontWeight};
      }
      :focus-within {
        > .ant-form-item-label {
          transform: ${iD.labelScale ? "scale(0.9)" : ""};
          label {
            color: ${iD.focusedLabelFontColor};
          }
        }
      }
      .ant-form-item-label {
        position: relative;
        text-align: ${iD.labelAlign};
        label {
          min-width: 100%;
          max-width: 100%;
          margin-right: 0;
          font-family: MicrosoftYaHei;
          font-size: ${iD.labelFontSize}px;
          color: ${iD.labelFontColor};
          letter-spacing: 0;
          line-height: ${baseHeight}px;
        }
      }
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          line-height: ${baseHeight}px;
          margin: 0;
          &.has-error {
            .ant-form-explain {
              color: ${iD.errorColor};
            }
            .themed-input-wrapper {
              border-color: ${iD.errorColor} !important;
              :after,
              :before {
                box-shadow: 0 0 3px 0 ${iD.errorColor};
              }
              .themed-input-inner {
                background: none !important;
                &:before,
                &:after {
                  border-color: ${iD.errorColor} !important;
                }
              }
            }
            .ant-calendar-picker,
            .ant-input-affix-wrapper,
            .ant-select,
            .ant-input-number,
            .ant-group-addon,
            .ant-input-number-input:not(:disabled),
            .ant-input:not(.ant-input-disabled):not(:disabled),
            .ant-cascader-picker:not(.ant-cascader-picker-disabled):not(:disabled),
            .ant-time-picker-input:not(:disabled),
            .ant-select-selection:not(:disabled) {
              background-color: ${iD.errorBgColor} !important;
              color: ${iD.errorFontColor} !important;
            }
          }
          .ant-form-item-children {
            position: relative;
            display: inline-block;
            width: 100%;
            line-height: ${baseHeight}px !important;
            .themed-input-wrapper {
              display: inline-block;
            }
            .ant-input-number,
            .ant-select {
              width: 100%;
            }
            .ant-input-group-addon .ant-select {
              width: auto;
            }
            .ant-input-number-input,
            .ant-input,
            .ant-input-number,
            .ant-cascader-picker-input,
            .ant-time-picker-input,
            &:not(.ant-select-disabled) > .ant-select-selection:not(:disabled) {
              border-style: none;
              :focus {
                &:after {
                  display: block;
                }
              }
            }
            textarea.ant-input {
              border: 1px solid ${iD.borderColor};
            }
          }
          &,
          &.ant-form-item-required {
            .ant-form-item-children textarea.ant-input:focus {
              border-color: ${(p) => getThemeData(p, "common", "primary")};
            }
          }
          &.ant-form-item-required {
            .ant-form-item-children {
              .themed-input-inner,
              .ant-input-affix-wrapper,
              .ant-select,
              .ant-input-number,
              .ant-group-addon,
              .ant-input-number-input:not(:disabled),
              .ant-input:not(.ant-input-disabled):not(:disabled),
              .ant-cascader-picker:not(.ant-cascader-picker-disabled):not(:disabled),
              .ant-time-picker-input:not(:disabled),
              .ant-select-selection:not(:disabled) {
                background-color: ${iD.requiredBgColor};
              }
              /* .ant-calendar-picker, */
              .ant-input-affix-wrapper,
              .ant-input-number,
              .ant-select,
              textarea.ant-input,
              .themed-input-wrapper {
                border-color: ${iD.requiredBorderColor};
              }
            }
          }
          .ant-select-selection__choice {
            background: rgba(59, 135, 245, 0.12);
          }
        }
      }
      ${getLabelLayout(props)};
    }
    .ant-form-item {
      .ant-select.ant-select {
        width: 100%;
      }
    }
  `;
}

const formStyle = css`
  /* 表单样式 */
  ${getFormStyle}
`;

export default createStyleComponent("form", formStyle);
