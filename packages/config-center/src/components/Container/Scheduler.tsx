import { FC, useContext, useEffect } from 'react';
import { ThemeContext, getLocalConfig } from '@hzero-front-ui/core';

const Scheduler: FC = () => {
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    const { schema, config } = getLocalConfig();
    if (schema) {
      setTheme(schema, config);
      // 存在这个修改
      // setTheme(
      //   schema,
      //   config && { ...getDefaultConfig(dataMap.get(schema)?.data || {}), ...config }
      // );
    }
    // eslint-disable-next-line
  }, []);
  return null;
};

export default Scheduler;
