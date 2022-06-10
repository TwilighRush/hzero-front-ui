import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const notificationStyle = (props) => {
  const {
    fontSize,
    wrapRadius,
    wordsMarginLeft,
    wordsMarginTop,
    middle,
    //行高
    titleFontSize,
    titleLineHeight,
    contentLineheight,
    //图标
    iconFontSize,
    iconTop,
    iconMarginLeft,
    iconHeight,
    iconWidth,
    btnMarginT,
    btnMarginB,
  } = getThemeData(props, 'notification');
  const {
    primary6,
    successColor,
    infoColor,
    errorColor,
    warningColor,
    titleColor1,
    titleColor2,
    titleColor3,
    iconfontFamily,
  } = getThemeData(props, 'common');
  return css`
    .c7n-notification.c7n-notification {
      && {
        .c7n-notification-notice {
          &.c7n-notification-notice-closable {
            border-radius: ${wrapRadius}px;
            padding: 0 0.12rem 0 0;
            .c7n-notification-notice-content {
              /* 图标 */
              .c7n-notification-notice-with-icon {
                .c7n-notification-notice-description,
                .c7n-notification-notice-message {
                  margin-left: 0.44rem;
                }
                .c7n-notification-notice-icon {
                  position: absolute;
                  font-size: inherit;
                  line-height: 1;
                  margin-left: ${wordsMarginLeft}px;
                  margin-top: ${iconTop}px;
                  .icon {
                    font-size: ${iconFontSize}px;
                  }
                }
                .icon.c7n-notification-notice-icon {
                  top: 0;
                  margin: 0;
                  width: 0;
                  height: 100%;
                  font-size: ${iconFontSize}px;
                  &:before {
                    position: absolute;
                    content: '';
                    z-index: 2;
                    width: ${iconWidth}px;
                    height: ${typeof iconHeight === 'number' ? `${iconHeight}px` : iconHeight};
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    top: ${iconTop}px;
                    ${middle ? `top: calc(50% - ${iconHeight / 2}px)` : ''};
                    margin: 0 0 0 ${iconMarginLeft}px;
                  }
                  /* success */
                  &.icon-check.c7n-notification-notice-icon-success {
                    &:before {
                      color: ${successColor};
                      content: '\\e738';
                      font-family: ${iconfontFamily};
                    }
                  }
                  /* info */
                  &.icon-info.c7n-notification-notice-icon-info {
                    &:before {
                      color: ${infoColor};
                      content: '\\e77d';
                      font-family: ${iconfontFamily};
                    }
                  }
                  /* warning */
                  &.icon-warning.c7n-notification-notice-icon-warning {
                    &:before {
                      color: ${warningColor};
                      content: '\\e79b';
                      font-family: ${iconfontFamily};
                    }
                  }
                  /* error */
                  &.icon-error.c7n-notification-notice-icon-error {
                    &:before {
                      color: ${errorColor};
                      content: '\\e734';
                      font-family: ${iconfontFamily};
                    }
                  }
                }
              }
              /* 标题 */
              .c7n-notification-notice-message {
                margin-top: ${wordsMarginTop}px;
                line-height: ${titleLineHeight}px;
                margin-left: ${wordsMarginLeft}px;
                font-size: ${titleFontSize}px;
                color: ${titleColor1};
                z-index: 2;
                position: relative;
                font-weight: 500;
                margin-bottom: 0.12rem;
              }
              /* 描述 */
              .c7n-notification-notice-description {
                margin-left: ${wordsMarginLeft}px;
                font-size: ${fontSize}px;
                padding-right: 8px;
                color: ${titleColor3};
                margin-bottom: ${wordsMarginLeft}px;
                line-height: ${contentLineheight}px;
                z-index: 2;
                position: relative;
              }
              /**底部按钮 */
              .c7n-notification-notice-btn {
                &.c7n-notification-notice-btn {
                  margin-bottom: ${btnMarginT}px;
                  margin-top: -${btnMarginB}px;
                }
              }
            }
            /* 关闭图标 */
            .c7n-notification-notice-close {
              right: ${wordsMarginLeft}px;
              top: 0.2rem;
              color: ${titleColor2};
              z-index: 10;
              line-height: 0.14rem;
            }
          }
        }
        .c7n-notification-alert {
          font-size: ${fontSize}px;
          line-height: ${contentLineheight}px;
          .c7n-notification-alert-close {
            &,
            &:hover {
              color: ${primary6};
            }
          }
        }
      }
    }
  `;
};
export default notificationStyle;
