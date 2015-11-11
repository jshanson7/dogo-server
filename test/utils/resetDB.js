import { drop, create, migrateLatest } from '../../src/db';

export default () => drop()
  .catch(err => Promise.resolve(console.log(err.toString() + ', continuing...')))
  .then(() => create()
    .catch(err => Promise.resolve(console.log(err.toString() + ', continuing...')))
    .then(() => migrateLatest())
  );
