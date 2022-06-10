import { ComponentData } from '@hzero-front-ui/core';
import CardStyle from '../templates/Card.style';
import CardHzerooStyle from '../templates-hzero/Card.style';
const cardData: ComponentData = {
  name: 'card',
  data: [
    {
      // dot
      radius: 3,
      verticalWidth: 4,
      verticalHeight: 10,
      horizontalWidth: 10,
      horizontalHeight: 4,
      dotHorizontalPosition: 'right',

      //样式
      cardBoxShadow: '0 2px 8px 4px rgba(124, 133, 155, 0.1)',
      borderColor: '#DBE1F1',
      titleFontColor: '#1c1c1c',
      titleFontSize: 14,
      bodyFontColor: '#7C859B',
      bodyFontSize: 12,
    },
  ],
  onlyTemplate: [CardStyle, CardHzerooStyle],
};

export default cardData;
