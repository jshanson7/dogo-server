export function up(knex) {
  return knex.schema.createTable('shelters', t => {
    t.increments('id').primary();
    t.string('name').notNull();
    t.timestamps();
  });
}

export function down(knex) {
  return knex.schema.dropTable('shelters');
}
