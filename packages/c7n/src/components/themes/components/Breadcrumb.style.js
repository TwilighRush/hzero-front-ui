import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const getMainStyle = (props) => {
  const { primary } = getThemeData(props, "common");

  return css`
    .c7n-breadcrumb {
      font-size: 0.14rem;
      font-family: "Monospaced Number", "Microsoft YaHei", "Chinese Quote",
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC",
        "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
      > span:last-child .c7n-breadcrumb-link {
        color: ${primary};
      }
      a:hover {
        color: ${primary};
      }
    }
  `;
};

export default createStyleComponent("comp/breadcrumb", getMainStyle);
