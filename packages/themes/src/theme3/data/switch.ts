import { ComponentData } from '@hzero-front-ui/core';
import switchOnEnableImg2 from '../../theme1/assets/icons/switch-on-2@2x.png';
import switchOffEnableImg2 from '../../theme1/assets/icons/switch-off-2@2x.png';

const switchData: ComponentData = {
  name: 'switch',
  data: [
    {
      onEnableImage: switchOnEnableImg2,
      offEnableImage: switchOffEnableImg2,
      switchHeight: 18,
      switchWidth: 44,
      switchBg: 'rgba(0,0,0,0.25)',
      switchOnBg: 'rgba(59,135,245,0.4)',
      switchOnPadding: '0 0.3rem 0 0.06rem',
      switchPadding: '0 0.06rem 0 0.3rem',
      radius: 9,
      handleRadius: 10,
      handleWidth: 20,
      handleHeight: 20,
      marginTop: 1,
      loadingInnerSize: 14,
      loadingInnerTop: 2,
      loadingInnerLeft: 3,
      loadingInnerRight: 3,
      loadingInnerStroke: 'rgb(56, 137, 255)',
    },
  ],
};

export default switchData;
