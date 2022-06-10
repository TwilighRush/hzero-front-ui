import { ComponentData } from '@hzero-front-ui/core';

const stepsData: ComponentData = {
  name: 'steps',
  data: [
    {
      template: 0,
      titleFontSize: 12,
      titleFontColor: '#5a6677',
      barHeight: 4,
      iconBorder: 'none',
      barBg: '#e5e9ec',
      iconBg: '#fff',
      iconColor: '#4f7de7',
      iconSize: 24,
      finishIconBorder: 'none',
      finishIconBg: '#4f7de7',
      finishBarBg: '#4f7de7',
      finishIconColor: '#fff',
      processIconBorder: '1px solid #4f7de7',
      processIconBg: '#fff',
      processBarBg: '#4f7de7',
      processIconColor: '#4f7de7',
      waitingBarBg: '#e5e9ec',
      waitingIconBorder: 'none',
      waitingIconBg: '#e5e9ec',
      waitingIconColor: '#fff',
    },
  ],
};

export const stepsGroupData: ComponentData = {
  name: 'stepsGroup',
  data: [
    {
      ignore: true, // 主题1不加group样式，以下属性忽略
      headerHeight: 20,
      // secondaryHeaderIcon: stepsSecondary,
      // requiredHeaderIcon: stepsRequired,
      headerIconSize: 10,
      headerBg: '#7289A9',
      headerRadius: '8px 0 8px 0;',
      headerFontSize: 12,
      headerFontColor: '#fff',
      requiredHeaderBg: '#4f7de7',
      requiredHeaderFontColor: '#fff',

      height: 44,
      fontFamily: 'PingFangSC-Regular',
      bg: '#f7f7f7',
      border: '1px solid #f0f0f0',
      iconSize: 24,
      iconFontSize: 12,
      requiredBg: '#F0F6FF',
      requiredBorderColor: '#E3EFFF',
      processFontColor: '#5A6677',
      processIconBg: '#4f7de7',
      processIconColor: '#fff',
      processIconBorder: '1px solid #4f7de7',

      finishFontColor: '#5A6677',
      finishIconBg: '#F0F6FF',
      finishIconColor: '#4f7de7',
      finishIconBorder: '1px solid #4f7de7',

      waitingFontColor: '#5a6677',
      waitingIconBg: '#f0f0f0',
      waitingIconColor: '#999',
      waitingIconBorder: '1px solid #999',
    },
  ],
};

export default stepsData;
