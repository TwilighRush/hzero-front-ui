import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import { css } from 'styled-components';

const selectBoxData: ComponentData = {
  name: 'selectBox',
  data: [],
  onlyTemplate: {
    pro: css`
      .c7n-pro-select-box-float-label.c7n-pro-select-box-multiple .c7n-pro-select-box,
      .c7n-pro-select-box-float-label:not(.c7n-pro-select-box-multiple) .c7n-pro-select-box {
        min-height: unset;
      }
    `,
  },
};

export default selectBoxData;
