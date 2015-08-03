
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', function(t) {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.string('name').notNull();
    t.string('breed').nullable();
    t.text('description').nullable();
    // t.string('thumbnail_url').nullable();
    // t.json('picture_ids').nullable();
    t.string('dot_color').nullable();
    // t.json('note_ids');
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dogs');
};
