import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const RichText = (props: any) => {
  const {lineColor1} = getThemeData(props,"common");
  return css`
    .ql-container.ql-snow,
    .ql-toolbar.ql-snow {
      border-color: ${lineColor1};
    }
    .c7n-pro-rich-text-quill.c7n-pro-rich-text-quill {
      height: calc(100% - 0.42rem);
    }
  `;
};

export default RichText;
