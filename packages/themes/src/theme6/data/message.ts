import { ComponentData } from '@hzero-front-ui/core';
import MessageStyle from '../templates/Message.style';
import MessageHzeroStyle from '../templates-hzero/Message.style';
const messageData: ComponentData = {
  name: 'message',
  data: [
    {
      infoBackground: '#fff',
      infoBorder: '#fff',
      infoBoxShadow: '0 10px 32px 0 rgba(38,38,38,0.18)',
      infoBorderRadius: '2px',
      infoBorderLeft: '12px',
      infoIconColor: '',

      successBackground: '#fff',
      successBorder: '#fff',
      successBoxShadow: '0 10px 32px 0 rgba(38,38,38,0.18)',
      successBorderRadius: '2px',
      successBorderLeft: '12px',
      successIconColor: '',

      errorBackground: '#fff',
      errorBorder: '#fff',
      errorBoxShadow: '0 10px 32px 0 rgba(38,38,38,0.18)',
      errorBorderRadius: '2px',
      errorBorderLeft: '12px',
      errorIconColor: '',

      warningBackground: '#fff',
      warningBorder: '#fff',
      warningBoxShadow: '0 10px 32px 0 rgba(38,38,38,0.18)',
      warningBorderRadius: '2px',
      warningBorderLeft: '12px',
      warningIconColor: '',

      fontSize: '14px',
      fontLineHeight: '16px',
      fontColor: 'rgba(0,0,0,0.65)',
      iconFontSize: '14px',
      iconTop: '1.5px',
    },
  ],
  onlyTemplate: [MessageStyle, MessageHzeroStyle],
};

export default messageData;
