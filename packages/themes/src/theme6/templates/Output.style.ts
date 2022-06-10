import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const getOutputCss = (props) => {
  const d = getThemeData(props, 'output');
  return css`
    .c7n-pro-output.c7n-pro-output {
      overflow-wrap: break-word;
      .c7n-pro-output-multiple-block {
        background: ${d.blockBackground};
        border-radius: ${d.blockBorderRadius};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        height: ${d.blockHeight};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }
    .c7n-pro-form.c7n-pro-form,
    .c7n-pro-form.c7n-pro-form .c7n-pro-output {
      font-size: ${d.fontSize};
      color: ${d.color};
      font-weight: ${d.fontWeight};
      line-height: 32px;
      padding-left: 12px;
      .c7n-pro-output-multiple-block {
        background: ${d.blockBackground};
        border-radius: ${d.blockBorderRadius};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }
  `;
};

export default getOutputCss;
