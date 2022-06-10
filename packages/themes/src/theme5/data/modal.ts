import { ComponentData } from '@hzero-front-ui/core';
import modalIcon from '../../theme1/assets/icons/warning-2@3x.png';
import modalStyle from '../templates/Modal.style';

const modalData: ComponentData = {
  name: 'modal',
  data: [
    {
      showBgIcon: false, // 是否显示背景图标
      titleLineHeight: 22,
      titleFontSize: 16,
      contentFontColor: 14,
      contentLineHeight: 20,
      modalContentPadding: 0,
      bodyPadding: 16,
      modalBodyTextWeight: 400,
      footerPadding: 16,
      headerPosition: 'relative',
      headerPadding: 16,
      wrapBorderRadius: 2,
      modalFooterdispaly: 'block',
      hearderBorder: 'none',
    },
  ],
  onlyTemplate: { pro: modalStyle },
};

export default modalData;
