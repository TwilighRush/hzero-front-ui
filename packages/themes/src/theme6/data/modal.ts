import { ComponentData } from '@hzero-front-ui/core';
import modalIcon from '../../theme1/assets/icons/warning-2@3x.png';
import modalProStyle from '../templates/Modal.style';
import modalBaseStyle from '../templates/ModalBase.style';
// import modalHzeroStyle from '../templates-hzero/Modal.style';
import { css } from 'styled-components';
const modalStyle = css`
  ${modalProStyle}
  ${modalBaseStyle}
`;
const modalData: ComponentData = {
  name: 'modal',
  data: [
    {
      footerPadding: '0.12rem 0.16rem',
      headerPadding: '0.16rem 0.24rem',
      bodyPadding: 24,
      modalBodyTextColor: '#0F1358',
      modalBodyTextWeight: '400',
      modalBodyTextFontFamily: '',
      headerBottomBorderColor: 'rgba(0,0,0,0.06)',
      showBgIcon: false, // 是否显示背景图标
      wrapBgColor: 'white',
      iconWidth: 14,
      iconHeight: 14,
      fontFamily: 'PingFangSC-Medium',
      fontSize: 16,
      titleColor: 'rgba(0,0,0,0.85)',
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
      footerFontSize: 12,
      wrapBoxShadow: '0 4px 12px 0 rgba(0,0,0,0.20)',
      wrapBorderRadius: 2,
      modalContentPadding: 0,
      contentFooterPadding: 20,
      modalFooterdispaly: 'block',
      footDrawerBgColor: 'initial',
      confirmTitleLineHeight: 'inherit',
      footerBorder: '',
    },
  ],
  // onlyTemplate: [modalStyle, modalHzeroStyle],
  onlyTemplate: modalStyle,
};

export default modalData;
