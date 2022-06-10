import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import iconLayer from '../../theme1/assets/icons/icon-layer.svg';

const selectData: ComponentData = {
  name: 'select',
  data: [
    {
      fontFamily: '',
      activeFontWeight: 'normal',
      hoverBgColor: hexToRgbaColor('#3889FF', 0.1),
      activeBgColor: hexToRgbaColor('#3889FF', 0.1),
      padding: 6,
      mutiSelectItemBg: '#E8F0FD',
      mutiSelectItemFontColor: '#525A6E',
      mutiSelectItemFontSize: 12,
      mutiSelectItemIconSize: 10,
      mutiSelectItemBorderRadius: 2,
      multiSelectItemIconMargin: -3,
      multiSelectPadding: 4,
      dropdownItemFontSize: 12,
      dropdownWrapperBorderColor: '#ccc',
      dropdownAnimation: null,
      iconPickerIconSize: 10,
      iconPickerIcon: iconLayer, // 图标选择框的图标
    },
  ],
};

export default selectData;
