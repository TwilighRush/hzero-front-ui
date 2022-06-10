import { ComponentData } from '@hzero-front-ui/core';
import stepsSecondary from '../assets/icons/steps-secondary.png';
import stepsRequired from '../assets/icons/steps-required.png';

const stepsData: ComponentData = {
  name: 'steps',
  data: [
    {
      template: 0,
      titleFontSize: 12,
      titleFontColor: '#5A6677',
      barHeight: 1,
      iconBorder: 'none',
      iconMaskSize: 44,
      barBg: '#e5e9ec',
      iconBg: '#fff',
      iconColor: '#3889FF',
      iconSize: 24,
      finishIconBorder: '1px solid #3889FF',
      finishIconBg: '#fff',
      finishBarBg: '#D0E5FF',
      finishIconColor: '#3889FF',
      processIconBorder: '1px solid #3889FF',
      processIconBg: '#3889FF',
      processBarBg: '#D0E5FF',
      processIconColor: '#fff',
      waitingBarBg: '#D0E5FF',
      waitingIconBorder: '1px solid #999999',
      waitingIconBg: '#fff',
      waitingIconColor: '#999',
      errorBarBg: '#D0E5FF',
      errorIconBorder: '1px solid #fd6868',
      errorIconBg: '#fd6868',
      errorIconColor: '#fff ',
    },
  ],
};

export const stepsGroupData: ComponentData = {
  name: 'stepsGroup',
  data: [
    {
      ignore: false, // 为true时不使用group样式
      headerHeight: 20,
      secondaryHeaderIcon: stepsSecondary,
      requiredHeaderIcon: stepsRequired,
      headerIconSize: 10,
      headerBg: '#7289A9',
      headerRadius: '8px 0 8px 0;',
      headerFontSize: 12,
      headerFontColor: '#fff',
      requiredHeaderBg: '#3889FF',
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
      processIconBg: '#3889FF',
      processIconColor: '#fff',
      processIconBorder: '1px solid #3889FF',

      finishFontColor: '#5A6677',
      finishIconBg: '#F0F6FF',
      finishIconColor: '#3889FF',
      finishIconBorder: '1px solid #3889FF',

      waitingFontColor: '#5a6677',
      waitingIconBg: '#f0f0f0',
      waitingIconColor: '#999',
      waitingIconBorder: '1px solid #999',
    },
  ],
};

export default stepsData;
