import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const breadCrumbStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-breadcrumb.ant-breadcrumb {
      span:not(:last-child) {
        :hover {
          .ant-breadcrumb-link {
            color: ${primary6};
            cursor: pointer;
          }
        }
      }
    }
  `;
};
export default breadCrumbStyle;
