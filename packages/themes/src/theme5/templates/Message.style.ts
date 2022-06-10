import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getMessageStyle(props) {
  const {
    borderRadius,
    fontSize,
    fontLineHeight,
    iconFontSize,
    addPadding,
    noticeTop,
  } = getThemeData(props, 'message');
  const {
    successBgColor,
    infoBgColor,
    errorBgColor,
    warningBgColor,
    successColor,
    infoColor,
    errorColor,
    warningColor,
    titleColor2,
    boxShadow,
    iconfontFamily,
  } = getThemeData(props, 'common');
  return css`
    .c7n-message.c7n-message {
      line-height: 1;
      .c7n-message-notice-content {
        padding: ${noticeTop + addPadding}px 12px;
        box-shadow: ${boxShadow};
        border-radius: ${borderRadius};
        border: none;
        &.c7n-message-content-info {
          background: ${infoBgColor};
        }
        &.c7n-message-content-success {
          background: ${successBgColor};
        }
        &.c7n-message-content-error {
          background: ${errorBgColor};
        }
        &.c7n-message-content-warning {
          background: ${warningBgColor};
        }
      }
      .c7n-message-custom-content {
        &.c7n-message-info {
          .icon {
            color: ${infoColor};
          }
        }
        &.c7n-message-success {
          .icon {
            color: ${successColor};
          }
        }
        &.c7n-message-error {
          .icon {
            color: ${errorColor};
            &:before {
              content: '\\e734';
              font-family: ${iconfontFamily};
            }
          }
        }
        &.c7n-message-warning {
          .icon {
            color: ${warningColor};
            &:before {
              content: '\\e79b';
              font-family: ${iconfontFamily};
            }
          }
        }

        .icon {
          font-size: ${iconFontSize}px;
          line-height: ${fontLineHeight - 2}px;
        }
        .icon {
          + span {
            color: ${titleColor2};
            font-size: ${fontSize}px;
            line-height: ${fontLineHeight}px;
          }
        }
      }
      .c7n-message-notice {
        .c7n-message-loading {
          font-size: ${fontSize}px;
          .c7n-progress-loading {
            margin-right: 9px;
          }
          span {
            color: ${titleColor2};
          }
        }
      }
    }
  `;
}

export default getMessageStyle;
