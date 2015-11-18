export function up(knex) {
  return knex.schema.createTable('dogs', t => {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.string('name').notNull();
    t.string('breed').nullable();
    t.text('description').nullable();
    t.integer('shelter_id').notNull().references('id').inTable('shelters');
    // t.string('thumbnail_url').nullable();
    // t.json('picture_ids').nullable();
    t.string('dot_color').nullable();
    // t.json('note_ids');
    t.timestamps();
  });
}

export function down(knex) {
  return knex.schema.dropTable('dogs');
}
