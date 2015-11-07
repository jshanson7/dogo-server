import secrets from './secrets';
import env from './env';
import db from './db';
import knex from './knex';

const port = process.env.APP_PORT || 1337;
const host = process.env.APP_HOST || 'localhost';
const keys = process.env.APP_KEYS ?
  process.env.APP_KEYS.split(' ') :
  secrets[env].APP_KEYS;

export default { env, db, knex, port, host, keys };
