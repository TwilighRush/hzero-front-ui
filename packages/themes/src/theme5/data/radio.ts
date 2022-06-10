import { ComponentData } from '@hzero-front-ui/core';
import RadioProStyle from '../templates/Radio.style';
import RadioBaseStyle from '../templates/RadioBase.style';
import RadioHzeroStyle from '../templates-hzero/Radio.style';
const radioData: ComponentData = {
  name: 'radio',
  data: [
    {
      radius: 2,
      fontSize: 12,
      btnHeight: 28,
      lineHeight: 20,
      iconSize: 16,

      /* 选中后中心 √ 的样式 */
      checkedWidth: '6px',
      checkedHeight: '6px',
      checkedBorder: [],
      // 位置
      checkedTop: '5px',
      checkedLeft: '5px',

      checkedTransform: 'none',
      borderRadius: '50%',
      borderWidth: '0.05rem',
      checkedBorderNew: 'none',

      checkedWrapBorder: 'none',
      disabledCheckedOpacity: '0.5',

      /* c7n画对号所需 && button  */
      gou: false,
      gouWidth: 8,
      gouHeight: 5,
      gouTop: '40%',
      proBtnRadius: 11.5,
      proBtnBack: '',

      // 控制白色中心样式
      dotWidth: 8,
      dotHeight: 8,
      dotTop: 3,
      dotLeft: 3,
      iconfontSize: 14,
      //按钮组样式
    },
  ],
  onlyTemplate: { pro: RadioProStyle, base: RadioBaseStyle, hzero: RadioHzeroStyle },
};

export default radioData;
