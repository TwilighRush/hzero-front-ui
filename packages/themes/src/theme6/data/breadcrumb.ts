import { ComponentData } from '@hzero-front-ui/core';
import breadcrumbStyle from '../templates/Breadcrumb.style';
import breadcrumbHzeroStyle from '../templates-hzero/BreadCrumb.style';
const breadcrumbData: ComponentData = {
  name: 'breadcrumb',
  data: [
    {
      fontSize: 12,
      fontColor: '#686868',
      lastChildFontSize: 14,
      lastChildFontColor: '#1c1c1c',
    },
  ],
  onlyTemplate: [breadcrumbStyle, breadcrumbHzeroStyle],
};

export default breadcrumbData;
