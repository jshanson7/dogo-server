import secrets from './secrets';
import env from './env';

export default {
  name: 'dogo_' + env,
  client: 'postgresql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || secrets[env].DB_USER,
  password: process.env.DB_PASSWORD || secrets[env].DB_PASSWORD
};
