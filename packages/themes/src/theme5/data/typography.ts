import { ComponentData } from '@hzero-front-ui/core';
import typographyStyle from '../templates/Typography.style';

const typographyData: ComponentData = {
  name: 'typography',
  data: [
    {
      regularFontFamily: 'PingFangSC-Regular',
      mediumFontFamily: 'PingFangSC-Medium',
      // h1 style data
      h1FontSize: 24,
      h1FontWeight: 500,
      h1LineHeight: 32,
      // h2 style data
      h2FontSize: 16,
      h2FontWeight: 500,
      h2LineHeight: 24,
      // h3 style data
      h3FontSize: 14,
      h3FontWeight: 500,
      h3LineHeight: 22,
      // h4 style data
      h4FontSize: 14,
      h4LineHeight: 22,
      h4Color: 'rgba(0, 0, 0, 0.45)',
      // h5 style data
      h5FontSize: 12,
      h5LineHeight: 20,
      h5Color: 'rgba(0, 0, 0, 0.85)',
      // blockquote style data
      blockquoteFontSize: 14,
      blockquoteColor: '#686868',
      // link style data
      linkFontSize: 14,
      linkColor: '#4590ff',
      linkLineHeight: 0,
      // strong style data
      strongFontSize: 14,
      strongColor: '#1c1c1c',
      strongLineHeight: 20,
      strongFontWeight: 500,
      // code style data
      codeFontSize: 14,
      codeBorderRadius: 2,
      codeBorder: 'none',
      // del style data
      delFontSize: 14,
      // copy style dada
      copyMarginLeft: 9,
      // copy icon data
      copyIconFontSize: 12,
      // expand style data
      expandFontSize: 14,
    },
  ],
  onlyTemplate: { pro: typographyStyle },
};

export default typographyData;
