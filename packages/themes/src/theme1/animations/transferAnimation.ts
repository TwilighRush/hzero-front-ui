import { css } from "styled-components";
import { coreBorderAnimation } from "./inputAnimation";

const transferAnimation = {
  border: css`
    .ant-transfer .ant-transfer-list,
    .c7n-transfer .c7n-transfer-list,
    .c7n-pro-transfer-wrapper .c7n-pro-transfer {
      ${coreBorderAnimation};
    }
  `
};

export default transferAnimation;
