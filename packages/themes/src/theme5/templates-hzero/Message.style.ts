import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const messageStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-message.ant-message {
      .ant-message-info .anticon,
      .ant-message-loading .anticon {
        color: ${infoColor};
      }
    }
  `;
};
export default messageStyle;
