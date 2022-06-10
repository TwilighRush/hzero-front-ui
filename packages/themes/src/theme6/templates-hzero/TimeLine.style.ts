import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const TimeLineStyle = (props) => {
  const { infoColor } = getThemeData(props, 'common');
  return css`
    .ant-timeline.ant-timeline {
      .ant-timeline-item-head-blue {
        border-color: ${infoColor};
        color: ${infoColor};
      }
    }
  `;
};
export default TimeLineStyle;
