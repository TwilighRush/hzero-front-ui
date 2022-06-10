import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const PopconfirmStyle = (props) => {
  const { primary1, primary6, primary7, titleColor1, titleColor2, iconfontFamily } = getThemeData(
    props,
    'common'
  );
  const {
    rightButtonHeight,
    rightButtonMinWidth,
    iconContent,
    fontSize,
    lineHeight,
    titleMinHeight,
    titleMinWidth,
    titlePadding,
    contentPadding,
  } = getThemeData(props, 'popconfirm');
  return css`
    .c7n-popover.c7n-popover {
      .c7n-popover-content {
        .c7n-popover-inner {
          .c7n-popover-title {
            min-width: ${titleMinWidth}px;
            min-height: ${titleMinHeight}px;
            font-weight: 600;
            font-size: ${fontSize}px;
            line-height: ${lineHeight}px;
            color: ${titleColor1};
            padding: ${titlePadding};
            border-bottom: none;
            + .c7n-popover-inner-content {
              padding-top: 0;
            }
          }
          .c7n-popover-inner-content {
            padding: ${contentPadding};
            font-size: ${fontSize}px;
            color: ${titleColor2};
            line-height: ${lineHeight}px;
            .c7n-popover-message {
              padding: 0.04rem;
              padding-bottom: 0;
              font-size: ${fontSize}px;
              line-height: ${lineHeight}px;
              > .icon {
                line-height: 1.5;
              }
              .icon-warning {
                &:before {
                  content: '\\e79b';
                  font-family: ${iconfontFamily};
                }
              }
              .c7n-popover-message-title {
                padding: 0 0 0 22px;
              }
            }
            /* 按钮 */
            .c7n-popover-buttons {
              margin-bottom: 0;
              margin-top: 0.08rem;

              .c7n-btn.c7n-btn-sm {
                color: ${titleColor2};
                border: transparent;
                background-color: transparent;
                min-width: ${rightButtonMinWidth}px;
                padding: 0 8px;
                border-color: transparent;
                border-radius: 2px;
                height: ${rightButtonHeight}px;
                background-color: transparent;
                &:hover {
                  color: ${titleColor2};
                }
                &.c7n-btn-primary {
                  color: ${primary6};
                  &:hover,
                  &:focus,
                  &:active {
                    border-color: transparent;
                    background-color: transparent;
                    color: ${primary6};
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};
export default PopconfirmStyle;
