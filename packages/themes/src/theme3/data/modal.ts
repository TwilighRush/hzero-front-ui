import { ComponentData } from '@hzero-front-ui/core';
import modalIcon from '../../theme1/assets/icons/warning-2@3x.png';

const modalData: ComponentData = {
  name: 'modal',
  data: [
    {
      showBgIcon: false, // 是否显示背景图标
      wrapBgColor: 'white',
      iconWidth: 14,
      iconHeight: 14,
      fontFamily: 'PingFangSC-Medium',
      fontSize: 14,
      titleColor: 'rgba(0,0,0,0.85)',
      descriptionColor: '#333333',
      iconImage: modalIcon,
      contentFont: 'PingFangSC-Regular',
      width: 350,
      paddingLeftAndRight: 48,
      titlePaddingLeft: 20,
      headerPadding: '8px 0',
      hearderBorder: 'none',
      footerPadding: '0.16rem 0.16rem 0.16rem 0',
      footColor: 'white',
      footerBorder: 'none',
      footerBorderRadius: 14,
      footerFontSize: 12,
      footFontPadding: '0 0.16rem',
      // wrapBoxShadow: "0 4px 12px 0 rgba(0,0,0,0.20)",
      wrapBorderRadius: 2,
    },
  ],
};

export default modalData;
