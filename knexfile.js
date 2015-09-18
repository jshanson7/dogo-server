const db = require('./config').db;

module.exports = {
  client: db.client,
  debug: false,
  connection: {
    database: db.name,
    user: db.user,
    password: db.password
  },
  pool: {
    min: 1,
    max: 1
  },
  migrations: {
    directory: './src/db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './src/db/seeds/' + db.seed
  }
};
