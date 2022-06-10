import { ComponentData } from '@hzero-front-ui/core';
import timePickerHzeroStyle from '../templates-hzero/TimePicker.style';
const timePickerData: ComponentData = {
  name: 'timePicker',
  data: [
    {
      dropDownInputHeight: 28,
      columnWidth: 90,
      itemFontSize: 12,
      itemFontColor: '#333333',
      itemHeight: 24,
      selectedBg: '#EBF0FB',
      selectedFontColor: '#333',
    },
    {
      dropDownInputHeight: 28,
      columnWidth: 90,
      itemFontSize: 12,
      itemFontColor: '#333333',
      itemHeight: 24,
      selectedBg: '#EBF0FB',
      selectedFontColor: '#333',
    },
  ],
  onlyTemplate: {
    hzero: timePickerHzeroStyle,
  },
};

export default timePickerData;
