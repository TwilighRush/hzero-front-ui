import { ComponentData, getColorGradation } from '@hzero-front-ui/core';
// import { iconStyle as font } from '@hzero-front-ui/font/lib/theme1';
// @ts-ignore

// const font = fontCssMap.get('theme1');

const primary = '#5365EA';
const primaryColors = getColorGradation(primary);

const commonData: ComponentData = {
  name: 'common',
  data: [
    {
      fontFamily: '',
      // 颜色
      primary,
      primary1: primaryColors.step1,
      primary2: primaryColors.step2,
      primary3: primaryColors.step3,
      primary4: primaryColors.step4,
      primary5: primaryColors.step5,
      primary6: primaryColors.step6,
      primary7: primaryColors.step7,
      primary8: primaryColors.step8,
      primary9: primaryColors.step9,
      successColor: '#39c878',
      infoColor: primary,
      errorColor: '#FD6868',
      warningColor: '#f8b303',
      multipleColor: 'rgba(83,101,234,0.08)',
      // 字体
      textColor: '#576679',
      placeholderColor: '#9EADBE',
      textSizeBase: 13,
      // 盒子
      baseHeight: 32,
      padding: 8,
      margin: 8,

      // 边框
      borderColorBase: '#D5DAE0',
      borderWidthBase: 1,
      borderStyleBase: 'solid',
      // 禁用状态
      disabledBg: '#f8f8f8',
      disabledColor: '#8790A6',
      disabledBorderColor: '#E7EAED',
      // shadow
      shadowColor: primary,
      // link
      linkColor: primary,
      linkHoverColor: primaryColors.step7,
      linkActiveColor: primaryColors.step7,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
    },
  ],
  // extraTemplate: font,
};

export const formColor: ComponentData = {
  data: [
    {
      borderColor: '#B8D7FF',
      bgColor: '#FFF',
    },
    {
      borderColor: '#FBCD6C',
      bgColor: '#FFF6DE',
    },
  ],
  name: 'formColor',
};

export default commonData;
