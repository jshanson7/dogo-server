import knex from 'knex';
import knexConf from '../../config/knexfile';
import config from '../../config';

const appDB = () => knex(knexConf);
const pg = () => knex({
  client: config.db.client,
  connection: {
    database: null,
    host: config.db.host
  }
});
const wrapConn = (conn, cb) => cb(conn)
  .catch(err => conn.destroy().then(() => Promise.reject(err)))
  .then(res => conn.destroy().then(() => Promise.resolve(res)));

export default {
  conn: appDB,
  create: () => wrapConn(pg(), conn => conn.raw('CREATE DATABASE ' + config.db.name)),
  drop: () => wrapConn(pg(), conn => conn.raw('DROP DATABASE ' + config.db.name)),
  migrateLatest: () => wrapConn(appDB(), conn => conn.migrate.latest()),
  migrateRollback: () => wrapConn(appDB(), conn => conn.migrate.rollback()),
  seed: () => wrapConn(appDB(), conn => conn.seed.run())
};
