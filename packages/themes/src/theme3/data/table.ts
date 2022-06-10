import { ComponentData } from '@hzero-front-ui/core';
import plus from '../assets/icons/table-to-expand.svg';
import minus from '../assets/icons/table-expanded.svg';

const tableData: ComponentData = {
  name: 'table',
  data: [
    {
      fontFamily: 'PingFangSC-Medium',
      bordered: true,
      striped: false,
      stripedBg: `none`,
      borderColor: '#D5DAE0',
      headHeight: 36,
      headBg: '#F7F7F7',
      titleBorderTop: 0,
      headFontColor: '#5A6677',
      headFontSize: 12,
      rowHeight: 36,
      bodyBg: '#fff',
      bodyHoverBg: '#eff6ff',
      bodyFontSize: 12,
      bodyFontColor: '#333',
      expandIcon: plus,
      expandedIcon: minus,
      expandIconColor: 'rgba(0, 0, 0, .6)',
      barFontsize: 14,
      barHeight: 24,
    },
  ],
};

export default tableData;
