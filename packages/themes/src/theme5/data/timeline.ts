import { ComponentData } from '@hzero-front-ui/core';
import timelineStyle from '../templates/Timeline.style';
import timeLineHzeroStyle from '../templates-hzero/TimeLine.style';
const timelineData: ComponentData = {
  name: 'timeline',
  data: [
    {
      fontSize: 12,
      lineHeight: 20,
    },
  ],
  onlyTemplate: { base: timelineStyle, hzero: timeLineHzeroStyle },
};

export default timelineData;
