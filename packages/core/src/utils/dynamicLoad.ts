import EventEmitter from 'events';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { StyleComponentCreatorRet } from './createStyleComponent';

type IdynamicLoadEventEmitter = {
  events: EventEmitter;
  countMap: { [key: string]: Map<string, number> };
  loadComponentMap: {
    [uidKey: string]: Map<string, Array<() => Promise<StyleComponentCreatorRet>>>;
  };
};

const _global = globalThis;

const initDynamicLoadEventEmitter = (): IdynamicLoadEventEmitter => {
  if ((_global as any).dynamicLoadEventEmitter) {
    return (_global as any).dynamicLoadEventEmitter;
  }
  const res: IdynamicLoadEventEmitter = {
    events: new EventEmitter(),
    countMap: {},
    loadComponentMap: {},
  };
  (_global as any).dynamicLoadEventEmitter = res;
  return res;
};

/**
 * 当某个 ui 组件加载之后，需要按需加载对应组件的样式。
 */
const dynamicLoadEventEmitter: IdynamicLoadEventEmitter = initDynamicLoadEventEmitter();

/**
 * data Structure example:
 * c7nUiComponentId: choerodon-ui::{xx} | hzero-ui::{xx}
 * name: choerodon-ui | hzero-ui
 * countMap: {
 *  choerodon-ui: Map()
    [[Entries]]
      0: {"choerodon-ui::{xx}" => Number}
        key: "choerodon-ui::{xx}"
        value: 1
 * }
 */
export const notifyComponentLoaded = (c7nUiComponentId: string) => {
  if (!c7nUiComponentId) {
    return;
  }
  const name = c7nUiComponentId.split('::')[0];
  let countMap = dynamicLoadEventEmitter.countMap[name];
  if (!countMap) {
    countMap = new Map();
    dynamicLoadEventEmitter.countMap[name] = countMap;
  }
  countMap.set(c7nUiComponentId, (countMap.get(c7nUiComponentId) || 0) + 1);
  dynamicLoadEventEmitter.events.emit('load', c7nUiComponentId);
};

export const notifyComponentUnLoaded = (c7nUiComponentId: string) => {
  if (!c7nUiComponentId) {
    return;
  }
  const name = c7nUiComponentId.split('::')[0];
  const countMap = dynamicLoadEventEmitter.countMap[name];
  if (!countMap) {
    dynamicLoadEventEmitter.countMap[name] = new Map();
  }
  let count = countMap.get(c7nUiComponentId);
  if (count === undefined) {
    return;
  }
  count = count - 1;
  if (count <= 0) {
    countMap.delete(c7nUiComponentId);
    dynamicLoadEventEmitter.events.emit('unLoad', `${c7nUiComponentId}`);
  } else {
    countMap.set(c7nUiComponentId, count);
  }
};

/**
 * @param listenKey: {name::componentName} - eg 'choerodon-ui::alert'
 * @param loadCssData: () => import({StyleComponentCreatorRet})
 * @param uidKey: `${Math.random().toString().slice(2, 10)}${Date.now()}`
 */
export const setLoadEffectCssComponent = (
  listenKey: string,
  loadCssData: () => Promise<StyleComponentCreatorRet>,
  uidKey: string
) => {
  let list = dynamicLoadEventEmitter.loadComponentMap[uidKey]?.get(listenKey);
  if (!Array.isArray(list)) {
    list = [];
    let map = dynamicLoadEventEmitter.loadComponentMap[uidKey];
    if (!map) {
      map = new Map();
      dynamicLoadEventEmitter.loadComponentMap[uidKey] = map;
    }
    map.set(listenKey, list);
  }
  list.push(loadCssData);
};

export const useLoadStyles = (name: string, uidKey: string) => {
  const [loadStyles, setLoadStyles] = useState<StyleComponentCreatorRet[]>([]);
  useEffect(() => {
    const promiseCache = new Map();
    const refreshLoadStyles = debounce(async () => {
      const countMap = dynamicLoadEventEmitter.countMap[name];
      if (!countMap) {
        return;
      }
      const allPromise: Promise<StyleComponentCreatorRet>[] = [];
      let isNeedChange = false;
      [...countMap.keys()].forEach((key) => {
        const list = dynamicLoadEventEmitter.loadComponentMap?.[uidKey]?.get(key);
        if (!list) {
          return;
        }
        list.forEach((item) => {
          const cacheValue = promiseCache.get(item);
          if (cacheValue) {
            isNeedChange = true;
            allPromise.push(Promise.resolve(cacheValue));
          } else {
            isNeedChange = true;
            allPromise.push(
              item().then((_v) => {
                const v: typeof _v = (_v as any).default || _v;
                promiseCache.set(item, v);
                return v;
              })
            );
          }
        });
      });
      if (isNeedChange) {
        const res = await Promise.all(allPromise);
        setLoadStyles(res);
      }
    });

    refreshLoadStyles();

    const lis = (c7nUiComponentId: string) => {
      if (!c7nUiComponentId.startsWith(`${name}::`)) {
        return;
      }
      refreshLoadStyles();
    };

    dynamicLoadEventEmitter.events.on('load', lis);
    // dynamicLoadEventEmitter.events.on('unLoad', lis);

    return () => {
      dynamicLoadEventEmitter.events.off('load', lis);
      // dynamicLoadEventEmitter.events.off('unLoad', lis);
    };
  }, [name, uidKey]);
  return loadStyles;
};
