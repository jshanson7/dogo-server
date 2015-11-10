import Bookshelf from 'bookshelf';
import { connect } from './db';

let bookshelfConnection;

export function getBookshelfConnection() {
  return bookshelfConnection ||
    (bookshelfConnection = Bookshelf(connect()).plugin('registry'));
}

export function close() {
  return bookshelfConnection.knex.destroy();
}
