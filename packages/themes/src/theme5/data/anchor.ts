import { ComponentData } from '@hzero-front-ui/core';
import anchorStyle from '../templates/Anchor.style';
import anchorHzeroStyle from '../templates-hzero/Anchor.style';
const anchorData: ComponentData = {
  name: 'anchor',
  data: [
    {
      fontSize: 12,
      fontWeight: '600',
    },
  ],
  onlyTemplate: { base: anchorStyle, hzero: anchorHzeroStyle },
};

export default anchorData;
