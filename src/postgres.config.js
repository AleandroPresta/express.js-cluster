require('dotenv').config()
const pg = require('pg')
const { Pool, Client } = pg

const pool = new Pool()
const client = new Client()

module.exports = { pool, client }