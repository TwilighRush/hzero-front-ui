import { css } from 'styled-components';

import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

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
    successIconContent = '',
    iconSuccessBackgroundImage,
  } = getThemeData(props, 'alert');
  const {
    primary,
    successColor = '#39c878',
    infoColor = primary,
    errorColor = '#fd6868',
    warningColor = '#f8b303',
  } = getThemeData(props, 'common');
  return css`
    .c7n-alert.c7n-alert {
      border-radius: ${borderRadius}px;
      border-radius: ${borderRadiusNew};
      border: ${border};
      min-height: ${height}px;
      padding: 0.1rem 0.12rem 0.1rem 0.34rem;
      .c7n-alert-close-wrapper {
        padding: 0;
      }
      &.c7n-alert-with-description .c7n-alert-close-wrapper {
        height: 14px;
      }
      .c7n-alert-message {
        // font-family: PingFangSC-Regular;
        font-size: 0.13rem;
        line-height: 0.2rem;
        color: #5a6677;
      }
      i.c7n-alert-icon {
        position: absolute;
        top: ${iconTop}px;
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
        color: ${closeIconColor || 'rgba(0, 0, 0, 0.45)'};
        transition: color 0.3s;
        line-height: 0.2rem;

        i.icon {
          font-size: ${iconFontSize};
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
          content: '${infoIconContent}';
        }
      }
      /* warn */
      &.c7n-alert-warning {
        border: 1px solid ${borderWarnColor};
        background: ${backgroundWarnColor};
        .c7n-alert-icon:before {
          content: '${warningIconContent}';
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
          content: '${errorIconContent}';
        }
        .c7n-alert-message {
          color: ${messageErrorColor};
        }
      }
      /* err */
      &.c7n-alert-success {
        border: 1px solid ${borderSuccessColor || '#6ee6c0'};
        background: ${backgroundSuccessColor};
        .c7n-alert-message {
          color: ${messageSuccessColor};
        }
        .c7n-alert-icon:before {
          content: '${successIconContent}';
        }
      }
      &.c7n-alert-with-description {
        // 多行时icon与第一行对齐
        i.c7n-alert-icon {
          top: ${iconTop + 1}px;
        }
      }
    }
  `;
};

export default alertStyle;
