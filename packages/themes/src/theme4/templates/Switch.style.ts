import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

function getSwitchStyle(props: any) {
  const d = getThemeData(props, 'switch');

  return css`
    .c7n-pro-switch-wrapper,
    .c7n-pro-switch-lg,
    .c7n-pro-switch-sm {
      display: flex;
      align-items: center;
      && {
        padding: 0;
        .c7n-pro-switch {
          :checked + .c7n-progress-loading {
            left: auto !important;
            right: ${d.loadingInnerDistance}px;
            .c7n-progress-inner circle {
              stroke: ${d.loadingInnerStroke};
            }
          }
          :checked + .c7n-pro-switch-label,
          :checked + .c7n-progress-loading + .c7n-pro-switch-label {
            background: ${d.switchOnBg};
            padding: ${d.switchOnPadding};
            :after {
              background-image: url('${d.onEnableImage}');
              margin-left: -${d.handleWidth}px;
              transform: translateX(0);
              background-color: ${d.switchOnButtonBg};
            }
          }
        }
        .c7n-progress-loading.c7n-progress-loading {
          top: 5px;
          left: ${d.loadingInnerDistance}px !important;
          .c7n-progress-inner.c7n-progress-inner {
            width: ${d.loadingInnerSize}px;
            height: ${d.loadingInnerSize}px;
            circle {
              stroke: ${d.loadingInnerStroke};
            }
          }
        }
        .c7n-pro-switch-label {
          display: inline-block;
          transition: all 0.3s;
          box-sizing: border-box;
          height: ${d.switchHeight}px;
          min-width: ${d.switchMinWidth}px;
          border-radius: ${d.radius}px;
          background: ${d.switchBg};
          padding: ${d.switchPadding};
          line-height: ${d.switchHeight}px;
          text-align: center;
          :after {
            background-image: url('${d.offEnableImage}');
            background-size: cover;
            border-radius: ${d.handleRadius}px;
            width: ${d.handleWidth}px;
            height: ${d.handleHeight}px;
          }
        }
      }
    }
  `;
}

export default getSwitchStyle;
