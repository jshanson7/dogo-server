import Bookshelf from 'bookshelf';
import knex from 'knex';
import knexConf from '../config/knex';
import { client, host, name } from '../config/db';

let bookshelfInstance;
let dbConnection;
let pgConnection;

export function bookshelf() {
  return bookshelfInstance || (bookshelfInstance = Bookshelf(connect()).plugin('registry'));
}

export function connect() {
  return dbConnection || (dbConnection = knex(knexConf));
}

export async function close() {
  return await* [closeDBConnection(), closePGConnection()];
}

export async function create() {
  return await getWrappedPGConnection(conn => conn.raw('CREATE DATABASE ' + name));
}

export async function drop() {
  return await getWrappedPGConnection(conn => conn.raw('DROP DATABASE ' + name));
}

export async function migrateLatest() {
  return await getWrappedDBConnection(conn => conn.migrate.latest());
}

export async function migrateRollback() {
  return await getWrappedDBConnection(conn => conn.migrate.rollback());
}

export async function seed() {
  return await getWrappedDBConnection(conn => conn.seed.run());
}

async function closeDBConnection() {
  const conn = dbConnection;
  if (conn) {
    dbConnection = undefined;
    await conn.destroy();
  }
}

async function closePGConnection() {
  const conn = pgConnection;
  if (conn) {
    pgConnection = undefined;
    await conn.destroy();
  }
}

async function getWrappedDBConnection(promise) {
  return await promise(connect())
    .catch(err => closeDBConnection().then(() => Promise.reject(err)))
    .then(res => closeDBConnection().then(() => Promise.resolve(res)));
}

async function getWrappedPGConnection(promise) {
  return await promise(pg())
    .catch(err => closePGConnection().then(() => Promise.reject(err)))
    .then(res => closePGConnection().then(() => Promise.resolve(res)));
}

function pg() {
  return pgConnection || (pgConnection = knex({ client, connection: { host } }));
}
