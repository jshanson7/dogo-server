import knex from 'knex';
import { db, knex as knexConf } from '../config';

const appDB = () => knex(knexConf);
const pg = () => knex({ client: db.client, connection: { host: db.host } });
const wrapConn = (conn, connAction) => connAction(conn)
  .catch(err => conn.destroy().then(() => Promise.reject(err)))
  .then(res => conn.destroy().then(() => Promise.resolve(res)));

export default {
  conn: appDB,
  create: () => wrapConn(pg(), conn => conn.raw('CREATE DATABASE ' + db.name)),
  drop: () => wrapConn(pg(), conn => conn.raw('DROP DATABASE ' + db.name)),
  migrateLatest: () => wrapConn(appDB(), conn => conn.migrate.latest()),
  migrateRollback: () => wrapConn(appDB(), conn => conn.migrate.rollback()),
  seed: () => wrapConn(appDB(), conn => conn.seed.run())
};
