const supertest = require('supertest')

const application = require('../src/application')

const request = supertest(application)

it('truthy', async () => {
  const response = await request.get('/message')
  expect(response.status).toBe(401)
})
