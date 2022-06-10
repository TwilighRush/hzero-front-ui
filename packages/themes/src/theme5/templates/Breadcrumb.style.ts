import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const BreadcrumbStyle = (props) => {
  const { fontSize, lastFontSize } = getThemeData(props, 'breadcrumb');
  const { primary6, titleColor1, titleColor2 } = getThemeData(props, 'common');
  return css`
    .c7n-breadcrumb.c7n-breadcrumb {
      cursor: pointer;
      span,
      a {
        color: ${titleColor2};
        font-size: ${fontSize}px;
        &:hover {
          color: ${primary6};
        }
      }
      & > span:last-child {
        span {
          color: ${titleColor1};
          font-size: ${lastFontSize}px;
        }
      }
      .icon-arrow_drop_down {
        font-size: 0;
      }
    }
  `;
};

export default BreadcrumbStyle;
