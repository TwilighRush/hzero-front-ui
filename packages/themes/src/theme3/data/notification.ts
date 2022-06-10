import { ComponentData } from "@hzero-front-ui/core";
import notificationSuccessIconTwo from "../../theme1/assets/icons/success@3x.png";
import notificationInfoIconTwo from "../../theme1/assets/icons/info@3x.png";
import notificationWarningIconTwo from "../../theme1/assets/icons/warning@3x.png";
import notificationErrorIconTwo from "../../theme1/assets/icons/error@3x.png";

const notificationData: ComponentData = {
  name: "notification",
  data: [
    {
      fontFamily: "MicrosoftYaHei",
      fontSize: 12,
      wrapWidth: 350,
      wrapRadius: 2,

      /* 标题颜色 */
      headColor: "#333333",

      /* 样式一中左边样式的背景色 无 */
      successBg: notificationSuccessIconTwo,
      infoBg: notificationInfoIconTwo,
      warnBg: notificationWarningIconTwo,
      errorBg: notificationErrorIconTwo,

      iconWidth: 18,
      iconHeight: 18,
      iconTop: 16,
      iconMarginLeft: 16,
      successIconBgColor: "",
      infoIconBgColor: "",
      warnIconBgColor: "",
      errorIconBgColor: "",
      /* after：notification 的背景色 */
      successBodyBgColor: "#fff",
      infoBodyBgColor: "#fff",
      warnBodyBgColor: "#fff",
      errorBodyBgColor: "#fff",
      /* 字 */
      wordsMarginLeft: 42,
      descriptionColor: "#5A6677",
      /* 关闭按钮颜色 */
      closeColor: "#D5DAE0",
      middle: false // 图标是否居中，该属性为true时，iconTop自动失效
    }
  ]
};

export default notificationData;
