import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Config,
  THEME_EMPTY,
  emptyArray,
  resolveTheme,
  ThemeContext,
  ThemeContextValue,
  getStore,
  isEmpty,
  getDefaultConfig,
  defineGlobalVersion,
  ObjectType,
  ThemeDataConfig,
  ThemeData,
  ComponentData,
} from '../utils';
import BuildInStyle from '../BuildinStyle';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';

defineGlobalVersion(require('../../package.json'));

export interface ContainerProps {
  defaultTheme?: string;
  onChange?: (data: { config: Config; schema: string }) => any;
}

const resolveStyleCounts = (data: ThemeData = {}) => {
  const result: any = {};
  Object.keys(data).forEach((k) => {
    result[k] = (data[k] as ComponentData)?.data?.length || 0;
  });
  return result;
};

const Container: FC<ContainerProps> = (props) => {
  const { onChange } = props;
  const [scopeList, setScopeList] = useState<string[]>(() => getStore().state.scope || emptyArray);
  const [dataMap, setDataMap] = useState<Map<string, ThemeDataConfig>>(
    () => getStore().state.themes
  );

  const modifyVars = useMemo(() => getStore().state.modifyVars || {}, []);

  const [themeComponents, setThemeComponents] = useState(() => getStore().state.themeComponents);
  const partials = useMemo(() => getStore().state.partials, []);

  const [setting, setSetting] = useState<{
    schema: string;
    resolvedTheme: any;
    styleCounts: any;
    config: Config;
    opts?: { colors?: ObjectType };
  }>(() => {
    return {
      schema: '',
      config: {},
      styleCounts: {},
      resolvedTheme: {},
    };
  });

  const settingRef = useRef(setting);
  settingRef.current = setting;

  const initRef = useRef(false);

  const fetchThemeData = useCallback(
    (
      themeSchema: string,
      themeConfig?: Config | undefined,
      opts?: { colors?: ObjectType; data?: ObjectType }
    ) => {
      const {
        data: _data = {},
        loadData,
        modifyVars: themeModifyVars = {},
      } = dataMap.get(themeSchema) || {};
      return (async () => {
        let data: any = {};
        if (loadData) {
          data = await loadData();
          dataMap.set(themeSchema, { name: 'themeSchema', data });
          setDataMap(new Map(dataMap));
        } else {
          data = _data;
        }
        const finalConfig = themeConfig || getDefaultConfig(data);
        const resolvedTheme = resolveTheme(data, finalConfig, {
          modifyVars: merge({}, modifyVars, themeModifyVars, opts?.data),
          colors: opts?.colors || setting.opts?.colors,
        });
        const styleCounts = resolveStyleCounts(data);
        return {
          data,
          styleCounts,
          finalConfig,
          resolvedTheme,
        };
      })();
    },
    [dataMap, modifyVars, setting.config, setting.opts, setting.schema]
  );

  useEffect(() => {
    // 只需要执行一次
    if (initRef.current) {
      return;
    }

    initRef.current = true;
    const ued = getStore();
    const schema =
      props.defaultTheme || ued.state.defaultTheme || [...dataMap.keys()][0] || THEME_EMPTY;

    (async () => {
      const { styleCounts, finalConfig, resolvedTheme } = await fetchThemeData(schema);
      setSetting({
        schema,
        config: finalConfig,
        styleCounts,
        resolvedTheme,
      });
    })();
  }, [dataMap, props.defaultTheme, modifyVars]);

  // 设置主题(在这里加参数进行设置)
  const setTheme = useCallback(
    (
      themeSchema: string,
      themeConfig: Config | undefined,
      opts?: { colors?: ObjectType; data?: ObjectType }
    ) => {
      if (
        themeSchema === setting.schema &&
        themeConfig === setting.config &&
        isEqual(opts, setting.opts)
      ) {
        return;
      }
      (async () => {
        const { styleCounts, finalConfig, resolvedTheme } = await fetchThemeData(
          themeSchema,
          themeConfig,
          opts
        );
        setSetting({
          schema: themeSchema,
          config: finalConfig,
          resolvedTheme,
          styleCounts,
          opts: opts || setting.opts,
        });
        onChange?.({ config: finalConfig, schema: themeSchema });
      })();
    },
    [dataMap, modifyVars, onChange, fetchThemeData]
  );

  useEffect(() => {
    const uedProvider = getStore();
    const unsubscribe = uedProvider.subscribe((state) => {
      if (state.scope) {
        setScopeList(state.scope);
      }
      setDataMap(state.themes);
      setThemeComponents(state.themeComponents);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue = useMemo<ThemeContextValue>(() => {
    const { schema, config, resolvedTheme } = setting;
    return {
      schema,
      config,
      dataMap,
      fetchThemeData,
      scopeList,
      resolvedTheme: resolvedTheme,
      originTheme: resolvedTheme,
      styleCounts: setting.styleCounts,
      setTheme,
    };
  }, [setting, scopeList, setTheme, fetchThemeData]);

  if (!setting.schema) {
    return null;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
      {[...themeComponents.entries()]
        .filter(Boolean)
        .map(([id, Comp]) =>
          // TODO: 移除ONLY的判断
          (Comp as any).__is__buildin__ && isEmpty(setting.schema, setting.resolvedTheme) ? null : (
            <Comp key={id} />
          )
        )
        .filter(Boolean)}
      <BuildInStyle />
      {partials.map((partial, index) => (
        // eslint-disable-next-line react/jsx-key
        <ThemeContext.Provider
          key={index}
          value={{
            ...contextValue,
            schema: 'theme2',
            resolvedTheme: partial.data,
            originTheme: partial.data,
          }}
        >
          {partial.templates.map((Comp, index) => (
            <Comp
              partialSelector={partial.selector}
              targetPrefix={partial.targetPrefix}
              key={partial.name || index}
            />
          ))}
        </ThemeContext.Provider>
      ))}
    </ThemeContext.Provider>
  );
};

export default Container;
