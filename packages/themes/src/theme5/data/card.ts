import { ComponentData } from '@hzero-front-ui/core';
import CardStyle from '../templates/Card.style';
import CardHzeroStyle from '../templates-hzero/Card.style';
const cardData: ComponentData = {
  name: 'card',
  data: [
    {
      //样式
      cardBoxShadow: '0 2px 10px 5px rgba(124,133,155,0.10);',
      titleFontSize: 14,
      titleLineHeight: 22,
      bodyFontSize: 12,
      bodyLineHeight: 20,
    },
  ],
  onlyTemplate: { base: CardStyle, hzero: CardHzeroStyle },
};

export default cardData;
