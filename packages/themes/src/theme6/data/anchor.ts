import { ComponentData } from '@hzero-front-ui/core';
import anchorStyle from '../templates/Anchor.style';
import anchorHzeroStyle from '../templates-hzero/Anchor.style';

const anchorData: ComponentData = {
  name: 'anchor',
  data: [
    {
      fontFamily: '',
      fontSize: 14,
      inkBgColor: 'rgba(0, 0, 0, 0.06)',
      titleColor: 'rgba(0, 0, 0, 0.65)',
      grayColor: '#AAADBA',
      /* 点 */
      nodeWidth: 8,
      nodeHeight: 8,
      nodeRadius: '50%',
      // 每个点上下距离
      nodeDistance: 8,
      // 圆点左移
      nodeLeft: -12,
      // 圆点下移
      nodeTranslateY: -5,
      /* 线 */
      lineWidth: 1,
      // 遮挡上下突出的线
      hideTopLength: 20,
      hideBottomLength: 20,
      /* 字 */
      // 左边距离
      wordsLeft: 8,

      leftLineWidth: 1,
      paddingBottom: 8,
    },
  ],
  onlyTemplate: [anchorStyle, anchorHzeroStyle],
};

export default anchorData;
