import { ComponentData } from '@hzero-front-ui/core';
import tagStyle from '../templates/Tag.style';

const tagData: ComponentData = {
  name: 'tag',
  data: [
    {
      c7nTextColor: '#0F1358',
      c7nBackground: 'rgba(15,19,88,0.06)',
      padding: '0 0.04rem',
      c7nBorderRadius: '0.04rem',
      border: 'none',
      fontFamily: '',
      color: '#415BC9',
      // greenBackground: '#E6FFFB',
      // greenBorder: '#87E8DE',
      background: 'rgba(83,101,234,0.08)',
      // color 覆盖
      geekblueColor: '#5365EA',
      geekblueBg: '#F0F5FF',
      geekblueBorderColor: '#ADC6FF',
      greenColor: '#1FC2BB',
      greenBg: '#E6FFFB',
      greenBorderColor: '#87E8DE',
      magentaColor: '#F76776',
      magentaBg: '#FFF0F6',
      magentaBorderColor: '#FFADD2',
      redColor: '#F76776',
      redBg: '#FFF1F0',
      redBorderColor: '#FFA39E',
      orangeColor: '#FA8C16',
      orangeBg: '#FFF7E6',
      orangeBorderColor: '#FFD591',
      blueColor: '#4D90FE',
      blueBg: '#E6F7FF',
      blueBorderColor: '#91D5FF',
      volcanoColor: '#FA541C',
      volcanoBg: '#FFF2E8',
      volcanoBorderColor: '#FFBB96',
      goldColor: '#FAAD14',
      goldBg: '#FFFBE6',
      goldBorderColor: '#FFE58F',
      purpleColor: '#722ED1',
      purpleBg: '#F9F0FF',
      purpleBorderColor: '#D3ADF7',
      grayColor: 'rgba(0,0,0,0.35);',
      grayBg: '#F8F8F8',
      grayBorderColor: 'rgba(0,0,0,0.2)',
      // color-inverse 覆盖
      geekblueInverseBg: '#5365EA',
      greenInverseBg: '#1FC2BB',
      magentaInverseBg: '#FD729C',
      redInverseBg: '#F76776',
      orangeInverseBg: '#FA8C16',
      blueInverseBg: '#4D90FE',
      volcanoInverseBg: '#FA541C',
      goldInverseBg: '#FAAD14',
      purpleInverseBg: '#722ED1',
      grayInverseBg: 'rgba(0,0,0,0.24)',
    },
  ],
  extraTemplate: { base: tagStyle },
};

export default tagData;