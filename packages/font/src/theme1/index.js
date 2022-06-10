import { css, createGlobalStyle } from 'styled-components';
import { getC7NContextConfig as getConfig } from '@hzero-front-ui/core/lib/utils';
import { fontSizeLG, fontSizeSM } from '../utils/variable';
import { getIconStyle, getIconClasses } from '../utils/utils';

import c7nData from './c7n-fonts/iconfont.json';
import hzeroData from './hzero-fonts/iconfont.json';

import c7nEot from './c7n-fonts/iconfont.eot';
import c7nTtf from './c7n-fonts/iconfont.ttf';
import c7nWoff from './c7n-fonts/iconfont.woff';
import c7nSvg from './c7n-fonts/iconfont.svg';

import hzeroEot from './hzero-fonts/iconfont.eot';
import hzeroTtf from './hzero-fonts/iconfont.ttf';
import hzeroWoff from './hzero-fonts/iconfont.woff';
import hzeroSvg from './hzero-fonts/iconfont.svg';

const iconStyle = css`
  @font-face {
    font-family: 'iconfont-c7n';
    src: url('${c7nEot}');
    src: url('${c7nEot}') format('embedded-opentype'), url('${c7nTtf}') format('truetype'),
      url('${c7nWoff}') format('woff'), url('${c7nSvg}') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'iconfont-hzero';
    src: url('${hzeroEot}');
    src: url('${hzeroEot}') format('embedded-opentype'), url('${hzeroTtf}') format('truetype'),
      url('${hzeroWoff}') format('woff'), url('${hzeroSvg}') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  /* c7n-ui 图标覆盖 */
  .icon {
    line-height: 1;
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

  ${getIconClasses(c7nData.glyphs, getConfig('iconfontPrefix') || 'icon', 'iconfont-c7n')}

  /* hzero-ui 图标覆盖 */

  ${getIconClasses(hzeroData.glyphs, 'anticon', 'iconfont-hzero')}
`;

const IconStyle = createGlobalStyle`
  /* C7n-ui 对应的主题字体图标 */
  ${iconStyle}
`;

export default IconStyle;

export { iconStyle };
