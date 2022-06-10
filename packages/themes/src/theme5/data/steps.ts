import { ComponentData } from '@hzero-front-ui/core';
import stepsSecondary from '../../theme3/assets/icons/steps-secondary.png';
import stepsRequired from '../../theme3/assets/icons/steps-required.png';
import stepsStyle from '../templates/Steps.style';
import stepsHzeroStyle from '../templates-hzero/Steps.style';
const stepsData: ComponentData = {
  name: 'steps',
  data: [
    {
      template: 0,
      titleFontSize: 14,
      titleFontColor: '#5a6677',
      barHeight: 4,
      iconBorder: 'none',
      barBg: '#D9E6F2',
      iconBg: '#fff',
      iconColor: '#5365EA',
      iconSize: 22,
      //完成
      finishIconBorderColor: '#0840f8',
      finishIconBg: '#fff',
      finishBarBg: '#5365EA',
      finishIconColor: '#0840f8',
      // 处理中
      processIconBorder: 'none',
      processIconBg: '#0840f8',
      processBarBg: '#5365EA',
      processIconColor: '#fff',
      //等待中
      waitingBarBg: '#D9E6F2',
      waitingIconBorderColor: '#dbe1f1',
      waitingIconBg: '#fff',
      waitingIconColor: '#bdc2cd',

      lastRightIcon: '0',
      alignItems: 'left',
      firstLeftIcon: '0',
      progressDisplay: 'block',
      stepLineTop: '.4rem',
      stepItemHight: '.43rem',
      horizontalDescriptionPaddingLeft: '.34rem',
      itemMargin: '0 1%',
      itemOverflow: 'hidden',
      itemTitleTextAlign: 'left',
      itemTitleMarginLeft: '33px',
      itemTitleMarginTop: '-22px',
      itemTailPadding: 'unset',
      itemTailLeft: '0',
      itemTailAfterLeft: '-.2rem',
      itemProcessAfterPosition: 'absolute',
      itemDescriptionFontFamily: '',
      itemDescriptionFontSize: '.13rem',
      itemDescriptionColor: 'rgba(15,19,88,0.65)',
      itemDescription: '.2rem',
      verticalItemMargin: '1% 0',
      titleFontFamily: 'PingFangSC-Medium',
      waitTitleColor: 'rgba(15,19,88,0.85)',
      finishTitleColor: '#0F1358',
      contentWidth: '',
      c7nStepsIconDotColor: '#5365EA',
      descriptionTextAlign: 'center',
      verticalPadding: '.15rem',
      verticalDotmarginLeft: '.11rem',
      dotStepsWidth: 'max-content',
      lineHeight: '.22rem',
      // 错误
      errorRed: '#d50000',
      errorWhite: 'fff',
    },
  ],
  onlyTemplate: { base: stepsStyle, hzero: stepsHzeroStyle },
};

export const stepsGroupData: ComponentData = {
  name: 'stepsGroup',
  data: [
    {
      ignore: false, // 为true时不使用group样式
      headerHeight: 20,
      secondaryHeaderIcon: stepsSecondary,
      requiredHeaderIcon: stepsRequired,
      headerIconSize: 10,
      headerBg: '#7289A9',
      headerRadius: '8px 0 8px 0;',
      headerFontSize: 12,
      headerFontColor: '#fff',
      requiredHeaderBg: '#5365EA',
      requiredHeaderFontColor: '#fff',
      height: 44,
      fontFamily: '',
      bg: '#f7f7f7',
      border: '1px solid #f0f0f0',
      iconSize: 24,
      iconFontSize: 12,
      requiredBg: '#F0F6FF',
      requiredBorderColor: '#E3EFFF',
      processFontColor: '#5A6677',
      processIconBg: '#5365EA',
      processIconColor: '#fff',
      processIconBorder: '1px solid #5365EA',

      finishFontColor: '#5A6677',
      finishIconBg: '#F0F6FF',
      finishIconColor: '#5365EA',
      finishIconBorder: '1px solid #5365EA',

      waitingFontColor: '#5a6677',
      waitingIconBg: '#f0f0f0',
      waitingIconColor: '#999',
      waitingIconBorder: '1px solid #999',
    },
  ],
};

export default stepsData;
