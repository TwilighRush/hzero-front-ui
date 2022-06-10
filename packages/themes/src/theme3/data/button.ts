import { ComponentData, hexToRgbaColor } from "@hzero-front-ui/core";

const buttonData: ComponentData = {
  name: "button",
  data: [
    {
      fontFamily: "MicrosoftYaHei",
      leftRightPadding: 16,
      fontSize: 12,
      radius: 14,
      height: 26,

      borderWidth: 1,
      primaryBgColor: "#3889FF",
      primaryColor: "#fff",
      primaryBorderColor: "#3889FF",
      primaryHoverBgColor: "#357BE1",
      primaryHoverColor: "#fff",
      primaryHoverBorderColor: "#357BE1",
      primaryDisabledColor: "#fff",
      primaryDisabledBgColor: "rgba(56,137,255,0.50)",
      primaryDisabledBorderColor: "rgba(56,137,255,0.50)",

      // 默认按钮
      defaultBgColor: "#fff",
      defaultColor: "#576679",
      defaultBorderColor: "#D5DAE0",
      defaultHoverBgColor: "#fff",
      defaultHoverColor: "#3889FF",
      defaultHoverBorderColor: "#D5DAE0",
      defaultDisabledColor: "rgba(87,102,121,0.50)",
      defaultDisabledBgColor: "#F8F8F8",
      defaultDisabledBorderColor: "#D5DAE0",
      // 错误类型
      errorBorderColor: "#FF5656 ",
      errorFontColor: "#FF5656",
      errorBg: "#fff",
      errorDisabledBorderColor: hexToRgbaColor("#FF5656", 0.5),
      errorDisabledFontColor: hexToRgbaColor("#FF5656", 0.5),
      errorDisabledBg: "#fff",
      textDisabledColor: "#AAADBA"
    }
  ]
  // extraTemplate: css``,
  // onlyTemplate: css``
};

export default buttonData;
