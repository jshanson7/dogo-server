exports.up = (knex, Promise) => {
  return knex.schema.createTable('shelters', t => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shelters');
};
