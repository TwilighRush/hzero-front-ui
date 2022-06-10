import { ComponentData } from '@hzero-front-ui/core';
import menuStyle from '../templates/Menu.style';
// import menuHzeroStyle from '../templates-hzero/Menu.style';
const menuData: ComponentData = {
  name: 'menu',
  data: [
    {
      fontSize: 14,
      fontColor: '#0F1358',
      arrowWidth: 8,
      arrowHeight: 8,
      arrowRightDistance: 16,
      arrowColor: '#333333',
    },
  ],
  // onlyTemplate: [menuStyle, menuHzeroStyle],
  onlyTemplate: menuStyle,
};

export default menuData;
