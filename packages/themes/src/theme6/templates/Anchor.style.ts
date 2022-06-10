import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function AnchorStyle(props: any) {
  const { primary6 } = getThemeData(props, 'common');
  const { inkBgColor, titleColor, fontSize } = getThemeData(props, 'anchor');
  return css`
     .c7n-anchor-wrapper.c7n-anchor-wrapper {
      .c7n-anchor {
        .c7n-anchor-ink {
          &:before {
            background-color: ${inkBgColor};
          }
          .c7n-anchor-ink-ball {
            border-color: ${primary6};
          }
        }
        .c7n-anchor-link {
          padding: 0;
          padding-left: 0.16rem;
          &.c7n-anchor-link-active {
            color: ${primary6};
          }
          .c7n-anchor-link-title {
            color: ${titleColor};
            text-decoration: none;
            font-size: ${fontSize}px;
            margin-bottom: 0;
            padding: 0.07rem 0;
            &.c7n-anchor-link-title-active {
              color: ${primary6};
              text-decoration: none;
            }
          }
        }
      }
    }
  `;
}

export default AnchorStyle;
