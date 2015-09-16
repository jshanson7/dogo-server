'use strict';

const path = require('path');

module.exports = relativePath =>
  path.join(__dirname, '../..', relativePath);