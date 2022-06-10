import { css } from 'styled-components';
import { getThemeData, createStyleComponent } from '@hzero-front-ui/core';

const getOutputCss = (props) => {
  const d = getThemeData(props, 'output');
  const color = getThemeData(props, 'common');
  const di = getThemeData(props, 'input');
  return css`
    .c7n-pro-output.c7n-pro-output {
      overflow-wrap: break-word;
      .c7n-pro-output-multiple-block {
        background: ${d.blockBackground};
        border-radius: ${d.blockBorderRadius};
        font-family: ${d.blockFontFamily};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }
    .c7n-pro-form,
    .c7n-pro-form .c7n-pro-output {
      font-family: ${d.fontFamily};
      font-size: ${d.fontSize};
      color: ${d.color};
      line-height: ${d.lineHeight};
      font-weight: ${d.fontWeight};
      .c7n-pro-output-multiple-block {
        background: ${d.blockBackground};
        border-radius: ${d.blockBorderRadius};
        font-family: ${d.blockFontFamily};
        font-size: ${d.blockFontSize};
        color: ${d.blockColor};
        line-height: ${d.blockLineHeight};
        padding: ${d.blockPadding};
      }
    }
    .c7n-pro-form-float .c7n-pro-output-float-label {
      line-height: ${d.floatLineHeight};
      & + .c7n-pro-field-label-wrapper .c7n-pro-field-label {
        top: -${d.floatLineHeight};
        color: ${di.baseLabelFontColor};
        justify-content: flex-start;
      }
    }
  `;
};

export default getOutputCss;
