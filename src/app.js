require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.EXPRESS_PORT || 3000
const { pool } = require('./postgres.config')

app.get('/', async (req, res) => {
    await pool.connect()

    const result = await pool.query('SELECT * FROM documents')
    console.log(result)

    // await pool.end()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})