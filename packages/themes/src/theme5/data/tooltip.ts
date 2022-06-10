import { ComponentData } from '@hzero-front-ui/core';
import tooltipProStyle from '../templates/Tooltip.style';
import tooltipBaseStyle from '../templates/TooltipBase.style';
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
      maxWidth: 400,
      fontSize: 12,
      lineHeight: 20,
      borderRadius: 2,
      backgroundColor: 'rgba(0,0,0,0.65)',
      boxShadow: '0px 2px 10px 5px rgba(124, 133, 155, 0.1)',
      boxPadding: '0.06rem 0.08rem',
    },
  ],
  onlyTemplate: {
    pro: tooltipProStyle,
    base: tooltipBaseStyle,
  },
};

export default tooltipData;
