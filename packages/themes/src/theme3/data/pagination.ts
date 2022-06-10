import { ComponentData } from '@hzero-front-ui/core';

const paginationData: ComponentData = {
  name: 'pagination',
  data: [
    {
      tight: false, // 新增，是否为紧凑型的
      itemWidth: 24,
      itemHeight: 24,
      itemRadius: 4,
      itemMargin: '',
      itemFontSize: 12,
      border: '1px solid #E3E3E3',
      itemFontColor: '#666666',
      bgColor: '#fff',
      hoverBorder: '',
      hoverBg: '',
      hoverFontColor: '',
      activeBg: '#E4EFFF',
      activeBorderColor: '#E4EFFF',
      activeFontColor: ' #3889FF',
      nextBorderRadius: '',
      prevBorderRadius: '',
      // 新增控制hover时右侧border 宽度
      borderRight: 1,
      jumpBorder: 'none', // 控制pro ... 边框及 component label显示与否
      jumpSpan: 'block',
      jumpRight: 5,
      selectRadius: 4, // 选择页数的radius控制
      marginRight: 12, // 控制components 右侧选择分页距离
    },
  ],
};

export default paginationData;
