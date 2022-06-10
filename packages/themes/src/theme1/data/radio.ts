import { ComponentData } from '@hzero-front-ui/core';

const radioData: ComponentData = {
  name: 'radio',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      borderGrayColor: '#d5dae0',
      color: '#5a6677',

      /* 选中后中心⚪的样式 */
      checkedWidth: '',
      checkedHeight: '',
      checkedBorder: [''],
      // 位置
      checkedTop: '50%',
      checkedLeft: '50%',
      checkedTransform: 'translate(-50%, -50%) scale(1)',
      borderRadius: '50%',
    },
  ],
};

export default radioData;
