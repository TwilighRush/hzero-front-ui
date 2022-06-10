const tinycolor = require('tinycolor2');

//十六进制转rgb
function HextoRgb(color: string) {
  let result: { r: number; g: number; b: number } = {
    r: parseInt('0x' + color.slice(1, 3)),
    g: parseInt('0x' + color.slice(3, 5)),
    b: parseInt('0x' + color.slice(5, 7)),
  };
  return result;
}

// rgba 转rgb
function RgbatoRgb(color: { r: number; g: number; b: number }, opacity: number) {
  let r = Math.round((1 - opacity) * 255 + opacity * color.r);
  let g = Math.round((1 - opacity) * 255 + opacity * color.g);
  let b = Math.round((1 - opacity) * 255 + opacity * color.b);
  return {
    r,
    g,
    b,
  };
}
function createColorPalette() {
  return (color: string, index: number): string => {
    let hsv = tinycolor(color).toHsv(); //主色
    let rgbColor = HextoRgb(color);
    switch (index) {
      case 1:
        return tinycolor(RgbatoRgb(rgbColor, 0)).toHexString();
      case 2:
        return tinycolor(RgbatoRgb(rgbColor, 0.02)).toHexString();
      case 3:
        return tinycolor(RgbatoRgb(rgbColor, 0.04)).toHexString();
      case 4:
        return tinycolor(RgbatoRgb(rgbColor, 0.06)).toHexString();
      case 5:
        return tinycolor(RgbatoRgb(rgbColor, 0.10)).toHexString();
      case 6:
        return tinycolor(RgbatoRgb(rgbColor, 0.25)).toHexString();
      case 7:
        return tinycolor(RgbatoRgb(rgbColor, 0.45)).toHexString();
      case 8:
        return tinycolor(RgbatoRgb(rgbColor, 0.65)).toHexString();
      case 9:
        return tinycolor(RgbatoRgb(rgbColor, 0.75)).toHexString();
      case 10:
        return tinycolor(RgbatoRgb(rgbColor, 0.85)).toHexString();
      case 11:
        return tinycolor(RgbatoRgb(rgbColor, 0.88)).toHexString();
      case 12:
        return tinycolor(RgbatoRgb(rgbColor, 0.92)).toHexString();
      case 13:
        return tinycolor(hsv).toHexString();
      default:
        return tinycolor(hsv).toHexString();
    }
  };
}

const colorPalette = createColorPalette();

function getTheme5ColorGradation(
  color: string
): {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  step6: string;
  step7: string;
  step8: string;
  step9: string;
  step10: string;
  step11: string;
  step12: string;
  step13: string;
} {
  const result: any = {};
  Array.from({ length: 13 }).forEach(
    (_, i) => (result[`step${i + 1}`] = colorPalette(color, i + 1))
  );
  return result;
}

export { getTheme5ColorGradation };
