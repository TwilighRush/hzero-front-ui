const uedConfig = require('./src/utils/uedConfig');

module.exports = {
  "presets": [
    ["react-app", { "absoluteRuntime": false }]
  ],
  "plugins": [
    ...([...uedConfig.generateHzeroUIConfig(), ...uedConfig.generateC7nUiConfig()]),
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    // "babel-plugin-styled-components",
  ]
};
