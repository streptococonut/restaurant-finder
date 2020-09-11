require('dotenv').config()
const db = require('./db/index')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json())

const cors = require('cors')
app.use(cors())

app.get('/restaurants', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM restaurants')
        res.status(200).json({
            restaurant: result.rows
        }
        )
    } catch (error) {
        console.log(error)
    }
})

app.get('/restaurants/:id', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM restaurants WHERE id=$1', [req.params.id])
        res.status(200).json({
            restaurant: result.rows[0]
        })
    } catch (error) {
        console.log(error)
    }
})

app.post('/restaurants', async (req, res) => {
    try {
        const result = await db.query('INSERT INTO restaurants (name, location, description) VALUES ($1, $2, $3) returning *',
        [req.body.name, req.body.location, req.body.description])
        res.status(200).json({
            restaurant: result.rows[0]

        })
    } catch (error) {
        console.log(error)
    }
})

app.put('/restaurants/:id', async (req, res) => {
    try {
        const result = await db.query('UPDATE restaurants SET name=$1, location=$2, description=$3 WHERE id=$4 returning *', [req.body.name, req.body.location, req.body.description, req.params.id])
        res.status(200).json({
            restaurant: result.rows[0]
        })
    
    } catch (error) {
        console.log(error)
    }
})

app.delete('/restaurants/:id', async (req, res) => {
    try {
        const result = await db.query('DELETE FROM restaurants WHERE id=$1', [req.params.id])
        res.status(200).json({
            status: "DELETED"
        })
    } catch (error) {
        console.log(error)
    }
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})