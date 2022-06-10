import { css } from 'styled-components';
import { ComponentData, hexToRgbaColor } from '@hzero-front-ui/core';
import iconLayer from '../../theme1/assets/icons/icon-layer.svg';
import SelectProStyle from '../templates/Select.style';
import SelectBaseStyle from '../templates/SelectBase.style';
import SelectHzeroStyle from '../templates-hzero/Select.style';

const SelectStyle = css`
  ${SelectProStyle}
  ${SelectBaseStyle}
`;

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
      mutiSelectItemBg:'#F5F5F5',
      mutiSelectItemFontColor:'rgba(0,0,0,0.85)',
      mutiSelectIconFontColor:'rgba(0,0,0,0.45)',
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

      fontSize: 14,
      treeLineHeight: 28,
      treeColor: '#262626',
      treeHoverBgColor: 'rgba(0,0,0,0.02)',
      treeIconColor: 'rgba(0,0,0,0.45)',
    },
  ],
  onlyTemplate: [SelectStyle, SelectHzeroStyle],
};

export default selectData;
