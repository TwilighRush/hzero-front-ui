import { ComponentData } from '@hzero-front-ui/core';
import CascaderStyle from '../templates/Cascader.style';

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
      selectHeight: '.3rem',
      mutiSelectHeight: '.48rem',
      noShadow: false,
      columnGap: 0,
      columnBorder: '',
      columnShadow: '',
      itemHeight: 36,
      singleMenuItemCurrentBg: 'initial',
      singleMenuItemCurrentColor: '#3889FF',
    },
  ],
  onlyTemplate: { pro: CascaderStyle },
};

export default cascaderData;
