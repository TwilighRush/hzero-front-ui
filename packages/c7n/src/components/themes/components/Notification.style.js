import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const notificationStyle = (props) => {
  const data = getThemeData(props, "notification");
  const {
    fontFamily,
    fontSize,
    wrapWidth,
    wrapRadius,
    headColor,
    descriptionColor,
    successBg,
    infoBg,
    warnBg,
    errorBg,
    iconWidth,
    wordsMarginLeft,
    closeColor,
    middle,
    iconTop,
    iconMarginLeft,
    iconHeight,
    successIconBgColor = "",
    infoIconBgColor = "",
    warnIconBgColor = "",
    errorIconBgColor = "",
    successBodyBgColor = "",
    infoBodyBgColor = "",
    warnBodyBgColor = "",
    errorBodyBgColor = "",
  } = data;
  return css`
    .c7n-notification {
      && {
        .c7n-notification-notice {
          &.c7n-notification-notice-closable {
            border-radius: ${wrapRadius}px;
            padding: 0 0.12rem 0 0;
            .c7n-notification-notice-content {
              .c7n-notification-notice-with-icon {
                /* 左边颜色线 */
                .icon.c7n-notification-notice-icon {
                  top: 0;
                  margin: 0;
                  width: 0;
                  height: 100%;
                  &:before {
                    position: absolute;
                    content: "";
                    z-index: 2;
                    width: ${iconWidth}px;
                    height: ${typeof iconHeight === "number"
                      ? `${iconHeight}px`
                      : iconHeight};
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    top: ${iconTop}px;
                    ${middle ? `top: calc(50% - ${iconHeight / 2}px)` : ""};
                    margin: 0 0 0 ${iconMarginLeft}px;
                  }
                  &:after {
                    content: "";
                    border-radius: ${wrapRadius}px;
                    width: ${wrapWidth}px;
                    height: 100%;
                    position: absolute;
                    z-index: 0;
                  }
                  /* success */
                  &.icon-check.c7n-notification-notice-icon-success {
                    &:before {
                      background-color: ${successIconBgColor};
                      background-image: url(${successBg});
                    }
                    &:after {
                      background-color: ${successBodyBgColor};
                    }
                  }
                  /* info */
                  &.icon-info.c7n-notification-notice-icon-info {
                    &:before {
                      background-color: ${infoIconBgColor};
                      background-image: url(${infoBg});
                    }
                    &:after {
                      background-color: ${infoBodyBgColor};
                    }
                  }
                  /* warning */
                  &.icon-warning.c7n-notification-notice-icon-warning {
                    &:before {
                      background-color: ${warnIconBgColor};
                      background-image: url(${warnBg});
                    }
                    &:after {
                      background-color: ${warnBodyBgColor};
                    }
                  }
                  /* error */
                  &.icon-error.c7n-notification-notice-icon-error {
                    &:before {
                      background-color: ${errorIconBgColor};
                      background-image: url(${errorBg});
                    }
                    &:after {
                      background-color: ${errorBodyBgColor};
                    }
                  }
                }
              }
              /* 标题 */
              .c7n-notification-notice-message {
                margin-top: 0.12rem;
                margin-left: ${wordsMarginLeft}px;
                font-family: ${fontFamily};
                font-size: ${fontSize + 2}px;
                color: ${headColor};
                z-index: 2;
                position: relative;
              }
              /* 描述 */
              .c7n-notification-notice-description {
                margin-left: ${wordsMarginLeft}px;
                font-family: ${fontFamily};
                font-size: ${fontSize}px;
                padding-right: 0.12rem;
                color: ${descriptionColor};
                margin-bottom: 0.12rem;
                z-index: 2;
                position: relative;
              }
            }
            /* 关闭按钮 */
            .c7n-notification-notice-close {
              right: 0.12rem;
              top: 0.12rem;
              color: ${closeColor};
              z-index: 10;
            }
          }
        }
      }
    }
    .c7n-notification-notice:has(.icon-info) {
      background-color: red;
    }
  `;
};
export default createStyleComponent(
  "comp/notification",
  notificationStyle,
  true
);
