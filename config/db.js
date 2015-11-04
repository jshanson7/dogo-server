import secrets from './secrets';
import env from './env';

export default {
  name: 'dogo_' + env,
  client: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: secrets[env].DB_USER,
  password: secrets[env].DB_PASSWORD,
  seed: env
};
