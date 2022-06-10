import { defineGlobalVersion } from '@hzero-front-ui/core/lib/utils';
import IconStyle1, { iconStyle as iconStyle1 } from './theme1';
import IconStyle5, { iconStyle as iconStyle5 } from './theme5';
import IconStyle6, { iconStyle as iconStyle6 } from './theme6';
defineGlobalVersion(require('../package.json'));

const NoMatch = () => '';

const fontMap = new Map([
  [undefined, NoMatch],
  [null, NoMatch],
  ['theme1', IconStyle1],
  ['theme2', NoMatch],
  ['theme3', IconStyle1],
  ['theme5', IconStyle5],
  ['theme6', IconStyle6],
]);

const fontCssMap = new Map([
  ['theme1', iconStyle1],
  ['theme5', iconStyle5],
  ['theme6', iconStyle6],
]);

export default fontMap;

export { fontCssMap };
