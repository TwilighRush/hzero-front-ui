import { css, createGlobalStyle } from 'styled-components';
import { fontSizeLG, fontSizeSM } from '../utils/variable';
import { getIconStyle, getIconClasses } from '../utils/utils';

import hzeroCompactData from './hzero-fonts/iconfont.json';

import hzeroCompactTtf from './hzero-fonts/iconfont.ttf';
import hzeroCompactWoff from './hzero-fonts/iconfont.woff';

const iconStyle = css`
  @font-face {
    font-family: 'iconfont-hzero-fonts';
    src: url('${hzeroCompactWoff}');
    src: url('${hzeroCompactTtf}') format('truetype'), url('${hzeroCompactWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  /* c7n-ui 图标覆盖 */
  .icon {
    line-height: 0;
    ${getIconStyle()};
    &.lg {
      font-size: ${fontSizeLG};
      width: ${fontSizeLG};
      height: ${fontSizeLG};
    }
    &.sm {
      font-size: ${fontSizeSM};
      width: ${fontSizeSM};
      height: ${fontSizeSM};
    }
  }

  ${getIconClasses(hzeroCompactData.glyphs, 'compacticon', 'iconfont-hzero-fonts')}
`;

const IconStyle = createGlobalStyle`
  /* C7n-ui 对应的主题字体图标 */
  ${iconStyle}
`;

export default IconStyle;

export { iconStyle };
