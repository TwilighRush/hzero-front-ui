import { ComponentData } from '@hzero-front-ui/core';
import progressStyle from '../templates/Progress.style';
const progressData: ComponentData = {
  name: 'progress',
  data: [{}],
  onlyTemplate: {
    base: progressStyle,
  },
};

const lineProgressData: ComponentData = {
  name: 'lineProgress',
  data: [
    {
      height: 8,
      bg: '#E8E8E8',
      normalBg: '#0840F8',
      exceptionBg: '#F23A50',
      successBg: '#11D954',
      showExtra: false,
      hideRightIcon: false,
    },
  ],
};

const circleProgressData: ComponentData = {
  name: 'circleProgress',
  data: [
    {
      loadingNomalColors: ['#0840F850', '#0840F8'],
      loadingSuccessColors: ['#11D95450', '#11D954'],
      loadingExceptionColors: ['#F23A5050', '#F23A50'],
      textBottomFontWeight: 700,
      textBottomFontFamily: 'Akrobat-Bold',
      fontSize: '0.3rem',
      lineHeight: '0.37rem',
      fontWeight: 700,
      normalStopColors: ['#0840F8', '#0840F8'],
      successStopColors: ['#11D954', '#11D954'],
      exceptionStopColors: ['#F23A50', '#F23A50'],
      textIconFontSize: 'small',
      padding: '.13rem',
      border: '.02rem solid transparent',
      borderRadius: '50%',
      textBorder: '1px solid',
      textRadius: '50%',
      bgColor: 'white',
      fontColor: '#0840F8',
      exceBorderColor: 'rgb(255, 255, 255)',
      execColor: '#FFFFFF',
      succColor: '#FFFFFF',
      succBorderColor: 'rgb(255, 255, 255)',
      succBgColor: '#11D954',
      execBgColor: '#F23A50',
      fontFamily: 'Akrobat-Bold',
      innerPadding: 5,
      bottomProgressfontSize: '.18rem',
      bottomProgressTexttop: '-.18rem',
      activeprogressTextMargin: '0 0 0 -.08rem',
      progressTextFontFamily: '',
      progressTextFontSize: '.12rem',
      progressTextColor: '#E8E8E8',
      progressTextAligin: 'center',
      progressTextLineHeight: '.2rem',
      progressTextPosition: 'absolute',
      progressTextMarginLeft: '-.12rem',
      progressTexttop: '-.22rem',
    },
  ],
};

export { progressData, lineProgressData, circleProgressData };
