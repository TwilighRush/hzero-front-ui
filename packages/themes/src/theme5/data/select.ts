import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import SelectProStyle from '../templates/Select.style';
import SelectHzeroStyle from '../templates-hzero/Select.style';

const selectData: ComponentData = {
  name: 'select',
  data: [
    {
      fontSize: 12,
      lineHeight: 20,
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
      iconFontFamily: 'icomoon',
      iconPickerIconColor: '#ABBCCF',
      iconPickerIconContent: '\\e30d',
      iconCheckIconColor: '#A4A4A4',
      iconCheckIconContent: '\\E5CA',
      iconSearchIconColor: '#A4A4A4',
      iconSearchIconContent: '\\E8B6',
    },
  ],
  onlyTemplate: { pro: SelectProStyle, hzero: SelectHzeroStyle },
};

export default selectData;
