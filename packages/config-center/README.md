This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 可用命令

具体参考package.json

### `yarn transpile` 编译用于发包的文件

### `yarn tsc` 生成声明文件

### 运行开发服务 `yarn start`

开发环境运行<br />
打开 [http://localhost:3000](http://localhost:3000) 查看效果.

### `yarn build`（构建静态网页）

除非需要部署开发测试页面，否则不需要执行此命令进行构建。

## 如何新增主题？

* 在src/theme-data下新增一个js文件，按theme1.js、theme2.js的规律命名，比如theme2.js;
* 如果有与主题相关的静态资源,则在src/theme-assets目录下新增一个对应目录，如theme2,所有该主题对应的静态资源全部放入改文件夹
* 每个组件的配置数据均可接收一个animation选项，其对应为一个styled-components的css工具函数创建的一个css片段，所有文件动画实现的文件均放入src/theme-animation下的对应文件夹
* 在src/components/Container/index.js中加入相关引用。（在themeMap中加入）
* 在src/pages/ConfigIndex内加入该主题的切换选项
* 在src/pages/_assets/下创建对应文件夹，放入需要展示在组件配置页面的静态图片资源

