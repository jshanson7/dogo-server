import secrets from './secrets';
import { prefix, env } from './app';

export const name = prefix + env;
export const client = 'postgresql';
export const host = process.env.DB_HOST || 'localhost';
export const port = process.env.DB_PORT || 5432;
export const user = process.env.DB_USER || secrets[env].DB_USER;
export const password = process.env.DB_PASSWORD || secrets[env].DB_PASSWORD;
