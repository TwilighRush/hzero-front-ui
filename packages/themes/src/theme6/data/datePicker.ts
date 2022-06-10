import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import DatePickerProStyle from '../templates/DatePicker.style';
import DatePickerBaseStyle from '../templates/DatePickerBase.style';
import DatePickerHzeroStyle from '../templates-hzero/DatePicker.style';
const DatePickerStyle = css`
  ${DatePickerProStyle}
  ${DatePickerBaseStyle}
`;

const datePickerData: ComponentData = {
  name: 'datePicker',
  data: [
    {
      iconContent: `\\e70e`,
      iconSize: 14,
      paddingLeft: 8,
      textAlign: 'left',
      ulPadding: '0.03rem 0',
      operationBtnRadius: 12,
      operationBtnSize: 12, //按钮大小
      operationBtnColor: '#1C1C1C',
      hoverBgColor: 'rgba(83,101,234,0.08)',
      footHeight: 40,
      headerHeight: 40,
      headFontColor: 'rgba(0,0,0,0.85)',
      bodyItemFontColor: 'rgba(0,0,0,0.65)',

      bodyItemFontSize: 14,
      bodyItemHeight: 24,
      bodyItemWidth: 24,
      operationBorder: '',
      bodyItemRadius: 2,
      operationBtnBgColor: 'white',
      selectedBgColor: '#5365EA',
      selectedFontColor: 'rgba(0,0,0,0.85)',
      weekendFontColor: '#FD5656',
      oldNewDayOpacity: '0.5', // 新增属性，上个月的和下个月的天数显示的透明度
      disabledDayOpacity: '0.5', // 新增属性，禁用的天数显示的透明度
      timeChange: true,
      iconSuffixColor: 'rgba(0,0,0,0.25)',
      footerColor: '#0840F8',
      fontSize: 14,
      textCenter: 'center',
      iconDateSize: 15,
      suffixPadding: 0,
      suffixWidth: 20,
    },
  ],
  onlyTemplate: [DatePickerStyle, DatePickerHzeroStyle],
};

export default datePickerData;
