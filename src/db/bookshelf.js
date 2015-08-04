'use strict';

import knex from 'knex';
import knexConf from '../../knexfile';
import bookshelf from 'bookshelf';

export default bookshelf(knex(knexConf));
