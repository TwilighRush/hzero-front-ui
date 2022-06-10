import { ComponentData } from '@hzero-front-ui/core';
import commonDropDownStyle from '../templates/CommonDropDown.style';
import commonDropDownHzeroStyle from '../templates-hzero/CommonDropDown.style';
const commonDropdownData: ComponentData = {
  name: 'commonDropdown',
  data: [{}],
  onlyTemplate: { pro: commonDropDownStyle },
  extraTemplate: { hzero: commonDropDownHzeroStyle },
};

export default commonDropdownData;
