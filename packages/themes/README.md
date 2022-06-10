# 主题

## 关于色阶计算

如果你看过 theme5 和 theme6，你会发现在 index.ts 的 createThemeData 传入了第二个参数。

```ts
const themeData = createThemeData(
  [
    // ...
  ],
  {
    resolveModifyVars({ colors: { primary = '' } = {} }) {
      if (primary) {
        const gradation = getTheme5ColorGradation(primary);
        return {
          common: {
            primary,
            primary1: gradation.step1,
            primary2: gradation.step2,
            primary3: gradation.step3,
            primary4: gradation.step4,
            primary5: gradation.step5,
            primary6: gradation.step6,
            primary7: gradation.step7,
            primary8: gradation.step8,
            primary9: gradation.step9,
          },
        };
      }
      return {};
    },
  }
);
```

其中 resolveModifyVars 函数用于在主题切换是解析变量，覆盖由 data 解析得到的数据。
在这里就可以重新生成色阶，然后覆盖原有色阶。
