# HZERO-FRONT 整合

## 概要

HZERO-FRONT 大于等于 1.7.0 的版本对该 UED 版本做了整合。一般情况下我们不必关心其内部实现。

我们只需关注相应主题包及模板包的版本。

## 如何升级主题版本？

一般情况下只需要升级**@hzero-front-ui/cfg**版本即可！！！

特殊情况下可升级其它子模块的版本。

升级方法如下：
只需修改 package.json 中的 resolutions 字段，添加如下版本的依赖并指定版本：

- @hzero-front-ui/themes    ——主题数据
- @hzero-front-ui/c7n-ui    ——CSS 模板
- @hzero-front-ui/hzero-ui  ——CSS 模板
- @hzero-front-ui/core      ——核心模块
- @hzero-front-ui/cfg       ——配置中心

按照需要升级上面一个或多个版本即可（一般升级前三个包即可，核心模块及配置中心不会经常更新）。

## 如何查看当前依赖的最新版？

在命令行执行如下命令即可：

```shell
npm view xxxxxx versions

# 例如： npm view @hzero-front-ui/themes versions
```
