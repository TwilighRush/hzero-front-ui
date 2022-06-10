import { ComponentData } from '@hzero-front-ui/core';
import FormProStyle from '../templates/Form.style';
import FormBaseStyle from '../templates/FormBase.style';

const formData: ComponentData = {
  name: 'form',
  data: [{}],
  onlyTemplate: {
    pro: FormProStyle,
    base: FormBaseStyle,
  },
};

export default formData;
