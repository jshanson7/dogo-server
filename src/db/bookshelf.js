'use strict';

import { db } from '../../config.js';
import knex from 'knex';
import bookshelf from 'bookshelf';

const pg = knex({
  client: 'postgres',
  connection: 'postgres://' + db.user + ':' + db.password + '@' + db.host + ':' + db.port + '/' + db.name
});

export default bookshelf(pg);
