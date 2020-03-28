const knex = require("knex")
const conf = require("../../knexfile")

const connection = knex(process.env.NODE_ENV == 'test' ? conf.test : conf.development)

module.exports = connection