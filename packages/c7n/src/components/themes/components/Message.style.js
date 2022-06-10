import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getMessageStyle(props) {
  const {
    infoBackground,
    infoBorder,
    infoBoxShadow,
    infoBorderRadius,
    infoBorderLeft,
    successBackground,
    successBorder,
    successBoxShadow,
    successBorderRadius,
    successBorderLeft,
    errorBackground,
    errorBorder,
    errorBoxShadow,
    errorBorderRadius,
    errorBorderLeft,
    warningBackground,
    warningBorder,
    warningBoxShadow,
    warningBorderRadius,
    warningBorderLeft,
    warningIconContent = "\\e002",
    errorIconContent = "\\E5C9",
    infoIconColor,
    successIconColor,
    errorIconColor,
    warningIconColor,
    fontSize,
    fontLineHeight,
    fontColor,
  } = getThemeData(props, "message");

  return css`
    .c7n-message.c7n-message {
      .c7n-message-notice-content {
        &.c7n-message-content-info {
          background: ${infoBackground};
          border: ${infoBorder};
          box-shadow: ${infoBoxShadow};
          border-radius: ${infoBorderRadius};
          border-left: ${infoBorderLeft};
        }
        &.c7n-message-content-success {
          background: ${successBackground};
          border: ${successBorder};
          box-shadow: ${successBoxShadow};
          border-radius: ${successBorderRadius};
          border-left: ${successBorderLeft};
        }
        &.c7n-message-content-error {
          background: ${errorBackground};
          border: ${errorBorder};
          box-shadow: ${errorBoxShadow};
          border-radius: ${errorBorderRadius};
          border-left: ${errorBorderLeft};
        }
        &.c7n-message-content-warning {
          background: ${warningBackground};
          border: ${warningBorder};
          box-shadow: ${warningBoxShadow};
          border-radius: ${warningBorderRadius};
          border-left: ${warningBorderLeft};
        }
      }
      .c7n-message-custom-content {
        &.c7n-message-info {
          .icon {
            color: ${infoIconColor};
          }
        }
        &.c7n-message-success {
          .icon {
            color: ${successIconColor};
          }
        }
        &.c7n-message-error {
          .icon {
            color: ${errorIconColor};
            &:before {
              content: "${errorIconContent || "\\e000"}";
            }
          }
        }
        &.c7n-message-warning {
          .icon {
            color: ${warningIconColor};
            :before {
              content: "${warningIconContent || "\\e000"}";
            }
          }
        }
        .icon {
          + span {
            color: ${fontColor};
            font-size: ${fontSize};
            line-height: ${fontLineHeight};
          }
        }
      }
    }
  `;
}

export default createStyleComponent("comp/message", getMessageStyle, true);
