import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const DividerStyle = (props: any) => {
  const { titleColor2, lineColor2, titleColor3 } = getThemeData(props, 'common');
  const { fontSize12px, lineHeight20px } = getThemeData(props, 'divider');
  return css`
    .c7n-divider.c7n-divider {
      /* 默认样式 */
      background: ${lineColor2};
      /* 水平分割线 */
      &-horizontal {
        margin: 16px 0;
        /* 垂直dashed */
        &.c7n-divider-dashed {
          background: none;
          border-color: ${lineColor2};
        }
        /* 垂直字体 */
        &.c7n-divider-with {
          &-text,
          &-text-left,
          &-text-right {
            background: none;
            font-size: ${fontSize12px}px;
            color: ${titleColor3};
            line-height: ${lineHeight20px}px;
            :before,
            :after {
              border-color: ${lineColor2};
            }
          }
        }
      }
      /* 垂直分割线 */
      &-vertical {
        background: ${lineColor2};
      }
    }
  `;
};
export default DividerStyle;
