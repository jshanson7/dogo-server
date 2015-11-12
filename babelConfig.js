var resolve = require('path').resolve;
var localModules = resolve(__dirname, 'src');

module.exports = {
  stage: 0,
  resolveModuleSource: require('babel-resolver')(localModules)
};
