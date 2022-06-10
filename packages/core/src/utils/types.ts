// import { CreateThemeDataOpts } from './utils';
// import { FlattenSimpleInterpolation } from "styled-components";
export type ObjectType<T = any> = Record<string, T>;

export interface ComponentData {
  extraTemplate?: CSSTemplate;
  onlyTemplate?: CSSTemplate;
  data: Record<string, any>[];
  global?: boolean;
  name: string;
}

export type Config = Record<string, number>;

export type ThemeData = Record<
  string,
  ComponentData | ((opts: { colors: ObjectType }) => ObjectType<ObjectType>) | boolean | undefined
>;
export type ThemeDataConfig = {
  name: string;
  data?: ThemeData;
  loadData?: () => Promise<ThemeData | any>;
  modifyVars?: ObjectType<ObjectType>;
};

export type CSSTemplate = any;

export interface GlobalThemeComponentProps {
  data: any;
}

export type GlobalThemeComponent = React.ComponentType<{}>;
