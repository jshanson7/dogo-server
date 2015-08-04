'use strict';

const argv = require('yargs').argv;
const secrets = require('./secrets');
const env = argv.production ? 'production' :
  argv.staging ? 'staging' :
  argv.test ? 'test' :
  'development';

module.exports = {
  env: env,
  port: 3000,
  db: {
    name: 'dogo',
    client: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: secrets[env].DB_USER,
    password: secrets[env].DB_PASSWORD
  }
};