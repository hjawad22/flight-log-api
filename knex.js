const environment =
  process.env.NODE_ENV ||
  (process.env.DATABASE_URL ? 'production' : 'development');

console.log('NODE_ENV resolved to:', environment);

const config = require('./knexfile')[environment];

if (!config) {
  throw new Error(`Knex configuration for environment "${environment}" not found`);
}

console.log('Using knex config:', environment);

const knex = require('knex')(config);
module.exports = knex;