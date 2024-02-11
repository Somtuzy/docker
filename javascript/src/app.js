const express = require('express')
const middlewares = require('./middlewares/main.middleware')

const app = express()

middlewares(app)

module.exports = app;