import { ComponentData, getColorGradation, getLocalConfig } from '@hzero-front-ui/core';
// @ts-ignore
// import { fontCssMap } from '@hzero-front-ui/font';
import { getTheme5ColorGradation } from '../utils/color1';
import { iconStyle as font } from '@hzero-front-ui/font/lib/theme5';

// const font = fontCssMap.get('theme5');
const { themeValue } = getLocalConfig();
const primary = themeValue ? themeValue : '#0840F8';
const primaryColors = getColorGradation(primary);
const neutralColor = getTheme5ColorGradation('#000000');

const greenColors = getColorGradation('#11D954');
const yellowColors = getColorGradation('#FBAD00');
const redColors = getColorGradation('#F23A50');
const blueColors = getColorGradation('#3889FF');
const cyanColors = getColorGradation('#18CCF0');
const purplColors = getColorGradation('#5438E6');
const orangeColors = getColorGradation('#F07630');
const magentaColors = getColorGradation('#E62EA3');

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
      //中性色
      titleColor1: neutralColor.step10,
      titleColor2: neutralColor.step8,
      titleColor3: neutralColor.step7,
      titleColor4: neutralColor.step6,

      lineColor1: neutralColor.step5,
      lineColor2: neutralColor.step4,
      lineColor3: neutralColor.step3,
      lineColor4: neutralColor.step2,
      pureBlack: neutralColor.step13,

      fontColor: neutralColor.step1,
      bgColor: neutralColor.step1,

      //功能色
      successColor: greenColors.step6,
      infoColor: blueColors.step6,
      errorColor: redColors.step6,
      warningColor: yellowColors.step6,

      successBgColor: greenColors.step1,
      infoBgColor: blueColors.step1,
      errorBgColor: redColors.step1,
      warningBgColor: yellowColors.step1,

      //辅助色
      redColor1: redColors.step1,
      redColor2: redColors.step2,
      redColor3: redColors.step3,
      redColor4: redColors.step4,
      redColor5: redColors.step5,
      redColor6: redColors.step6,
      redColor7: redColors.step7,
      redColor8: redColors.step8,
      redColor9: redColors.step9,

      blueColor1: blueColors.step1,
      blueColor2: blueColors.step2,
      blueColor3: blueColors.step3,
      blueColor4: blueColors.step4,
      blueColor5: blueColors.step5,
      blueColor6: blueColors.step6,
      blueColor7: blueColors.step7,
      blueColor8: blueColors.step8,
      blueColor9: blueColors.step9,

      greenColor1: greenColors.step1,
      greenColor2: greenColors.step2,
      greenColor3: greenColors.step3,
      greenColor4: greenColors.step4,
      greenColor5: greenColors.step5,
      greenColor6: greenColors.step6,
      greenColor7: greenColors.step7,
      greenColor8: greenColors.step8,
      greenColor9: greenColors.step9,

      yellowColor1: yellowColors.step1,
      yellowColor2: yellowColors.step2,
      yellowColor3: yellowColors.step3,
      yellowColor4: yellowColors.step4,
      yellowColor5: yellowColors.step5,
      yellowColor6: yellowColors.step6,
      yellowColor7: yellowColors.step7,
      yellowColor8: yellowColors.step8,
      yellowColor9: yellowColors.step9,

      purplColor1: purplColors.step1,
      purplColor2: purplColors.step2,
      purplColor3: purplColors.step3,
      purplColor4: purplColors.step4,
      purplColor5: purplColors.step5,
      purplColor6: purplColors.step6,
      purplColor7: purplColors.step7,
      purplColor8: purplColors.step8,
      purplColor9: purplColors.step9,

      cyanColor1: cyanColors.step1,
      cyanColor6: cyanColors.step6,

      orangeColor1: orangeColors.step1,
      orangeColor6: orangeColors.step6,
      magentaColor1: magentaColors.step1,
      magentaColor6: magentaColors.step6,
      //通用阴影
      boxShadow: '0px 2px 10px 5px rgba(124,133,155,0.1)',
      //不变的主题色
      defaultColor: primary,
      multipleColor: 'rgba(83,101,234,0.08)',
      // 字体
      textColor: '#576679',
      placeholderColor: '#A4A4A4', //后续确认一下是否都是
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
      // errorcolorlight
      errorColorLight: '#F23A50',
      //按钮显示效果宽度
      minWidth: 72,
      //icon字体
      iconfontFamily: 'hzero-c7n-font',
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
