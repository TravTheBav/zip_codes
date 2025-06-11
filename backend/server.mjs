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
app.get("/locations", (req, res) => {
    let query = 'SELECT * FROM Locations;'

    db.query(query, (error, rows) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
        }

        res.json(rows)
    })
})

// Create a new location
app.post("/locations", (req, res) => {
    let query = `INSERT INTO Locations (Zip, City, State, County, Latitude, Longitude)
        VALUES (
        ${req.body.zip},
        "${req.body.city}",
        "${req.body.state}",
        "${req.body.county}",
        ${req.body.latitude},
        ${req.body.longitude}
        );`

    // Create the INSERT query using values from the post body
    db.query(query, (error) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
        }

        res.status(201).send('A new location was successfully created.')
    })
})

// Edit a location
app.put("/locations", (req, res) => {
    let query = `UPDATE Locations SET
        Zip = ${req.body.zip},
        City = '${req.body.city}',
        State = '${req.body.state}',
        County = '${req.body.county}',
        Latitude = ${req.body.latitude},
        Longitude = ${req.body.longitude}
        WHERE LocationID = ${req.body.locationID};`

    db.query(query, (error) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
        }

        res.status(200).send('The location was successfully updated.')
    })
})

// Delete a location
app.delete("/locations/:_id", (req, res) => {
    let query = `DELETE FROM Locations WHERE LocationID = ${req.params._id};`

    db.query(query, (error) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
        }

        res.status(200).send("The location was successfully deleted.")
    })
})

// Express app listens on whichever port number is configured in the .env file
app.listen(PORT, () => {
    console.log(`Zip codes server listening on port ${PORT}.`)
})