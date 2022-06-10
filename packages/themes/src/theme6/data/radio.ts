import { ComponentData } from '@hzero-front-ui/core';
import RadioStyle from '../templates/Radio.style';
import RadioHzeroStyle from '../templates-hzero/Radio.style';
const radioData: ComponentData = {
  name: 'radio',
  data: [
    {
      radius: 4,
      fontFamily: '',
      fontSize: 12,
      color: '#5a6677',

      /* 选中后中心 √ 的样式 */
      checkedWidth: '6px',
      checkedHeight: '6px',
      checkedBorder: [],
      // 位置
      checkedTop: '5px',
      checkedLeft: '5px',
      checkedBackgroundColor: '#D9DBE6',
      checkedTransform: 'none',
      borderRadius: '50%',
      borderWidth: '0.05rem',
      checkedBorderNew: 'none',
      checkedBgColor: '#0840F8',
      checkedWrapBorder: 'none',
      disabledCheckedOpacity: '0.5',

      /* c7n画对号所需 && button  */
      gou: false,
      gouWidth: 8,
      gouHeight: 5,
      gouTop: '40%',
      proBtnRadius: 11.5,
      proBtnBack: '',
      proBtnColor: '#4f7de7',

      // 默认选中颜色
      defaultBgColor: 'white',
      defaultChoosedInnerColor: '#0840F8',
      checkedDisabledWrapBorder: '0.01rem solid #D9DBE6;',
      checkedDisabledBgColor: '#f6f6f9',

      // 控制白色中心样式
      dotWidth: 8,
      dotHeight: 8,
      dotTop: 3,
      dotLeft: 3,

      labelColor: 'rgba(0,0,0,0.65)',
      disabledLabelColor: 'rgba(0,0,0,0.25)',
      disabledBg: 'rgba(0,0,0,0.04)',
      labelFontSize: 14,
      borderGrayColor: 'rgba(0,0,0,0.15)', // 默认边框颜色
    },
  ],
  onlyTemplate: [RadioStyle, RadioHzeroStyle],
};

export default radioData;
