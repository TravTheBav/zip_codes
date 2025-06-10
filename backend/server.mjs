/**
 * Backend server for the Carvant zipcodes app. Provides all
 * endpoints for performing CRUD on the Carvant database.
 */

import express from "express"
import "dotenv/config"
import { db } from './db-connector.mjs'


const PORT = process.env.PORT
const app = express()
// All requests to the backend sent back as JSON
app.use(express.json())

// Get all locations
app.get("/", (req, res) => {
    let query = 'SELECT * FROM Locations;'

    db.query(query, (error, rows) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
        }

        res.json(rows)
    })
})

// Express app listens on whichever port number is configured in the .env file
app.listen(PORT, () => {
    console.log(`Zip codes server listening on port ${PORT}.`)
})