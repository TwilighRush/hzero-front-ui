import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import checkboxProStyle from '../templates/Checkbox.style';
import checkboxBaseStyle from '../templates/CheckboxBase.style';
import checkboxHzeroStyle from '../templates-hzero/Checkbox.style';

const checkboxData: ComponentData = {
  name: 'checkbox',
  data: [
    {
      radius: 2,
      fontSize: 12,
      lineHeight: 20,
      btnHeight: 28,
      boxSize: 16,
    },
  ],
  onlyTemplate: { pro: checkboxProStyle, base: checkboxBaseStyle, hzero: checkboxHzeroStyle },
};

export default checkboxData;
