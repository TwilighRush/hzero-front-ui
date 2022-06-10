import { ComponentData } from '@hzero-front-ui/core';
import ListHzeroStyle from '../templates-hzero/List.style';
import ListStyle from '../templates/List.style';

const listData: ComponentData = {
  name: 'list',
  data: [
    {
      fontSize: 12,
      lineHeight: 20,
    },
  ],
  onlyTemplate: { base: ListStyle, hzero: ListHzeroStyle },
};

export default listData;
