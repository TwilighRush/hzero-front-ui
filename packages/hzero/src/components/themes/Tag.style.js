import { css } from "styled-components";
import {
  getThemeData,
  createStyleComponent,
} from "@hzero-front-ui/core/lib/utils";

const tagStyle = props => {
  const { primary } = getThemeData(props, "common");
  const {
    background,
    color,
    borderRadius,
    checkedBackground,
    checkedColor,
  } = getThemeData(props, "tag");
  return css`
    .ant-tag {
      border-radius: ${borderRadius || "0.02rem"};
      &.ant-tag-checkable:active {
        background: ${checkedBackground || primary};
        color: ${checkedColor || "#fff"};
      }
      &.ant-tag-checkable-checked {
        background: ${checkedBackground || primary};
        color: ${checkedColor || "#fff"};
        a {
          color: ${checkedColor || "#fff"};
          &:hover {
            color: ${checkedColor || "#fff"};
          }
        }
      }
    }
    [class="ant-tag"] {
      background: ${background || primary};
      color: ${color || "#fff"};
      a {
        color: ${color || "#fff"};
        &:hover {
          color: ${color || "#fff"};
        }
      }
    }
  `;
};

export default createStyleComponent("tag", tagStyle);
