module.exports = {
  "presets": [
    ["react-app", { "absoluteRuntime": false }]
    // ["babel-preset-gatsby"]
  ],
  "plugins": [
    "babel-plugin-styled-components",
    [
      "import",
      {
        "libraryName": "hzero-ui",
        "libraryDirectory": "lib",
        "style": process.env.NODE_ENV === 'production' ? false : true
      },
      "ant"
    ],
    [
      "import",
      {
        "libraryName": "choerodon-ui",
        "libraryDirectory": "lib",
        "style": process.env.NODE_ENV === 'production' ? false : true
      },
      "c7n"
    ],
    [
      "import",
      {
        "libraryName": "choerodon-ui/pro",
        "libraryDirectory": "lib",
        "style": process.env.NODE_ENV === 'production' ? false : true
      },
      "c7n-pro"
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "module-resolver",
      {
        "cwd": "./src/components"
      }
    ]
  ]
}
