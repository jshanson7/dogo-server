import secrets from './secrets';
import env from './env';

export secrets from './secrets';
export env from './env';
export db from './db';
export knex from './knex';
export const port = process.env.APP_PORT || 1337;
export const host = process.env.APP_HOST || 'localhost';
export const keys = process.env.APP_KEYS ?
  process.env.APP_KEYS.split(' ') :
  secrets[env].APP_KEYS;
