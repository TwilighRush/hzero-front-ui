import { ComponentData } from '@hzero-front-ui/core';
import outputStyle from '../templates/Output.style';

const outputData: ComponentData = {
  name: 'output',
  data: [
    {
      fontFamily: 'PingFangSC-Regular',
      fontSize: '.13rem',
      color: '#0F1358',
      fontWeight: '400',
      blockBackground: 'rgba(15,19,88,0.06)',
      blockBorderRadius: '.04rem',
      blockFontFamily: 'PingFangSC-Regular',
      blockFontSize: '.12rem',
      blockColor: '#0F1358',
      blockLineHeight: '.2rem',
      background: '#E6EBF5',
      blockPadding: '0 0.04rem',
      floatLineHeight: '.5rem',
    },
  ],
  onlyTemplate: { pro: outputStyle },
};

export default outputData;
