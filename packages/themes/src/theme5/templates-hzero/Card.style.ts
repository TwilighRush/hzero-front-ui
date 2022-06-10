import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const getCardCss = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-card.ant-card {
      .ant-card-head {
        position: relative;
        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 2px;
          height: 14px;
          background: ${primary6};
        }
      }
    }
  `;
};

export default getCardCss;
