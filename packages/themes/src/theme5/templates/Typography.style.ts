import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TypographyStyle = (props: any) => {
  const { titleColor1, primary6, yellowColor5, lineColor3, titleColor2 } = getThemeData(
    props,
    'common'
  );
  const {
    regularFontFamily,
    mediumFontFamily,
    h1FontSize,
    h1FontWeight,
    h1LineHeight,
    h2FontSize,
    h2FontWeight,
    h2LineHeight,
    h3FontSize,
    h3FontWeight,
    h3LineHeight,
    h4FontSize,
    h4LineHeight,
    h4Color,
    h5FontSize,
    h5LineHeight,
    h5Color,
    blockquoteFontSize,
    linkFontSize,
    linkLineHeight,
    strongFontSize,
    strongLineHeight,
    strongFontWeight,
    codeFontSize,
    codeBorderRadius,
    codeBorder,
    delFontSize,
    copyMarginLeft,
    copyIconFontSize,
    expandFontSize,
  } = getThemeData(props, 'typography');
  return css`
    h1.c7n-pro-typography.c7n-pro-typography,
    .c7n-pro-typography.c7n-pro-typography h1 {
      font-family: ${mediumFontFamily};
      font-size: ${h1FontSize}px;
      color: ${titleColor1};
      line-height: ${h1LineHeight}px;
      font-weight: ${h1FontWeight};
    }
    .c7n-pro-typography.c7n-pro-typography + h2.c7n-pro-typography {
      font-family: ${mediumFontFamily};
      font-size: ${h2FontSize}px;
      color: ${titleColor1};
      line-height: ${h2LineHeight}px;
      font-weight: ${h2FontWeight};
    }
    .c7n-pro-typography.c7n-pro-typography + h3.c7n-pro-typography {
      font-family: ${mediumFontFamily};
      font-size: ${h3FontSize}px;
      color: ${titleColor1};
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
      color: ${h5Color};
      line-height: ${h5LineHeight}px;
    }
    .c7n-pro-typography.c7n-pro-typography + h5.c7n-pro-typography {
      font-size: ${h5FontSize}px;
    }
    div.c7n-pro-typography.c7n-pro-typography,
    .c7n-pro-typography.c7n-pro-typography p,
    .c7n-pro-typography.c7n-pro-typography blockquote {
      font-size: ${blockquoteFontSize}px;
    }
    .c7n-pro-typography.c7n-pro-typography a,
    .c7n-pro-typography.c7n-pro-typography.c7n-pro-typography-link {
      font-family: ${regularFontFamily};
      font-size: ${linkFontSize}px;
      color: ${primary6};
      line-height: ${linkLineHeight}px;
    }
    .c7n-pro-typography.c7n-pro-typography strong {
      font-family: ${mediumFontFamily};
      font-size: ${strongFontSize}px;
      color: ${titleColor1};
      line-height: ${strongLineHeight}px;
      font-weight: ${strongFontWeight};
    }
    .c7n-pro-typography.c7n-pro-typography mark {
      background-color: #${yellowColor5};
    }
    .c7n-pro-typography.c7n-pro-typography code {
      font-family: ${regularFontFamily};
      font-size: ${codeFontSize}px;
      background: ${lineColor3};
      border-radius: ${codeBorderRadius}px;
      border: ${codeBorder};
      color: ${titleColor2};
    }
    .c7n-pro-typography.c7n-pro-typography del {
      font-family: ${regularFontFamily};
      font-size: ${delFontSize}px;
      color: ${titleColor2};
    }
    .c7n-pro-typography-copy.c7n-pro-typography-copy {
      margin-left: ${copyMarginLeft}px;
    }
    .c7n-pro-typography-copy.c7n-pro-typography-copy .icon {
      color: ${primary6};
      font-size: ${copyIconFontSize}px;
    }
    .c7n-pro-typography-expand.c7n-pro-typography-expand {
      font-family: ${regularFontFamily};
      font-size: ${expandFontSize}px;
      color: ${primary6};
    }
  `;
};

export default css`
  ${TypographyStyle}
`;
