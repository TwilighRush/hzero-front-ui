import { ComponentData } from '@hzero-front-ui/core';

const lineProgressData: ComponentData = {
  name: 'lineProgress',
  data: [
    {
      height: 8,
      bg: 'rgba(15,19,88,0.04)',
      normalBg: '#6887E8',
      exceptionBg: '#FD729C',
      successBg: '#1FC2BB',
      showExtra: false,
      // extraSize: 24,
      // extraBg: "rgba(255, 255, 255, 0.3)",
      // extraBorderColor: "rgba(79, 125, 231, 0.3)",
      // extraRadius: "50%", // 必须是百分数
      hideRightIcon: false,
    },
  ],
};

const circleProgressData: ComponentData = {
  name: 'circleProgress',
  data: [
    {
      textBottomFontWeight: '700',
      textBottomFontFamily: 'Akrobat-Bold',
      fontSize: '0.3rem',
      lineHeight: '0.37rem',
      fontWeight: '700',
      normalStopColors: ['#6887E8'],
      successStopColors: ['#1FC2BB'],
      exceptionStopColors: ['#FD729C'],
      textIconFontSize: 'small',
      padding: '.13rem',
      border: '.02rem solid #F9FAFC',
      borderRadius: '50%',
      textBorder: '1px solid',
      textRadius: '50%',
      bgColor: 'white',
      fontColor: '#6887E8',
      exceBorderColor: 'rgb(255, 255, 255)',
      execColor: '#FFFFFF',
      succColor: '#FFFFFF',
      succBorderColor: 'rgb(255, 255, 255)',
      succBgColor: '#1FC2BB',
      execBgColor: '#FD729C',
      fontFamily: 'Akrobat-Bold',
      innerPadding: 5,
      bottomProgressfontSize: '.18rem',
      bottomProgressTexttop: '-.18rem',
      activeprogressTextMargin: '0 0 0 -.08rem',
      progressTextFontFamily: '',
      progressTextFontSize: '.12rem',
      progressTextColor: 'rgba(15,19,88,0.45)',
      progressTextAligin: 'center',
      progressTextLineHeight: '.2rem',
      progressTextPosition: 'absolute',
      progressTextMarginLeft: '-.12rem',
      progressTexttop: '-.22rem',
    },
  ],
};

export { lineProgressData, circleProgressData };
