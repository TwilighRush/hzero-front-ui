module.exports = {
  extends: ['react-app'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/no-redeclare": 0,
    'import/no-anonymous-default-export': 0
  }
};
