module.exports = {
  "presets": [
    ["react-app", { "absoluteRuntime": false }]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    // "babel-plugin-styled-components",
  ]
};
