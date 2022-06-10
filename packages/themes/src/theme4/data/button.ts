import { css } from 'styled-components';
import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import buttonProStyle from '../templates/Button.style';
import buttonBaseStyle from '../templates/ButtonBase.style';

const buttonData: ComponentData = {
  name: 'button',
  data: [
    {
      fontFamily: 'PingFangSC-Medium',
      leftRightPadding: 12,
      fontSize: 13,
      iconFontSize: 18,
      radius: 4,
      height: 32,
      borderWidth: 1,
      primaryBgColor: '#5365EA',
      primaryColor: '#fff',
      primaryBorderColor: '#5365EA',
      // primary hover
      primaryHoverColor: '#fff',
      primaryHoverBgColor: '#7B8CFF',
      primaryHoverBorderColor: '#7B8CFF',
      primaryHoverBoxShadow: '0 8px 10px -6px rgba(72,88,206,0.54)',
      // primary active
      primaryActiveBgColor: '#415BC9',
      primaryActiveBorderColor: '#415BC9',
      primaryActiveBoxShadow: '0 8px 10px -6px rgba(65,91,201,0.54)',

      // primary disable
      primaryDisabledColor: 'rgba(15,19,88,0.25)',
      primaryDisabledBgColor: '#F6F6F9',
      primaryDisabledBorderColor: '#D9DBE6',

      // 默认按钮
      defaultBgColor: 'rgba(83,101,234,0.08)',
      defaultColor: '#5365EA',
      defaultBorderColor: 'rgba(83,101,234,0.08)',
      // default hover
      defaultHoverColor: '#FFFFFF',
      defaultHoverBorderColor: '#7B8CFF',
      defaultHoverBgColor: '#7B8CFF',
      defaultFlatHoverColor: 'rgba(123, 140, 255, 0.08)',

      // default active
      defaultActiveBgColor: '#415BC9',
      defaultActiveBorderColor: '#415BC9',

      //  default disable
      defaultDisabledColor: 'rgba(15,19,88,0.25)',
      defaultDisabledBgColor: '#F6F6F9',
      defaultDisabledBorderColor: '#D9DBE6;',

      dashedBgColor: 'rgb(255, 255, 255)',
      dashedColor: '#5365EA',
      dashedBorderColor: '#D9E6F2',
      dashedHoverBgColor: 'rgb(255, 255, 255)',
      dashedActiveColor: '#5365EA',
      dashedHoverBorderColor: '#5365EA',
      dashedActiveBorderColor: '#415BC9',
      dashedActiveBgColor: 'rgb(255, 255, 255)',
      dashedHoverColor: '#5365EA',
      dashedDisabledColor: 'rgba(15,19,88,0.25)',
      dashedDisabledBgColor: '#F6F6F9',
      dashedDisabledBorderColor: '#D9DBE6',

      textBgColor: 'transparent',
      textColor: '#5365EA',
      textBorderColor: 'transparent',
      textHoverBgColor: 'rgba(123,140,255,0.08)',
      textHoverColor: '#5365EA',
      textHoverBorderColor: 'transparent',
      textActiveBgColor: '#E6E9FF',
      textActiveColor: '#5365EA',
      textActiveBorderColor: 'transparent',
      textDisabledColor: 'rgba(15,19,88,0.25)',
      textDisabledBgColor: 'transparent',
      textDisabledBorderColor: 'transparent',

      linkBgColor: 'transparent',
      linkColor: '#5365EA',
      linkBorderColor: 'transparent',
      linkHoverBgColor: 'transparent',
      linkHoverColor: '#5365EA',
      linkHoverBorderColor: 'transparent',
      linkActiveBgColor: 'transparent',
      linkActiveColor: '#415BC9',
      linkActiveBorderColor: 'transparent',
      linkDisabledColor: 'rgba(15,19,88,0.25)',
      linkDisabledBgColor: 'transparent',
      linkDisabledBorderColor: 'transparent',
      linktextDecoration: 'underline',
      primaryIconBackground: 'rgba(255,255,255,0.16)',
      defalutIconHeight: '.18rem',
      defalutIconBorderRadius: '.04rem',
      defalutIconLineHeight: '.18rem',
      defalutIconPosition: 'relative',
      // defalutIconLeft: '-.05rem',
      defalutIconLeft: 0,

      // color
      bgColorGreen: '#00bf96',
    },
  ],
  onlyTemplate: {
    base: buttonBaseStyle,
    pro: buttonProStyle,
  },
};

export default buttonData;
