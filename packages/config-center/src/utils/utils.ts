import { ThemeContext } from '@hzero-front-ui/core';

export { getPrimaryColor } from '@hzero-front-ui/core/lib/utils';

export {
  getThemeData as getRequiredData,
  getStyleSheetTarget,
  getAsset,
  hexToRgbaColor,
} from '@hzero-front-ui/core';

export function _getAsset(name: string) {
  const { originTheme = {} } = ((ThemeContext as any) || {})._currentValue || {};
  const { images: assets = {} } = originTheme;
  return assets[name];
}
