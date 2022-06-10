import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const alertStyle = (props: any) => {
  const {
    borderRadius,
    borderRadiusNew,
    border,
    height,
    alertIconFontSize,
    iconBeforeContent,
    iconBeforeDisplay,
    iconWidth,
    iconHeight,
    iconBackgroundRepeat,
    iconBackgroundPosition,
    iconBackgroundSize,
    iconInfoBackgroundImage,
    iconWarnBackgroundImage,
    iconErrorBackgroundImage,
    closeIconColor,
    borderInfoColor,
    backgroundInfoColor,
    messageInfoColor,
    borderWarnColor,
    backgroundWarnColor,
    messageWarnColor,
    borderErrorColor,
    backgroundErrorColor,
    messageErrorColor,
    borderSuccessColor,
    backgroundSuccessColor,
    messageSuccessColor,
    iconSuccessBackgroundImage,
    closeFontSize,
    infoIconWithDes,
    errorIconWithDes,
    warningIconWithDes,
    successIconwithDes,
    messageColor,
    descriptionColor,
    descriptionFontSize,
    messageFontsize,
  } = getThemeData(props, 'alert');
  const { iconfontFamily, successColor, infoColor, errorColor, warningColor } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-alert.c7n-alert {
      width: 100%;
      border-radius: ${borderRadius}px;
      border-radius: ${borderRadiusNew};
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      border: ${border};
      min-height: ${height}px;
      align-items: center;
      padding: 0.08rem 0.12rem 0.08rem 0.34rem;
      .c7n-alert-message {
        font-size: 0.14rem;
        line-height: 0.22rem;
        color: #5a6677;
        display: inline-block;
      }
      i.c7n-alert-icon {
        position: absolute;
        top: 50%;
        font-size: ${alertIconFontSize};
        transform: translateY(-50%);
        left: 0.12rem;
        &:before {
          content: ${iconBeforeContent};
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
            color: ${infoColor};
          }
        }
        &.icon-warning {
          background-image: url(${iconWarnBackgroundImage});
          &:before {
            color: ${warningColor};
          }
        }
        &.icon-error {
          background-image: url(${iconErrorBackgroundImage});
          &:before {
            color: ${errorColor};
          }
        }
        &.icon-check_circle {
          background-image: url(${iconSuccessBackgroundImage});
          &:before {
            color: ${successColor};
          }
        }
      }
      .c7n-alert-close-icon {
        top: unset;
        right: 0.16rem;
        color: #3889ff;
        font-size: 14px;
        transition: color 0.3s;
        i.icon {
          font-size: ${closeFontSize};
          color: ${closeIconColor || 'rgba(0, 0, 0, 0.45)'};
        }
      }
      /* info */
      &.c7n-alert-info {
        border: 1px solid ${borderInfoColor};
        background-color: ${backgroundInfoColor};

        .c7n-alert-message {
          color: ${messageInfoColor};
        }
      }
      /* warn */
      &.c7n-alert-warning {
        border: 1px solid ${borderWarnColor};
        background-color: ${backgroundWarnColor};
        .c7n-alert-message {
          color: ${messageWarnColor};
        }
      }
      /* err */
      &.c7n-alert-error {
        border: 1px solid ${borderErrorColor};
        background-color: ${backgroundErrorColor};
        .c7n-alert-message {
          color: ${messageErrorColor};
        }
      }
      /* success */
      &.c7n-alert-success {
        border: 1px solid ${borderSuccessColor};
        background-color: ${backgroundSuccessColor};
        .c7n-alert-message {
          color: ${messageSuccessColor};
        }
      }

      //包含描述
      &.c7n-alert-with-description {
        .c7n-alert-close-icon {
          top: 0.08rem;
        }
        .c7n-alert-icon {
          top: 16px;
          font-size: 21px;
          left: 24px;
        }
        .c7n-alert-message.c7n-alert-message {
          margin-left: 20px;
          font-size: ${messageFontsize}px;
          color: ${messageColor};
          line-height: 24px;
          font-weight: 500;
        }
        .c7n-alert-description {
          margin-left: 20px;
          font-size: ${descriptionFontSize}px;
          color: ${descriptionColor};
          letter-spacing: 0;
          line-height: 22px;
          font-weight: 400;
        }

        &.c7n-alert-info {
          .icon.c7n-alert-icon:before {
            font-family: ${iconfontFamily} !important;
            content: '${infoIconWithDes}';
          }
        }
        &.c7n-alert-warning {
          .icon.c7n-alert-icon:before {
            font-family: ${iconfontFamily} !important;
            content: '${warningIconWithDes}';
          }
        }
        &.c7n-alert-success {
          .icon.c7n-alert-icon:before {
            font-family: ${iconfontFamily} !important;
            content: '${successIconwithDes}';
          }
        }
        &.c7n-alert-error {
          .icon.c7n-alert-icon:before {
            font-family: ${iconfontFamily} !important;
            content: '${errorIconWithDes}';
          }
        }
      }
    }
  `;
};

export default alertStyle;
