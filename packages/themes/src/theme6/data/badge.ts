import { ComponentData } from '@hzero-front-ui/core';
import { css } from 'styled-components';
import BadgeStyle from '../templates/Badge.style';
import BadgeHzeroStyle from '../templates-hzero/Badge.style';
const badgeData: ComponentData = {
  name: 'badge',
  data: [
    {
      dotWidth: 8,
      dotHeight: 8,
      errorBgColor: '#FF4D4F',
      successBgColor: '#7cd941',
      defaultBgColor: 'rgba(0, 0, 0, 0.65)',
      textColor: 'rgba(0, 0, 0, 0.85)',
      textFontSize: 14,
    },
  ],
  onlyTemplate: [BadgeStyle, BadgeHzeroStyle],
};

export default badgeData;
