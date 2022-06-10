import { ObjectType } from '../types';
import { getStore } from './helper';

export type PartialConfig = {
  name?: string;
  selector: string;
  targetPrefix: string;
  templates: any[];
  data: ObjectType;
};

export type PartialThemeOpts = {
  partials: PartialConfig[];
};

export function configPartialTheme(configFn: (oldPartials: PartialConfig[]) => PartialConfig[]) {
  const store = getStore();
  store.updateState({ partials: configFn(store.state.partials || []) });
}
