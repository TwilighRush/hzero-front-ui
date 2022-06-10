import { ComponentData } from '@hzero-front-ui/core';
import outputStyle from '../templates/Output.style';

const outputData: ComponentData = {
  name: 'output',
  data: [
    {
      fontSize: 12,
      fontWeight: '400',
      blockBorderRadius: '.04rem',
      blockFontSize: 12,
      blockHeight: '.2rem',
      blockLineHeight: '.2rem',
      blockPadding: '0.01rem 0.08rem',
      lineHeight: 28,
      floatLabelLineHeight: 18,
    },
  ],
  onlyTemplate: { pro: outputStyle },
};

export default outputData;
