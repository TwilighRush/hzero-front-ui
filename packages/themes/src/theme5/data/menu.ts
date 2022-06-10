import { ComponentData } from '@hzero-front-ui/core';
import menuStyle from '../templates/Menu.style';
import menuHzeroStyle from '../templates-hzero/Menu.style';
const menuData: ComponentData = {
  name: 'menu',
  data: [
    {
      fontSize: 12,
      lineHeight: 20,
      titleFontSize: 14,
      titleLineHeight: 22,
      paddingT: 4,
      paddingL: 8,
      titlePaddingT: 5,
      fontColor: '#0F1358',
      arrowWidth: 8,
      arrowHeight: 8,
      arrowRightDistance: 16,
      arrowColor: '#333333',
      addPadding: 0,
    },
  ],
  onlyTemplate: { base: menuStyle, hzero: menuHzeroStyle },
};

export default menuData;
