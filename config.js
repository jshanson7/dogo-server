'use strict';

var argv = require('yargs').argv;
var secrets = require('./secrets');
var env = argv.production ? 'production' :
  argv.staging ? 'staging' :
  argv.test ? 'test' :
  'development';

module.exports = {
  development: {
    env: 'development',
    port: 3000,
    db: {
      name: 'dogo',
      client: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: secrets.development.DB_USER,
      password: secrets.development.DB_PASSWORD
    }
  },
  test: {
    env: 'test',
    port: 3000,
    db: {
      name: 'dogo',
      client: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: secrets.test.DB_USER,
      password: secrets.test.DB_PASSWORD
    }
  },
  staging: {
    env: 'staging',
    port: 3000,
    db: {
      name: 'dogo',
      client: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: secrets.staging.DB_USER,
      password: secrets.staging.DB_PASSWORD
    }
  },
  production: {
    env: 'production',
    port: 3000,
    db: {
      name: 'dogo',
      client: 'postgresql',
      host: 'localhost',
      port: 5432,
      user: secrets.production.DB_USER,
      password: secrets.production.DB_PASSWORD
    }
  }
}[env];