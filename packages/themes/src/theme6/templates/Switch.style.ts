import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getSwitchStyle(props: any) {
  const d = getThemeData(props, 'switch');
  const color = getThemeData(props, 'common');
  return css`
    .c7n-pro-switch-wrapper.c7n-pro-switch-wrapper {
      /* height: ${d.switchHeight}px; */

      padding: 0;
      .c7n-pro-switch:disabled + .c7n-pro-switch-label {
        opacity: 1;
      }
      //:disabled的样式
      .c7n-pro-switch:disabled {
        + .c7n-pro-switch-label {
          display: inline-block;
          transition: all 0.3s;
          box-sizing: border-box;
          border-radius: ${d.radius}px;

          background: rgba(0, 0, 0, 0.15);
          line-height: ${d.switchHeight}px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          padding-right: ${d.switchPadding}px;
          padding-left: 20px;
          :after {
            background-size: cover;
            border-radius: ${d.handleRadius}px;
            margin-left: ${d.marginRight}px;
            box-shadow: none;
            opacity: 1;
            background-color: #fff;
          }
          .icon {
            font-size: 12px;
            color: #fff;
          }
        }
        :checked + .c7n-pro-switch-label {
          background: ${color.primary6};
          padding-left: ${d.switchPadding}px;
          padding-right: 20px;
          box-shadow: none;
          color: #fff;
          :after {
            margin-left: -${d.handleWidth + d.marginRight}px;
            transform: translateX(0);
            background-color: #fff;
            box-shadow: none;
          }
          .icon {
            color: #fff;
          }
        }
      }
      .c7n-pro-switch {
        // 选中样式
        :checked + .c7n-pro-switch-label {
          background: ${color.primary6};
          padding-left: ${d.switchPadding}px;
          padding-right: 20px;
          box-shadow: none;
          color: #fff;
          :after {
            margin-left: -${d.handleWidth + d.marginRight}px;
            transform: translateX(0);
            background-color: #fff;
            box-shadow: none;
          }
          .icon {
            color: #fff;
          }
        }
      }
      //正常样式
      .c7n-pro-switch-label {
        display: inline-block;
        transition: all 0.3s;
        box-sizing: border-box;
        height: ${d.switchHeight}px;
        min-width: ${d.switchWidth}px;
        border-radius: ${d.radius}px;

        background: rgba(0, 0, 0, 0.25);
        line-height: ${d.switchHeight}px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        padding-right: ${d.switchPadding}px;
        padding-left: 20px;
        :after {
          border-radius: ${d.handleRadius}px;
          width: ${d.handleWidth}px;
          height: ${d.handleHeight}px;
          margin-left: ${d.marginRight}px;
          box-shadow: none;
          opacity: 1;
          background-color: #fff;
        }
        .icon {
          font-size: 12px;
          color: #fff;
          margin-bottom: 1px;
        }
      }
    }
    .c7n-pro-switch-wrapper.c7n-pro-switch-wrapper {
      &.c7n-pro-switch-sm {
        .c7n-pro-switch:disabled {
          :checked + .c7n-pro-switch-label {
            :after {
              margin-left: -14px;
            }
          }
        }
        .c7n-pro-switch {
          :checked + .c7n-pro-switch-label {
            height: ${d.smswitchHeight}px;
            min-width: ${d.smswitchWidth}px;
            :after {
              width: ${d.smswitchHeight - 4}px;
              height: ${d.smswitchHeight - 4}px;
              border-radius: ${(d.smswitchHeight - 4) / 2}px;
              margin-left: -14px;
            }
          }
        }
        .c7n-pro-switch-label {
          height: ${d.smswitchHeight}px;
          min-width: ${d.smswitchWidth}px;
          :after {
            width: ${d.smswitchHeight - 4}px;
            height: ${d.smswitchHeight - 4}px;
            border-radius: ${(d.smswitchHeight - 4) / 2}px;
          }
          .c7n-pro-switch:active + .c7n-pro-switch-label:after {
            width: ${d.smswitchHeight - 4}px;
            height: ${d.smswitchHeight - 4}px;
            border-radius: ${(d.smswitchHeight - 4) / 2}px;
          }
        }
      }
      &.c7n-pro-switch-lg {
        .c7n-pro-switch-label {
          height: ${d.lgswitchHeight}px;
          min-width: ${d.lgswitchWidth}px;
        }
        .c7n-pro-switch:active + .c7n-pro-switch-label:after {
          width: ${d.handleWidth}px;
          height: ${d.handleHeight}px;
        }
      }
    }
  `;
}

export default getSwitchStyle;
