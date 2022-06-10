import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import buttonProStyle from '../templates/Button.style';
import buttonBaseStyle from '../templates/ButtonBase.style';
import buttonHzeroStyle from '../templates-hzero/Button.style';
const buttonStyle = css`
  ${buttonProStyle}
  ${buttonBaseStyle}
`;

const buttonData: ComponentData = {
  name: 'button',
  data: [
    {
      minWidth: 68,
      fontFamily: 'PingFangSC-Regular', // 字体
      leftRightPadding: 12,
      fontSize: 14,
      iconFontSize: 14,
      radius: 2,
      height: 32, // button高度
      smheight: 24,
      lgHeight: 40,
      lgPadding: 24,
      borderWidth: 1,
      primaryColor: '#fff',
      // primary hover
      primaryHoverColor: '#fff',
      primaryHoverBoxShadow: '0 8px 10px -6px rgba(72,88,206,0.54)',
      // primary active
      primaryActiveBgColor: '#0633c6',
      primaryActiveBorderColor: '#0633c6',
      primaryActiveBoxShadow: '0 8px 10px -6px rgba(65,91,201,0.54)',

      // primary disable
      primaryDisabledColor: 'rgba(0,0,0,0.25)',
      primaryDisabledBgColor: 'rgba(0,0,0,0.04)',
      primaryDisabledBorderColor: 'rgba(0,0,0,0.04)',

      // 默认按钮
      defaultBgColor: '#FFFFFF',
      defaultColor: 'rgba(0,0,0,0.65)',
      defaultBorderColor: 'rgba(0,0,0,0.15)',

      defaultHoverBgColor: '#FFFFFF',
      //  default disable
      defaultDisabledColor: 'rgba(0,0,0,0.25)',
      defaultDisabledBgColor: 'rgba(0,0,0,0)',
      defaultDisabledBorderColor: 'rgba(0,0,0,0.04)',

      // border
      dashedBgColor: '#FFFFFF',
      dashedColor: 'rgba(0,0,0,0.65)',
      dashedBorderColor: 'rgba(0,0,0,0.15)', // 边框

      dashedHoverBgColor: 'rgb(255, 255, 255)',

      dashedActiveBgColor: 'rgb(255, 255, 255)',

      dashedDisabledColor: 'rgba(0,0,0,0.25)',
      dashedDisabledBgColor: 'rgba(0,0,0,0)',
      dashedDisabledBorderColor: 'rgba(0,0,0,0.04)',

      //文字类型
      textBgColor: 'transparent',
      textColor: 'rgba(0,0,0,0.65)',
      textBorderColor: 'rgba(0,0,0,0)',
      textHoverBorderColor: 'transparent',
      textActiveBgColor: '#e6ebfe',
      textActiveColor: '#0840F8',
      textActiveBorderColor: 'transparent',
      textDisabledColor: 'rgba(0,0,0,0.25)',
      textDisabledBgColor: 'rgba(0,0,0,0)',
      textDisabledBorderColor: 'rgba(0,0,0,0)',
      //链接类型
      linkBgColor: 'transparent',
      linkColor: 'rgba(0,0,0,0.65)',
      linkBorderColor: 'rgba(0,0,0,0)',
      linkHoverBgColor: 'rgba(0,0,0,0)',
      linkHoverBorderColor: 'rgba(0,0,0,0)',
      linkActiveBgColor: 'rgba(0,0,0,0)',
      linkActiveBorderColor: 'rgba(0,0,0,0)',
      linkDisabledColor: 'rgba(0,0,0,0.25)',
      linkDisabledBgColor: 'rgba(0,0,0,0)',
      linkDisabledBorderColor: 'rgba(0,0,0,0)',
      linktextDecoration: 'none',
      // 图标类型
      iconBgColor: '#ffffff',

      iconHoverBgColor: '#ffffff;',

      // color
      bgColorGreen: '#00bf96',
    },
  ],
  onlyTemplate: [buttonStyle, buttonHzeroStyle],
};

export default buttonData;
