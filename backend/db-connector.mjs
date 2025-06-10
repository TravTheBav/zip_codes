import mysql from 'mysql'
import 'dotenv/config'

const pwd = process.env.DB_PASSWORD

// setup the mysql connection to the Carvant database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: pwd,
    database: 'carvant'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to the Carvant database.")
})

// export the mysql connection for the express server to use
export { db }