var fs = require('fs');
var path = require('path');
var resolve = path.resolve;
var extname = path.extname;

module.exports = createModuleResolver;

function createModuleResolver() {
  var moduleDirsToCheck = Array.prototype.slice.call(arguments);

  return function moduleResolver(source) {
    if (pathIsRelative(source)) { return source; }

    var currentPath;
    var foundModuleDir = moduleDirsToCheck.find(function (dir) {
      currentPath = resolve(dir, source);
      return pathExists(currentPath);
    });

    return foundModuleDir !== undefined ? currentPath : source;
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

