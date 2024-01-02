const path = require('path')

// import .env variables
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
  example: path.join(__dirname, '../.env.example')
})

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  db: {
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
  }
}
