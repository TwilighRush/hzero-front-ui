import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function AnchorStyle(props: any) {
  const { primary6, titleColor1, titleColor2, lineColor1 } = getThemeData(props, 'common');
  const { fontSize, fontWeight } = getThemeData(props, 'anchor');
  return css`
    .c7n-anchor-wrapper.c7n-anchor-wrapper {
      .c7n-anchor {
        .c7n-anchor-ink {
          :before {
            width: 0.01rem;
            background-color: ${lineColor1};
          }
          .c7n-anchor-ink-ball {
            border-color: ${primary6};
          }
        }
        .c7n-anchor-link {
          padding: 0rem 0 0rem 0.12rem;
          .c7n-anchor-link {
            padding-top: 0;
            padding-bottom: 0;
          }
          .c7n-anchor-link-title {
            color: ${titleColor2};
            font-size: ${fontSize}px;
            text-decoration: none;
            padding: 0.08rem 0 0.07rem;
            margin-bottom: 0;
            &:hover {
              color: ${primary6};
            }
            &.c7n-anchor-link-title-active {
              color: ${titleColor1};
              text-decoration: none;
              font-weight: ${fontWeight};
            }
          }
        }
      }
    }
  `;
}

export default AnchorStyle;
