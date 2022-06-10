import { GlobalThemeComponent, ThemeDataConfig } from '../types';
import { BaseStore } from './BaseStore';
import { PartialConfig } from './partial';

type ModifyVarsObj = Record<string, Record<string, string | number | boolean>>;

interface ThemeStoreState {
  scope?: string[];
  themes: Map<string, ThemeDataConfig>;
  themeComponents: Map<string, GlobalThemeComponent>;
  enabledThemes?: string[];
  defaultTheme?: string;
  modifyVars?: ModifyVarsObj;
  partials: PartialConfig[];
  customStyles?: any[];
}

class ThemeStore extends BaseStore<ThemeStoreState> {
  constructor() {
    super();
    this.setState({
      themes: new Map<string, ThemeDataConfig>(),
      themeComponents: new Map<string, GlobalThemeComponent>(),
      partials: [],
    });
  }

  public registerTheme(themeData: ThemeDataConfig) {
    const themes = this.state.themes;
    themes.set(themeData.name, themeData);
    this.setState({ ...this.state, themes: new Map(themes) });
  }

  public registerThemeComponents(id: string, component: GlobalThemeComponent) {
    const themeComponents = this.state.themeComponents;
    themeComponents.set(id, component);
    this.setState({
      ...this.state,
      themeComponents: new Map(themeComponents),
    });
  }

  public setScope(scope: string[]) {
    this.setState({ ...this.state, scope });
  }

  public get enabledThemes(): string[] {
    return this.state.enabledThemes || [...this.state.themes.keys()];
  }

  public updateState(data: Partial<ThemeStoreState>) {
    this.setState({
      ...this.state,
      ...data,
    });
  }

  public addCustomStyles(...css: any[]) {
    const customStyles = this.state.customStyles || [];
    css.forEach((c) => {
      if (customStyles.indexOf(c) < 0) {
        customStyles.push(c);
      }
    });
    this.setState({ ...this.state, customStyles });
  }
}

export { ThemeStore, ThemeStoreState, ModifyVarsObj };
