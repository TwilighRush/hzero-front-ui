import { ComponentData } from '@hzero-front-ui/core';
import DatePickerProStyle from '../templates/DatePicker.style';
import DatePickerBaseStyle from '../templates/DatePickerBase.style';

const datePickerData: ComponentData = {
  name: 'datePicker',
  data: [
    {
      iconContent: '\\ea4a',
      iconSize: 15,
      paddingLeft: 8,
      textAlign: 'left',
      ulPadding: '0.03rem 0',
      operationBtnRadius: 12,
      operationBtnSize: 24,
      hoverBgColor: 'rgba(83,101,234,0.08)',
      bodyItemFontSize: 12,
      headFontColor: '#0F1358',
      bodyItemFontColor: '#0F1358',
      bodyItemHeight: 24,
      bodyItemWidth: 24,
      operationBorder: '1px solid #D9E6F2',
      bodyItemRadius: 12,
      operationBtnBgColor: 'white',
      selectedBgColor: '#5365EA',
      selectedFontColor: '#fff',
      weekendFontColor: '#FD5656',
      oldNewDayOpacity: '0.5', // 新增属性，上个月的和下个月的天数显示的透明度
      disabledDayOpacity: '0.5', // 新增属性，禁用的天数显示的透明度
      timeChange: true,
      iconSuffixColor: '#ABBCCF',
      footerColor: '#5365EA',
      fontSize: 12,
      textCenter: 'center',
      iconDateSize: 15,
      suffixPadding: 0,
      suffixWidth: 20,
      confirmBgColor: 'rgba(83,101,234,0.08)',
      confirmHoverBgColor: '#7B8CFF',
      confirmHoverFontColor: '#fff',
    },
    {
      iconSize: 10,
      paddingLeft: 8,
      textAlign: 'left',
      operationBtnRadius: 12,
      operationBtnSize: 24,
      hoverBgColor: 'rgba(237, 237, 237, 0.5)',
      bodyItemFontSize: 12,
      headFontColor: 'rgba(0, 0, 0, 0.8)',
      bodyItemFontColor: '#6a6a6a',
      bodyItemHeight: 24,
      bodyItemWidth: 24,
      bodyItemRadius: 12,
      selectedBgColor: '#5365EA',
      selectedFontColor: '#fff',
      weekendFontColor: '#FD5656',
      oldNewDayOpacity: '0.5', // 新增属性，上个月的和下个月的天数显示的透明度
      disabledDayOpacity: '0.5', // 新增属性，禁用的天数显示的透明度
      timeChange: true,
      iconSuffixColor: '#ABBCCF',
      footerColor: '#5365EA',
      fontSize: 12,
      textCenter: 'center',
    },
  ],
  onlyTemplate: { pro: DatePickerProStyle, base: DatePickerBaseStyle },
};

export default datePickerData;
