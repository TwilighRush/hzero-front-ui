var globby = require('globby');

var fs = require('fs');
var path = require('path');

console.log('执行postinstall')

var cwd = path.resolve(process.cwd(), 'node_modules');

var target = process.env.UED_TARGET || process.argv[2] || '@hzero-front-ui'

var files = globby.sync('hzero-front*/**', {
  cwd: cwd,
  ignore: ["**/node_modules/**"]
}).filter(function(v) { return v.endsWith('js')});

console.log('正在执行替换操作...');
files.forEach(function(f) {
  var fullPath = path.resolve(cwd, f)
  var content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace(/@hzero-front-ui/g, target);
  fs.writeFileSync(fullPath, content, 'utf8')
});

console.log('执行完成。');