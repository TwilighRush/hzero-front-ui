const tinycolor = require('tinycolor2');

//十六进制转rgb
function HextoRgb(color: string) {
  let result: { r: number; g: number; b: number } = {
    r: parseInt('0x' + color.slice(1, 3)),
    g: parseInt('0x' + color.slice(3, 5)),
    b: parseInt('0x' + color.slice(5, 7)),
  };
  // result.r = parseInt('0x' + color.slice(1, 3));
  // result.g = parseInt('0x' + color.slice(3, 5));
  // result.b = parseInt('0x' + color.slice(5, 7));
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
    //  console.log(`theme5:${color}`)
    let rgbColor = HextoRgb(color);
    // var i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
    switch (index) {
      case 1:
        return tinycolor({
          h: hsv.h,
          s: Math.round(hsv.s * 100),
          v: Math.round(hsv.v * 100) * 0.8,
        }).toHexString();
      case 2:
        return tinycolor(hsv).toHexString();
      case 3:
        return tinycolor(RgbatoRgb(rgbColor, 0.7)).toHexString();
      case 4:
        return tinycolor(RgbatoRgb(rgbColor, 0.4)).toHexString();
      case 5:
        return tinycolor(RgbatoRgb(rgbColor, 0.2)).toHexString();
      case 6:
        return tinycolor(RgbatoRgb(rgbColor, 0.1)).toHexString();
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
} {
  const result: any = {};
  Array.from({ length: 9 }).forEach(
    (_, i) => (result[`step${i + 1}`] = colorPalette(color, i + 1))
  );
  return result;
}

export { getTheme5ColorGradation };
