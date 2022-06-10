---
title: hzero-front-ui
date: 2019-10-21
tag: HZERO Front UI
version: 0.1.0
---

## CHANGE_LOG

- 1.1.x c7n组件pro/Pagination移除itemRender
- 1.0.x cfg导出方式更改

## 运行方法

- 安装依赖：在根目录下执行`yarn init:project`，该命令会安装项目下所有子模块的依赖
- 编译子项目：在根目录下执行`yarn transpile`，或在每个子项目下执行`yarn transpile`
- 运行：
  - 1. 在项目根目录运行`yarn start:hzero`或`yarn start:c7n`或`yarn start:cfg`分别运行三个子项目。
  - 2. 在子项目根目录下执行：`yarn start`

## 开发规范

### 命名规范

1. 组件文件夹命名使用大驼峰形式，如果组件没有另建文件夹也使用大驼峰形式命名。
2. `themes`文件夹内样式文件的命名： 一律使用 `组件名.style.js` 形式命名；如果某个样式文件内包含几个组件的样式，则取一能概括内容的语义化名字，以大写字母开头。

## 子项目列表及简介

- core 主题切换核心
- c7n C7N-UI CSS 模板和组件
- hzero HZERO-UI CSS 模板和组件
- themes 主题数据及额外模板
- font 主题字体
- config-center 主题配置中心（主题切换管理页面）
- babel-plugin-hzero-ued-import babel插件，用于处理组件导入

## ui子项目目录结构(对应hzero子项目和c7n子项目)

```bash
.
├── lib                                                   // 编译后的文件，用于npm发布
├── public                                                // 打包后的静态文件
├── README.md                                             // 项目说明
├── package.json                                          // 本项目配置node.js 配置文件
├── src                                                   // 工作目录
│   ├── assets                                            // 静态小资源目录
│   ├── components                                        // 主要开发目录，需要发布到npm
│          ├── Page                                       // 页面布局组件，Header、Content
│          ├── themes                                     // 主题文件夹，每个组件对应一个样式文件，index.js导出一个汇总后的样式组件
│          ├── Input                                      // 重新封装过的组件(其它以大写字母开头的组件也是一样)
│   ├── config                                            // 项目展示页面相关配置
│          ├── menu-config.js                             // 展示页面菜单配置
│   ├── layouts                                           // 布局相关组件
│   ├── pages                                             // 展示页面
│   ├── .umirc.js                                         // UMI 配置
|   └── app.js                                            // 应用配置（umi 入口，会在应用挂在前执行）
└── yarn.lock                                             // 项目yarn node.js模块配置文件
```

## 配置中心子项目目录结构(对应config-center子项目)

```bash
.
├── README.md
├── config
├── index.js                                                        // npm包入口文件
├── lib                                                             // 编译产出文件，将会被发布到npm
├── package.json
├── public
├── scripts
├── src
│   ├── App.tsx                                                     // 测试使用App组件
│   ├── assets                                                      // 静态资源
│   ├── components
│   │   ├── Container                                               // 顶层容器，主题切换逻辑在此实现
│   │   └── Page                                                    // 额外提供两个可选的布局组件
│   ├── index.app.tsx                                               // 项目内也面的入口文件
│   ├── index.js                                                    // 对外导出组件和工具函数
│   ├── layouts                                                     // 项目内页面的布局文件
│   ├── pages                                                       // 配置中心页面再此实现，最终导出index.js
│   │   ├── ComponentsConfig                                        // 组件配置组件
│   │   |        ├── ...                                            // 每个或每类组件对应的表单配置控件
│   │   |        ├── util.js                                        // 表单项所用到的工具函数（memoized工具函数及辅助组件）
│   │   ├── ConfigByStep                                            // 分步骤配置
│   │   ├── ConfigIndex                                             // 配置中心首页
│   │   ├── Preview                                                 // 预览页面
│   │   ├── _assets                                                 // 配置中心静态资源（多套主题对应的中英文静态资源）
│   │   ├── _components                                             // 页面内使用的components
│   │   ├── index.js                                                // 所有页面的组织页面，里面使用event bus实现了一个假路由
│   │   └── index.style.js
│   └── utils                                                       // 工具函数
│       ├── config.js                                               // 默认主题配置
│       ├── constants.js                                            // 常量
│       ├── event.js                                                // event bus
│       └── utils.js                                                // 通用工具函数
├── tsconfig.json                                                   // ts配置文件
└── yarn.lock
```

## CORE 模块目录简介

```bash
.      
├── lib                                         # 编译产出，用于npm发包
├── package.json
├── src
│   ├── BuildinStyle                            # 内置样式组件
│   │   ├── CommonStyleComponent.ts
│   │   └── index.ts
│   ├── Container                               # 应用顶级容器
│   │   └── index.tsx
│   ├── components                              # 通用组件
│   │   ├── BaseGlobalStyle.tsx
│   │   └── GlobalStyle.tsx
│   ├── index.ts
│   └── utils                                   # 工具函数
│       ├── Heart.ts
│       ├── ThemeContext.ts
│       ├── color.ts
│       ├── common.ts
│       ├── constants.ts
│       ├── createStyleComponent.tsx
│       ├── index.ts
│       ├── storageHelper.ts
│       ├── store
│       ├── styles
│       ├── types.ts
│       └── utils.ts
└── tsconfig.json
```

## 版本管理

本项目采用`conventional-changelog`和`standard-version`管理`CHANGELOG`和版本管理,包括`git tags`的管理

### 发布

将本项目发布到`nexus npm`私有源仓库

### 编译用于发布的版本

执行如下命令

```bash
cd packages/<hzero front module>
yarn transpile
```

#### 生成 `auth hash`

执行如下命令

```bash
echo -n 'username:password' | openssl base64
```

将生成的`auth hash`按照如下方式配置

```conf
email=yourname@hand-china.com
always-auth=true
_auth=yourbase64hashcode
```

执行如下命令将上面的配置加入到`node.js`全局环境变量配置文件`.npmrc`中

```bash
npm config edit 
```

再执行如下命令发布即可

```bash
npm publish --registry http://nexus.saas.hand-china.com/content/repositories/hzero-ui/
```

### 版本号发布规则

版本格式：主版本号.次版本号.修订号，版本号递增规则如下：

主版本号：全盘重构时增加；重大功能或方向改变时增加；大范围不兼容之前的接口时增加；
次版本号：增加新的业务功能时增加；
修订号：增加新的接口时增加；在接口不变的情况下，增加接口的非必填属性时增加；增强和扩展接口功能时增加。

行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

先行版本号：意味该版本不稳定，可能存在兼容性问题。
其格式为：X.Y.Z-alpha.[正整数]，如 1.0.0-alpha.1。

测试版本号: 用于发布比较稳定，已经可以使用的版本。
格式为 X.Y.Z-beta.[正整数]，如 1.0.1-beta.4。

正式版：用于发布稳定版本
格式为：X.Y.Z,如1.0.0。

每次发布正式版需创建一个该版本对应的分支；同时在develop打上与该版本版本对应的tag，最后将develop分支合并到master分支。

## Git使用规范

### Git 配置

git配置中，用户名需使用本人姓名，邮箱使用公司邮箱。

```shell
git config --global user.name "yourname"
git config --global user.email "youremail@hand-china.com"
```

### Git Commit guide

* 分支使用

1. 分支标识符

feature: 新功能开发/新服务开发
hotfix/bugfix: bug 修复

2. 开发使用

新功能/新服务开发，需要创建 `feature` 分支。

规范：

***feature-工号-服务***

例如：

***feature-13492-hiam***

3. 版本 bug 修复

对于已经发版的功能，bug 修复时，需要创建对应版本的分支。

规范：

***hotfix-vxxx-工号***

例如：

***hotfix-v1.0.x-15664***

* commit 操作标识符

```shell
fix：修复bug
feat：更新/新增文件/新特性
delete：删除文件
```

* commit 规范

```shell
[操作标识符][:][commit 内容]
```

例如：

```shell
fix: 修改测试映射类字段

feat: 添加服务计费功能

feat: 开发临时会话功能,优化消息类别处理
```

## Author

@中台技术中心·前端基础团队
