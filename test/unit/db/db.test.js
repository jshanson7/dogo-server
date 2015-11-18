import { expect } from 'chai';
import {
  bookshelf,
  knex,
  pg,
  // close,
  // create,
  // drop,
  // migrateLatest,
  // migrateRollback,
  // seed,
  createDBWithName,
  dropDBWithName,
  // closeDBConnection,
  // closePGConnection,
  // getWrappedDBConnection,
  // getWrappedPGConnection
} from 'db';

const fakeDBName = 'dogo_db_unit_test';

describe('db', () => {
  it(`createDBWithName()`, async () => {
    await createDBWithName(fakeDBName);
  });

  it(`dropDBWithName()`, async () => {
    await dropDBWithName(fakeDBName);
  });

  it(`bookshelf()`, async () => {
    expect(bookshelf()).to.exist;
  });

  it(`knex()`, async () => {
    expect(knex()).to.exist;
  });

  it(`pg()`, async () => {
    expect(pg()).to.exist;
  });
});
