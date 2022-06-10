import { css, createGlobalStyle } from 'styled-components';
import { getC7NContextConfig as getConfig } from '@hzero-front-ui/core/lib/utils';
import { fontSizeLG, fontSizeSM } from '../utils/variable';
import { getIconStyle, getIconClasses } from '../utils/utils';

import hzeroMenuData from './hzero-menu-fonts/iconfont.json';
import hzeroMenuTtf from './hzero-menu-fonts/iconfont.ttf';
import hzeroMenuWoff from './hzero-menu-fonts/iconfont.woff';

import c7nData from './c7n-ui-fonts/iconfont.json';
import c7nEot from './c7n-ui-fonts/iconfont.eot';
import c7nTTf from './c7n-ui-fonts/iconfont.ttf';
import c7nWoff from './c7n-ui-fonts/iconfont.woff';

import HzeroData from 'hzero-ued-icon/lib/font/iconfont.json';
import hzeroEot from 'hzero-ued-icon/lib/font/iconfont.eot';
import hzeroTtf from 'hzero-ued-icon/lib/font/iconfont.ttf';
import hzeroWoff from 'hzero-ued-icon/lib/font/iconfont.woff';
const iconStyle = css`
  @font-face {
    font-family: 'iconfont-c7n-font';
    src: url('${hzeroTtf}') format('truetype'), url('${hzeroWoff}') format('woff'),
      url('${hzeroEot}') format('embedded-opentype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'iconfont-hzero-menu';
    src: url('${hzeroMenuWoff}');
    src: url('${hzeroMenuTtf}') format('truetype'), url('${hzeroMenuWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'hzero-c7n-font';
    src: url('${c7nTTf}') format('truetype'), url('${c7nWoff}') format('woff'),
      url('${c7nEot}') format('embedded-opentype');
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
  ${getIconClasses(hzeroMenuData.glyphs, 'menuicon', 'iconfont-hzero-menu')}
  ${getIconClasses(c7nData.glyphs, getConfig('iconfontPrefix') || 'icon', 'hzero-c7n-font')}
  ${getIconClasses(HzeroData.glyphs, getConfig('iconfontPrefix') || 'icon', 'iconfont-c7n-font')}
`;

const IconStyle = createGlobalStyle`
  /* C7n-ui 对应的主题字体图标 */
  ${iconStyle}
`;

export default IconStyle;

export { iconStyle };
