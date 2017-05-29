
exports.up = function(knex, Promise) {
  return knex.schema.createTable('subscribers', (table) => {
    table.increments();
    table.string('fname').notNullable();
    table.string('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subscribers')
};
