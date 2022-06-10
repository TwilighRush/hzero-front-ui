import { ComponentData } from '@hzero-front-ui/core';
import CascaderStyle from '../templates/Cascader.style';
import CascaderHzeroStyle from '../templates-hzero/Cascader.style';
const cascaderData: ComponentData = {
  name: 'cascader',
  data: [
    {
      // c7n 但列表模式
      tabBorderColor: '#eee',
      tabActiveBorderColor: '#eee',
      tabHeight: 24,
      tabType: 'block', // tab | block
      // 普通类型
      rightItemHeight: '', // auto | ''
      mutiSelectHeight: '.3rem',
      noShadow: false,
      columnGap: 0,
      columnBorder: '',
      columnShadow: '',
      itemHeight: 28,
      singleMenuItemCurrentBg: 'initial',
      singleMenuItemCurrentColor: '#3889FF',
      fontSize: 12,
      lineHeight: 20,
      addPadding: 0,
    },
  ],
  onlyTemplate: { pro: CascaderStyle, hzero: CascaderHzeroStyle },
};

export default cascaderData;
