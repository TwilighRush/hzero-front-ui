import { css } from 'styled-components';
import { fontSizeBase, fontSizeSM } from './variable';

export function getIconStyle(size = fontSizeBase) {
  return css`
    font-size: ${size};
    display: inline-block;
    user-select: none;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    vertical-align: middle;
    background-image: none;
    /* font-family: 'iconfont-c7n', 'icomoon' !important; */
    speak: none;
    font-style: normal;
    font-weight: inherit;
    font-variant: normal;
    text-transform: none;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:before {
      line-height: 1;
    }
  `;
}

export function getIconFont(content, size = fontSizeBase) {
  return css`
    ${getIconStyle(size)};
    &:before {
      content: ${content};
    }
  `;
}

export function getIconStyleUnder12px(size, rotate = '0deg') {
  const fontScale = `${size.split('r')[0] / 0.12}rem`;
  return css`
    display: inline-block;
    font-size: 0.12rem;
    font-size: ${'~'} '${size} \9';
    transform: scale(${fontScale}) rotate(${rotate});
    :root & {
      font-size: ${fontSizeSM};
    }
  `;
}

export function getIconClasses(arr = [], prefix = 'icon', fontFamily) {
  return arr.map((o) =>
    prefix === 'anticon'
      ? css`
          .${prefix}.${prefix}-${o.font_class}:before {
            font-family: '${fontFamily}' !important;
            content: '${`\\${o.unicode}`}' !important;
          }
        `
      : prefix === 'compacticon' || prefix === 'menuicon'
      ? css`
          .${prefix}.icon-${o.font_class}:before {
            font-family: '${fontFamily}' !important;
            content: '${`\\${o.unicode}`}' !important;
          }
        `
      : css`
          .${prefix}.${prefix}-${o.font_class}:before {
            font-family: '${fontFamily}';
            content: '${`\\${o.unicode}`}';
          }
        `
  );
}
