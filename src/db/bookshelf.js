import bookshelf from 'bookshelf';
import db from './db';

export default bookshelf(db.conn());
