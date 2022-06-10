import { css } from "styled-components";

import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const getMainStyle = props => {
  const { primary } = getThemeData(props, "common");

  return css`
    .ant-breadcrumb {
      font-size: 14px;
      > span:last-child .ant-breadcrumb-link {
        color: ${primary};
      }
    }
  `;
};

export default createStyleComponent("breadcrumb", getMainStyle);
