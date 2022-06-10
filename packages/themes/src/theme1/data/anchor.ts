import { ComponentData } from "@hzero-front-ui/core";

const anchorData: ComponentData = {
  name: "anchor",
  data: [
    {
      fontFamily: "MicrosoftYaHei",
      fontSize: 12,
      grayColor: "#aaadba",
      /* 点 */
      nodeWidth: 6,
      nodeHeight: 6,
      nodeRadius: "50%",
      // 每个点上下距离
      nodeDistance: 8,
      // 圆点左移
      nodeLeft: -10,
      // 圆点下移
      nodeTranslateY: -4,
      /* 线 */
      lineWidth: 1,
      // 遮挡上下突出的线
      hideTopLength: 20,
      hideBottomLength: 20,
      /* 字 */
      // 左边距离
      wordsLeft: 9
    }
  ]
};

export default anchorData;
