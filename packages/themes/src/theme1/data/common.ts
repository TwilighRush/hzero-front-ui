import { ComponentData, getColorGradation } from '@hzero-front-ui/core';
import { css } from 'styled-components';
// @ts-ignore
import { iconStyle as font } from '@hzero-front-ui/font/lib/theme1';
import allAnimations from '../animations';

// const font = fontCssMap.get('theme1');

const primary = '#4f7de7';
const primaryColors = getColorGradation(primary);

const commonData: ComponentData = {
  name: 'common',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
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
      errorColor: '#fd6868',
      warningColor: '#f8b303',
      multipleColor: '#E8F0FD',
      // 字体
      textColor: '#333',
      textSizeBase: 12,
      // 盒子
      baseHeight: 28,
      padding: 8,
      margin: 8,

      // 边框
      borderColorBase: '#D5DAE0',
      borderWidthBase: 1,
      borderStyleBase: 'solid',
      // 禁用状态
      disabledBg: '#f8f8f8',
      disabledColor: '#aaadba',
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
  extraTemplate: css`
    ${allAnimations}
    ${font}
  `,
};

export default commonData;
