import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const PopConfirmStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-popover.ant-popover {
      .ant-popover-message > .anticon {
        color: ${infoColor};
      }
    }
  `;
};
export default PopConfirmStyle;
