# 开发简介

工程使用了styled-components的能力，使用 JS 书写样式，充分利用了 JS 变量加函数的特点，灵活切换主题。

主题开发模式为 **模板 + 变量** 的形式。CSS 模板内嵌入变量就形成了一套主题。

## 关于父工程

父工程不会被发布到 NPM。该工程为测试工程，用于保存测试案例。一旦主题有所更改，使用该工程测试即可。

如需部署，则可按照如下步骤进行：

1. 执行 `yarn transpile` 命令编译子模块
2. 执行 `yarn build` 命令编译静态资源
3. 执行 `docker build -t YOUR_TAG .` 命令打包 Docker 镜像
4. 在服务器上运行该镜像即可。

## 子项目列表及简介

- core 主题切换核心
- c7n C7N-UI CSS 模板和组件
- hzero HZERO-UI CSS 模板和组件
- themes 主题数据及额外模板
- font 主题字体
- config-center 主题配置中心（主题切换管理页面）
- babel-plugin-hzero-ued-import babel插件，用于处理组件导入

其中，c7n 与 hzero 子项目的重点在于 src/components，发布时仅发布该文件夹编译产生的文件。其它文件均为调试使用。

## 关于二次封装组件

在制作主题的过程中，我们发现有些组件的样式涉及到的功能的修改，使用css无法实现。我们将这些组件进行了二次封装。存放于 c7n 子项目和 hzero 子项目的 components 文件夹下。如涉及到这些组件功能或样式的修改，可在此处对二次封装的组件代码进行更改。

目前二次封装的组件主要为：

- Table
- Slider
- Spin
- Progress
- hzero-ui 的输入类组件

## 新增主题

我们需要做的是在 themes 子项目下新增一个主题。如何新建可参考已存在的主题。

一般情况下，我们只需要定义数据就可以产生一套主题。但是有些主题较标准主题差别较大，无法使用标准模板，那么我们可以在主题数据下使用 onlyTemplate 定义一个专有的模板，该模板会替换原有模板作为该组件的唯一CSS模板。

## 发版

依据版本，dist tag 分为 v1.1.x, v2.0.x, v3.0.x, v3.1.x, latest, alpha。

- v为前缀的为特定版本tag。
- latest对应当前最新稳定版，如4.x版本。
- alpha版本为测试版

如需添加tag，则在发版时加上参数 `--dist-tag xxx`，例如：`lerna publish --dist-tag xxx`

### 2.x 发版方式

在根目录下执行： `lerna publish --force-publish`，选择对应版本即可。

## 3.x 发版方式

在根目录下执行：`lerna publish`，选择各个模块版本即可。
