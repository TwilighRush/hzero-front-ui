import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function getSwitchStyle(props: any) {
  const {
    switchHeight,
    switchWidth,
    switchPadding,
    handleRadius,
    handleWidth,
    handleHeight,
    marginRight,
    fontSize,
    lineHeight,
    loadingInnerSize,
    smLoadingInnerSize,
    loadingInnerDistance,
    smLoadingInnerDistance,
    loadingStroke,
  } = getThemeData(props, 'switch');
  const {
    primary1,
    primary2,
    primary6,
    primary3,
    titleColor3,
    titleColor4,
    lineColor1,
    lineColor2,
  } = getThemeData(props, 'common');
  return css`
    .c7n-pro-switch-focused .c7n-pro-switch-label {
      box-shadow: none;
    }
    .c7n-pro-switch-wrapper.c7n-pro-switch-wrapper {
      height: ${switchHeight}px;
      margin-top: ${(lineHeight - switchHeight) / 2}px;
      margin-bottom: ${(lineHeight - switchHeight) / 2}px;
      &&,
      &&.c7n-pro-switch-lg {
        padding: 0;
        .c7n-pro-switch:disabled + .c7n-pro-switch-label,
        .c7n-pro-switch:disabled + .c7n-progress-loading + .c7n-pro-switch-label {
          opacity: 1;
        }
        .c7n-pro-switch:disabled {
          + .c7n-pro-switch-label,
          + .c7n-progress-loading + .c7n-pro-switch-label {
            transition: all 0.3s;
            box-sizing: border-box;
            height: ${switchHeight}px;
            min-width: ${switchWidth}px;
            border-radius: ${switchHeight / 2}px;
            background: ${lineColor2};
            line-height: ${switchHeight}px;
            text-align: center;
            font-size: ${fontSize}px;
            color: ${titleColor4};
            padding-right: ${switchPadding}px;
            padding-left: 20px;
            :after {
              background-size: cover;
              border-radius: ${handleRadius}px;
              width: ${handleWidth}px;
              height: ${handleHeight}px;
              margin-left: ${marginRight}px;
              box-shadow: none;
              opacity: 1;
              background-color: ${titleColor4};
            }
            .icon {
              font-size: ${fontSize}px;
              color: ${titleColor4};
              line-height: 0;
            }
          }
          :checked + .c7n-pro-switch-label,
          :checked + .c7n-progress-loading + .c7n-pro-switch-label {
            background: ${primary1};
            padding-left: ${switchPadding}px;
            padding-right: 20px;
            box-shadow: none;
            color: ${primary3};
            border-color: ${primary2};
            :after {
              margin-left: -${handleWidth + marginRight}px;
              transform: translateX(0);
              background-color: ${primary3};
              box-shadow: none;
            }
            .icon {
              color: ${primary3};
            }
          }
        }
        .c7n-pro-switch {
          // 选中样式
          :checked + .c7n-progress-loading {
            left: auto;
            right: ${loadingInnerDistance}px;
          }
          :checked + .c7n-pro-switch-label,
          :checked + .c7n-progress-loading + .c7n-pro-switch-label {
            background: ${primary1};
            padding-left: ${switchPadding}px;
            padding-right: 20px;
            box-shadow: none;
            color: ${primary6};
            border-color: ${primary2};
            :after {
              margin-left: -${handleWidth + marginRight}px;
              transform: translateX(0);
              background-color: ${primary6};
              box-shadow: none;
            }
            .icon {
              color: ${primary6};
            }
          }
        }
        // loading
        .c7n-progress-loading {
          top: 4px;
          left: ${loadingInnerDistance}px;
          .c7n-progress-inner {
            width: ${loadingInnerSize}px;
            height: ${loadingInnerSize}px;
            circle {
              stroke: ${loadingStroke};
            }
          }
        }
        //正常样式
        .c7n-pro-switch-label {
          /* all 中的 background 会导致圆点过渡途中消失 */
          /* transition: all 0.3s; */
          box-sizing: border-box;
          height: ${switchHeight}px;
          min-width: ${switchWidth}px;
          border-radius: ${switchHeight / 2}px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: ${lineColor1};
          line-height: ${switchHeight}px;
          text-align: center;
          font-size: ${fontSize}px;
          color: ${titleColor3};
          padding-right: ${switchPadding}px;
          padding-left: 20px;
          :after {
            background-size: cover;
            border-radius: 50%;
            width: ${handleWidth}px;
            height: ${handleHeight}px;
            margin-left: ${marginRight}px;
            box-shadow: none;
            opacity: 1;
            background-color: ${titleColor3};
          }
          .icon {
            font-size: ${fontSize}px;
            color: ${titleColor3};
            line-height: 0;
          }
        }
      }
      /* 小按钮 */
      &&.c7n-pro-switch-sm {
        height: 16px;
        margin-top: ${(lineHeight - 16) / 2}px;
        margin-bottom: ${(lineHeight - 16) / 2}px;
        // loading
        .c7n-progress-loading {
          top: 3px;
          left: ${smLoadingInnerDistance}px;
          .c7n-progress-inner {
            width: ${smLoadingInnerSize}px;
            height: ${smLoadingInnerSize}px;
          }
        }
        /* 宽高+after */
        .c7n-pro-switch-label {
          height: 16px;
          min-width: 28px;
          border-radius: 8px;
          ::after {
            width: 12px;
            height: 12px;
            margin-left: 2px;
          }
        }
        /* 选中 */
        .c7n-pro-switch:checked + .c7n-pro-switch-label::after {
          margin-left: -14px;
        }
        .c7n-pro-switch:checked + .c7n-progress-loading {
          left: auto;
          right: ${smLoadingInnerDistance + 4}px;
          + .c7n-pro-switch-label::after {
            margin-left: -14px;
          }
        }
        /* 禁用选中 */
        .c7n-pro-switch:checked:disabled + .c7n-pro-switch-label::after,
        .c7n-pro-switch:checked:disabled + .c7n-progress-loading + .c7n-pro-switch-label::after {
          margin-left: -14px;
        }
        /* 禁用 */
        .c7n-pro-switch:disabled + .c7n-pro-switch-label,
        .c7n-pro-switch:disabled + .c7n-progress-loading + .c7n-pro-switch-label {
          height: 16px;
          min-width: 28px;
          ::after {
            margin-left: 2px;
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  `;
}

export default getSwitchStyle;
