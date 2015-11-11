var fs = require('fs');
var path = require('path');
var resolve = path.resolve;
var extname = path.extname;

module.exports = createLocalModuleResolver;

function createLocalModuleResolver(nodeModulesRoot, localRoot) {
  return function (source) {
    if (pathIsRelative(source)) { return source; }

    var nodeModulesPath = resolve(nodeModulesRoot, source);
    if (pathExists(nodeModulesPath)) { return nodeModulesPath; }

    var localPath = resolve(localRoot, source);
    if (pathExists(localPath)) { return localPath; }

    return source;
  };
}

function pathIsRelative(pathOrFile) {
  return /^\./.test(pathOrFile);
}

function pathExists(pathOrFile) {
  try {
    var stats = fs.statSync(pathOrFile);
    return stats.isFile() || stats.isDirectory();
  } catch (err) {
    if (!extname(pathOrFile).length) {
      return pathExists(pathOrFile + '.js');
    }
    return false;
  }
}

