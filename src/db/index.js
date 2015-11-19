import Bookshelf from 'bookshelf';
import Knex from 'knex';
import knexConf from '../config/knex';
import { client, host, name } from '../config/db';

let bookshelfInstance;
let dbConnection;
let pgConnection;

export function bookshelf() { return bookshelfInstance || (bookshelfInstance = Bookshelf(knex()).plugin('registry')); }
export function knex() { return dbConnection || (dbConnection = Knex(knexConf)); }
export function postgres() { return pgConnection || (pgConnection = Knex({ client, connection: { host } })); }
export async function close() { return await* [closeDBConnection(), closePGConnection()]; }
export async function create() { return await createDBWithName(name); }
export async function drop() { return await dropDBWithName(name); }
export async function migrateLatest() { return await getWrappedDBConnection(conn => conn.migrate.latest()); }
export async function migrateRollback() { return await getWrappedDBConnection(conn => conn.migrate.rollback()); }
export async function seed() { return await getWrappedDBConnection(conn => conn.seed.run()); }

export async function createDBWithName(dbName) {
  return await getWrappedPGConnection(conn => conn.raw('CREATE DATABASE ' + dbName));
}

export async function dropDBWithName(dbName) {
  return await getWrappedPGConnection(conn => conn.raw('DROP DATABASE ' + dbName));
}

export async function closeDBConnection() {
  if (dbConnection) {
    const conn = dbConnection;
    dbConnection = undefined;
    await conn.destroy();
  }
}

export async function closePGConnection() {
  if (pgConnection) {
    const conn = pgConnection;
    pgConnection = undefined;
    await conn.destroy();
  }
}

export async function getWrappedDBConnection(promise) {
  return await promise(knex())
    .catch(err => closeDBConnection().then(() => Promise.reject(err)))
    .then(res => closeDBConnection().then(() => Promise.resolve(res)));
}

export async function getWrappedPGConnection(promise) {
  return await promise(postgres())
    .catch(err => closePGConnection().then(() => Promise.reject(err)))
    .then(res => closePGConnection().then(() => Promise.resolve(res)));
}
