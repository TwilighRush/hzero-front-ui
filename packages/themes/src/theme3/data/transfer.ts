import { ComponentData } from '@hzero-front-ui/core';

const transferData: ComponentData = {
  name: 'transfer',
  data: [
    {
      fontColor: '#525A6E',
      headFontSize: 12,
      headFontColor: '#525A6E',
      borderColor: '#DBDFE6',
      // 选中颜色
      selectedFontColor: '#4588F4',
      fontFamily: 'PingFangSC-Regular',
      bodyFontSize: 12,
      listWidth: 188,
      listHeight: 270,
      listRadius: 2,

      rightDistance: 32, // 内容距右边框的距离
      topRightRadius: 0,
      bottomRightRadius: 0,
      /* 中心按钮 */
      buttonWrapWidth: 24,
      buttonWrapPadding: '0', // 按钮距左右两边的距离
      buttonWrapTransform: 'translateX(-50%) translateY(-50%)',
      buttonWrapPosition: 'absolute',
      buttonWrapTop: '50%',
      buttonWidth: 24,
      buttonHeight: 24,
      buttonRadius: 2,
      // 按钮不可点击时的边框颜色、背景颜色
      buttonDisabledBorderColor: '#d9d9d9',
      buttonDisabledBgColor: '#fff',
      buttonDistance: 0, // 按钮上下间的距离
      /* 右列表 */
      leftDistance: 32,
      bottomLeftRadius: 0,
      topLeftRadius: 0,
      borderLeft: 'none',
      animation: '',
    },
  ],
};

export default transferData;
