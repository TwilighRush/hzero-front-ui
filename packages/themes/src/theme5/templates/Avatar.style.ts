import { css } from 'styled-components';
import { getThemeData } from '@hzero-front-ui/core';

const AvatarCss = (props) => {
  const {
    lgSize,
    lgFontSize,
    Size,
    fontSize,
    smSize,
    smFontSize,
    c7nSquareBorderRadius,
  } = getThemeData(props, 'avatar');
  return css`
    .c7n-avatar.c7n-avatar {
      font-size: ${fontSize}px;
      width: ${Size}px;
      height: ${Size}px;
      &.c7n-avatar-square {
        border-radius: ${c7nSquareBorderRadius};
      }
      .icon {
        font-size: ${fontSize}px;
      }
      &.c7n-avatar-lg {
        width: ${lgSize}px;
        height: ${lgSize}px;
        font-size: ${lgFontSize}px;
        .icon {
          font-size: ${lgFontSize}px;
        }
      }
      &.c7n-avatar-sm {
        width: ${smSize}px;
        height: ${smSize}px;
        font-size: ${smFontSize}px;
        .icon {
          font-size: ${smFontSize}px;
        }
      }
    }
  `;
};

export default AvatarCss;
