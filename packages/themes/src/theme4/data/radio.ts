import { ComponentData } from '@hzero-front-ui/core';
import RadioStyle from '../templates/Radio.style';

const radioData: ComponentData = {
  name: 'radio',
  data: [
    {
      radius: 4,
      fontFamily: '',
      fontSize: 12,
      borderGrayColor: 'rgba(15,19,88,0.65)', // 默认边框颜色
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
      checkedBorderNew: 'none',
      checkedBgColor: '#5365EA',
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
      defaultChoosedInnerColor: '#5365EA',
      checkedDisabledWrapBorder: '0.01rem solid #D9DBE6;',
      checkedDisabledBgColor: '#f6f6f9',

      // 控制白色中心样式
      dotWidth: 8,
      dotHeight: 8,
      dotTop: 3,
      dotLeft: 3,
    },
  ],
  onlyTemplate: { pro: RadioStyle },
};

export default radioData;
