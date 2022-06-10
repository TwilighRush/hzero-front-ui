import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import PaginationProStyle from '../templates/Pagination.style';
import PaginationHzeroStyle from '../templates-hzero/Pagination.style';
const PaginationStyle = css`
  ${PaginationProStyle}
`;

const paginationData: ComponentData = {
  name: 'pagination',
  data: [
    {
      itemWidth: 24,
      itemHeight: 24,
      itemRadius: 2,
      itemMargin: '',
      itemFontSize: 12,
      jumpSpan: 'block',
      jumpRight: 1,
    },
  ],
  onlyTemplate: { pro: PaginationProStyle, hzero: PaginationHzeroStyle },
};

export default paginationData;
