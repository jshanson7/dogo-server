import { knex } from 'db';

export default async function resetDB() {
  const conn = knex();
  const tables = ['notes', 'dogs', 'shelters', 'users'];
  for (let table of tables) {
    await conn(table).del();
  }
};
