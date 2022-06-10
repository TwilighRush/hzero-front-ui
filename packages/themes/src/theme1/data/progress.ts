import { ComponentData } from '@hzero-front-ui/core';

const lineProgressData: ComponentData = {
  name: 'lineProgress',
  data: [
    {
      height: 8,
      bg: '#f5f5f5',
      normalBg: '#4f7de7',
      exceptionBg: '#ff4141',
      successBg: '#44ce6e',
    },
  ],
};

const circleProgressData: ComponentData = {
  name: 'circleProgress',
  data: [
    {
      normalStopColors: ['#4f7de733', '#4F7DE7'],
      successStopColors: ['#44ce6e33', '#44CE6E'],
      exceptionStopColors: ['#ff414133', '#FF4141'],
    },
  ],
};

export { lineProgressData, circleProgressData };
