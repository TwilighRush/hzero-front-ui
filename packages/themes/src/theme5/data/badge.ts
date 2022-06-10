import { ComponentData } from '@hzero-front-ui/core';
import BadgeStyle from '../templates/Badge.style';
import BadgeHzeroStyle from '../templates-hzero/Badge.style';
const badgeData: ComponentData = {
  name: 'badge',
  data: [
    {
      textFontSize: 12,
    },
  ],
  onlyTemplate: { base: BadgeStyle, hzero: BadgeHzeroStyle },
};

export default badgeData;
