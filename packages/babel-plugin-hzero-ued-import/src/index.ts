import { PluginObj, NodePath } from '@babel/core';
// import { resolve } from 'path';
// import fs from 'fs';
import template from '@babel/template';
import generator from '@babel/generator';
import * as babel from '@babel/core';
import { ImportDeclaration, VariableDeclaration } from '@babel/types';

export interface PluginOpts {
  type: 'pro' | 'components';
  name: string;
  lib: string;
  imports: string[];
  transformPathName: (name: string) => string;
}

function isC7nFile(file: string) {
  return file.indexOf('choerodon-ui\\') > -1 || file.indexOf('choerodon-ui/') > -1;
}

const buildRequire = (node: any) => {
  let code = generator(node).code;
  code = code.replace(/require\(('|")[@#._/\\a-zA-Z]+('|")\)?/, 'require(SOURCE)');
  return template(code);
};

function hzeroUedImport({ types: t }: typeof babel, opts: PluginOpts): PluginObj {
  const { type, name, lib, imports = [], transformPathName = (s: string) => s } = opts;
  function findUpperName(localName: string = '') {
    const name =
      imports.find(
        (n) =>
          '_' + n.toLocaleLowerCase() === localName.toLocaleLowerCase() ||
          n.toLocaleLowerCase() === localName.toLocaleLowerCase()
      ) || '';
    if (name) {
      return `${name}${type === 'pro' ? 'Pro' : ''}`;
    }
    return name;
  }
  function localeExists(locale: string) {
    if (!locale) return false;
    return findUpperName(locale) !== '';
  }

  return {
    name: `hzero-ued-import-${name}`,
    visitor: {
      ImportDeclaration(path: NodePath<ImportDeclaration>, state: any) {
        if (isC7nFile(state.filename)) {
          const localName = path.node.specifiers[0]?.local.name;
          const importUpName = findUpperName(localName);
          if (localeExists(localName)) {
            path.node.source.value = `${lib}/lib/${transformPathName(importUpName)}`;
          }
        }
      },
      VariableDeclaration(path: NodePath<VariableDeclaration>, state: any) {
        if (isC7nFile(state.filename)) {
          const id = (path.node.declarations[0]?.id as any).name;
          if (localeExists(id)) {
            // @ts-ignore
            path.node.declarations[0].init = buildRequire(path.node.declarations[0].init)({
              SOURCE: t.stringLiteral(`${lib}/lib/${transformPathName(findUpperName(id))}`),
            });
          }
        }
      },
    },
  };
}

module.exports = hzeroUedImport;

// const demo = fs
//   .readFileSync(
//     resolve(
//       process.cwd(),
//       '../../node_modules/choerodon-ui/pro/lib/table/query-bar/TableAdvancedQueryBar.js'
//     )
//   )
//   .toString('utf8');

// console.log(
//   babel.transform(demo, {
//     plugins: [
//       [
//         hzeroUedImport,
//         {
//           name: 'test',
//           lib: '@hzero-front-ui/c7n-ui',
//           imports: ['Form', 'Table', 'Slider'],
//           transformPathName(name: string) {
//             return `${name}Pro`;
//           },
//         },
//       ],
//     ],
//   })?.code
// );
