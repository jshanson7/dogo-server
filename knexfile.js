'use strict';

var db = require('./secrets').db;

module.exports = {
  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      database: db.name,
      // user: db.user,
      // password: db.password
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      directory: './src/db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: db.name,
      user: db.user,
      password: db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: db.name,
      user: db.user,
      password: db.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
