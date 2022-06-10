import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

function TimelineStyle(props: any) {
  const { primary6 } = getThemeData(props, 'common');
  const { fontSize, fontColor, borderColor } = getThemeData(props, 'timeline');
  return css`
    .c7n-timeline.c7n-timeline {
      color: ${fontColor};
      .c7n-timeline-item {
        font-size: ${fontSize}px;
        .c7n-timeline-item-head {
          &.c7n-timeline-item-head-blue {
            border-color: ${primary6} !important;
          }
        }

        .c7n-timeline-item-tail {
          border-left: 0.02rem solid ${borderColor};
        }
      }
    }
  `;
}

export default TimelineStyle;
