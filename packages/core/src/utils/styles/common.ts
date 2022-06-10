import { css } from 'styled-components';

export const flexCenter = (direction: 'row' | 'column' = 'row', inline = false) => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${direction};
  justify-content: center;
  align-items: center;
`;

export const pseudoAlign = (align: 'middle' | 'top' | 'bottom' = 'middle') => css`
  &:before {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: ${align};
  }
  & > * {
    vertical-align: ${align};
  }
`;

export const flex = (
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  align: 'center' | 'flex-start' | 'flex-end',
  justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  inline: boolean
) => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;
