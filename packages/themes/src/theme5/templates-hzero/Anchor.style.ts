import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const anchorStyle = (props) => {
  const { fontWeight } = getThemeData(props, 'anchor');
  const { primary6, titleColor1, titleColor2 } = getThemeData(props, 'common');
  return css`
    .ant-anchor.ant-anchor {
      a,
      a:hover {
        color: ${titleColor2};
      }

      .ant-anchor-ink-ball {
        border-color: ${primary6};
      }
      .ant-anchor-link-active > .ant-anchor-link-title {
        color: ${titleColor1};
      }
      .ant-anchor-link .ant-anchor-link-title:hover {
        color: ${primary6};
      }
    }
  `;
};

export default anchorStyle;
