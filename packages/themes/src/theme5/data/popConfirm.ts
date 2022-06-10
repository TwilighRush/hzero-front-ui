import { ComponentData } from '@hzero-front-ui/core';
import popconfirmStyle from '../templates/PopConfirm.style';

const popConfirmData: ComponentData = {
  name: 'popconfirm',
  data: [
    {
      fontSize: 12,
      lineHeight: 20,
      iconContent: `\\E000`,
      titleMinHeight: 30,
      titleMinWidth: 160,
      titlePadding: '0.06rem 0.08rem 0.04rem',
      contentPadding: '0.06rem 0.08rem',
      rightButtonHeight: 24,
      rightButtonMinWidth: 40,
    },
  ],
  onlyTemplate: { base: popconfirmStyle },
};

export default popConfirmData;
