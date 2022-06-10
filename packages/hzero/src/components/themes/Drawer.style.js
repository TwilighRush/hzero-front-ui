import { css } from "styled-components";
import { createStyleComponent } from "@hzero-front-ui/core/lib/utils";

const DrawerStyle = () => {
  return css`
    .ant-drawer {
      .ant-drawer-body {
        padding: 16px;
      }
    }
  `;
};
export default createStyleComponent("drawer", DrawerStyle, true);
