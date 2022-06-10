import { ComponentData } from '@hzero-front-ui/core';
import NotificationStyle from '../templates/Notification.style';
import NotificationHzeroStyle from '../templates-hzero/Notification.style';
const notificationData: ComponentData = {
  name: 'notification',
  data: [
    {
      fontSize: 12,
      contentLineheight: 20,
      wrapWidth: 384,
      wrapRadius: 4,
      iconWidth: 18,
      iconHeight: 18,
      iconFontSize: 18,
      iconTop: 18,
      iconMarginLeft: 16,
      wordsMarginLeft: 16,
      wordsMarginTop: 16,
      titleFontSize: 14,
      titleLineHeight: 22,
      middle: false,
      btnMarginT: 16,
      btnMarginB: 12,
    },
  ],
  onlyTemplate: { base: NotificationStyle, hzero: NotificationHzeroStyle },
};

export default notificationData;
