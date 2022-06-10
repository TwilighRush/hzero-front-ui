import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const notificationStyle = (props) => {
  const data = getThemeData(props, 'notification');
  const {
    fontSize,
    wrapWidth,
    wrapRadius,
    headColor,
    descriptionColor,
    successIcon,
    iconFontSize,
    iconWidth,
    wordsMarginLeft,
    wordsMarginTop,
    closeColor,
    middle,
    iconTop,
    iconMarginLeft,
    iconHeight,
  } = data;
  const { iconfontFamily, successColor, infoColor, errorColor, warningColor } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-notification.c7n-notification {
      && {
        width: ${wrapWidth}px;
        .c7n-notification-notice {
          box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
            0 9px 28px 8px rgba(0, 0, 0, 0.05);
          &.c7n-notification-notice-closable {
            border-radius: ${wrapRadius}px;
            padding: 0 0.12rem 0 0;
            width: ${wrapWidth}px;
            .c7n-notification-notice-content {
              .c7n-notification-notice-with-icon {
                .c7n-notification-notice-description,
                .c7n-notification-notice-message {
                  margin-left: 0.56rem;
                }
                .c7n-notification-notice-icon {
                  position: absolute;
                  margin-left: 0.24rem;
                  margin-top: ${iconTop}px;
                  font-size: inherit;
                  line-height: 1;
                  .icon {
                    font-size: 0.21rem;
                  }
                }
                /* 左边颜色线 */
                .icon.c7n-notification-notice-icon {
                  top: 0;
                  margin: 0;
                  width: 0;
                  height: 100%;
                  &:before {
                    position: absolute;
                    /* content: ''; */
                    z-index: 2;
                    font-size: ${iconFontSize}px;
                    width: ${iconWidth}px;
                    height: ${typeof iconHeight === 'number' ? `${iconHeight}px` : iconHeight};
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    top: ${iconTop}px;
                    ${middle ? `top: calc(50% - ${iconHeight / 2}px)` : ''};
                    margin: 0 0 0 ${iconMarginLeft}px;
                  }
                  &:after {
                    content: '';
                    border-radius: ${wrapRadius}px;
                    width: ${wrapWidth}px;
                    height: 100%;
                    position: absolute;
                    z-index: 0;
                  }
                  /* success */
                  &.icon-check.c7n-notification-notice-icon-success {
                    color: ${successColor};
                    &:before {
                      content: '${successIcon}';
                      font-family: ${iconfontFamily} !important;
                    }
                  }
                  /* info */
                  &.icon-info.c7n-notification-notice-icon-info {
                    color: ${infoColor};
                  }
                  /* warning */
                  &.icon-warning.c7n-notification-notice-icon-warning {
                    color: ${warningColor};
                  }
                  /* error */
                  &.icon-error.c7n-notification-notice-icon-error {
                    color: ${errorColor};
                  }
                }
              }
              /* 标题 */
              .c7n-notification-notice-message {
                margin-top: ${wordsMarginTop}px;
                font-weight: 500;
                line-height: 0.24rem;
                height: 0.24rem;
                margin-bottom: 0.12rem;
                margin-left: ${wordsMarginLeft}px;
                font-size: ${fontSize + 2}px;
                color: ${headColor};
                z-index: 2;
                position: relative;
              }
              /* 描述 */
              .c7n-notification-notice-description {
                margin-left: ${wordsMarginLeft}px;
                font-size: ${fontSize}px;
                padding-right: 0.12rem;
                color: ${descriptionColor};
                margin-bottom: 0.24rem;
                line-height: 0.22rem;
                z-index: 2;
                position: relative;
              }
              .c7n-notification-notice-btn {
                &.c7n-notification-notice-btn {
                  margin-bottom: 0.16rem;
                  margin-top: -0.12rem;
                }
                + .c7n-notification-notice-description {
                  margin-bottom: 0.12rem;
                }
              }
            }
            /* 关闭按钮 */
            .c7n-notification-notice-close {
              right: 0.24rem;
              top: 0.16rem;
              color: ${closeColor};
              z-index: 10;
              line-height: 0.14rem;
              .icon {
                font-size: 0.16rem;
              }
            }
          }
        }
      }
    }
    .c7n-notification-notice.c7n-notification-notice:has(.icon-info) {
      background-color: red;
    }
  `;
};
export default notificationStyle;
