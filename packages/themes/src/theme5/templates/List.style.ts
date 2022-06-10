import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const ListStyle = (props) => {
  const { lineColor2, primary6, titleColor1 } = getThemeData(props, 'common');
  const { fontSize, lineHeight } = getThemeData(props, 'list');
  return css`
    .c7n-list.c7n-list {
      a {
        color: ${primary6};
      }
      .c7n-list-item.c7n-list-item {
        border-color: ${lineColor2};
        .c7n-list-item-meta {
          align-items: center;
          .c7n-list-item-meta-content {
            .c7n-list-item-meta-title.c7n-list-item-meta-title {
              a {
                color: ${titleColor1};
              }
              font-size: ${fontSize}px;
              line-height: ${lineHeight}px;
            }
            .c7n-list-item-meta-description {
              font-size: ${fontSize}px;
              line-height: ${lineHeight}px;
            }
          }
        }
        .c7n-list-item-content {
          color: ${titleColor1};
        }
      }
    }
  `;
};
export default ListStyle;
