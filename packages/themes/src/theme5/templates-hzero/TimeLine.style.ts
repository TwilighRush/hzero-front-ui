import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const timeLineStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-timeline.ant-timeline {
      .ant-timeline-item {
        &:hover {
          .ant-timeline-item-head {
            border-color: ${primary6};
            color: ${primary6};
            border-color: ${primary6} !important;
          }
          .ant-timeline-item-content {
            color: ${primary6};
          }
        }
      }
      .ant-timeline-item-head-blue {
        border-color: ${primary6};
        color: ${primary6};
      }
    }
  `;
};
export default timeLineStyle;
