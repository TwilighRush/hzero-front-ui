import { ComponentData } from '@hzero-front-ui/core';
import NotificationStyle from '../templates/Notification.style';
import NotificationHzeroStyle from '../templates-hzero/Notification.style';
const notificationData: ComponentData = {
  name: 'notification',
  data: [
    {
      fontFamily: '',
      fontSize: 14,
      wrapWidth: 384,
      wrapRadius: 4,

      /* 标题颜色 */
      headColor: 'rgba(0,0,0,0.85)',

      /* 样式一中左边样式的背景色 无 */
      successIcon: `\\e70a`,
      infoIcon: `\\e723`,
      warnIcon: `\\e723`,
      errorIcon: `\\e713`,
      iconFontSize: 21,

      iconWidth: 21,
      iconHeight: 21,
      iconTop: 16,
      iconMarginLeft: 24,

      /* after：notification 的背景色 */
      successBodyBgColor: '#fff',
      infoBodyBgColor: '#fff',
      warnBodyBgColor: '#fff',
      errorBodyBgColor: '#fff',
      /* 字 */
      wordsMarginLeft: 24,
      wordsMarginTop: 16,
      descriptionColor: 'rgba(0,0,0,0.65)',
      /* 关闭按钮颜色 */
      closeColor: 'rgba(0,0,0,0.65)',
      middle: false, // 图标是否居中，该属性为true时，iconTop自动失效
    },
  ],
  onlyTemplate: [NotificationStyle, NotificationHzeroStyle],
};

export default notificationData;
