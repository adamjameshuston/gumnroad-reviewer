const express = require('express')
const morgan = require('morgan')
const path = require('path')
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080

const routes = require('./routes/api')


app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)


// Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
  })
    
    // Implement 404 error route
  app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
  })



app.listen(PORT, console.log(`Server is starting at port ${PORT}`))