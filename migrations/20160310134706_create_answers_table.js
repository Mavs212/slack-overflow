
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answers', function(table) {
    table.increments();
    table.string('title');
    table.string('body', 3000);
    table.integer('user_id').references('users.id');
    table.integer('score');
    table.boolean('flag_status').defaultTo('false');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('answers');
};