import { ComponentData } from '@hzero-front-ui/core';
import outputStyle from '../templates/Output.style';

const outputData: ComponentData = {
  name: 'output',
  data: [
    {
      fontFamily: '',
      fontSize: '.14rem',
      color: 'rgba(0,0,0,0.85)', // form外非输入框字体
      fontWeight: '400',
      blockBackground: '#F5F5F5',
      blockBorderRadius: '.02rem',
      blockFontFamily: '',
      blockFontSize: '.12rem',
      blockColor: 'rgba(0,0,0,0.85)',
      blockHeight: '.22rem',
      blockLineHeight: '.20rem',
      background: '#E6EBF5',
      blockPadding: '0.01rem 0.08rem',
      // lineHeight:'0.28rem'
    },
  ],
  onlyTemplate: outputStyle,
};

export default outputData;
