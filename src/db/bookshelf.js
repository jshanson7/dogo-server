'use strict';

import { db } from '../../secrets.js';
import knex from 'knex';
import bookshelf from 'bookshelf';

const pg = knex({
  client: 'postgres',
  connection: db.url
});

export default bookshelf(pg);
