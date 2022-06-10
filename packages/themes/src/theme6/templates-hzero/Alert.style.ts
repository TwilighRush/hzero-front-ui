import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const alertStyle = (props) => {
  const { primary1, primary3, primary6 } = getThemeData(props, 'common');
  return css`
    body {
      a,
      a:hover {
        color: ${primary6};
      }
    }
    .ant-alert.ant-alert {
      &.ant-alert-info {
        background: ${primary1};
        border-color: ${primary3};
        .ant-alert-icon {
          color: ${primary6};
        }
      }
    }
  `;
};
export default alertStyle;
