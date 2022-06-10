import { ComponentData } from '@hzero-front-ui/core';
import modalIcon from '../../theme1/assets/icons/warning-2@3x.png';
import modalStyle from '../templates/Modal.style';

const modalData: ComponentData = {
  name: 'modal',
  data: [
    {
      footerPadding: 20,
      modalBodyTextColor: '#0F1358',
      modalBodyTextWeight: 400,
      modalBodyTextFontFamily: '',
      headerBottomBorderColor: '#D9E6F2',
      showBgIcon: false, // 是否显示背景图标
      wrapBgColor: 'white',
      iconWidth: 14,
      iconHeight: 14,
      fontFamily: 'PingFangSC-Medium',
      fontSize: 20,
      titleColor: '#0F1358',
      descriptionColor: '#333333',
      titleconfirmPaddingLeft: 0,
      iconImage: modalIcon,
      headerPosition: 'relative',
      contentFont: '',
      width: 350,
      paddingLeftAndRight: 48,
      titlePaddingLeft: 20,
      footColor: 'white',
      footer: '#F8F9FB',
      bodyPadding: 20,
      footerFontSize: 12,
      headerPadding: 20,
      wrapBoxShadow: '0 4px 12px 0 rgba(0,0,0,0.20)',
      wrapBorderRadius: 2,
      modalContentPadding: 0,
      contentFooterPadding: 20,
      modalFooterdispaly: 'block',
      footDrawerBgColor: 'initial',
      confirmTitleLineHeight: 'inherit',
    },
  ],
  onlyTemplate: { pro: modalStyle },
};

export default modalData;
