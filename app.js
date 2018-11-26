const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser());

let path = require('path')

app.use(express.static(path.join(__dirname, 'public')))


app.use(cors({origin: '*'}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('json spaces', 2)

const errorHandler = (err, req, res, next) => res.status(err.status || 500).json({
  success: false,
  error: err.message,
  stack: err.stack
})

const notFoundHandler = (req, res, next) => res.status(404).json({ success: false, error: 'invalid route' })

app.use('/api', require('./routes'), notFoundHandler, errorHandler)

module.exports = app
