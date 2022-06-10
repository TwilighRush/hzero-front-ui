/* eslint-disable */

function toCamelCase(name) {
  const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  const MOZ_HACK_REGEXP = /^moz([A-Z])/;
  const ret = name
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1');
  return ret.slice(0, 1).toUpperCase() + ret.slice(1);
}

// 转中划线
function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

const getStyle = (name, lib, targetLib) => {
  const originName = hyphenate(name.replace(`@hzero-front-ui/${lib}/lib/`, ''));
  return process.env.UED_BUILD_TARGET === 'cfg'
    ? false
    : name.startsWith('@')
    ? `${targetLib}/lib/${originName}/style`
    : `${name}/style`;
};

const hzeroComponents = [
  'alert',
  'anchor',
  'auto-complete',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'carousel',
  'cascader',
  'checkbox',
  'collapse',
  'date-picker',
  'drawer',
  'dropdown',
  'form',
  'input',
  'input-number',
  'list',
  'menu',
  'messge',
  'modal',
  'notification',
  'pagination',
  'popconfirm',
  'popover',
  'progress',
  'radio',
  'select',
  'slider',
  'spin',
  'steps',
  'switch',
  'table',
  'tabs',
  'tag',
  'time-picker',
  'timeline',
  'tooltip',
  'transfer',
  'tree',
  'tree-select',
  'upload',
];

const c7nComponents = [
  'alert',
  'anchor',
  'auto-complete',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'carousel',
  'cascader',
  'checkbox',
  'collapse',
  'date-picker',
  'divider',
  'dropdown',
  'form',
  'image-crop',
  'input',
  'input-number',
  'list',
  'menu',
  'message',
  'modal',
  'notification',
  'pagination',
  'popconfirm',
  'popover',
  'progress',
  'radio',
  'rate',
  'result',
  'select',
  'skeleton',
  'slider',
  'spin',
  'statistic',
  'steps',
  'switch',
  'table',
  'tabs',
  'tag',
  'time-picker',
  'timeline',
  'tooltip',
  'transfer',
  'tree',
  'tree-select',
  'upload',
];

const c7nProComponents = [
  'attachment',
  'auto-complete',
  'button',
  'cascader',
  'check-box',
  'code-area',
  'color-picker',
  'currency',
  'date-picker',
  'date-time-picker',
  'dropdown',
  'email-field',
  'form',
  'icon-picker',
  'intl-field',
  'lov',
  'mentions',
  'menu',
  'message',
  'modal',
  'month-picker',
  'notification',
  'number-field',
  'output',
  'pagination',
  'password',
  'performance-table',
  'picture',
  'progress',
  'radio',
  'range',
  'rate',
  'rich-text',
  'screening',
  'secret-field',
  'select',
  'select-box',
  'skeleton',
  'spin',
  'switch',
  'table',
  'tabs',
  'text-area',
  'text-field',
  'time-picker',
  'tooltip',
  'transfer',
  'tree',
  'tree-select',
  'typography',
  'upload',
  'url-field',
  'week-picker',
  'year-picker',
];

module.exports = {
  hzeroComponents,
  c7nProComponents,
  c7nComponents,

  generateHzeroUIConfig(options = {}) {
    const { libraryDirectory = 'lib' } = options;

    return [
      [
        'import',
        {
          libraryName: 'hzero-ui',
          customName: (name) =>
            hzeroComponents.includes(name)
              ? '@hzero-front-ui/hzero-ui/lib/' + toCamelCase(name)
              : `hzero-ui/${libraryDirectory}/${name}`,
          style:
            process.env.UED_BUILD_TARGET === 'cfg'
              ? false
              : (name) => getStyle(name, 'hzero-ui', 'hzero-ui'),
        },
        'ant',
      ],
    ];
  },
  generateC7nUiConfig(options = {}) {
    const { libraryDirectory = 'lib' } = options;
    return [
      [
        'import',
        {
          libraryName: 'choerodon-ui',
          customName: (name) =>
            c7nComponents.includes(name)
              ? '@hzero-front-ui/c7n-ui/lib/' + toCamelCase(name)
              : `choerodon-ui/${libraryDirectory}/${name}`,
          style:
            process.env.UED_BUILD_TARGET === 'cfg'
              ? false
              : (name) => getStyle(name, 'c7n-ui', 'choerodon-ui'),
        },
        'c7n',
      ],
      [
        'import',
        {
          libraryName: 'choerodon-ui/pro',
          customName: (name) =>
            c7nProComponents.includes(name)
              ? '@hzero-front-ui/c7n-ui/lib/' + toCamelCase(name) + 'Pro'
              : `choerodon-ui/pro/${libraryDirectory}/${name}`,
          style:
            process.env.UED_BUILD_TARGET === 'cfg'
              ? false
              : (name) => {
                  const originName = hyphenate(
                    name.replace(`@hzero-front-ui/c7n-ui/lib/`, '')
                  ).replace('-pro', '');
                  return process.env.NODE_ENV === 'production'
                    ? false
                    : name.startsWith('@')
                    ? `choerodon-ui/pro/${libraryDirectory}/${originName}/style`
                    : `${name}/style`;
                },
        },
        'c7n-pro',
      ],
    ];
  },
};
