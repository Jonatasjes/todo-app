const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const alloweCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(alloweCors)

server.listen(port, () => {
  console.log(`The backend is running on port ${port}.`)
})

module.exports = server