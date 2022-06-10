import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const RadioCompStyle = (props: any) => {
  const {
    primary6,
    titleColor1,
    titleColor2,
    titleColor3,
    titleColor4,
    lineColor1,
    lineColor3,
    bgColor,
  } = getThemeData(props, 'common');
  const { radius, fontSize, iconSize, lineHeight } = getThemeData(props, 'radio');
  const { btnHeight } = getThemeData(props, 'radioButton');
  return css`
    .c7n-radio-wrapper.c7n-radio-wrapper {
      line-height: ${lineHeight}px;
      margin: 0;
      .c7n-radio-disabled,
      .c7n-radio {
        + span {
          color: ${titleColor1};
          font-size: ${fontSize}px;
        }
      }
      :hover:not(.c7n-radio-wrapper-disabled) {
        .c7n-radio-inner {
          border-color: ${primary6};
        }
      }
      .c7n-radio {
        .c7n-radio-inner {
          width: ${iconSize}px;
          height: ${iconSize}px;
          border-color: ${lineColor1};
        }
        &.c7n-radio-checked {
          :after {
            display: none;
          }
          .c7n-radio-inner {
            border: 5px solid ${primary6};
            background: #fff;
          }
        }
        &.c7n-radio-disabled {
          .c7n-radio-inner {
            border-color: ${lineColor1};
            background: ${lineColor3};
          }
          &.c7n-radio-checked {
            .c7n-radio-inner {
              border-color: ${titleColor4};
              background: #fff;
            }
          }
        }
      }
    }
    /* .c7n-radio-group-wrapper.c7n-radio-group-wrapper { */
    .c7n-radio-group.c7n-radio-group {
      font-size: ${fontSize}px;
      .c7n-radio-button-wrapper:first-child {
        border-radius: ${radius}px 0 0 ${radius}px !important;
      }
      .c7n-radio-button-wrapper:last-child {
        border-radius: 0 ${radius}px ${radius}px 0 !important;
      }
      .c7n-radio-button-wrapper {
        background: ${bgColor};
        height: ${btnHeight}px;
        line-height: ${btnHeight - 2}px;
        color: ${titleColor2};
        &:hover {
          color: ${primary6};
        }
        &.c7n-radio-button-wrapper-checked {
          border-color: ${primary6};
          color: ${primary6};
          box-shadow: -0.01rem 0 0 0 ${primary6};
        }
        &.c7n-radio-button-wrapper-disabled {
          background: ${lineColor3};
          color: ${titleColor3};
          border-color: ${lineColor1};
        }
      }
    }
    /* } */
  `;
};
export default RadioCompStyle;
