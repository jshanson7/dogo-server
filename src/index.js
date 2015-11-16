require('babel/register')(require('../babelConfig'));
module.exports = require('./app').start();
