import { ComponentData } from '@hzero-front-ui/core';
import alertStyle from '../templates/Alert.style';
import alertHzeroStyle from '../templates-hzero/Alert.style';
const alertData: ComponentData = {
  name: 'alert',
  data: [
    {
      height: 40,
      borderRadius: 2,
      messageFontsize: 16,
      descriptionFontSize: 14,

      backgroundInfoColor: '#EFF8FF',
      backgroundWarnColor: '#FFF7E3',
      backgroundErrorColor: '#FFF1F0',
      backgroundSuccessColor: '#F8FFF0',
      borderInfoColor: '#8AC0FF',
      borderWarnColor: '#FFC569',
      borderErrorColor: '#FF7579',
      borderSuccessColor: '#9DE56A',

      iconWidth: 14,
      iconHeight: 14,

      iconBackgroundRepeat: 'no-repeat',
      iconBackgroundPosition: 'center',
      iconBackgroundSize: '14px 14px',

      messageColor: 'rgba(0, 0, 0, 0.85)',
      messageInfoColor: 'rgba(0,0,0,0.65)',
      messageWarnColor: 'rgba(0,0,0,0.65)',
      messageErrorColor: 'rgba(0,0,0,0.65)',
      messageSuccessColor: 'rgba(0,0,0,0.65)',
      closeIconColor: 'rgba(0,0,0,0.65)',

      descriptionColor: 'rgba(0, 0, 0, 0.65)',
      /* 样式二圆点颜色 */

      border: 'none',
      iconFontSize: '.14rem',
      closeFontSize: '.12rem',
      alertIconFontSize: '.14rem',
      warningIconContent: `\\e723`,
      warningIconWithDes: `\\e721`,
      successIconContent: `\\e70a`,
      successIconwithDes: `\\e715`,
      errorIconContent: '\\e713',
      errorIconWithDes: `\\e714`,
      infoIconContent: '\\e723',
      infoIconWithDes: `\\e721`,
    },
  ],
  onlyTemplate: [alertStyle, alertHzeroStyle],
};

export default alertData;
