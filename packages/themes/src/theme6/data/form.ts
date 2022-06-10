import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import FormProStyle from '../templates/Form.style';
import FormBaseStyle from '../templates/FormBase.style';
import FromHzeroStyle from '../templates-hzero/Form.style';
const FormStyle = css`
  ${FormProStyle}
  ${FormBaseStyle}
`;

const formData: ComponentData = {
  name: 'form',
  data: [
    {
      floatInputHeight: 48,
      floatTextHeight: 20,
    },
  ],
  onlyTemplate: [FormStyle, FromHzeroStyle],
};

export default formData;
