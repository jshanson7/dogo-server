var resolve = require('path').resolve;
var nodeModules = resolve(__dirname, 'node_modules');
var localModules = resolve(__dirname, 'src');
var localModuleResolver = require('./lib/utils/localModuleResolver')(nodeModules, localModules);

module.exports = {
  stage: 0,
  resolveModuleSource: localModuleResolver
};
