import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
function colorPickerStyle(props: any) {
  const { iconfontFamily } = getThemeData(props, 'common');
  return css`
    .c7n-pro-color-picker-wrapper.c7n-pro-color-picker-wrapper {
      .c7n-pro-color-picker-color {
        width: 18px;
      }
      .c7n-pro-color-picker-color {
        display: inline-block;
      }
      .icon-palette:before {
        content: '\\e751';
        font-family: ${iconfontFamily};
      }
    }
    .c7n-pro-color-picker {
      padding-left: 32px !important;
    }
  `;
}
export default colorPickerStyle;
