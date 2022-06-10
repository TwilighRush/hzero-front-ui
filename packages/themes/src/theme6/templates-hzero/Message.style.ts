import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const messageStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-message-info.ant-message-info,
    .ant-message-loading.ant-message-loading {
      .anticon {
        color: ${infoColor};
      }
    }
  `;
};
export default messageStyle;
