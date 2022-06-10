import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const StatisticStyle = (props: any) => {
  const { titleColor1 } = getThemeData(props, 'common');
  const { titleFontSize, contentFontSize, titleLineHeight, contentLineHeight } = getThemeData(
    props,
    'statistic'
  );
  return css`
    .c7n-statistic.c7n-statistic {
      .c7n-statistic-title {
        font-size: ${titleFontSize}px;
        line-height: ${titleLineHeight}px;
      }
      .c7n-statistic-content {
        font-size: ${contentFontSize}px;
        font-weight: 500;
        line-height: ${contentLineHeight}px;
        color: ${titleColor1};
      }
    }
  `;
};
export default StatisticStyle;
