import { ComponentData } from '@hzero-front-ui/core';
import modalIcon from '../assets/icons/warning-2@3x.png';

const modalData: ComponentData = {
  name: 'modal',
  data: [
    {
      showBgIcon: false, // 是否显示背景图
      wrapWidth: 250,
      wrapBgColor: '',
      iconWidth: 14,
      iconHeight: 14,
      fontFamily: 'PingFangSC-Semibold',
      fontSize: 12,
      titleColor: '#333333',
      descriptionColor: '#5a6677',
      iconImage: modalIcon,
      contentFont: 'PingFangSC-Regular',
    },
  ],
};

export default modalData;
