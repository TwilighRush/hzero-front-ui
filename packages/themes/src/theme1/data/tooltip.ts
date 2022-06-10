import { ComponentData } from '@hzero-front-ui/core';

const tooltipData: ComponentData = {
  name: 'tooltip',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 14,
      fontColor: 'white',
      lightColor: '#333',
      lineHeight: 20,
      boxShadow: '0 0.02rem 0.06rem 0 rgba(79, 125, 231, 0.5)',

      /* 弹框 */
      backgroundColor: '#0d2a53',
      border: 'none',
      borderRadius: 4,
      contentHeight: 42,

      /* 箭头 */
      borderColor: '#4F7DE7',
      arrowColor: '#0d2a53', // 与弹框颜色一致
      arrowBorderLeft: 'none',
      arrowBorderBottom: 'none',
    },
  ],
};

export default tooltipData;
