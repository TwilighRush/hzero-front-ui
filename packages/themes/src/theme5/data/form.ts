import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import FormProStyle from '../templates/Form.style';
import FormHzeroStyle from '../templates-hzero/Form.style';

const formData: ComponentData = {
  name: 'form',
  data: [
    {
      floatInputHeight: 32,
      floatTextHeight: 20,
    },
  ],
  onlyTemplate: { pro: FormProStyle, hzero: FormHzeroStyle },
};

export default formData;
