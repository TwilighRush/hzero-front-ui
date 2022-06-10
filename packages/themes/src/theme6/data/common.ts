import { ComponentData, getColorGradation } from '@hzero-front-ui/core';
// @ts-ignore
import { iconStyle as font } from '@hzero-front-ui/font/lib/theme6';

const primary = '#3889FF';
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

      successColor: '#7CD941',
      infoColor: primary,
      errorColor: '#F84A53',
      warningColor: '#FFB040',

      multipleColor: 'rgba(83,101,234,0.08)',
      // 字体
      textColor: '#576679',
      placeholderColor: 'rgba(0,0,0,0.25)', //后续确认一下是否都是
      textSizeBase: 12,
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
      iconfontFamily: 'iconfont-hzero-fonts',
      validationColor: '#F84A53',
    },
  ],
  extraTemplate: font,
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
