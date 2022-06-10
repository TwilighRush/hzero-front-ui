import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import checkboxProStyle from '../templates/Checkbox.style';
import checkboxBaseStyle from '../templates/CheckboxBase.style';
import checkboxHzeroStyle from '../templates-hzero/Checkbox.style';

const checkboxStyle = css`
  ${checkboxProStyle}
  ${checkboxBaseStyle}
`;

const checkboxData: ComponentData = {
  name: 'checkbox',
  data: [
    {
      fontFamily: '',
      radius: 2,
      fontSize: 14,
      boxSize: 16,
      fontColor: 'rgba(0,0,0,0.65)',
      disabledFontColor: ' rgba(0,0,0,0.25)',
      shadow: '0 0 0 1px rgba(0, 0, 0, 0.15)',
      bgColor: '#5365EA',
      borderColor: 'rgba(0,0,0,0.15)',
      checkedBorderColor: 'rgba(0,0,0,0.15)',
      innerbackGroundColor: '#fff',
      disabledImageColor: 'rgba(0,0,0,0.25)',
      disabledBg: 'rgba(0,0,0,0.04)',
      disabledBorderColor: 'rgba(0,0,0,0.15)',
      checkedDisabledBg: 'rgba(0,0,0,0.04)', // 选中后禁用
      indeterminateCheckedBgColor: '#BCC2CE',
    },
  ],
  onlyTemplate: [checkboxStyle, checkboxHzeroStyle],
};

export default checkboxData;
