import { ComponentData } from '@hzero-front-ui/core';
import PaginationProStyle from '../templates/Pagination.style';
import PaginationBaseStyle from '../templates/PaginationBase.style';

const paginationData: ComponentData = {
  name: 'pagination',
  data: [
    {
      tight: false, // 新增，是否为紧凑型的
      itemWidth: 24,
      itemHeight: 24,
      itemRadius: 12,
      itemMargin: '',
      itemFontSize: 12,
      border: 'none',
      itemFontColor: '#0F1358',
      bgColor: '#fff',
      hoverBorder: '',
      hoverBg: '',
      hoverFontColor: '',
      activeBg: 'rgba(83,101,234,0.08)',
      activeBorderColor: 'rgba(83,101,234,0.08)',
      activeFontColor: '#5365EA',
      nextBorderRadius: '',
      prevBorderRadius: '',
      jumpBorderWidth: 0,
      disabledBorderColor: '#E7EAED',
      disabledBg: '#F8F8F8',
      disabledFontColor: '#A9ADBB',
      firstLastMargin: '',
      jumpFirstRadius: '',
      jumpLastRadius: '',
      // 新增控制hover时右侧border 宽度
      borderRight: 1,
      jumpBorder: 'none', // 控制pro ... 边框及 component label显示与否
      jumpSpan: 'block',
      jumpRight: 1,
      selectRadius: 5, // 选择页数的radius控制
      marginRight: 12, // 控制components 右侧选择分页距离
      disableBgColor: '#F8F8F8',
      disableBorder: '1px solid #E7EAED',
      selectPageSizeHeight: 24,
      selectPageSizeBefore: 'none',
      fontFamily: '',
    },
  ],
  onlyTemplate: { pro: PaginationProStyle, base: PaginationBaseStyle },
};

export default paginationData;
