import { ComponentData } from '@hzero-front-ui/core';
import spinStyle from '../templates/Spin.style';
const spinData: ComponentData = {
  name: 'spin',
  data: [
    {
      size: 50,
      type: 'circle',
      circleColorGradient: ['#0840F8', '#0840F8'],
      fillColor: 'rgba(0,0,0,0)',
      circleColor: '#0840F8',
    },
  ],
  extraTemplate: { base: spinStyle },
};

export default spinData;
