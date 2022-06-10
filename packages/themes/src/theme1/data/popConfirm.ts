import { ComponentData } from '@hzero-front-ui/core';
import popconfirmIcon from '../assets/icons/warning-2@3x.png';

const popConfirmData: ComponentData = {
  name: 'popconfirm',
  data: [
    {
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      wrapBgColor: '#fff',
      wrapRadius: 2,
      iconBgImage: popconfirmIcon,
      iconSize: '14px 14px',
      buttonRadius: 2,
      leftButtonBorderColor: '',
      leftButtonColor: '',
      textColor: '#5a6677',

      /* c7n */
      c7nIconSize: '0.14rem 0.14rem',
    },
  ],
};

export default popConfirmData;
