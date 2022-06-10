import { ComponentData } from '@hzero-front-ui/core';
import { treeCheckStyle, treeStyle } from '../templates/Tree.style';
import TreeHzeroStyle from '../templates-hzero/Tree.style';
const treeData: ComponentData = {
  name: 'tree',
  data: [
    {
      lineHeight: 28,
      fontSize: 12,
      color: '#1C1C1C',
      /* 箭头改造 */
      arrowWidth: 6,
      arrowHeight: 6,
      switcherLineHeight: 13,
      switcherColor: '#fff',
      selectedFontColor: '#1C1C1C',
      selectedBackColor: 'rgba(56,107,215,0.10)',
      hoverBackColor: 'rgba(56,107,215,0.10)',
      rotateOpen: '-45deg',
      rotateClose: '-135deg',
      switcherCloseBgColor: '#F1F1F5',
      treeSwitcherBgColor: '#1C1C1C',
      treeSwitcherBorder: '.03rem',
      borderWidth: 0,
      iconSize: 14,
      titleLeft: 0,
      switcherHeight: 16,
      switcherWidth: 16,
      switcherNoopDispalyIcon: 'block',
      switcherNoopBackground: 'white',
      switcherNoopPaddingBottom: '0.2rem',
      switcherNoopMarginTop: '.02rem',
      switcherNoopPaddingTop: '.02rem',
      switcherNoopRight: '-.1rem',
      switcherOrign: '50% 50%',
      treeSwitcherMarginRight: '.05rem',
    },
  ],
  onlyTemplate: { base: treeStyle, hzero: TreeHzeroStyle },
};

const treeCheckData: ComponentData = {
  name: 'treeCheck',
  data: [
    {
      checkboxPosition: 'default', // checkbox 默认在左边
      checkboxDisabledBorder: '#dbdfe6',
      checkboxDisabledBgColor: '#f5f5f5',
      checkboxRadius: 2,
      /* 未选中时为正方形 */
      checkboxWidth: 16,
      checkboxHeight: 16,
      checkboxPrimaryColor: '#6887E8',
      switcherNoopDispaly: 'none',
      checkboxMargin: '0rem .05rem',
    },
  ],
  onlyTemplate: treeCheckStyle,
};

export { treeData, treeCheckData };
