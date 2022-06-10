import { ComponentData } from '@hzero-front-ui/core';
import tagStyle from '../templates/Tag.style';
import tagHzeroStyle from '../templates-hzero/Tag.style';
const tagData: ComponentData = {
  name: 'tag',
  data: [
    {
      c7nTextColor: 'rgba(0,0,0,0.65)',
      c7nBackground: 'rgba(0,0,0,0.04)',
      border: '1px solid rgba(0,0,0,0.15)',

      padding: '0.02rem 0.07rem',
      c7nBorderRadius: '0.02rem',
      fontFamily: '',
      color: '#415BC9',
      geekblueColor: '#5365EA',
      greenColor: '#20D489',
      greenBackground: 'rgba(32,212,137,0.12)',
      greenBorder: '#87E8DE',

      closeContent: `\\e70f`,
    },
  ],
  onlyTemplate: [tagStyle, tagHzeroStyle],
};

export default tagData;
