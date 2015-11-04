exports.up = knex => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.string('first_name').notNull();
    t.string('last_name').notNull();
    // table.string('thumbnail_url');
    // table.json('picture_ids');
    // t.json('note_ids');
    t.timestamps();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('users');
};
