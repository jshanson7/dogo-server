import bookshelf from 'bookshelf';
import { connect } from './db';

const conn = connect();

export const bookshelfConn = bookshelf(conn);
export const close = conn.destroy;
