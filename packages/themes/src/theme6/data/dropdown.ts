/**
 * 下拉菜单
 */
import { ComponentData } from '@hzero-front-ui/core';
import dropdownStyle from '../templates/Dropdown.style';
// import dropdownHzeroStyle from '../templates-hzero/DatePicker.style';
const dropdownData: ComponentData = {
  name: 'dropdown',
  data: [
    {
      fontSize: 14,
      fontColor: '#262626',
      fontFamily: 'icomoon',
      activeFontColor: '#262626',
      activeBg: 'rgba(0,0,0,0.04)',
      iconCheckIconContent: '\\E5CA',
    },
  ],
  // onlyTemplate: [dropdownStyle, dropdownHzeroStyle],
  onlyTemplate: dropdownStyle,
};

export default dropdownData;
