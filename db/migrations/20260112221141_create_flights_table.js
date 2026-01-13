/**
 * @param {import('knex')} knex
 */
exports.up = function(knex) {
  return knex.schema.createTable('flights', (table) => {
    table.increments('id');          
    table.float('night_hours').notNullable();   
    table.float('day_hours').notNullable();     
    table.string('aircraft').notNullable();    
    table.text('description').notNullable();   
    table.date('date').notNullable();          
    table.string('start_location').notNullable(); 
    table.string('end_location').notNullable();   
    table.string('role').notNullable();        
    table.timestamps(true, true);              
  });
};

/**
 * @param {import('knex')} knex
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('flights');
};
