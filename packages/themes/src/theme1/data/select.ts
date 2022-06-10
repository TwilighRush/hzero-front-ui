import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import iconLayer from '../assets/icons/icon-layer.svg';

const selectData: ComponentData = {
  name: 'select',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      activeFontWeight: 'normal',
      hoverBgColor: hexToRgbaColor('#4F7DE7', 0.1),
      activeBgColor: hexToRgbaColor('#4F7DE7', 0.1),
      mutiSelectItemBg: '#E8F0FD',
      mutiSelectItemFontColor: '#525A6E',
      mutiSelectItemFontSize: 12,
      dropdownAnimation: null,
      dropdownItemFontSize: 12,
      iconPickerIconSize: 12,
      iconPickerIcon: iconLayer, // 图标选择框的图标
    },
  ],
};

export default selectData;
