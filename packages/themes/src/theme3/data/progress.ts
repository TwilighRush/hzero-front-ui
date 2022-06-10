import { ComponentData } from "@hzero-front-ui/core";

const lineProgressData: ComponentData = {
  name: "lineProgress",
  data: [
    {
      height: 8,
      bg: "#F0F0F0",
      normalBg: "#3889FF",
      exceptionBg: "#FF4141",
      successBg: "#44CE6E",
      showExtra: false,
      // extraSize: 24,
      // extraBg: "rgba(255, 255, 255, 0.3)",
      // extraBorderColor: "rgba(79, 125, 231, 0.3)",
      // extraRadius: "50%", // 必须是百分数
      hideRightIcon: false
    }
  ]
};

const circleProgressData: ComponentData = {
  name: "circleProgress",
  data: [
    {
      normalStopColors: ["#3889FF33", "#3889FF"],
      successStopColors: ["#44ce6e", "#44CE6E33"],
      exceptionStopColors: ["#ff414133", "#FF4141"],

      // border: "1px solid transparent",
      textRadius: "50%",
      bgColor: "white",
      fontColor: "#3889FF",
      exceBorderColor: "#ff414133",
      execColor: "#FF4141",
      succBorderColor: "#44CE6E33",
      innerPadding: 5
    }
  ]
};

export { lineProgressData, circleProgressData };
