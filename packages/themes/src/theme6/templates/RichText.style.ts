import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const RichText = (props: any) => {
  const { borderColor } = getThemeData(props, 'richtext');
  return css`
    .ql-container.ql-snow,
    .ql-toolbar.ql-snow {
      border-color: ${borderColor};
    }
    .c7n-pro-rich-text-quill.c7n-pro-rich-text-quill {
      height: calc(100% - 0.42rem);
    }
  `;
};

export default RichText;
