import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

function getSelectBoxStyle(props) {
  const d = getThemeData(props, "input");
  return css`
    .c7n-pro-select-box-wrapper,
    .c7n-pro-select-box {
      height: ${d.inputHeight}px;
      line-height: 0;
    }
  `;
}
const SelectBox = css`
  /* SelectBox--pro 全局样式实现 */
  ${getSelectBoxStyle}
`;

export default createStyleComponent('selectBox', SelectBox);
