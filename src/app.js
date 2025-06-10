require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.EXPRESS_PORT || 3000
const { pool } = require('./postgres.config')

app.get('/', async (req, res) => {
    try {
        await pool.connect()

        const result = await pool.query('SELECT * FROM documents')

        res.json({
            status: 'success',
            code: 200,
            timestamp: new Date().toISOString(),
            source: 'db',
            data: result.rows[0]
        })
    } catch (error) {
        console.error('Error:', error)
    } finally {
        await pool.end()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})