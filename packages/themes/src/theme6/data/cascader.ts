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
      columnBorder: 'none',
      columnShadow: '',
      itemHeight: 32,
      singleMenuItemCurrentBg: 'initial',
      singleMenuItemCurrentColor: '#3889FF',
      disabledColor: 'rgba(15, 19, 88, 0.25)',
      disabledBgColor: '#fff',
      color: 'rgba(0, 0, 0, 0.85)',
      iconColor: 'rgba(0, 0, 0, 0.25)',
    },
  ],
  onlyTemplate: [CascaderStyle, CascaderHzeroStyle],
};

export default cascaderData;
