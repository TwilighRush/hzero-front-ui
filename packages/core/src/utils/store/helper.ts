import { ThemeStoreState } from './UedStore';
import { filterNullOrUndefined } from '../common';
import { GlobalThemeComponent, ThemeDataConfig } from '../types';
import { ModifyVarsObj, ThemeStore } from './UedStore';

let store: ThemeStore;

function registerThemeComponents(id: string, component: GlobalThemeComponent) {
  getStore().registerThemeComponents(id, component);
}

function registerTheme(theme: ThemeDataConfig) {
  getStore().registerTheme(theme);
}

interface InitOptions {
  scope?: string[];
  defaultTheme?: string;
  themes: ThemeDataConfig[];
  enabledThemes?: string[];
  templates: { id: string; component: GlobalThemeComponent }[];
  modifyVars?: ModifyVarsObj;
}

// 用于项目里便捷地初始化数据
function initTheme(options: InitOptions) {
  const { themes, templates, scope, enabledThemes = [], defaultTheme, modifyVars } = options;
  const ued = getStore();
  const themeComponents = ued.state.themeComponents;
  templates.forEach(({ id, component }) => themeComponents.set(id, component));
  const iocThemes = ued.state.themes;
  themes.forEach((theme) => iocThemes.set(theme.name, theme));

  const finalState: Partial<ThemeStoreState> = {
    scope,
    modifyVars,
    defaultTheme,
    themeComponents,
    themes: iocThemes,
    enabledThemes: enabledThemes?.length ? enabledThemes : [...ued.state.themes.keys()],
  };
  ued.updateState(filterNullOrUndefined(finalState));
}

function getThemeKeys(): string[] {
  return [...getStore().state.themes.keys()];
}

function getStore(): ThemeStore {
  if (typeof window !== 'undefined') {
    if (!(window as any).__themeStore) {
      (window as any).__themeStore = new ThemeStore();
    }
    return (window as any).__themeStore;
  } else {
    if (!store) {
      store = new ThemeStore();
    }
    return store;
  }
}

// 添加一个受主题控制的自定义样式
function addThemeStyle(...styles: any[]) {
  getStore().addCustomStyles(...styles);
}

export {
  registerTheme,
  registerThemeComponents,
  initTheme,
  addThemeStyle,
  getThemeKeys,
  getStore,
  InitOptions,
};
