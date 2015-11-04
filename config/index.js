import secrets from './secrets';
import env from './env';
import db from './db';
import knexfile from './knexfile';

export default {
  env: env,
  port: 1337,
  host: 'localhost',
  appKeys: secrets[env].APP_KEYS,
  db: db,
  graphql: {
    schema: 'src/db/graphql/schema.js',
    updateSchema: 'src/db/graphql/updateSchema.js',
    schemaJSON: 'src/db/graphql/schema.json'
  },
  mocha: {
    reporter: 'dot',
    harmony: true,
    env: { NODE_ENV: env === 'staging' ? 'staging' : 'test' },
    compilers: 'js:babel/register',
    timeout: 10000
  },
  knexfile: knexfile
};
