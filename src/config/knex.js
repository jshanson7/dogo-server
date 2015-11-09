import { resolve } from 'path';
import { name as database, client, user, password } from './db';
import { env } from './app';

export default {
  client,
  debug: false,
  connection: { database, user, password },
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
