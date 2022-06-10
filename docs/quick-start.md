# 快速开始

> 注意：以下教程为在空白项目中的使用方式。HZERO-FRONT 1.7 版本已经内置，无需配置。

## 安装

安装以下依赖：`@hzero-front-ui/core`, `@hzero-front-ui/themes`, `@hzero-front-ui/core`, `@hzero-front-ui/c7n-ui`, `@hzero-front-ui/hzero-ui`, 

即执行以下命令：

```bash
yarn add @hzero-front-ui/core @hzero-front-ui/themes @hzero-front-ui/core @hzero-front-ui/c7n-ui @hzero-front-ui/hzero-ui 
```

## 使用

### 1. 添加容器

在应用组件树根节点添加容器(Container)，如下所示：

```tsx
import { Container } from '@hzero-front-ui/core';

ReactDOM.render(
  <Container>
    <App />
  </Container>, 
  document.getElementById('root'),
)
```

### 2. 初始化主题

> 注意：需在应用入口处执行。例如：

```tsx
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
    {
      name: 'theme3',
      data: theme3,
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
      component: C7nTemplate
    },
  ],
});

```

[详情请看：主题初始化](./initialize.md)

## 总结

按照以上流程，我们的主题已经生效。
但此时，我们的主题没有得到控制，我们看到的只是defaultTheme指定的主题。
后续我们会讲如何切换主题。

## [下一节：切换主题](./change-theme.md)