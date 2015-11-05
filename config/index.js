import secrets from './secrets';
import env from './env';
import db from './db';
import mocha from './mocha';
import knexfile from './knexfile';

const port = 1337;
const host = 'localhost';
const appKeys = secrets[env].APP_KEYS;

export default {
  env,
  db,
  knexfile,
  mocha,
  port,
  host,
  appKeys
};
