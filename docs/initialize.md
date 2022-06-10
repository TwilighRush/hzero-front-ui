# 主题初始化

如[快速开始](./quick-start.md)中所示，主题的初始化依赖于`@hzero-front-ui/core`中导出的工具函数`initTheme`。下面是详细的使用说明。

## 初始化示例

```ts
import { initTheme } from '@hzero-front-ui/core';
import { theme1, theme2, theme3 } from '@hzero-front-ui/themes';
import HzeroTemplate from '@hzero-front-ui/hzero-ui';
import C7nTemplate from '@hzero-front-ui/c7n-ui';

initTheme({
  defaultTheme: 'theme3',
  /**
   * 可选，指定样式生效的作用域，其值为css选择器列表
   */
  scope: [
    '.page-content',
    '#some-page'
  ],
  // 注册主题
  themes: [
    {
      name: 'theme1',
      data: theme1,
    },
    {
      name: 'theme2',
      data: theme2,
    },
  ],
  /*
   * 根据需要注册所需的css模板
   * 例如需要使用hzero-ui和c7n-ui的css模板，则按如下方式使用即可
   */
  templates: [
    {
      id: 'hzero',
      component: HzeroTemplate,
    },
    {
      id: 'c7n',
      component: C7nTemplate,
    },
  ],
});

```

## 配置详解

- themes 主题列表，可根据需要注册对应的主题。
- templates 主题模板，我们预先提供了`hzero-ui`和`c7n-ui`的`css`模板。可支持两种组件库的主题切换。模板的创建方式请参考代码实现。也可查看【样式模板创建文档】进行查看。
- scope 主题生效作用域。其值为一个`css`选择器列表。主题只会在这些选择器下生效。置为空数组即可在全局生效。
- defaultTheme 默认主题。优先级低于`Container`组件传入的`defaultTheme`属性，两者都没有配置的情况下，默认使用所注册的主题的第一个。

## 如何在初始化时拓展主题数据？

如上所示，我们初始化时传入的主题数据就是个普通的`JavaScript`对象。该对象需要符合一定的形式。
我们提供了创建用于便捷的创建数据对象。

例如我们需要创建两个组件的数据对象。我们可以这么做：

```ts
import { ComponentData, createThemeData } from '@hzero-front-ui/core';

// myComponentOne
const myComponentOneData: ComponentData = {
  name: 'my-component',
  data: [
    {
      color: 'red',
      height: 36,
    }
  ],
};

const myComponentTwoData: ComponentData = {
  name: 'my-component',
  data: [
    {
      color: 'yellow',
      height: 46,
    }
  ],
};


const myThemeData = createThemeData([myComponentOneData, myComponentTwoData]);
```

有了以上数据，那么我们就可以在初始化时进行合并：

```ts
import { initTheme } from '@hzero-front-ui/core';
import { theme1, theme2, theme3 } from '@hzero-front-ui/themes';
import HzeroTemplate from '@hzero-front-ui/hzero-ui';
import C7nTemplate from '@hzero-front-ui/c7n-ui';

initTheme({
  /*
    ...
  */
  // 注册主题
  themes: [
    {
      name: 'theme1',
      // 在这里进行数据的合并，也就是简单的对象合并。
      data: {...theme1, ...myThemeData},
    },
    {
      name: 'theme2',
      data: theme2, // 如果有额外的主题2的数据，也可在此合并。
    },
  ],
  templates: [
    // ...
  ],
});

```