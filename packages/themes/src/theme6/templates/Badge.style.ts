import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const getBadgeStyle = (props) => {
  const {
    dotWidth,
    dotHeight,
    errorBgColor,
    successBgColor,
    defaultBgColor,
    textColor,
    textFontSize,
  } = getThemeData(props, 'badge');
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .c7n-badge.c7n-badge {
      .c7n-badge-count,
      .c7n-badge-dot {
        box-shadow: none;
      }
      &.c7n-badge-status {
        vertical-align: middle;
      }
      &:not(.c7n-badge-status) {
        margin-right: 20px;
      }
      && {
        .c7n-badge-status-dot {
          width: ${dotWidth}px;
          height: ${dotHeight}px;
          vertical-align: initial;
          top: 0;
          margin-top: -1px;
        }
        .c7n-badge-count {
          background: ${errorBgColor};
        }
        .c7n-badge-status-text {
          font-size: ${textFontSize}px;
          color: ${textColor};
          line-height: 22px;
        }
        .c7n-badge-status-error {
          width: ${dotWidth - 2}px;
          height: ${dotHeight - 2}px;
          background: ${errorBgColor};
        }
        .c7n-badge-status-default {
          background: ${defaultBgColor};
        }
        .c7n-badge-status-processing {
          position: absolute;
          background-color: ${primary6};
          :after {
            display: none;
          }
        }
        .c7n-badge-status-success {
          background: ${successBgColor};
        }
      }
    }
  `;
};

export default getBadgeStyle;
