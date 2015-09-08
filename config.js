'use strict';

const argv = require('yargs').argv;
const secrets = require('./secrets');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  env: env,
  port: 3000,
  db: {
    name: 'dogo_' + env,
    client: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: secrets[env].DB_USER,
    password: secrets[env].DB_PASSWORD,
    seed: env
  }
};