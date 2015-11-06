import secrets from './secrets';
import env from './env';
import db from './db';
import knex from './knex';

const port = process.env.PORT || 1337;
const host = process.env.HOST || 'localhost';
const keys = secrets[env].APP_KEYS;

export default { env, db, knex, port, host, keys };
