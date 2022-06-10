import { ComponentData } from '@hzero-front-ui/core';
import MessageStyle from '../templates/Message.style';
import MessageHzeroStyle from '../templates-hzero/Message.style';
const messageData: ComponentData = {
  name: 'message',
  data: [
    {
      borderRadius: '2px',
      fontSize: 12,
      fontLineHeight: 20,
      iconFontSize: 14,
      iconTop: 3,
      noticeTop: 8,
      addPadding: 0,
    },
  ],
  onlyTemplate: { base: MessageStyle, hzero: MessageHzeroStyle },
};

export default messageData;
