import { ComponentData } from '@hzero-front-ui/core';

const inputData: ComponentData = {
  name: 'input',
  data: [
    {
      layout: 'vertical',
      radius: 2,
      border: 'all', // 边框： all | [bottom, top, left, ...]
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.15)',
      fontSize: 12,
      hasShadow: false,
      // shadow: "0 0 3px 0 #3889FF",
      // shadowTransition: "0.3s",
      disabledBorderColor: '#E7EAED',
      disabledBgColor: '#f8f8f8',
      disabledFontColor: '#8790A6',
      inputHeight: 26,
      inputFontWeight: 'bold',
      background: '#fff',
      // Form
      // labelAlign: 'left',
      labelScale: true,
      labelFontSize: 12,
      labelFontColor: '#4A5C90',
      focusedLabelFontColor: '#4588f4',
      errorShadow: '0 0 3px 0 #FFF2F2',
      errorColor: '#FD6868',
      errorFontColor: '#BFC3D0',
      errorBgColor: '#FFF2F2',
      labelCol: 24,
      formCol: 24,
      numberShowHandle: true,
      numberTextAlign: 'right',
      rangeTextLineHeight: 24,
    },
  ],
};

export default inputData;
