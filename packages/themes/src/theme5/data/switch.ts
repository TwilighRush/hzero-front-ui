import { ComponentData } from '@hzero-front-ui/core';
import SwitchStyle from '../templates/Switch.style';
import SwitchHzeroStyle from '../templates-hzero/Switch.style';
const switchData: ComponentData = {
  name: 'switch',
  data: [
    {
      fontSize: 12,
      lineHeight: 28,
      opacity: '0.2',
      switchPadding: 8,
      switchHeight: 20,
      switchWidth: 40,
      radius: 10,
      handleRadius: 7,
      handleWidth: 14,
      handleHeight: 14,
      marginTop: 4,
      marginRight: 4,
      lgLoadingInnerSize: 20,
      loadingInnerSize: 12,
      smLoadingInnerSize: 10,
      loadingInnerDistance: 6,
      smLoadingInnerDistance: 2,
      loadingStroke: 'rgba(0,0,0,0.45)',
    },
  ],
  onlyTemplate: { pro: SwitchStyle, hzero: SwitchHzeroStyle },
};

export default switchData;
