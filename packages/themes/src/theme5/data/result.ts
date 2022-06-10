import { ComponentData } from '@hzero-front-ui/core';
import ResultStyle from '../templates/Result.style';
const resultData: ComponentData = {
  name: 'result',
  data: [
    {
      iconSize: 60,
      iconMarginB: 16,
      titleFontSize: 16,
      titleLineHeight: 24,
      subTitleFontSize: 12,
      subTFontHeight: 20,
      buttonMarginT: 16,
      titleBottom: 8,
      buttonRight: 4,
    },
  ],
  onlyTemplate: { base: ResultStyle },
};
export default resultData;
