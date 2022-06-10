module.exports = {

  "presets": [
    ["react-app", { "absoluteRuntime": false }],
    '@babel/preset-typescript'
    // ["babel-preset-gatsby"]
  ],
  "plugins": [
    "babel-plugin-styled-components",
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
