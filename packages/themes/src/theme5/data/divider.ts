import { ComponentData } from '@hzero-front-ui/core';
import Divider from '../templates/Divider.style';
const DividerData: ComponentData = {
  name: 'divider',
  data: [
    {
      fontSize12px: 12,
      lineHeight20px: 20,
    },
  ],
  onlyTemplate: { base: Divider },
};
export default DividerData;
