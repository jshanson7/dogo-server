var babelConfig = require('../babelConfig');
require('babel/register')(babelConfig);
module.exports = require('./app').start();
