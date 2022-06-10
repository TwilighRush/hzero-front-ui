import { css } from 'styled-components';

import { getThemeData } from '@hzero-front-ui/core';

const colorNames = [
  'geekblue',
  'green',
  'magenta',
  'red',
  'orange',
  'blue',
  'volcano',
  'gold',
  'purple',
  'gray',
];

const tagStyle = (props: any) => {
  return css`
    .c7n-tag.c7n-tag {
      ${colorNames.map((color) => {
        return `
        &-${color} {
          color: ${getThemeData(props, 'tag', `${color}Color`)};
          background-color: ${getThemeData(props, 'tag', `${color}Bg`)};
          border-color: ${getThemeData(props, 'tag', `${color}BorderColor`)};
        }
      `;
      })}
      ${colorNames.map((color) => {
        return `
        &-${color}-inverse {
          color: #fff;
          background-color: ${getThemeData(props, 'tag', `${color}InverseBg`)};
          border-color: transparent;
        }
      `;
      })}
    }
  `;
};

export default tagStyle;
