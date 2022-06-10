import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';
const transferStyle = (props) => {
  const { primary1 } = getThemeData(props, 'common');
  return css`
    .ant-transfer.ant-transfer {
      .ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
        background-color: ${primary1};
      }
      .ant-transfer-list-content > .LazyLoad {
        animation: none;
      }
    }
  `;
};
export default transferStyle;
