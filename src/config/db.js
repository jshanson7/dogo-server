import VError from 'verror';
import { prefix, env } from './app';

let secrets;

try {
  secrets = require('./secrets.json');
} catch (e) {
  throw new VError(e, `Can't find src/config/secrets.json.  Make a copy of src/config/secrets.json.example.`);
}

export const name = prefix + env;
export const client = 'postgresql';
export const host = process.env.DB_HOST || 'localhost';
export const port = process.env.DB_PORT || 5432;
export const user = process.env.DB_USER || secrets[env].DB_USER;
export const password = process.env.DB_PASSWORD || secrets[env].DB_PASSWORD;
