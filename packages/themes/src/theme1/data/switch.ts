import { ComponentData } from '@hzero-front-ui/core';
import switchOnEnableImg from '../assets/icons/switch-on@2x.png';
import switchOffEnableImg from '../assets/icons/switch-off@2x.png';
import switchOnEnableImg2 from '../assets/icons/switch-on-2@2x.png';
import switchOffEnableImg2 from '../assets/icons/switch-off-2@2x.png';

const switchData: ComponentData = {
  name: 'switch',
  data: [
    {
      onEnableImage: switchOnEnableImg,
      offEnableImage: switchOffEnableImg,
      switchHeight: 18,
      switchWidth: 52,
      switchBg: 'rgba(0,0,0,0.25)',
      switchOnBg: 'rgba(59,135,245,0.4)',
      radius: 0,
      handleRadius: 2,
      handleWidth: 28,
      handleHeight: 20,
      loadingInnerSize: 16,
      loadingInnerTop: 1,
      loadingInnerLeft: 6,
      loadingInnerRight: -2,
      loadingInnerStroke: 'rgb(79, 125, 231)',
    },
  ],
};

export default switchData;
