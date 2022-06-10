import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const getBadgeStyle = (props) => {
  const { textFontSize } = getThemeData(props, 'badge');
  const { successColor, errorColor, warningColor, primary6, titleColor2 } = getThemeData(
    props,
    'common'
  );
  return css`
    .c7n-badge.c7n-badge {
      line-height: 0;
      .c7n-badge-status-text {
        font-size: ${textFontSize}px;
        color: ${titleColor2};
      }
      .c7n-badge-count,
      .c7n-badge-dot {
        box-shadow: none;
        background: ${errorColor};
      }
      &.c7n-badge-status {
        vertical-align: middle;
      }

      .c7n-badge-status-dot {
        vertical-align: initial;
      }
      //color
      && {
        .c7n-badge-status-pink {
          background: #eb2f96;
        }
        .c7n-badge-status-magenta {
          background: #eb2f96;
        }
        .c7n-badge-status-red {
          background: #d50000;
        }
        .c7n-badge-status-volcano {
          background: #fa541c;
        }
        .c7n-badge-status-orange {
          background: #fa8c16;
        }
        .c7n-badge-status-yellow {
          background: #fadb14;
        }
        .c7n-badge-status-gold {
          background: #faad14;
        }
        .c7n-badge-status-cyan {
          background: #13c2c2;
        }
        .c7n-badge-status-lime {
          background: #a0d911;
        }
        .c7n-badge-status-green {
          background: #00bf96;
        }
        .c7n-badge-status-blue {
          background: #3f51b5;
        }
        .c7n-badge-status-geekblue {
          background: #2f54eb;
        }
        .c7n-badge-status-purple {
          background: #8e44ad;
        }
        .c7n-badge-status-dark {
          background: #2f353b;
        }
        .c7n-badge-status-gray {
          background: #808080;
        }
      }
      //状态，优先级比color低
      & {
        .c7n-badge-status-error {
          background: ${errorColor};
        }
        .c7n-badge-status-processing {
          position: absolute;
          background-color: ${primary6};
          :after {
            display: none;
          }
          + .c7n-badge-status-text {
            margin-left: 14px;
          }
        }
        .c7n-badge-status-success {
          background: ${successColor};
        }
        .c7n-badge-status-warning {
          background-color: ${warningColor};
        }
      }
    }
  `;
};

export default getBadgeStyle;
