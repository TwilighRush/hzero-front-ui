import { css } from "styled-components";
import { getThemeData, createStyleComponent } from "@hzero-front-ui/core";

const setTypographyCss = (props) => {
  const data = getThemeData(props, "typography");
  const {
    regularFontFamily,
    mediumFontFamily,
    h1FontSize,
    h1FontWeight,
    h1LineHeight,
    h1Color,
    h2FontSize,
    h2FontWeight,
    h2LineHeight,
    h2Color,
    h3FontSize,
    h3FontWeight,
    h3LineHeight,
    h3Color,
    h4FontSize,
    h4LineHeight,
    h4Color,
    h5FontSize,
    h5LineHeight,
    h5Color,
    blockquoteFontSize,
    blockquoteColor,
    blockquoteLineHeight,
    linkFontSize,
    linkColor,
    linkLineHeight,
    strongFontSize,
    strongColor,
    strongLineHeight,
    strongFontWeight,
    markColor,
    codeFontSize,
    codeBg,
    codeBorderRadius,
    codeBorder,
    codeColor,
    delFontSize,
    delColor,
    copyMarginLeft,
    copyIconColor,
    copyIconFontSize,
    expandFontSize,
    expandColor,
  } = data;
  if (props.schema === "theme3") {
    return css`
      h1.c7n-pro-typography.c7n-pro-typography,
      .c7n-pro-typography.c7n-pro-typography h1 {
        font-family: ${mediumFontFamily};
        font-size: ${h1FontSize}px;
        color: ${h1Color};
        line-height: ${h1LineHeight}px;
        font-weight: ${h1FontWeight};
      }
      .c7n-pro-typography.c7n-pro-typography + h2.c7n-pro-typography {
        font-family: ${mediumFontFamily};
        font-size: ${h2FontSize}px;
        color: ${h2Color};
        line-height: ${h2LineHeight}px;
        font-weight: ${h2FontWeight};
      }
      .c7n-pro-typography.c7n-pro-typography + h3.c7n-pro-typography {
        font-family: ${mediumFontFamily};
        font-size: ${h3FontSize}px;
        color: ${h3Color};
        line-height: ${h3LineHeight}px;
        font-weight: ${h3FontWeight};
      }
      .c7n-pro-typography.c7n-pro-typography + h4.c7n-pro-typography {
        font-family: ${regularFontFamily};
        font-size: ${h4FontSize}px;
        color: ${h4Color};
        line-height: ${h4LineHeight}px;
      }
      .c7n-pro-typography.c7n-pro-typography + h5.c7n-pro-typography,
      div.c7n-pro-typography.c7n-pro-typography,
      .c7n-pro-typography.c7n-pro-typography p,
      .c7n-pro-typography.c7n-pro-typography blockquote {
        font-family: ${regularFontFamily};
      }
      .c7n-pro-typography.c7n-pro-typography + h5.c7n-pro-typography {
        font-size: ${h5FontSize}px;
        color: ${h5Color};
        line-height: ${h5LineHeight}px;
      }
      div.c7n-pro-typography.c7n-pro-typography,
      .c7n-pro-typography.c7n-pro-typography p,
      .c7n-pro-typography.c7n-pro-typography blockquote {
        font-size: ${blockquoteFontSize}px;
        color: ${blockquoteColor};
        line-height: ${blockquoteLineHeight}px;
      }
      .c7n-pro-typography.c7n-pro-typography a,
      .c7n-pro-typography.c7n-pro-typography.c7n-pro-typography-link {
        font-family: ${regularFontFamily};
        font-size: ${linkFontSize}px;
        color: ${linkColor};
        line-height: ${linkLineHeight}px;
      }
      .c7n-pro-typography.c7n-pro-typography strong {
        font-family: ${mediumFontFamily};
        font-size: ${strongFontSize}px;
        color: ${strongColor};
        line-height: ${strongLineHeight}px;
        font-weight: ${strongFontWeight};
      }
      .c7n-pro-typography.c7n-pro-typography mark {
        background-color: ${markColor};
      }
      .c7n-pro-typography.c7n-pro-typography code {
        font-family: ${regularFontFamily};
        font-size: ${codeFontSize}px;
        background: ${codeBg};
        border-radius: ${codeBorderRadius}px;
        border: ${codeBorder};
        color: ${codeColor};
      }
      .c7n-pro-typography.c7n-pro-typography del {
        font-family: ${regularFontFamily};
        font-size: ${delFontSize}px;
        color: ${delColor};
      }
      .c7n-pro-typography-copy.c7n-pro-typography-copy {
        margin-left: ${copyMarginLeft}px;
      }
      .c7n-pro-typography-copy.c7n-pro-typography-copy .icon {
        color: ${copyIconColor};
        font-size: ${copyIconFontSize}px;
      }
      .c7n-pro-typography-expand.c7n-pro-typography-expand {
        font-family: ${regularFontFamily};
        font-size: ${expandFontSize}px;
        color: ${expandColor};
      }
    `;
  }
  return "";
};

export default createStyleComponent("typography", setTypographyCss);
