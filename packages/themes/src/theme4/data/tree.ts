import { ComponentData } from '@hzero-front-ui/core';
import treeOpenIcon from '../assets/icons/tree_open.svg';
import treeCloseIcon from '../assets/icons/tree_close.svg';
import { treeAllStyle } from '../templates/Tree.style';

const treeData: ComponentData = {
  name: 'tree',
  data: [
    {
      fontFamily: 'PingFangSC-Regular',
      fontSize: 13,
      color: '#0F1358',
      /* 箭头改造 */
      arrowWidth: 6,
      arrowHeight: 6,
      switcherLineHeight: 13,
      switcherColor: '#fff',
      selectedFontColor: '#5365EA',
      selectedBackColor: 'rgba(104, 135, 232, 0.08)',
      hoverBackColor: 'rgba(15, 19, 88, 0.03)',
      rotateOpen: '-45deg',
      rotateClose: '-135deg',
      switcherCloseBgColor: '#F1F1F5',
      treeSwitcherBgColor: '#5365EA',
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
      treeOpenIcon,
      treeCloseIcon,
      treeLineColor: '#D9E6F2',
    },
  ],
  onlyTemplate: { base: treeAllStyle },
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
  // onlyTemplate: { pro: treeCheckStyle },
};

export { treeData, treeCheckData };
