import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const anchorStyle = (props) => {
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .ant-anchor.ant-anchor {
      a,
      a:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      .ant-anchor-ink-ball {
        border-color: ${primary6};
      }
      .ant-anchor-link-active > .ant-anchor-link-title {
        color: ${primary6};
      }
      .ant-anchor-link .ant-anchor-link-title:hover {
        color: ${primary6};
      }
    }
  `;
};

export default anchorStyle;
