import { ComponentData } from '@hzero-front-ui/core';
import popconfirmIcon from '../../theme1/assets/icons/warning-2@3x.png';

const popConfirmData: ComponentData = {
  name: 'popconfirm',
  data: [
    {
      fontFamily: 'PingFangSC-Regular',
      fontSize: 12,
      wrapBgColor: '#FFFFFF',
      wrapRadius: 2,
      iconBgImage: popconfirmIcon,
      iconSize: '12px 12px',
      buttonRadius: 14,
      leftButtonBorderColor: '#D5DAE0',
      leftButtonColor: '#576679',
      textColor: '#5A6677',

      /* c7n */
      c7nIconSize: '0.14rem 0.14rem',
      leftButtonBorderWidth: 1,
      buttonPadding: '0.02rem 0.12rem',
      rightButtonBorder: 'none',
      rightButtonColor: 'white',
      rightButtonBgColor: '#3889FF',
      boxShadow: '0 2px 6px 0 rgba(67,87,174,0.20)',
    },
  ],
};

export default popConfirmData;
