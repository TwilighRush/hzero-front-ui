import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const notificationStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-notification-notice-icon-info.ant-notification-notice-icon-info {
      color: ${infoColor};
    }
  `;
};
export default notificationStyle;
