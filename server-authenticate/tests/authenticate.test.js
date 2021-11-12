const supertest = require('supertest')
const { StatusCodes } = require('http-status-codes')

const application = require('../src/application')

const request = supertest(application)

it('should return error unauthorized', async () => {
  const response = await request.get('/message')
  expect(response.status).toBe(StatusCodes.UNAUTHORIZED)
})
