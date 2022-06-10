# 高级操作

## 创建自己的样式模板

由于组件数量较多，我们将模板拆分成了一个一个的单元，最后再将这些单元合并组成一个样式模板。
下面是详细步骤：

- 第一步：创建样式单元

```ts
import {
  getThemeData, // 用于便捷的从props中获取某个字段的主题数据
  createStyleComponent,
} from "@hzero-front-ui/core";
import { css } from "styled-components";

const styles = props => {
  const { primary, baseHeight } = getThemeData(props, 'common');
  return css`
    .my-class {
      background: ${primary};
      height: ${baseHeight * 2}px;
    }
  `;
}

const myComponentStyle = createStyleComponent("my-component", styles);

export default myComponentStyle;
```

- 第二步：创建主样式模板组件

```ts
import { createMainStyleComponent } from "@hzero-front-ui/core";

const MyTemplate = createMainStyleComponent({
  name: 'my-template',
  styles: [
    myComponentStyle,
    // 其它样式片段
    // ...
  ]
})

export default MyTemplate
```

- 第三步：注册模板

```ts
// ...
import MyTemplate from 'my/template/path';

initTheme({
  templates: [
    // ...
    {
      id: 'my',
      component: MyTemplate
    }
  ]
})
```

## 如何使用主题数据

### 通过内置高阶组件或 API

你可以使用 `addThemeStyle` 和 `withThemeCss` 两种方式应用样式，在 css 片段内部可以非常方便的拿到当前的主题数据。详情可以参考 API。

一般情况下，`addThemeStyle` 方法适合在入口处统一添加样式，`withThemeCss` 适合在当前组件上绑定特有样式。选用哪种方法可依据情况而定。

### 通过 ThemeContext

一般情况下，您可以使用我们提供的初始化方法去添加自己的样式模板与数据，您也可以使用我们提供的特有API去添加自定义样式。

额外的，作为降级方法，有时候为了方便起见，您也可以按照如下方法去进行使用。

主题数据我们存放与 React Context 中，那么如果我们需要使用数据时，只需简单的 `useContext` 即可。
或者更简单的，可以使用我们提供的 useTheme hook 直接拿到主题数据（与useContext(ThemeContext)无本质区别）。

例如：

```tsx
import React from 'react';
import { createGlobalStyle, StyleSheetManager } from 'styled-component';
import { ThemeContext, getStyleSheetTarget, useTheme } from '@hzero-front-ui/core';

const MyGlobalStyle = createGlobalStyle`
  body {
    font-size: ${props => props.data.common.textSizeBase}px;
  }
`;

const MyThemeComponent: React.FC = () => {
  const contextValue = React.useContext(ThemeContext);
  // 从context里拿到解析后的主题数据
  const { resolvedTheme } = contextValue;
  /**
   * 或者也可以直接：const { resolvedTheme } = useTheme();
   */
  return (
    // 出于性能考虑，建议将大段的样式放入一个自定义的style标签内。
    // getStyleSheetTarget(id) 即创建并获取到该style标签。
    <StyleSheetManager target={getStyleSheetTarget('my-global-style-target-id')}>
      <MyGlobalStyle data={resolvedTheme} />
    </StyleSheetManager>
  )
}

```

使用这种方法，我们就可以在项目中随意的使用主题数据了。
为了性能考虑，我们推荐使用 `StyleSheetManager` 对样式组件进行包裹。
