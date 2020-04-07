const knex = require('knex');
const configuration = require('../../knexfile.js');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //Variável Ambiente

const connection = knex(config);

module.exports = connection;