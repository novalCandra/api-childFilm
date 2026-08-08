const mysql2 = require("mysql2/promise");

const pollDB = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

module.exports = pollDB;