var resolve = require('path').resolve;
var localModules = resolve(__dirname, 'src');
var moduleResolver = require('./lib/utils/moduleResolver')(localModules);

module.exports = {
  stage: 0,
  resolveModuleSource: moduleResolver
};
