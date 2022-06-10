import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

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
    iconHeight,
    iconTop,
    iconMarginLeft,
    wordsMarginLeft,
    closeColor,
    middle,
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
    .ant-notification {
      && {
        // margin-right: 24px;
        width: ${wrapWidth}px;
        .ant-notification-notice {
          &.ant-notification-notice-closable {
            border-radius: ${wrapRadius}px;
            padding: 0 12px 0 0;
            width: ${wrapWidth}px;
            .ant-notification-notice-content {
              .ant-notification-notice-with-icon {
                /* 左边颜色线 */
                .anticon.ant-notification-notice-icon {
                  height: 100%;
                  width: 0;
                  margin: 0;
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
                  &.anticon-check-circle-o.ant-notification-notice-icon-success {
                    &:before {
                      background: ${successIconBgColor};
                      background-image: url(${successBg});
                    }
                    &:after {
                      background-color: ${successBodyBgColor};
                    }
                  }
                  /* info */
                  &.anticon-info-circle-o.ant-notification-notice-icon-info {
                    &:before {
                      background: ${infoIconBgColor};
                      background-image: url(${infoBg});
                    }
                    &:after {
                      background-color: ${infoBodyBgColor};
                    }
                  }
                  /* warning */
                  &.anticon-exclamation-circle-o.ant-notification-notice-icon-warning {
                    &:before {
                      background: ${warnIconBgColor};
                      background-image: url(${warnBg});
                    }
                    &:after {
                      background-color: ${warnBodyBgColor};
                    }
                  }
                  /* error */
                  &.anticon-cross-circle-o.ant-notification-notice-icon-error {
                    &:before {
                      background: ${errorIconBgColor};
                      background-image: url(${errorBg});
                    }
                    &:after {
                      background-color: ${errorBodyBgColor};
                    }
                  }
                }
                /* 标题 */
                .ant-notification-notice-message {
                  margin-top: 12px;
                  margin-left: ${wordsMarginLeft}px;
                  font-family: ${fontFamily};
                  font-size: ${fontSize + 2}px;
                  color: ${headColor};
                  z-index: 2;
                  position: relative;
                }
                /* 描述 */
                .ant-notification-notice-description {
                  margin-left: ${wordsMarginLeft}px;
                  font-family: ${fontFamily};
                  font-size: ${fontSize}px;
                  padding-right: 12px;
                  color: ${descriptionColor};
                  margin-bottom: 12px;
                  z-index: 2;
                  position: relative;
                }
              }
            }
            /* 关闭按钮 */
            .ant-notification-notice-close {
              right: 12px;
              top: 12px;
              color: ${closeColor};
              z-index: 10;
            }
          }
        }
      }
    }
    .ant-notification-notice:has(.anticon-info-circle-o) {
      background-color: red;
    }
  `;
};
export default createStyleComponent("notification", notificationStyle, true);
