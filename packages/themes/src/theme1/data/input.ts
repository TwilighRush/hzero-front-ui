import { ComponentData } from '@hzero-front-ui/core';

const inputData: ComponentData = {
  name: 'input',
  data: [
    {
      layout: 'horizontal',
      radius: 2,
      border: 'all', // 边框： all | [bottom, top, left, ...]
      borderWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      hasShadow: true,
      shadow: '0 0 3px 0 #4f7de7',
      shadowTransition: '0.3s',
      disabledBorderColor: '#E7EAED',
      disabledBgColor: '#f8f8f8',
      disabledFontColor: '#aaadba',
      focusedBorderColor: '#4f7de7',
      inputHeight: 28,
      inputFontWeight: '',
      background: '#fff',
      // Form 相关
      // labelAlign: 'right',
      labelScale: false,
      labelFontSize: 12,
      labelFontColor: '#525a6e',
      focusedLabelFontColor: '#525a6e',
      errorShadow: '0 0 3px 0 #fd6868',
      errorColor: '#fd6868',
      errorFontColor: '',
      errorBgColor: '#FFF2F2',
      // input.layout = vertical 下面两属性时失效
      labelCol: 6,
      formCol: 18,
      requiredBorderColor: '#B8D7FF',
      requiredBgColor: '#EFF6FF',
      numberShowHandle: true,
      numberTextAlign: 'right',
      rangeTextLineHeight: 26,
    },
  ],
};

export default inputData;
