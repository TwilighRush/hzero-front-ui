import { ComponentData } from "@hzero-front-ui/core";

const listData: ComponentData = {
  name: "list",
  data: [
    {
      striped: true,
      stripedBg: "#F8FBFF",
      fontFamily: "PingFangSC-Regular",
      fontSize: 12,
      // 最外层边框
      wrapBorder: "none",

      /* 是否去除 header、item、footer 边框，none：去除 */
      itemBorder: "none",
      // 边框颜色
      borderColor: "",

      /* list 的 header 样式 */
      headFontSize: 13,
      minHeight: 36,
      headerColor: "#333333",
      // 上下 左右 内边距
      padding: "6px 12px",
      // 头内容左边距离
      headerPaddingLeft: "",

      /* list 每一项的样式 */
      itemColor: "#4d4d4d",
      // item 边框阴影
      boxShadow: "",
      borderRadius: "",
      // 每个 item 的间距
      marginBottom: "",

      /* list 文字描述样式 */
      descriptionColor: "#AAADBA",

      /* c7n padding */
      c7npadding: "0.06rem 0.12rem"
    }
  ]
};

export default listData;
