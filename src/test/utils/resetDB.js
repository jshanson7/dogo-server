import db from '../../db/db';

export default () => db
  .drop()
  .catch(err => Promise.resolve(console.log(err.toString() + ', continuing...')))
  .then(() => db
    .create()
    .then(() => db.migrateLatest())
  );
