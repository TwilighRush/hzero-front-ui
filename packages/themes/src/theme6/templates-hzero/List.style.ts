import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core/lib/utils';

const ListStyle = (props) => {
  const { primary1 } = getThemeData(props, 'common');
  return css`
    .ant-list.ant-list {
      .ant-list-item:nth-of-type(2n) {
        background-color: ${primary1};
      }
    }
  `;
};
export default ListStyle;
