import { ComponentData } from '@hzero-front-ui/core';
import treeFolder from '../assets/icons/folder.png';
import treeFile from '../assets/icons/file.png';
import treeCheckUnfold from '../assets/icons/arrow-unfold.png';
import treeCheckCollopse from '../assets/icons/arrow-collapse.png';
import { treeCheckStyle, treeStyle } from '../templates/Tree.style';
import treeHzeroStyle from '../templates-hzero/Tree.style';
const treeData: ComponentData = {
  name: 'tree',
  data: [
    {
      fontFamily: '',
      fontSize: 14,
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
      // fontSize: 14,
      treeLineHeight: 28,
      treeColor: '#262626',
      treeHoverBgColor: 'rgba(0,0,0,0.02)',
      treeIconColor: 'rgba(0,0,0,0.45)',
    },
  ],
  onlyTemplate: [treeStyle, treeHzeroStyle],
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
