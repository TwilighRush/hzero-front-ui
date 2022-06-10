const LOCAL_CONFIG_KEY = '__LOCAL_THEME_CONFIG__';

function getLocalOriginConfig() {
  if (typeof localStorage !== 'undefined') {
    const local = localStorage.getItem(LOCAL_CONFIG_KEY);
    return local && local !== 'undefined' ? JSON.parse(local) : {};
  }
  return {};
}

function getLocalConfig() {
  const origin = getLocalOriginConfig();
  const { schema, themeValue } = origin;
  return {
    schema,
    config: origin[schema] || undefined,
    themeValue,
  };
}

function setLocalConfig(schema: string, config: any, themeValue?: string) {
  if (typeof localStorage !== 'undefined') {
    const origin = getLocalOriginConfig();
    const newContent = {
      ...origin,
      schema,
      themeValue: themeValue ? themeValue : undefined,
    };
    if (config) {
      newContent[schema] = config;
    }
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(newContent));
    // console.log(getLocalOriginConfig());
  }
}

export { LOCAL_CONFIG_KEY, getLocalOriginConfig, getLocalConfig, setLocalConfig };
