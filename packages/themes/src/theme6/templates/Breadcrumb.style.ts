import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const BreadcrumbStyle = (props) => {
  const { fontColor, fontSize, lastChildFontSize, lastChildFontColor } = getThemeData(
    props,
    'breadcrumb'
  );
  const { primary6 } = getThemeData(props, 'common');
  return css`
    .c7n-breadcrumb.c7n-breadcrumb {
      color: ${fontColor};
      font-size: ${fontSize};
      cursor: pointer;
      span {
        &:hover {
          color: ${primary6};
        }
      }
      & > span:last-child {
        color: ${lastChildFontColor};
        font-size: ${lastChildFontSize}px;
      }
    }
  `;
};

export default BreadcrumbStyle;
