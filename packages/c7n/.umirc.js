import path from "path";

export default {
  dynamicImport: {},
  alias: {
    root: path.resolve(__dirname, '../../src')
  },
  extraBabelPlugins: [
    "babel-plugin-styled-components",
    [
      "import",
      {
        libraryName: "hzero-ui",
        libraryDirectory: "es",
        style: true,
      },
      "ant",
    ],
    [
      "import",
      {
        libraryName: "choerodon-ui",
        style: true,
      },
      "c7n",
    ],
    [
      "import",
      {
        libraryName: "choerodon-ui/pro",
        style: true,
      },
      "c7n-pro",
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
  define: {
    "process.env.REACT_APP_SC_DISABLE_SPEEDY": "false",
  },
  chainWebpack: config => {
    // const includes = ["themes", 'config-center'];
    // includes.forEach(p => {
      config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "../"));
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "../../src"));
    // });
    return config;
  },
};
