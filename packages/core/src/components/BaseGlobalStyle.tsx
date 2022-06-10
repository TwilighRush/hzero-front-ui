import { createGlobalStyle, css } from 'styled-components';

const getGlobalStyle = (props: any) => {
  return css`
    ${props.css}
  `;
};

export interface BaseGlobalStyleProps {
  css?: any | ((props: any) => any);
}

const BaseGlobalStyle = createGlobalStyle`${getGlobalStyle}`;

export default BaseGlobalStyle;
