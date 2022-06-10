import { ComponentData } from '@hzero-front-ui/core';
import CollapseStyle from '../templates/Collapse.style';

const collapseData: ComponentData = {
  name: 'collapse',
  data: [
    {
      headerFontSize: 12,
      lheaderFontSize: 14,
      headerLineHeight: 20,
      lheaderLineHeight: 22,
      contentFontSize: 12,
      rightTextFontSize: 12,
      lessFontWeight: '600',
      addPadding: 0,
    },
  ],
  onlyTemplate: { base: CollapseStyle },
};

export default collapseData;
