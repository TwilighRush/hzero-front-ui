import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getMessageStyle(props) {
  const {
    infoBackground,
    infoBoxShadow,
    infoBorderRadius,

    successBackground,
    successBoxShadow,
    successBorderRadius,

    errorBackground,
    errorBoxShadow,
    errorBorderRadius,

    warningBackground,
    warningBoxShadow,
    warningBorderRadius,

    fontSize,
    fontLineHeight,
    fontColor,
    iconFontSize,
    iconTop,
  } = getThemeData(props, 'message');
  const { infoColor, successColor, errorColor, warningColor } = getThemeData(props, 'common');
  return css`
    .c7n-message.c7n-message {
      .c7n-message-notice-content {
        padding: 0.12rem 0.15rem 0.12rem 0.16rem;
        line-height: ${fontLineHeight};
        border: none;
        &.c7n-message-content-info {
          background: ${infoBackground};
          box-shadow: ${infoBoxShadow};
          border-radius: ${infoBorderRadius};
        }
        &.c7n-message-content-success {
          background: ${successBackground};
          box-shadow: ${successBoxShadow};
          border-radius: ${successBorderRadius};
        }
        &.c7n-message-content-error {
          background: ${errorBackground};
          box-shadow: ${errorBoxShadow};
          border-radius: ${errorBorderRadius};
        }
        &.c7n-message-content-warning {
          background: ${warningBackground};
          box-shadow: ${warningBoxShadow};
          border-radius: ${warningBorderRadius};
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
          }
        }
        &.c7n-message-warning {
          .icon {
            color: ${warningColor};
          }
        }
        .icon {
          font-size: ${iconFontSize};
          top: ${iconTop};
          margin-right: 0.08rem;
          + span {
            color: ${fontColor};
            font-size: ${fontSize};
          }
        }
      }
    }
  `;
}

export default getMessageStyle;
