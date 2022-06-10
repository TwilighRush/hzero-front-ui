import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import PaginationProStyle from '../templates/Pagination.style';
import PaginationBaseStyle from '../templates/PaginationBase.style';
import PaginationHzeroStyle from '../templates-hzero/Pagination.style';
const PaginationStyle = css`
  ${PaginationProStyle}
  ${PaginationBaseStyle}
`;

const paginationData: ComponentData = {
  name: 'pagination',
  data: [
    {
      tight: false, // 新增，是否为紧凑型的
      itemWidth: 28,
      itemHeight: 28,
      itemRadius: 2,
      itemMargin: '',
      itemFontSize: 14,
      border: '0.01rem solid transparent',
      itemFontColor: 'rgba(0, 0, 0, 0.45)',
      bgColor: '#fff',
      hoverBorder: '',
      hoverBg: '',
      hoverFontColor: '',
      activeBg: '',
      activeBorderColor: '',
      activeFontColor: '#fff',
      nextBorderRadius: '0.02rem',
      prevBorderRadius: '0.02rem',
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
      selectRadius: 2, // 选择页数的radius控制
      marginRight: 12, // 控制components 右侧选择分页距离
      disableBgColor: 'transparent',
      disableBorder: '1px solid transparent',
      selectPageSizeHeight: 28,
      selectPageSizeBefore: 'none',
      fontFamily: 'icomoon',
    },
  ],
  onlyTemplate: [PaginationStyle, PaginationHzeroStyle],
};

export default paginationData;
