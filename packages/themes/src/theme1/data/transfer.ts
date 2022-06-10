import { ComponentData } from '@hzero-front-ui/core';

const transferData: ComponentData = {
  name: 'transfer',
  data: [
    {
      fontColor: '',
      headFontSize: '',
      headFontColor: '',
      borderColor: '',
      // 选中颜色
      selectedFontColor: '',
      fontFamily: '',
      bodyFontSize: '',
      listWidth: 188,
      listHeight: 270,
      listRadius: 2,
      /* 左列表 */
      rightDistance: 'unset', // 内容距右边框的距离
      topRightRadius: 2,
      bottomRightRadius: 2,

      /* 中心按钮 */
      buttonWrapWidth: 48,
      buttonWrapPadding: '0 12px', // 按钮距左右两边的距离
      buttonWrapTransform: 'unset',
      buttonWrapPosition: 'unset',
      buttonWrapTop: 'unset',
      buttonWidth: 24,
      buttonHeight: 24,
      buttonRadius: 12,
      // 按钮不可点击时的边框颜色、背景颜色
      buttonDisabledBorderColor: '#d9d9d9',
      buttonDisabledBgColor: '#fff',
      buttonDistance: '4px', // 按钮上下间的距离

      /* 右列表 */
      leftDistance: 'unset',
      bottomLeftRadius: 2,
      topLeftRadius: 2,
      borderLeft: '1px solid #e8e8e8',
      // animation: transferAnimation.border,
    },
  ],
};

export default transferData;
