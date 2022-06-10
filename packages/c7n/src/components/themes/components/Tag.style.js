import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const tagStyle = (props) => {
  const { primary } = getThemeData(props, "common");
  const {
    background,
    color,
    borderRadius,
    checkedBackground,
    checkedColor,
    c7nTextColor,
    c7nBackground,
    padding,
    c7nBorderRadius,
    border,
    fontFamily,
    geekblueColor,
  } = getThemeData(props, "tag");

  const d = getThemeData(props, "tag");

  return css`
    .c7n-tag-geekblue {
      color: ${geekblueColor};
    }
    .c7n-tag-green {
      color: ${d.greenColor};
      background: ${d.greenBackground};
      border-color: ${d.greenBorder};
    }
    .c7n-tag {
      padding: ${padding};
      border-radius: ${c7nBorderRadius || borderRadius || "0.02rem"};
      &.c7n-tag-checkable:active {
        background: ${checkedBackground || primary};
        color: ${checkedColor || "#fff"};
      }
      &.c7n-tag-checkable-checked {
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
    [class="c7n-tag"][class="c7n-tag"] {
      background: ${c7nBackground || background || primary};
      color: ${c7nTextColor || color || "#fff"};
      border: ${border};
      border-color: ${c7nBackground || primary};
      font-family: ${fontFamily};
      /* padding-top: 0.02rem; */
      a {
        color: ${color || "#fff"};
        &:hover {
          color: ${color || "#fff"};
        }
      }
    }
  `;
};

export default createStyleComponent("comp/tag", tagStyle);
