import { ComponentData } from '@hzero-front-ui/core';
import breadcrumbStyle from '../templates/Breadcrumb.style';
import breadcrumbHzeroStyle from '../templates-hzero/BreadCrumb.style';
const breadcrumbData: ComponentData = {
  name: 'breadcrumb',
  data: [
    {
      fontSize: 12,
      lastFontSize: 14,
    },
  ],
  onlyTemplate: { base: breadcrumbStyle, hzero: breadcrumbHzeroStyle },
};

export default breadcrumbData;
