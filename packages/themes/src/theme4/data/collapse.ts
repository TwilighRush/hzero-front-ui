import { ComponentData } from '@hzero-front-ui/core';
import CollapseStyle from '../templates/Collapse.style';

const collapseData: ComponentData = {
  name: 'collapse',
  data: [
    {
      headerFontColor: '#5365EA',
      // headerFontFamily: 'PingFangSC-Medium',
      headerFontSize: 14,
      /* 标题左侧竖杠 */
      markerRadius: 1.5,
      markerHeight: 14,
      markerWidth: 3,
      /* 右侧字体 */
      rightTextFont: '',
      rightTextFontSize: 13,
    },
  ],
  onlyTemplate: { base: CollapseStyle },
};

export default collapseData;
