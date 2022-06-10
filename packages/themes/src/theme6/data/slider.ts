import { ComponentData } from '@hzero-front-ui/core';
import SliderStyle from '../templates/Slider.style';
import SliderHzeroStyle from '../templates-hzero/Slider.style';
const sliderData: ComponentData = {
  name: 'slider',
  data: [
    {
      // showTip: true,
      railBg: '#e2e2e2',
      trackBg: '#91D5FF',
      marginLeft: '-.07rem',
      marginTop: '-.05rem',
      background: 'white',
      verticalTrackHeight: '100%',
      verticalDraghandleMarginLeft: '0rem',
      verticalIndicatorLeft: '15px',
      verticalIndicatorTop: '-35%',
      trackRadius: 6,
      handleBorder: '0.02rem solid #91D5FF',
    },
  ],
  onlyTemplate: [SliderStyle, SliderHzeroStyle],
};

export default sliderData;
