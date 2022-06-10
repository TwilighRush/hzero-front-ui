import { ComponentData } from '@hzero-front-ui/core';
import calendarIcon from '../../theme1/assets/icons/calendar@2x.png';

const datePickerData: ComponentData = {
  name: 'datePicker',
  data: [
    {
      icon: calendarIcon,
      iconSize: 10,
      paddingLeft: 8,
      paddingRight: 24,
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
      selectedBgColor: '#4588f4',
      selectedFontColor: '#fff',
      weekendFontColor: '#FD5656',
      oldNewDayOpacity: '0.5', // 新增属性，上个月的和下个月的天数显示的透明度
      timeChange: true,
      fontSize: 12,
      textCenter: 'center',
    },
  ],
};

export default datePickerData;
