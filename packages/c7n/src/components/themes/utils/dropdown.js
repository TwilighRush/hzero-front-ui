import { css } from "styled-components";
import { getThemeData } from "@hzero-front-ui/core";

export const getDropdownItemCss = props => {
  const {
    fontFamily,
    dropdownItemFontSize,
    activeBgColor,
    activeFontWeight,
    hoverBgColor,
  } = getThemeData(props, "select");
  return css`
    font-family: ${fontFamily};
    font-size: ${dropdownItemFontSize}px;
    &-selected,
    &:hover {
      background: ${activeBgColor};
      font-weight: ${activeFontWeight};
    }
    &-active {
      background: ${hoverBgColor};
    }
  `;
};
