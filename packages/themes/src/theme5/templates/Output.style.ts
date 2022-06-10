import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const getOutputCss = (props) => {
  const {
    blockBorderRadius,
    blockFontSize,
    blockHeight,
    blockLineHeight,
    blockPadding,
    fontSize,
    fontWeight,
    lineHeight,
    floatLabelLineHeight,
  } = getThemeData(props, 'output');
  const { primary1, primary6, titleColor1, titleColor3 } = getThemeData(props, 'common');
  return css`
    .c7n-pro-output.c7n-pro-output {
      line-height: ${lineHeight}px;
      overflow-wrap: break-word;
      font-size: ${fontSize}px;
      color: ${titleColor1};
      font-weight: ${fontWeight};
      .c7n-pro-output-multiple-block {
        background: ${primary1};
        border-radius: ${blockBorderRadius};
        font-size: ${blockFontSize}px;
        color: ${primary6};
        height: ${blockHeight};
        line-height: ${blockLineHeight};
        padding: ${blockPadding};
      }
    }
    .c7n-pro-output-float-label.c7n-pro-output-float-label
      + .c7n-pro-field-label-wrapper
      .c7n-pro-field-label {
      top: -${lineHeight + floatLabelLineHeight / 2}px;
      color: ${titleColor3};
      line-height: ${floatLabelLineHeight}px;
    }
  `;
};

export default getOutputCss;
