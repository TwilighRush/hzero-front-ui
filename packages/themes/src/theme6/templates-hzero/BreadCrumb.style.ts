import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const breadCrumbStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-breadcrumb.ant-breadcrumb {
      a:hover {
        color: ${primary6};
      }
    }
  `;
};
export default breadCrumbStyle;
