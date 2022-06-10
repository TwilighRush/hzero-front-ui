import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const collapseStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-collapse.ant-collapse {
      .ant-collapse-header[aria-expanded='true'] {
        .arrow {
          color: ${primary6};
        }
      }
    }
  `;
};
export default collapseStyle;
