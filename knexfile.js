'use strict';

const db = require('./config').db;

module.exports = {
  client: db.client,
  debug: false,
  connection: {
    database: db.name,
    user: db.user,
    password: db.password
  },
  pool: {
    min: 1,
    max: 1
  },
  migrations: {
    directory: './bin/db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './bin/db/seeds/' + db.seed
  }
};
