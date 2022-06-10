import { ComponentData } from '@hzero-front-ui/core';
import alertStyle from '../templates/Alert.style';
import blueBg from '../assets/blue@3x.png';
import greenBg from '../assets/green@3x.png';
import redBg from '../assets/red@3x.png';
import yellowBg from '../assets/yellow@3x.png';
import alertHzeroStyle from '../templates-hzero/Alert.style';

const alertData: ComponentData = {
  name: 'alert',
  data: [
    {
      minWidth: 640,
      height: 28,
      borderRadius: 4,
      fontSize: 12,
      lineHeight: 20,
      border: 'none',
      alertIconFontSize: '.14rem',
      alertPadding: 4,
      addPadding: 0,
      iconPositionTop: 8,
      iconPositionLeft: '12px',
      iconWidth: 14,
      iconHeight: 14,
      iconBackgroundRepeat: 'no-repeat',
      iconBackgroundPosition: 'center',
      iconBackgroundSize: '14px 14px',
      iconFontSize: '.14rem',
      iconPaddingLeft: 34,
      warningIconContent: `\\e729`,
      warningBackgroundImage: yellowBg,
      successIconContent: `\\e6f0`,
      successBackgroundImage: greenBg,
      errorIconContent: '\\e72a',
      errorBackgroundImage: redBg,
      infoIconContent: '\\e714',
      infoBackgroundImage: blueBg,
    },
  ],
  onlyTemplate: { base: alertStyle, hzero: alertHzeroStyle },
};

export default alertData;
