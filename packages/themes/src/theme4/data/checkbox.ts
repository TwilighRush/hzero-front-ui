import { ComponentData } from '@hzero-front-ui/core';
import checkboxProStyle from '../templates/Checkbox.style';
import checkboxBaseStyle from '../templates/CheckboxBase.style';

const checkboxData: ComponentData = {
  name: 'checkbox',
  data: [
    {
      fontFamily: '',
      radius: 2,
      fontSize: 12,
      boxSize: 16,
      fontColor: '#0F1358',
      shadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
      bgColor: '#5365EA',
      borderColor: 'rgba(15,19,88,0.65)',
      checkedBorderColor: 'rgba(15,19,88,0.65)',
      innerbackGroundColor: '#fff',
      disabledImageColor: '#fff',
      disabledBg: '#f6f6f9',
      disabledBorderColor: '#D9DBE6',
      checkedDisabledBg: '#D9DBE6', // 选中后禁用
      indeterminateCheckedBgColor: '#D9DBE6',
    },
  ],
  onlyTemplate: {
    base: checkboxBaseStyle,
    pro: checkboxProStyle,
  },
};

export default checkboxData;
