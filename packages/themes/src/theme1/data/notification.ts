import { ComponentData } from '@hzero-front-ui/core';
// import notificationSuccessIconTwo from "../assets/icons/success@3x.png";
// import notificationInfoIconTwo from "../assets/icons/info@3x.png";
// import notificationWarningIconTwo from "../assets/icons/warning@3x.png";
// import notificationErrorIconTwo from "../assets/icons/error@3x.png";
// import notificationSuccessIconThree from "../assets/icons/success-2@3x.png";
// import notificationInfoIconThree from "../assets/icons/info-2@3x.png";
// import notificationWarningIconThree from "../assets/icons/warning-2@3x.png";
// import notificationErrorIconThree from "../assets/icons/error-2@3x.png";

const notificationData: ComponentData = {
  name: 'notification',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      wrapWidth: 350,
      wrapRadius: 2,
      /* 标题颜色 */
      headColor: '#333333',
      /* 图标背景图片 */
      successBg: '',
      infoBg: '',
      warnBg: '',
      errorBg: '',
      /* Icon 图片的设置，样式一没有图片 */
      iconWidth: 4, // 竖条的宽
      iconHeight: '100%',
      iconTop: 0,
      iconMarginLeft: 'unset',
      // 图标背景色
      successIconBgColor: '#39c878',
      infoIconBgColor: '#4f7de7',
      warnIconBgColor: '#f8b303',
      errorIconBgColor: '#fd6868',
      /* after：notification 的背景色 */
      successBodyBgColor: '',
      infoBodyBgColor: '',
      warnBodyBgColor: '',
      errorBodyBgColor: '',
      /* 字 */
      wordsMarginLeft: 12,
      descriptionColor: '#5a6677',
      /* 关闭按钮颜色 */
      closeColor: 'unset',
      middle: false, // 图标是否居中，该属性为true时，iconTop自动失效
    },
  ],
};

export default notificationData;
