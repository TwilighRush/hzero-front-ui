import { ComponentData } from '@hzero-front-ui/core';
import TransferProStyle from '../templates/Transfer.style';
import TransferBaseStyle from '../templates/TransferBase.style';
import TransferHzeroStyle from '../templates-hzero/Transfer.style';
import { css } from 'styled-components';
const TransferStyle = css`
  ${TransferProStyle}
  ${TransferBaseStyle}
`;
const transferData: ComponentData = {
  name: 'transfer',
  data: [
    {
      fontColor: '#1C1C1C',
      headFontSize: 12,
      headFontColor: '#1C1C1C',
      borderColor: '#E8E8E8',
      // 选中颜色
      selectedFontColor: '#5365EA',
      fontFamily: '',
      bodyFontSize: 12,
      listWidth: 240,
      listHeight: 322,
      listRadius: 2,

      rightDistance: 8, // 内容距右边框的距离
      topRightRadius: 0,
      bottomRightRadius: 0,
      /* 中心按钮 */
      buttonWrapWidth: 24,
      buttonWrapPadding: '0', // 按钮距左右两边的距离
      buttonWrapTransform: 'translateX(-32px) translateY(-29px)',
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
      leftDistance: 8,
      bottomLeftRadius: 0,
      topLeftRadius: 0,
      borderLeft: 'none',
      animation: '',

      firstMarginRight: 40,
    },
  ],
  onlyTemplate: [TransferStyle, TransferHzeroStyle],

};

export default transferData;
