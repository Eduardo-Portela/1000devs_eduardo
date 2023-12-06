const express = require('express')
const server = express()
const PORT = 3007

const routes = require('./src/routes')

server.use(routes)

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})