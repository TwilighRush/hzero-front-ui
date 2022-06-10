import React, { forwardRef, useContext } from 'react';
import { ThemeContextValue, ThemeContext } from '../utils/ThemeContext';

export function withTheme(
  mapValueToProps: (value: ThemeContextValue) => any = (v) => ({ themeCtx: v })
) {
  return (WrappedComponent: React.ComponentType<any>) => {
    const retComp = forwardRef((props, ref) => {
      const context = useContext(ThemeContext);
      return <WrappedComponent {...props} ref={ref} {...mapValueToProps(context)} />;
    });
    retComp.displayName = 'WithThemeComponent';
    return retComp;
  };
}
