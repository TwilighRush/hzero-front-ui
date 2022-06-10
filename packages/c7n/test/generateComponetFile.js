const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const outDir = path.join(__dirname, '../src/components');
const {c7nComponents, c7nProComponents} = require('@hzero-front-ui/cfg/src/utils/uedConfig.js');

// console.log({
//     outDir,
//     c7nComponents,
//     c7nProComponents,
// });

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

function handleCreateSrcCompFile(comp, isPro){

    const camelCaseName = _.camelCase(comp);
    const toCamelCaseName = toCamelCase(comp);

    const context = `import { ${toCamelCaseName} } from "choerodon-ui${isPro ? '/pro': ''}";
import { notifyComponentLoaded } from '@hzero-front-ui/core/lib/utils/dynamicLoad';

notifyComponentLoaded('choerodon-ui::${camelCaseName}${isPro ? 'Pro': ''}');

export default ${toCamelCaseName};
`;
    const filePath = path.join(outDir, `${toCamelCaseName}${isPro ? 'Pro': ''}`, 'index.js');

    const dirName = path.dirname(filePath);

    if(!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
        fs.writeFileSync(filePath, context);
    }

    // console.log({
    //     filePath,
    //     context,
    // });
}

// ['attachment'].forEach(c => handleCreateSrcCompFile(c, false));

c7nComponents.forEach(c => handleCreateSrcCompFile(c, false));
c7nProComponents.forEach(c => handleCreateSrcCompFile(c, true));
