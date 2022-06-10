import { ComponentData } from '@hzero-front-ui/core';
import alertStyle from '../templates/Alert.style';

const alertData: ComponentData = {
  name: 'alert',
  data: [
    {
      height: 40,
      borderRadius: 4,
      backgroundInfoColor: '#F0F4FF',
      backgroundWarnColor: '#FEF6E7',
      backgroundErrorColor: '#FEEFF1',
      backgroundSuccessColor: 'rgba(31,194,187,0.10)',
      borderInfoColor: '#D5E0FF',
      borderWarnColor: '#FFE58F',
      borderErrorColor: '#FFCCC7',
      borderSuccessColor: '#BDEBE9',
      iconWidth: 14,
      iconHeight: 14,
      iconTop: 20,
      iconBackgroundRepeat: 'no-repeat',
      iconBackgroundPosition: 'center',
      iconBackgroundSize: '14px 14px',
      messageInfoColor: 'rgba(15,19,88,0.85)',
      messageWarnColor: 'rgba(15,19,88,0.85)',
      messageErrorColor: 'rgba(15,19,88,0.85)',
      messageSuccessColor: 'rgba(15,19,88,0.85)',
      closeIconColor: 'rgba(15,19,88,0.45)',
      /* 样式二圆点颜色 */

      border: 'none',
      // borderRadiusNew: "17px 17px 17px 17px",
      iconFontSize: '.14rem',
      alertIconFontSize: '.14rem',
      warningIconContent: `\\E88E`,
      successIconContent: `\\E86C`,
      errorIconContent: '\\E5C9',
      infoIconContent: '\\E88E',
    },
  ],
  onlyTemplate: { base: alertStyle },
};

export default alertData;
