import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const alertStyle = (props) => {
  const {
    borderRadius,
    borderRadiusNew,
    border,
    height,
    paddingLeft,
    alertIconFontSize,
    iconBeforeContent,
    iconBeforeDisplay,
    iconWidth,
    iconHeight,
    iconTop,
    iconBackgroundRepeat,
    iconBackgroundPosition,
    iconBackgroundSize,
    iconInfoBackgroundImage,
    iconWarnBackgroundImage,
    iconErrorBackgroundImage,
    closeIconColor,
    iconFontSize,
    borderInfoColor,
    backgroundInfoColor,
    messageInfoColor,
    infoIconContent,
    borderWarnColor,
    backgroundWarnColor,
    warningIconContent,
    messageWarnColor,
    borderErrorColor,
    backgroundErrorColor,
    errorIconContent,
    messageErrorColor,
    borderSuccessColor,
    backgroundSuccessColor,
    messageSuccessColor,
    successIconContent = "",
    iconSuccessBackgroundImage,
  } = getThemeData(props, "alert");
  const {
    primary,
    successColor = "#39c878",
    infoColor = primary,
    errorColor = "#fd6868",
    warningColor = "#f8b303",
  } = getThemeData(props, "common");
  return css`
    .c7n-alert.c7n-alert {
      border-radius: ${borderRadius}px;
      border-radius: ${borderRadiusNew};
      border: ${border};
      min-height: ${height}px;
      display: flex;
      align-items: center;
      padding-left: ${paddingLeft}px;
      &.c7n-alert-with-description {
        align-items: flex-start;
      }
      .c7n-alert-close-wrapper {
        padding: 0;
      }
      .c7n-alert-message {
        font-family: MicrosoftYaHei;
        font-size: 0.12rem;
        line-height: 0.2rem;
        color: #5a6677;
      }
      i.c7n-alert-icon {
        position: absolute;
        // top: 50%;
        top: ${iconTop}px;
        font-size: ${alertIconFontSize};
        transform: translateY(-50%);
        left: 0.12rem;
        &:before {
          content: ${iconBeforeContent};
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 50%;
          display: ${iconBeforeDisplay};
        }
        width: ${iconWidth}px;
        height: ${iconHeight}px;
        background-repeat: ${iconBackgroundRepeat};
        background-position: ${iconBackgroundPosition};
        background-size: ${iconBackgroundSize};
        &.icon-info {
          background-image: url(${iconInfoBackgroundImage});
          &:before {
            background-color: ${infoColor};
          }
        }
        &.icon-warning {
          background-image: url(${iconWarnBackgroundImage});
          &:before {
            background-color: ${warningColor};
          }
        }
        &.icon-error {
          background-image: url(${iconErrorBackgroundImage});
          &:before {
            background-color: ${errorColor};
          }
        }
        &.icon-check_circle {
          background-image: url(${iconSuccessBackgroundImage});
          &:before {
            background-color: ${successColor};
          }
        }
      }
      .c7n-alert-close-icon {
        color: ${closeIconColor || "rgba(0, 0, 0, 0.45)"};
        transition: color 0.3s;

        i.icon {
          font-size: 0.12rem;
          font-size: ${iconFontSize}px;
        }
      }

      /* info */
      &.c7n-alert-info {
        border: 1px solid ${borderInfoColor};
        background: ${backgroundInfoColor};
        .c7n-alert-message {
          color: ${messageInfoColor};
        }
        .c7n-alert-icon:before {
          content: "${infoIconContent}";
        }
      }
      /* warn */
      &.c7n-alert-warning {
        border: 1px solid ${borderWarnColor};
        background: ${backgroundWarnColor};
        .c7n-alert-icon:before {
          content: "${warningIconContent}";
        }
        .c7n-alert-message {
          color: ${messageWarnColor};
        }
      }
      /* err */
      &.c7n-alert-error {
        border: 1px solid ${borderErrorColor};
        background: ${backgroundErrorColor};
        .c7n-alert-icon:before {
          content: "${errorIconContent}";
        }
        .c7n-alert-message {
          color: ${messageErrorColor};
        }
      }
      /* err */
      &.c7n-alert-success {
        border: 1px solid ${borderSuccessColor || "#6ee6c0"};
        background: ${backgroundSuccessColor};
        .c7n-alert-message {
          color: ${messageSuccessColor};
        }
        .c7n-alert-icon:before {
          content: "${successIconContent}";
        }
      }
      &.c7n-alert-with-description {
        // 多行时icon与第一行对齐
        i.c7n-alert-icon {
          top: ${iconTop + 6}px;
        }
      }
    }
  `;
};

export default createStyleComponent("comp/alert", alertStyle);
