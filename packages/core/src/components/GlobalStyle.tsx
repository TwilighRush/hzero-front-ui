import React, { FC, useContext } from 'react';
import { StyleSheetManager } from 'styled-components';
import { ObjectType, getStyleSheetTarget } from '../utils';
import { ThemeContext } from '../utils/ThemeContext';
import BaseGlobalStyle from './BaseGlobalStyle';

export type GlobalStyleCssFunction = (props: {
  data: ObjectType<ObjectType>;
  schema: string;
}) => any[] | any;

export interface GlobalStyleProps {
  css: any | any[] | GlobalStyleCssFunction;
  id?: string;
}

export const GLOBAL_STYLE_DEFAULT_TARGET = '__HZERO-FRONT-UI__CORE__GLOBAL_DEFAULT__';

const GlobalStyle: FC<GlobalStyleProps> = (props) => {
  const { resolvedTheme, schema } = useContext(ThemeContext);
  return (
    <StyleSheetManager target={getStyleSheetTarget(props.id || GLOBAL_STYLE_DEFAULT_TARGET)}>
      <BaseGlobalStyle data={resolvedTheme} schema={schema} css={props.css} />
    </StyleSheetManager>
  );
};

export default GlobalStyle;
