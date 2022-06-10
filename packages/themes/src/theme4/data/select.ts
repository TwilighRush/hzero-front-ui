import { css } from 'styled-components';
import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import iconLayer from '../../theme1/assets/icons/icon-layer.svg';
import SelectProStyle from '../templates/Select.style';
import SelectBaseStyle from '../templates/SelectBase.style';

const selectData: ComponentData = {
  name: 'select',
  data: [
    {
      fontFamily: '',
      activeFontWeight: 'normal',
      hoverBgColor: 'rgba(15,19,88,0.03)',
      activeBgColor: 'rgba(104,135,232,0.08)',
      padding: 6,
      dropdownWrappertop: '0rem',
      inputSelectHeight: 30,
      paddingTopPopup: '.03rem',
      mutiSelectItemBg: ' rgba(83,101,234,0.08)',
      mutiSelectItemFontColor: '#415BC9',
      mutiSelectItemFontSize: 12,
      mutiSelectItemIconSize: 10,
      mutiSelectItemBorderRadius: 5,
      multiSelectItemIconMargin: -3,
      multiSelectPadding: 4,
      dropdownItemFontSize: 13,
      selectPopupBorder: 'none',
      dropdownAnimation: null,
      iconPickerIconColor: '#ABBCCF',
      iconPickerIconContent: '\\e30d',
      commonItemBg: '#5365EA',
      commonItemFontColor: '#fff',
    },
    {
      fontFamily: '',
      activeFontWeight: 'normal',
      hoverBgColor: hexToRgbaColor('#4F7DE7', 0.1),
      activeBgColor: hexToRgbaColor('#4F7DE7', 0.1),
      padding: 6,
      mutiSelectItemBg: '#E8F0FD',
      mutiSelectItemFontColor: '#525A6E',
      mutiSelectItemFontSize: 12,
      mutiSelectItemIconSize: 10,
      mutiSelectItemBorderRadius: 2,
      multiSelectItemIconMargin: -3,
      multiSelectPadding: 4,
      dropdownItemFontSize: 12,
      dropdownItemFontColor: '#0F1358',
      dropdownAnimation: null,
    },
  ],
  onlyTemplate: { pro: SelectProStyle, base: SelectBaseStyle },
};

export default selectData;
