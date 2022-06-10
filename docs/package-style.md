# 模块级作用域配置

## 摘要

UED 3.0 实现了主题作用域的配置。同时为了支持模块级别的主题配置，也提供了对应的 API，只需要在应用入口进行配置即可。
模块级别的作用域配置实际上是作用域配置的一个变种，不过该配置是独立于主工程的主题配置。

## 使用方法

1. 创建 CSS 模板或使用现有 CSS 模板，创建方法请参考：[https://code.choerodon.com.cn/hzero-hzero/hzero-front-ui/tree/develop/packages/c7n/src/components/themes](https://code.choerodon.com.cn/hzero-hzero/hzero-front-ui/tree/develop/packages/c7n/src/components/themes)
1. 创建主题数据

请使用 createPartialData 方法创建
例如：

```typescript
import { createPartialData, ComponentData } from '@hzero-front-ui/core'

export default createPartialData([
  inputData,
  buttonData,
  ComponentData
  // ...
]);

// 其中inputData或buttonData创建方法如下：
// 详细的数据项可以参考：https://code.choerodon.com.cn/hzero-hzero/hzero-front-ui/tree/develop/packages/themes/src/theme1/data

const inputData: ComponentData = {
  name: "input",
  data: [
    {
      border: '1px solid #abc',
      //...
    }
  ]
}
```

3. 使用 configPartialTheme 方法配置模块主题

```typescript
import {
  configPartialTheme,
} from '@hzero-front-ui/core';

import C7nTmp from '@hzero-front-ui/c7n-ui';
import themeData from 'path/to/my/theme/data'

configPartialTheme((oldConfig) => [
  ...oldConfig,
  {
    selector: '.lcd-page', // css选择器，只在该选择器下生效
    targetPrefix: 'lcd-', // 插入样式的标签的id前缀
    templates: [ C7nTmp ], // CSS 模板
    data: themeData, // 主题数据
  },
]);
```