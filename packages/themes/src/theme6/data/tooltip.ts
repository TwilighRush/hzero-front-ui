import { ComponentData } from '@hzero-front-ui/core';
import tooltipProStyle from '../templates/Tooltip.style';
import tooltipBaseStyle from '../templates/TooltipBase.style';
// import tooltipHzeroStyle from '../templates-hzero/Tooltip.style';
import { css } from 'styled-components';
const tooltipStyle = css`
  ${tooltipProStyle}
  ${tooltipBaseStyle}
`;
const tooltipData: ComponentData = {
  name: 'tooltip',
  data: [
    {
      minWidth: 40,
      maxWidth: 184,
      fontFamily: '',
      fontSize: 14,
      fontColor: '#FFFFFF',
      lineHeight: 22,
      themeOriginal: true,
      innerPadding: '0.05rem 0.08rem',
      /* 弹框 */
      backgroundColor: 'rgba(0,0,0,0.65)',
      border: 'none',
      borderRadius: 2,
      contentHeight: 42,

      /* 箭头 */
      arrowColor: 'rgba(0,0,0,0.65)', // 与弹框颜色一致
      arrowBorderLeft: 'none',
      arrowBorderBottom: 'none',
      popuptransformLeft: 'translate(-50%, 50%) rotate(45deg)',
      popuptransformRight: 'translate(-50%, -50%) rotate(45deg)',
      popuptransformBootom: 'transform: translate(-50%, -50%) rotate(45deg)',

      /*阴影效果*/
      darkBoxShadow: '0 10px 32px 0 rgba(38,38,38,0.18)',
      lightBoxShadow: '0px 2px 10px 5px rgba(124, 133, 155, 0.1)',
    },
  ],
  // onlyTemplate: [tooltipStyle, tooltipHzeroStyle],
  onlyTemplate: tooltipStyle,
};

export default tooltipData;
