import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const alertStyle = (props) => {
  const {
    borderRadius,
    height,
    paddingLeft,
    iconBeforeDisplay,
    iconWidth,
    iconHeight,
    iconBackgroundRepeat,
    iconBackgroundPosition,
    iconBackgroundSize,
    iconInfoBackgroundImage,
    iconWarnBackgroundImage,
    iconErrorBackgroundImage,
    iconSuccessBackgroundImage,
    borderInfoColor,
    backgroundInfoColor,
    borderWarnColor,
    backgroundWarnColor,
    borderErrorColor,
    backgroundErrorColor,
  } = getThemeData(props, "alert");
  const d = getThemeData(props, "alert");
  const {
    primary,
    successColor = "#39c878",
    infoColor = primary,
    errorColor = "#fd6868",
    warningColor = "#f8b303",
  } = getThemeData(props, "common");
  return css`
    .ant-alert.ant-alert {
      border-radius: ${borderRadius}px;
      height: ${height}px;
      display: flex;
      align-items: center;
      padding-left: ${paddingLeft}px;
      border-radius: ${d.borderRadiusNew};
      border: ${d.border};
      .ant-alert-message {
        font-family: MicrosoftYaHei;
        font-size: 12px;
        line-height: 20px;
        color: #5a6677;
      }
      i.ant-alert-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
        &:before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: ${iconBeforeDisplay};
        }
        width: ${iconWidth}px;
        height: ${iconHeight}px;
        background-repeat: ${iconBackgroundRepeat};
        background-position: ${iconBackgroundPosition};
        background-size: ${iconBackgroundSize};
        &.anticon-info-circle {
          background-image: url(${iconInfoBackgroundImage});
          &:before {
            background-color: ${infoColor};
          }
        }
        &.anticon-exclamation-circle {
          background-image: url(${iconWarnBackgroundImage});
          &:before {
            background-color: ${warningColor};
          }
        }
        &.anticon-cross-circle {
          background-image: url(${iconErrorBackgroundImage});
          &:before {
            background-color: ${errorColor};
          }
        }
        &.anticon-check-circle {
          background-image: url(${iconSuccessBackgroundImage});
          &:before {
            background-color: ${successColor};
          }
        }
      }
      .ant-alert-close-icon {
        top: unset;
      }
      /* info */
      &.ant-alert-info {
        border: 1px solid ${borderInfoColor};
        background: ${backgroundInfoColor};
      }
      /* warn */
      &.ant-alert-warning {
        border: 1px solid ${borderWarnColor};
        background: ${backgroundWarnColor};
      }
      /* err */
      &.ant-alert-error {
        border: 1px solid ${borderErrorColor};
        background: ${backgroundErrorColor};
      }
    }
  `;
};

export default createStyleComponent("alert", alertStyle);
