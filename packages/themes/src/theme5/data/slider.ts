import { ComponentData } from '@hzero-front-ui/core';
import sliderStyle from '../templates/Slider.style';
import sliderHzeroStyle from '../templates-hzero/Slider.style';
const sliderData: ComponentData = {
  name: 'slider',
  data: [
    {
      showTip: true,
    },
  ],
  onlyTemplate: { base: sliderStyle, hzero: sliderHzeroStyle },
};

export default sliderData;
