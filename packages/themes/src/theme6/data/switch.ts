import { ComponentData } from '@hzero-front-ui/core';
import SwitchStyle from '../templates/Switch.style';
import SwitchHzeroStyle from '../templates-hzero/Switch.style';
const switchData: ComponentData = {
  name: 'switch',
  data: [
    {
      opacity: '0.2',
      switchPadding: '0.07',
      switchHeight: 22,
      switchWidth: 42,
      switchBg: '#A4A4A4',
      switchOnBg: '#0840F8',
      radius: 11,
      handleRadius: 9,
      handleWidth: 18,
      handleHeight: 18,
      marginTop: 2,
      marginRight: 2,

      lgswitchHeight: 22,
      lgswitchWidth: 44,
      smswitchHeight: 16,
      smswitchWidth: 28,
    },
  ],
  onlyTemplate: [SwitchStyle, SwitchHzeroStyle],
};

export default switchData;
