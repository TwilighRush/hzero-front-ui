import { ComponentData } from '@hzero-front-ui/core';
import SwitchStyle from '../templates/Switch.style';

const switchData: ComponentData = {
  name: 'switch',
  data: [
    {
      switchHeight: 22,
      switchMinWidth: 44,
      switchBg: '#DDE2F5',
      switchOnBg: '#5365EA',
      switchOnButtonBg: 'white',
      radius: 11,
      handleRadius: 9,
      handleWidth: 18,
      handleHeight: 18,
      marginTop: 4,
      loadingInnerSize: 12,
      loadingInnerDistance: 3,
      loadingInnerStroke: '#5365EA',
    },
  ],
  onlyTemplate: { pro: SwitchStyle },
};

export default switchData;
