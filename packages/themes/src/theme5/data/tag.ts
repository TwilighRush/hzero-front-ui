import { ComponentData } from '@hzero-front-ui/core';
import tagStyle from '../templates/Tag.style';
import tagHzeroStyle from '../templates-hzero/Tag.style';

const tagData: ComponentData = {
  name: 'tag',
  data: [
    {
      padding: '0 8px',
      borderRadius: '2px',
    },
  ],
  onlyTemplate: { base: tagStyle, hzero: tagHzeroStyle },
};

export default tagData;
