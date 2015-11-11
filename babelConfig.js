var resolve = require('path').resolve;
var nodeModules = resolve(__dirname, 'node_modules');
var localModules = resolve(__dirname, 'src');
var moduleResolver = require('./lib/utils/moduleResolver')(nodeModules, localModules);

module.exports = {
  stage: 0,
  resolveModuleSource: moduleResolver
};
