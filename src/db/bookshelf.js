import bookshelf from 'bookshelf';
import db from './db';

const knex = db.conn();
const bookshelfConn = bookshelf(knex);

export default bookshelfConn;
export const close = knex.destroy;
