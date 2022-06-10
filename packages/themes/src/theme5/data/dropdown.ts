/**
 * 下拉菜单
 */
import { ComponentData } from '@hzero-front-ui/core';
import dropdownStyle from '../templates/Dropdown.style';
import dropdownBaseStyle from '../templates/DropDowBase.style';
import dropDownHzeroStyle from '../templates-hzero/DropDown.style';
const dropdownData: ComponentData = {
  name: 'dropdown',
  data: [
    {
      fontSize: 12,
      fontColor: '#0F1358',
      iconfontFamily: 'icomoon',
      activeFontColor: '#0840F8',
      iconCheckIconContent: '\\E5CA',
      itemHeight: 28,
      minWidth: 114,
      iconMarginRight: -1,
    },
  ],
  onlyTemplate: { pro: dropdownStyle, base: dropdownBaseStyle, hzero: dropDownHzeroStyle },
};

export default dropdownData;
