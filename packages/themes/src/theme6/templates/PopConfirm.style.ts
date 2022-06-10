import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const PopconfirmStyle = (props) => {
  const { iconSize, fontSize, lineHeight, contentColor, headerColor } = getThemeData(
    props,
    'popconfirm'
  );
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .c7n-popover.c7n-popover {
      .c7n-popover-content {
        .c7n-popover-inner {
          box-shadow: 0 10px 32px 0 rgba(38, 38, 38, 0.18);
          border-radius: 2px;
          .c7n-popover-title {
            min-width: 1.72rem;
            font-weight: 500;
            font-size: ${fontSize}px;
            color: ${headerColor};
            line-height: ${lineHeight}px;
            padding: 0.05rem 0.08rem;
            + .c7n-popover-inner-content {
              padding: 0.08rem;
              font-size: ${fontSize}px;
              color: ${contentColor};
              line-height: ${lineHeight}px;
            }
          }
          .c7n-popover-inner-content {
            padding: 0.16rem;
            width: 1.72rem;
            .c7n-popover-message {
              padding: 0;
              line-height: ${lineHeight}px;
              color: ${contentColor};
              .c7n-popover-message-title {
                font-size: ${fontSize}px;
              }
              > .icon {
                line-height: initial;
                color: ${infoColor};
                font-size: ${iconSize}px;
                margin-top: 4px;
              }
            }
            //按钮
            .c7n-popover-buttons {
              margin-bottom: 0;
              margin-top: 0.12rem;
            }
          }
        }
      }
    }
  `;
};
export default PopconfirmStyle;
