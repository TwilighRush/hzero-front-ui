import { css } from "styled-components";

import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";
import { getSelectArrow } from "../utils";

const getStyle = (props) => {
  const { mutiSelectHeight } = getThemeData(props, "cascader");
  return css`
    .c7n-pro-cascader-wrapper.c7n-pro-cascader-multiple {
      .c7n-pro-cascader-multiple-block {
        .icon.icon-cancel {
          :before {
            line-height: 0.24rem;
          }
        }
      }
    }
    .c7n-pro-cascader-wrapper {
      .c7n-pro-cascader-trigger:before {
        ${getSelectArrow}
      }
      &.c7n-pro-cascader-multiple .c7n-pro-cascader:not(:last-child) {
        border: none;
      }
      .c7n-pro-cascader > ul {
        height: ${mutiSelectHeight};
      }
    }
  `;
};

export default createStyleComponent("cascader", getStyle);
