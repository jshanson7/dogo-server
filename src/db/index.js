import Bookshelf from 'bookshelf';
import Knex from 'knex';
import knexConf from '../config/knex';
import { client, host, name } from '../config/db';

let bookshelfInstance;
let dbConnection;
let pgConnection;

export const bookshelf = () => bookshelfInstance || (bookshelfInstance = Bookshelf(knex()).plugin('registry'));
export const knex = () => dbConnection || (dbConnection = Knex(knexConf));
export const pg = () => pgConnection || (pgConnection = Knex({ client, connection: { host } }));
export const close = async () => await* [closeDBConnection(), closePGConnection()];
export const create = async () => await createDBWithName(name);
export const drop = async () => await dropDBWithName(name);
export const migrateLatest = async () => await getWrappedDBConnection(conn => conn.migrate.latest());
export const migrateRollback = async () => await getWrappedDBConnection(conn => conn.migrate.rollback());
export const seed = async () => await getWrappedDBConnection(conn => conn.seed.run());
export const createDBWithName = async dbName => await getWrappedPGConnection(conn => conn.raw('CREATE DATABASE ' + dbName));
export const dropDBWithName = async dbName => await getWrappedPGConnection(conn => conn.raw('DROP DATABASE ' + dbName));

export const closeDBConnection = async () => {
  if (dbConnection) {
    const conn = dbConnection;
    dbConnection = undefined;
    await conn.destroy();
  }
};

export const closePGConnection = async () => {
  if (pgConnection) {
    const conn = pgConnection;
    pgConnection = undefined;
    await conn.destroy();
  }
};

export const getWrappedDBConnection = async promise =>
  await promise(knex())
    .catch(err => closeDBConnection().then(() => Promise.reject(err)))
    .then(res => closeDBConnection().then(() => Promise.resolve(res)));

export const getWrappedPGConnection = async promise =>
  await promise(pg())
    .catch(err => closePGConnection().then(() => Promise.reject(err)))
    .then(res => closePGConnection().then(() => Promise.resolve(res)));
