const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
// ====================
const cors = require('cors')
// ====================
const routesNavigation = require('./src/routesNavigation')

const app = express()
morgan('dev')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// ====================
app.use(cors())
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization'
  )
  next()
})
// ====================

app.use('/api1', routesNavigation)

app.get('*', (request, response) => {
  response.status(404).send('Path not found !')
})

app.listen(3000, () => {
  console.log('Express app is listening on port 3000')
})
