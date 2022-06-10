import { ComponentData } from '@hzero-front-ui/core';
import sliderEnableImg from '../assets/icons/slider@2x.png';
import sliderDisabledImg from '../assets/icons/slider-disable@2x.png';
import sliderEnableImg2 from '../assets/icons/slider-2@2x.png';
import sliderDisabledImg2 from '../assets/icons/slider-disable-2@2x.png';

const sliderData: ComponentData = {
  name: 'slider',
  data: [
    {
      enableImage: sliderEnableImg,
      disabledImage: sliderDisabledImg,
      railBg: '#e2e2e2',
      trackBg: 'linear-gradient(90deg, #4588f4 0%, #386bd7 100%)',
      trackRadius: 2,
      handleWidth: 18,
      handleHeight: 18,
      handleRadius: 4,
      handleBorder: 'none',
      focusedShadow: '0 0 3px 1px #4588f4',
      showIndicator: true,
      showTip: true,
      indicatorColor: '#4f7de7',
      disabledIndicatorColor: '#999',
    },
  ],
};

export default sliderData;
