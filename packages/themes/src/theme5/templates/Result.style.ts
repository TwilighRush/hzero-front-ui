import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const Result = (props: any) => {
  const {
    iconSize,
    titleFontSize,
    subTitleFontSize,
    iconMarginB,
    titleLineHeight,
    subTFontHeight,
    buttonMarginT,
    titleBottom,
  } = getThemeData(props, 'result');
  const {
    successColor,
    infoColor,
    errorColor,
    warningColor,
    titleColor1,
    titleColor3,
    iconfontFamily,
  } = getThemeData(props, 'common');
  return css`
    .c7n-result.c7n-result {
      .c7n-result-icon {
        margin-bottom: ${iconMarginB}px;
        .icon {
          font-size: ${iconSize}px;
          line-height: 0;
        }
      }
      .c7n-result-title {
        font-size: ${titleFontSize}px;
        color: ${titleColor1};
        line-height: ${titleLineHeight}px;
        margin-bottom: ${titleBottom}px;
      }
      .c7n-result-subtitle {
        font-size: ${subTitleFontSize}px;
        line-height: ${subTFontHeight}px;
        color: ${titleColor3};
      }
      .c7n-result-extra {
        margin-top: ${buttonMarginT}px;
        line-height: 0;
        > * {
          margin-right: 0;
        }
      }
      &.c7n-result-success {
        .icon {
          color: ${successColor};
        }
      }
      &.c7n-result-info {
        .icon {
          color: ${infoColor};
        }
      }
      &.c7n-result-warning {
        .icon {
          color: ${warningColor};
          :before {
            content: '\\e79b';
            font-family: ${iconfontFamily};
          }
        }
      }
      &.c7n-result-error {
        .icon {
          color: ${errorColor};
          :before {
            content: '\\e734';
            font-family: ${iconfontFamily};
          }
        }
      }
    }
  `;
};

export default Result;
