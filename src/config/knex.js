import { resolve } from 'path';
import db from './db';
import env from './env';

export default {
  client: db.client,
  debug: false,
  connection: {
    database: db.name,
    user: db.user,
    password: db.password
  },
  pool: {
    min: 0,
    max: 1
  },
  migrations: {
    directory: resolve(__dirname, '../db/migrations'),
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: resolve(__dirname, '../db/seeds/' + env)
  }
};
