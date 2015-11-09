import knex from 'knex';
import knexConf from '../config/knex';
import { client, host, name } from '../config/db';

export function connect() {
  return knex(knexConf);
}

export function create() {
  return getWrappedPGConnection(conn => conn.raw('CREATE DATABASE ' + name));
}

export function drop() {
  return getWrappedPGConnection(conn => conn.raw('DROP DATABASE ' + name));
}

export function migrateLatest() {
  return getWrappedAppDBConnection(conn => conn.migrate.latest());
}

export function migrateRollback() {
  return getWrappedAppDBConnection(conn => conn.migrate.rollback());
}

export function seed() {
  return getWrappedAppDBConnection(conn => conn.seed.run());
}

function getWrappedAppDBConnection(promise) {
  return wrapConnection(connect(), promise);
}

function getWrappedPGConnection(promise) {
  return wrapConnection(pg(), promise);
}

function wrapConnection(conn, promise) {
  return promise(conn)
    .catch(err => conn.destroy().then(() => Promise.reject(err)))
    .then(res => conn.destroy().then(() => Promise.resolve(res)));
}

function pg() {
  return knex({ client, connection: { host } });
}
