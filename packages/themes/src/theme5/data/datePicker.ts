import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import DatePickerProStyle from '../templates/DatePicker.style';
import DatePickerHzeroStyle from '../templates-hzero/DatePicker.style';

const datePickerData: ComponentData = {
  name: 'datePicker',
  data: [
    {
      btnWidth: 56,
      btnHeight: 28,
      headerHeight: 34,
      iconContent: '\\e70e',
      iconSize: 14,
      paddingLeft: 8,
      textAlign: 'left',
      ulPadding: '0.03rem 0',
      operationBtnRadius: 12,
      operationBtnSize: 14, //按钮大小
      operationBtnColor: '#1C1C1C',
      hoverBgColor: 'rgba(83,101,234,0.08)',
      bodyItemFontSize: 12,
      headFontColor: '#A4A4A4',
      bodyItemFontColor: '#465476',
      bodyItemHeight: 25,
      bodyItemWidth: 25,
      operationBorder: '1px solid #D9E6F2',
      bodyItemRadius: 2,
      operationBtnBgColor: 'white',
      selectedBgColor: '#5365EA',
      selectedFontColor: '#fff',
      weekendFontColor: '#FD5656',
      oldNewDayOpacity: '0.5', // 新增属性，上个月的和下个月的天数显示的透明度
      disabledDayOpacity: '0.5', // 新增属性，禁用的天数显示的透明度
      timeChange: true,
      iconSuffixColor: '#ABBCCF',
      footerColor: '#0840F8',
      fontSize: 12,
      textCenter: 'center',
      iconDateSize: 15,
      suffixPadding: 0,
      suffixWidth: 20,
    },
  ],
  onlyTemplate: { pro: DatePickerProStyle, hzero: DatePickerHzeroStyle },
};

export default datePickerData;
