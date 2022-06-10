import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function TimelineStyle(props: any) {
  const { primary6, titleColor1 } = getThemeData(props, 'common');
  const { fontSize, lineHeight } = getThemeData(props, 'timeline');
  return css`
    .c7n-timeline.c7n-timeline {
      .c7n-timeline-item {
        cursor: pointer;
        &:hover {
          .c7n-timeline-item-head {
            border-color: ${primary6} !important;
          }
        }
        .c7n-timeline-item-content {
          color: ${titleColor1};
          font-size: ${fontSize}px;
          line-height: ${lineHeight}px;
        }
        .c7n-timeline-item-head-blue {
          color: ${primary6};
          border-color: ${primary6};
        }
      }
    }
  `;
}

export default TimelineStyle;
