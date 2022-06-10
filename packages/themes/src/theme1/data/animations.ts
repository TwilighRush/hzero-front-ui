import { ComponentData } from '@hzero-front-ui/core';
// import buttonAnimation from '../animations/buttonMotion';
// import inputAnimations from '../animations/inputAnimation';
// import selectAnimation from '../animations/selectAnimation';

const buttonMotionData: ComponentData = {
  name: 'buttonMotion',
  data: [
    { motion: 'shake' },
    { motion: '' }, // 无动画
  ],
};

const buttonMotionData2: ComponentData = {
  name: 'buttonMotion2',
  data: [{ motion: 'borderColor' }],
};

const inputMotionData: ComponentData = {
  name: 'inputMotion',
  data: [{ motion: true }],
};

const dropdownMotionData: ComponentData = {
  name: 'dropdownMotion',
  data: [/*{ motion: "dropdownBorder" },*/ { motion: 'dropdownBorderNoMotion' }],
};

const allAnimations = [buttonMotionData, buttonMotionData2, inputMotionData, dropdownMotionData];

export default allAnimations;
