import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const alertStyle = (props: any) => {
  const {
    fontSize,
    lineHeight,
    borderRadius,
    border,
    height,
    alertIconFontSize,
    iconWidth,
    iconHeight,
    iconBackgroundRepeat,
    iconBackgroundPosition,
    iconBackgroundSize,
    iconFontSize,
    alertPadding,
    warningBackgroundImage,
    successBackgroundImage,
    errorBackgroundImage,
    infoBackgroundImage,
    iconPositionTop,
    iconPositionLeft,
    iconPaddingLeft,
    addPadding,
  } = getThemeData(props, 'alert');
  const {
    primary6,
    successColor,
    infoColor,
    errorColor,
    warningColor,
    successBgColor,
    infoBgColor,
    errorBgColor,
    warningBgColor,
    titleColor2,
  } = getThemeData(props, 'common');
  return css`
    .c7n-alert.c7n-alert {
      border-radius: ${borderRadius}px;
      border: ${border};
      min-height: ${height}px;
      line-height: ${lineHeight}px;
      padding-top: ${alertPadding + addPadding}px;
      padding-bottom: ${alertPadding + addPadding}px;
      padding-left: ${iconPaddingLeft}px;
      background-repeat: no-repeat;
      background-size: 198px;
      background-position: top right;
      .c7n-alert-close-wrapper {
        height: ${iconHeight}px;
        padding: 0;
      }
      .c7n-alert-message {
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        color: ${titleColor2};
      }
      .c7n-alert-description {
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        color: ${titleColor2};
      }
      i.c7n-alert-icon {
        position: absolute;
        font-size: ${alertIconFontSize};
        width: ${iconWidth}px;
        height: ${iconHeight}px;
        left: ${iconPositionLeft};
        top: ${iconPositionTop + addPadding * 2}px;
        &.icon-info {
          color: ${infoColor};
        }
        &.icon-warning {
          color: ${warningColor};
        }
        &.icon-error {
          color: ${errorColor};
        }
        &.icon-check_circle {
          color: ${successColor};
        }
      }
      .c7n-alert-close-icon {
        color: ${primary6};
        transition: color 0.3s;
        line-height: 14px;
        font-size: ${fontSize}px;
        i.icon {
          color: ${titleColor2};
          font-size: ${iconFontSize};
        }
      }

      /* info */
      &.c7n-alert-info {
        background-color: ${infoBgColor};
        background-image: url(${infoBackgroundImage});
      }
      /* warn */
      &.c7n-alert-warning {
        background-color: ${warningBgColor};
        background-image: url(${warningBackgroundImage});
      }
      /* err */
      &.c7n-alert-error {
        background-color: ${errorBgColor};
        background-image: url(${errorBackgroundImage});
      }
      /* success */
      &.c7n-alert-success {
        background-color: ${successBgColor};
        background-image: url(${successBackgroundImage});
      }
      &.c7n-alert.c7n-alert-no-icon {
        padding-top: ${alertPadding};
        padding-bottom: ${alertPadding};
        padding-left: 12px;
        /* padding: 0.04rem 0.12rem; */
      }
    }
  `;
};

export default alertStyle;
