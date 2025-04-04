const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const AllowCors = require('./cors')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(AllowCors)

server.listen(port, function () {
    console.log(`eaeee is running in port ${port}`)
})

module.exports = server
