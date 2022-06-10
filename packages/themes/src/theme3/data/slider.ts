import { ComponentData } from '@hzero-front-ui/core';
import sliderEnableImg2 from '../../theme1/assets/icons/slider-2@2x.png';
import sliderDisabledImg2 from '../../theme1/assets/icons/slider-disable-2@2x.png';

const sliderData: ComponentData = {
  name: 'slider',
  data: [
    {
      enableImage: sliderEnableImg2,
      disabledImage: sliderDisabledImg2,
      railBg: '#e2e2e2',
      trackBg: '#4588f4',
      trackRadius: 2,
      handleWidth: 18,
      handleHeight: 18,
      handleRadius: 4,
      handleBorder: 'none',
      focusedShadow: 'none',
      showIndicator: true,
      showTip: false,
      indicatorColor: '#3889FF',
      disabledIndicatorColor: '#999',
      disabledBg: '#B1B1B1',
      disableBorder: 'none',
      iconTransform: 'translate(1px, -2px)',
      marginTop: '-7px',
      marginLeft: '-7px',
    },
  ],
};

export default sliderData;
