const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const router = require('./routes')
const app = express()

// Handle Uncaught Exceptions
process.on('uncaughtException', e => {
  console.log(e)
})

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({
  limit: '10mb',
  extended: true,
  strict: true
}))

app.use(cors())
app.use(helmet())

// Routes
app.use('/api', router)

// Catch 404
app.use((req, res) => {
  return res.status(404).send('Error 404, Route not found')
})

// Handle Errors
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  req.log.error(err)
  return res.status(500).send(err.message)
})

module.exports = app
