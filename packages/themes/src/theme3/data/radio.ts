import { ComponentData } from '@hzero-front-ui/core';

const radioData: ComponentData = {
  name: 'radio',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      borderGrayColor: '#d5dae0', // 默认边框颜色
      color: '#5a6677',

      /* 选中后中心 √ 的样式 */
      checkedWidth: '6px',
      checkedHeight: '6px',
      checkedBorder: [],
      // 位置
      checkedTop: '5px',
      checkedLeft: '5px',
      checkedBackgroundColor: '#fff',
      checkedTransform: 'none',
      borderRadius: '50%',
      checkedBorderNew: 'none',
      checkedBgColor: '#3889FF',
      checkedWrapBorder: 'none',
      disabledCheckedOpacity: '0.5',

      /* c7n画对号所需 && button  */
      gou: false,
      gouWidth: 8,
      gouHeight: 5,
      gouTop: '40%',
      proBtnRadius: 11.5,
      proBtnBack: '',
      proBtnColor: '#3889FF',

      // 默认选中颜色
      defaultBgColor: '#3889FF',
      disabledBorderColor: '#E7EAED',
      disabledBgColor: '#F8F8F8',
      defaultChoosedInnerColor: 'white',

      // 控制白色中心样式
      dotWidth: 6,
      dotHeight: 6,
      dotTop: 4,
      dotLeft: 4,
    },
  ],
};

export default radioData;
