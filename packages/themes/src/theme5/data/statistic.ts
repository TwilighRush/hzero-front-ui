import { ComponentData } from '@hzero-front-ui/core';
import StatisticStyle from '../templates/Statistic.style';
const StatisticData: ComponentData = {
  name: 'statistic',
  data: [
    {
      titleFontSize: 12,
      titleLineHeight: 20,
      contentFontSize: 20,
      contentLineHeight: 28,
    },
  ],
  onlyTemplate: { base: StatisticStyle },
};
export default StatisticData;
