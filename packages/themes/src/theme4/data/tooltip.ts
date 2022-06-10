import { ComponentData } from '@hzero-front-ui/core';

const tooltipData: ComponentData = {
  name: 'tooltip',
  data: [
    {
      fontFamily: '',
      fontSize: 13,
      fontColor: '#FFFFFF',
      lineHeight: 20,
      themeOriginal: true,

      /* 弹框 */
      backgroundColor: '#323670',
      border: 'none',
      borderRadius: 4,
      contentHeight: 42,

      /* 箭头 */
      arrowColor: '#323670', // 与弹框颜色一致
      arrowBorderLeft: 'none',
      arrowBorderBottom: 'none',
      popuptransformLeft: 'translate(-50%, 50%) rotate(45deg)',
      popuptransformRight: 'translate(-50%, -50%) rotate(45deg)',
      popuptransformBootom: 'transform: translate(-50%, -50%) rotate(45deg)',
    },
  ],
};

export default tooltipData;
