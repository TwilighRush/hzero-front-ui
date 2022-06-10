import { ComponentData } from '@hzero-front-ui/core';
import timelineStyle from '../templates/Timeline.style';
import timelineHzeroStyle from '../templates-hzero/TimeLine.style';
const timelineData: ComponentData = {
  name: 'timeline',
  data: [
    {
      fontSize: 14,
      fontColor: 'rgba(0, 0, 0, 0.65)',
      borderColor: 'rgba(0, 0, 0, 0.06)',
    },
  ],
  onlyTemplate: [timelineStyle, timelineHzeroStyle],
};

export default timelineData;
