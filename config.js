const secrets = require('./secrets');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  env: env,
  port: 1337,
  host: 'localhost',
  appKeys: secrets[env].APP_KEYS,
  db: {
    name: 'dogo_' + env,
    client: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: secrets[env].DB_USER,
    password: secrets[env].DB_PASSWORD,
    seed: env
  },
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
  }
};
