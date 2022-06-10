import { ComponentData } from '@hzero-front-ui/core';
import treeNormalIcon from '../assets/icons/file-normal@3x.png';
import treeOpenIcon from '../assets/icons/file-open@3x.png';
import treeNodeIcon from '../assets/icons/menu@3x.png';

const treeData: ComponentData = {
  name: 'tree',
  data: [
    {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      color: '#333333',
      /* 箭头改造 */
      arrowWidth: 8,
      arrowHeight: 8,
      selectedFontColor: '#5a6677',
      selectedBackColor: '#f6f6f6',
      rotateOpen: '-45deg',
      rotateClose: '-135deg',
      borderWidth: 0,
      iconSize: '',
      iconBefore: 'true',
      treeNormalIcon: '',
      treeOpenIcon: '',
      treeNodeIcon: '',
      titleLeft: 0,
    },
  ],
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
    },
  ],
};

export { treeData, treeCheckData };
