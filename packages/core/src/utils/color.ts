const tinycolor = require('tinycolor2');

function createColorPalette() {
  var hueStep = 2;
  var saturationStep = 16;
  var saturationStep2 = 5;
  var brightnessStep1 = 5;
  var brightnessStep2 = 15;
  var lightColorCount = 5;
  var darkColorCount = 4;

  var getHue = function (hsv: any, i: any, isLight: boolean) {
    var hue;
    if (hsv.h >= 60 && hsv.h <= 240) {
      hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i;
    } else {
      hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  };
  var getSaturation = function (hsv: any, i: any, isLight: boolean) {
    var saturation;
    if (isLight) {
      saturation = Math.round(hsv.s * 100) - saturationStep * i;
      // eslint-disable-next-line eqeqeq
    } else if (i == darkColorCount) {
      saturation = Math.round(hsv.s * 100) + saturationStep;
    } else {
      saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }
    if (saturation > 100) {
      saturation = 100;
    }
    if (isLight && i === lightColorCount && saturation > 10) {
      saturation = 10;
    }
    if (saturation < 6) {
      saturation = 6;
    }
    return Math.round(saturation);
  };
  var getValue = function (hsv: any, i: any, isLight: boolean) {
    if (isLight) {
      return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
  };

  return (color: string, index: number): string => {
    var isLight = index <= 6;
    var hsv = tinycolor(color).toHsv();
    var i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1;
    return tinycolor({
      h: getHue(hsv, i, isLight),
      s: getSaturation(hsv, i, isLight),
      v: getValue(hsv, i, isLight),
    }).toHexString();
  };
}

const colorPalette = createColorPalette();

function getColorGradation(
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
} {
  const result: any = {};
  Array.from({ length: 10 }).forEach(
    (_, i) => (result[`step${i + 1}`] = colorPalette(color, i + 1))
  );
  return result;
}

export { colorPalette, getColorGradation };
