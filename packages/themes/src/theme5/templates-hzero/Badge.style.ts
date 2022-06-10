import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const BadgeStyle = (props) => {
  const { defaultColor } = getThemeData(props, 'common');
  return css`
    .ant-badge.ant-badge {
      .ant-badge-status-dot {
        &.ant-badge-status-processing {
          background-color: ${defaultColor};
          :after{
            border-color:${defaultColor};
          }
        }
      }
    }
  `;
};
export default BadgeStyle;
