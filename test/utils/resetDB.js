import db from '../../src/db/db';

export default () => db
  .drop()
  .catch(err => Promise.resolve(console.log(err.toString() + ', continuing...')))
  .then(() => db
    .create()
    .catch(err => Promise.resolve(console.log(err.toString() + ', continuing...')))
    .then(() => db.migrateLatest())
  );
