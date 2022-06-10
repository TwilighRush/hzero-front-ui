import React from 'react';
import { getLocalConfig } from './storageHelper';
import { getStore } from './store';
import { Config, ObjectType } from './types';
import { getDefaultConfig, resolveTheme } from './utils';
import singleton from 'vars-singleton';

export interface ThemeContextValue {
  dataMap: Map<string, Record<string, any>>;
  schema: string;
  config: Config;
  scopeList?: string[];
  setTheme: (
    schema: string,
    config?: Config,
    opts?: { colors?: ObjectType; data?: ObjectType }
  ) => any;
  fetchThemeData: (
    schema: string,
    config?: Config,
    opts?: {
      colors?: ObjectType;
      data?: ObjectType;
    }
  ) => any;
  resolvedTheme: Record<string, any>;
  originTheme?: Record<string, any>;
  setResolvedTheme?: (data: any) => any;
  styleCounts?: Record<string, number>;
}

export const defaultContextValue: ThemeContextValue = {
  schema: '',
  config: {},
  dataMap: new Map(),
  setTheme: () => {},
  fetchThemeData: () => {},
  resolvedTheme: {},
  styleCounts: {},
  setResolvedTheme: () => {},
};
function getDefaultContextValue() {
  const local = getLocalConfig();
  const store = getStore();

  let themeValue = {};

  const resetDefault = () => {
    if (!Object.keys(themeValue || {}).length) {
      const { data: curData, loadData: surLoadData } = store.state.themes.get(local.schema) || {
        data: {},
      };
      (async () => {
        let _curData;
        if (surLoadData) {
          _curData = await surLoadData();
        } else {
          _curData = curData;
        }
        themeValue = resolveTheme(_curData, getDefaultConfig(_curData));
      })();
    }
  };

  resetDefault();

  const defaultValue = {
    ...defaultContextValue,
    ...local,
  };

  Object.defineProperties(defaultValue, {
    resolvedTheme: {
      get() {
        resetDefault();
        return themeValue;
      },
      set(value) {
        themeValue = value;
      },
    },
    originTheme: {
      get() {
        resetDefault();
        return themeValue;
      },
      set(value) {
        themeValue = value;
      },
    },
  });

  return defaultValue;
}

const ThemeContext = singleton(
  '__UED_THEME_CONTEXT__',
  React.createContext<ThemeContextValue>(getDefaultContextValue())
);

const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext;

export default ThemeContext;

export { ThemeConsumer, ThemeProvider, ThemeContext };
