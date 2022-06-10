import { ComponentData } from "@hzero-front-ui/core";
import treeFolder from "../assets/icons/folder.png";
import treeFile from "../assets/icons/file.png";
import treeCheckUnfold from "../assets/icons/arrow-unfold.png";
import treeCheckCollopse from "../assets/icons/arrow-collapse.png";

const treeData: ComponentData = {
  name: "tree",
  data: [
    {
      fontFamily: "PingFangSC-Regular",
      fontSize: 12,
      color: "#333333",
      /* 箭头改造 */
      arrowWidth: 8,
      arrowHeight: 8,
      selectedFontColor: "#525A6E",
      selectedBackColor: "#F8FBFF",
      rotateOpen: "-45deg",
      rotateClose: "-135deg",
      borderWidth: 0,
      iconSize: 10,
      treeNormalIcon: treeFolder,
      treeOpenIcon: treeFolder,
      treeNodeIcon: treeFile,
      titleLeft: 0
    }
  ]
};

const treeCheckData: ComponentData = {
  name: "treeCheck",
  data: [
    {
      checkboxPosition: "default", // checkbox 默认在左边
      checkboxDisabledBorder: "#dbdfe6",
      checkboxDisabledBgColor: "#f5f5f5",
      checkboxRadius: 2,
      /* 未选中时为正方形 */
      checkboxWidth: 14,
      checkboxHeight: 14,

      treeNormalIcon: treeCheckUnfold,
      treeOpenIcon: treeCheckCollopse,
      treeNodeIcon: treeCheckCollopse
    }
  ]
};

export { treeData, treeCheckData };
