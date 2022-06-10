import { css } from 'styled-components';
import { ComponentData } from '@hzero-front-ui/core';
import buttonProStyle from '../templates/Button.style';
import buttonBaseStyle from '../templates/ButtonBase.style';
import buttonHzeroStyle from '../templates-hzero/Button.style';
const buttonStyle = css`
  ${buttonProStyle}
  ${buttonBaseStyle}
`;

const buttonData: ComponentData = {
  name: 'button',
  data: [
    {
      //大
      lgFontSize: 14,
      lgIconFontSize: 14,
      lgHeight: 32,
      //中
      fontSize: 12,
      height: 28, // button高度
      iconFontSize: 14,
      //小
      smheight: 24,
      smIconFontSize: 14,
      //
      minWidth: 68,
      leftRightPadding: 12,
      radius: 2,
      defaultDisabledColor: '#A6ACBD',
      linktextDecoration: 'none',
      defaultIconPosition: 'relative',
    },
  ],
  onlyTemplate: {
    pro: buttonProStyle,
    base: buttonBaseStyle,
    hzero: buttonHzeroStyle,
  },
};

export default buttonData;
