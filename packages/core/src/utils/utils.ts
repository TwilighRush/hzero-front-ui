import isArray from 'lodash/isArray';
import { getConfig } from 'choerodon-ui';
import ConfigContext from 'choerodon-ui/lib/config-provider/ConfigContext';
import { THEME_EMPTY } from './constants';
import { ComponentData, ThemeData } from './types';
import { ThemeContext } from './ThemeContext';
import { ModifyVarsObj } from './store/UedStore';
import { ObjectType } from './types';

// 从currentTheme中获取某个值
export function getThemeData(props: any = {}, field: string = '', subField: string = '') {
  if (!props || !props.data || !props.data[field]) {
    return '';
  }
  if (!subField) {
    return props.data[field] || {};
  }
  return props.data[field][subField];
}

/**
 * 获取插入的style标签，没有则创建
 * @param id
 * @returns {HTMLElement}
 */
export function getStyleSheetTarget(id: string) {
  let target: any;
  if (typeof document !== 'undefined') {
    // 支持ssr
    target = document.getElementById(id);
    if (!target) {
      target = document.createElement('style');
      target.id = id;
      document.head.insertBefore(target, document.head.children[1]);
    }
  }
  return target!;
}

/**
 * 依据配置和数据原始数据生成真正的主题数据
 * @param data
 * @param conf
 */
export function resolveTheme(
  data: ThemeData,
  conf: any = {},
  opts?: { modifyVars?: ModifyVarsObj; colors?: ObjectType }
) {
  if (!Object.keys(data || {}).length) return {};
  let result = {} as any;
  let keys = Object.keys(conf);
  const { modifyVars = {}, colors = {} } = opts || {};
  const { resolveModifyVars } = data;
  const resolvedModifyVars =
    typeof resolveModifyVars === 'function' ? resolveModifyVars?.({ colors }) : {};
  // 合并modifyVars
  Object.keys(resolvedModifyVars).forEach((key) => {
    if (!modifyVars[key]) {
      modifyVars[key] = {};
    }
    modifyVars[key] = { ...modifyVars[key], ...(resolvedModifyVars[key] || {}) };
  });

  keys.forEach((field) => {
    if (field === 'schema') return;
    if (!data[field]) {
      return;
    }
    const coverVars = modifyVars[field] || {};
    const currentDataIndex = conf[field];
    const {
      data: componentData = [],
      extraTemplate,
      onlyTemplate,
      global,
    } = (data[field] || {}) as ComponentData;
    result[field] = {
      ...(componentData[currentDataIndex] || {}),
      ...coverVars,
      __global: global,
      extraTemplate,
      onlyTemplate,
    };
  });
  result.__isEmpty__ = data.__isEmpty__;
  return result;
}
/**
 * 16进制或rgb颜色转rgba
 * @param color {string}
 * @param opacity {number}
 */
export function hexToRgbaColor(color: string = '#000000', opacity: number = 1) {
  if (color.indexOf('rgba') > -1) {
    return color;
  } else if (color.indexOf('rgb') > -1) {
    /rgb\((.+)\)/.exec(color);
    return `rgba(${RegExp.$1}, ${opacity})`;
  }
  const hex = color.slice(1);
  if (hex.length !== 3 && hex.length !== 6) {
    return 'rgba(0, 0, 0, 0)';
  }
  if (hex.length === 3) {
    return `rgba(${parseInt(hex.slice(0, 1), 16)}, ${parseInt(hex.slice(1, 2), 16)}, ${parseInt(
      hex.slice(2, 3),
      16
    )}, ${opacity})`;
  }
  const r = parseInt(`0x${hex.slice(0, 2)}`, 16);
  const g = parseInt(`0x${hex.slice(2, 4)}`, 16);
  const b = parseInt(`0x${hex.slice(4)}`, 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * 对外提供的工具函数，用于获取静态资源图片url
 * @param name
 * @returns {string|undefined}
 */
export function getAsset(name: string): string | undefined {
  const { resolvedTheme = {} } = ((ThemeContext as any) || {})._currentValue || {};
  const { images: assets = {} } = resolvedTheme;
  return assets[name];
}

export function isEmpty(schema: any, theme?: any) {
  return schema === 'theme2' || schema === THEME_EMPTY || theme?.__isEmpty__;
}

export interface CreateThemeDataOpts {
  resolveModifyVars?(opts: { colors: ObjectType }): ObjectType<ObjectType>;
  __isEmpty__?: boolean; // 是否为空，true 时不渲染样式模板
  __only__?: boolean;
}

/**
 * 根据组件数据创建一个themeData
 * @param dataList
 */
export function createThemeData(dataList: ComponentData[], opts?: CreateThemeDataOpts) {
  const result: ThemeData = {};
  dataList.forEach(({ name, ...rest }) => {
    result[name] = { name, ...rest };
  });
  result.resolveModifyVars = opts?.resolveModifyVars;
  result.__isEmpty__ = opts?.__isEmpty__;
  return result;
}

export function getDefaultConfig(data: ThemeData) {
  return Object.keys(data)
    .filter((k) => isArray((data[k] as ComponentData)?.data))
    .reduce((prev, key) => ({ ...prev, [key]: 0 }), {});
}

/**
 * 创建局部样式数据
 * @param dataList 数据列表
 * @returns ObjectType
 */
export function createPartialData(dataList: ComponentData[]) {
  const configData = createThemeData(dataList);
  const defaultConfig = getDefaultConfig(configData);
  return resolveTheme(configData, defaultConfig);
}

export function defineGlobalVersion(pkg: any) {
  if (pkg && typeof window !== 'undefined') {
    const g = window as any;
    const key = '__UED_VERSION__';
    if (!g[key]) {
      g[key] = {};
    }
    const { name = '', version = '' } = pkg;
    g[key][name] = version;
  }
}

export function getPrimaryColor(): string {
  if (!ThemeContext || !(ThemeContext as any)._currentValue) {
    return '';
  }
  const contextValue = (ThemeContext as any)._currentValue.originTheme || {};
  const common = contextValue.common || {};
  return common.primary;
}

export const getC7NContextConfig: typeof getConfig = function (key) {
  if (ConfigContext && (ConfigContext as any)._currentValue) {
    const { getConfig: getConfigAlias } = (ConfigContext as any)._currentValue || {};
    return getConfigAlias ? getConfigAlias(key) : getConfig(key);
  }
  return getConfig(key);
};
