function getWebpackRules() {
  return [
    {
      test: /choerodon-ui[/\\]pro[/\\].*\.js/,
      loader: 'babel-loader',
      options: {
        babelrc: true,
        plugins: [
          [
            'babel-plugin-hzero-ued-import',
            {
              type: 'pro',
              name: 'c7n-pro',
              lib: '@hzero-front-ui/c7n-ui',
              imports: ['Table', 'Form', 'Spin'],
            },
          ],
        ],
      },
    },
  ];
}

module.exports = getWebpackRules;

export default getWebpackRules;
