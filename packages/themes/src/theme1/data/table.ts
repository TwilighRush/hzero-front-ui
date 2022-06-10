import { ComponentData } from '@hzero-front-ui/core';
import plus from '../assets/icons/plus-aquare.svg';
import plusBlack from '../assets/icons/plus-aquare-black.svg';
import minus from '../assets/icons/minus-aquare.svg';
import minusBlack from '../assets/icons/minus-aquare-black.svg';

const tableData: ComponentData = {
  name: 'table',
  data: [
    {
      fontFamily: 'PingFangSC-Medium',
      bordered: false,
      striped: true,
      stripedBg: `linear-gradient(270deg,#f8fbff 0%,#fcfdff 49%,#f8fbff 100%)`,
      borderColor: '#f1f1f1',
      headHeight: 36,
      headBg: '#fafafa',
      headFontColor: '#aaadba',
      headFontSize: 12,
      rowHeight: 36,
      bodyBg: '#fff',
      bodyHoverBg: '#eff6ff',
      bodyFontSize: 12,
      bodyFontColor: '#5a6677',
      expandIcon: plus,
      expandedIcon: minus,
      expandIconColor: 'rgba(0, 0, 0, .6)',
    },
  ],
};

export default tableData;
