# 切换主题

## 概要

在快速开始中，我们已经看到了如何使用及初始化主题，这一节，我们回去详细说明如何切换主题。

主题的切换依赖于我们在顶级容器中向下注入的Context。

假设，我们有一个主题配置按钮或页面，那么我们如何切换主题呢？下面是详细步骤。

## 主题切换方法

假设我们在某个页面内进行主题的配置。我们需要使用ThemeContext内的setTheme函数。例如：

```tsx
import React, { FC, useContext } from 'react';
import { ThemeContext } from '@hzero-front-ui/core';

const ThemeTrigger: FC = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleChange = (theme) => {
    setTheme(theme);
  }
  return (
    <div>
      <button onClick={() => handleChange('theme1')}>切换到theme1</button>
      <button onClick={() => handleChange('theme3')}>切换到theme3</button>
    </div>
  );
}
```

## 数据保存

我们可能希望将设置过的主题保存到服务器或localStorage，以方便我们每次打开页面的时候都是我们使用的主题。。

举个例子，如果需要保存到localStorage里，那么可以使用我们写好的辅助函数来进行。

我们改造一下上面的组件：

```tsx
import { getLocalConfig, setLocalConfig } from '@hzero-front-ui/core';
import React, { FC, useContext, useEffect } from 'react';
import { ThemeContext } from '@hzero-front-ui/core';

const ThemeTrigger: FC = () => {
  const { setTheme, config } = useContext(ThemeContext);
  // 组件挂载时从本地读取数据，并进行切换
  useEffect(() => {
    const { schema, config } = getLocalConfig();
    if (schema) {
      setTheme(schema, config);
    }
  }, [])

  const handleChange = (theme) => {
    setTheme(theme, config);
    setLocalConfig(theme, config); // 保存到本地
  }
  return (
    <div>
      <button onClick={() => handleChange('theme1')}>切换到theme1</button>
      <button onClick={() => handleChange('theme3')}>切换到theme3</button>
    </div>
  );
}

```

至此，我们关于如何切换主题就已经实现。

## 颜色切换

如需单独切换颜色，则可按照如下形式设置主题：

```ts
const {setTheme} = useContext(ThemeContext);

setTheme('xxx', config, {colors:{primary: "#xxxxx"}});

```


## [下一节：HZERO 整合](./hzero.md)
