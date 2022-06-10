import { ComponentData } from '@hzero-front-ui/core';
import CollapseStyle from '../templates/Collapse.style';
import CollapseHzeroStyle from '../templates-hzero/Collapse.style';
const collapseData: ComponentData = {
  name: 'collapse',
  data: [
    {
      iconSize: 16,
      iconMarginRight: 8,
      borderColor: 'rgba(0,0,0,0.15)',
      headerPadding: '0.12rem 0.16rem',
      Color: 'rgba(0, 0, 0, 0.65)',
      fontSize: 14,
    },
  ],
  onlyTemplate: [CollapseStyle, CollapseHzeroStyle],
};

export default collapseData;
