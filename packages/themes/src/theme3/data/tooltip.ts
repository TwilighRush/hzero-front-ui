import { ComponentData } from '@hzero-front-ui/core';

const tooltipData: ComponentData = {
  name: 'tooltip',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      fontColor: 'white',
      lineHeight: 20,
      borderColor: 'transparent',
      lightColor: '#333',
      boxShadow: 'none',
      /* 弹框 */
      backgroundColor: '#3A3A3A',
      border: 'none',
      borderRadius: 4,
      contentHeight: 42,

      /* 箭头 */
      arrowColor: '#3A3A3A', // 与弹框颜色一致
      arrowBorderLeft: 'none',
      arrowBorderBottom: 'none',
    },
  ],
};

export default tooltipData;
