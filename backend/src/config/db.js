const mysql = require('mysql2')
const env = require('./env')

const db = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
})

module.exports = db
