const express = require('express')
const { StatusCodes } = require('http-status-codes')

const application = express()

application.get('/message', async (request, response) => {
  response.sendStatus(StatusCodes.UNAUTHORIZED)
})

module.exports = application
