import { ComponentData } from '@hzero-front-ui/core';
import popconfirmIcon from '../../theme1/assets/icons/warning-2@3x.png';
import popconfirmStyle from '../templates/PopConfirm.style';
import popconfirmHzeroStyle from '../templates-hzero/Popconfirm.style';

const popConfirmData: ComponentData = {
  name: 'popconfirm',
  data: [
    {
      fontFamily: '',
      fontSize: 14,
      wrapBgColor: '#FFFFFF',
      wrapRadius: 2,
      iconContent: `\\e723`,
      iconBgImage: popconfirmIcon,
      iconSize: 14,
      buttonRadius: 14,
      leftButtonBorderColor: '#D5DAE0',
      leftButtonColor: '#576679',
      textColor: '#5A6677',
      lineHeight: 22,
      contentColor: 'rgba(0, 0, 0, 0.65)',
      headerColor: 'rgba(0, 0, 0, 0.85)',
      /* c7n */
      c7nIconSize: '0.14rem 0.14rem',
      leftButtonBorderWidth: 1,
      buttonPadding: '0.02rem 0.12rem',
      rightButtonBorder: 'none',

      rightButtonColor: '#0840F8',
      rightButtonBgColor: 'transparent',
      rightButtonHeight: 24,
      rightButtonMinWidth: 40,
    },
  ],
  onlyTemplate: [popconfirmStyle, popconfirmHzeroStyle],
};

export default popConfirmData;
