exports.up = knex => {
  return knex.schema.createTable('notes', t => {
    t.increments('id').primary();
    // t.uuid('uuid').primary();
    t.text('text').notNull();
    t.integer('dog_id').notNull().references('id').inTable('dogs');
    t.integer('user_id').notNull().references('id').inTable('users');
    t.timestamps();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('notes');
};
