# API 参考

## @hzero-front-ui/core

> 导入方式均可写作 import {xxx} from '@hzero-front-ui/core';

### ThemeContext 主题 Context

用于保存主题数据，如需获取主题相关数据，则可使用如下形式获取：

```tsx
import { ThemeContext } from '@hzero-front-ui/core';

const contextValue = useContext(ThemeContext);
```

### getThemeData 获取某个字段的主题数据（一般用在 CSS 模板中）

使用方法如下：

- 在组件中使用

```tsx
import { ThemeContext, getThemeData } from '@hzero-front-ui/core';

// 在组件中使用
const {resolvedTheme} = useContext(ThemeContext);
const common = getThemeData({data: resolvedTheme}, 'common');
```

- 在 CSS 片段中使用

```tsx
import { css } from 'styled-components';
import { GlobalStyle } from '@hzero-front-ui/core/lib/components';

const getXXXCss = (props) => {
  const common = getThemeData(props, 'common');
  return css`
    button {
      color: ${common.primary};
    }
  `;
}
// 渲染样式组件
<GlobalStyle css={getXXXCss} />
```

### getColorGradation 根据一个颜色获取一个色阶

使用方法如下：

```ts
import { getColorGradation } from '@hzero-front-ui/core';
const colors = getColorGradation('#defe3d');
```

### getPrimaryColor 直接获取主色（不建议使用）

直接获取当前主色。但不建议使用。建议使用 GlobalStyle + css 片段的形式进行样式的实现。

### GlobalStyle 全局样式组件，用于样式的渲染

该组件为功能组件，只用于样式渲染，不会生成实际的元素，可放在组件的任意位置渲染。

使用方法举例如下：

```tsx
import { css } from 'styled-components';
import { GlobalStyle } from '@hzero-front-ui/core';

const getButtonCss = (props) => {
  const { primary, primary4 } = getThemeData(props, 'common');
  return css`
    .my-button {
      background: ${primary};
      &:hover {
        background: ${primary4};
      }
    }
  `;
}

const XXXComponent = () => {
  return (
    <div>
      <GlobalStyle css={getButtonCss} />
      <button className="my-button">my button</button>
    </div>
  )
}
```

### addThemeStyle(...styles: any[]): void 添加一个受主题控制的自定义样式

该方法接受一个css片段列表，适用于样式统一管理。
css片段或函数可统一抽离出来，使用该方法在应用入口处添加所有自定义样式。

如果喜欢，你也可以在组件文件里使用该方法添加样式。该方法内部有重复检测，即使你多次调用添加相同的css片段，最终生效的也只有一个。

单组件内的样式可使用高阶组件(withThemeCss)。

使用方法如下：

```ts
import { addThemeStyle, getThemeData } from '@hzero-front-ui/core';

addThemeStyle(props => {
  const { primary } = getThemeData(props, 'common');
  return css`
    // ...
  `;
}, css`
  .test {
    color: red;
  }
`, /* 其它样式片段（函数）... */);
```

### withThemeCss 高阶组件，应用受主题控制的自定义样式

作用同 addThemeStyle。但该方法可以高阶组件的形式应用到当前组件上。
(内部实际上也是调用了 addThemeStyle 方法)

使用方法：

```tsx
import { withThemeCss } from '@hzero-front-ui/core';

const myCss1 = props => {
  const { primary } = getThemeData(props, 'common');
  return css`
    // ...
  `;
}

const myCss2 = css`
  // ...
`;

@withThemeCss(myCss1, myCss2)
class MyComponent extends React.Component {
  render() {
    // ...
  }
}
```


## 开发技巧

### CSS 片段

一个小小的开发技巧：
styled-components 的 css 片段可以任意组装。举个例子：

```ts
const css1 = css`
  .xxx {
    color: red;
  }
`;

// 内部可使用函数，该函数的参数是其所归属的样式组件的props
const css2 = css`
  .zzz {
    color: blue;
    background: ${props => props.data.common.primary};
  }
`;

const allCss = css`
  ${css1}
  ${css2}
`;
```

使用这种方式就可以把很多的 css 片段整合到一起后，一块渲染。

那么，利用styled-components的这个特性，我们可以对 css 片段进行非常灵活的组装，我们甚至可以把 css 片段内部的函数直接提出来：

```ts
const getOneCss = (props) => {
  return css`
    background: ${props.common.primary};
  `;
}
const getTwoCss = (props) => {
  return css`
    span {
      color: ${props.common.primary};
    }
  `;
}

const allCss = css`
  button {
    ${getOneCss}
  }
  ${getTwoCss}
`;
```
