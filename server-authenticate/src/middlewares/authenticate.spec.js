const sinon = require('sinon')
const authenticateMiddleware = require('./authenticate')

describe('middleware of authentication', () => {
  it('middleware is a function', () => {
    expect(typeof authenticateMiddleware).toBe('function')
  })
  it ('middleware accept three parameters', () => {
    expect(authenticateMiddleware.length).toBe(3)
  })
  it (
    'called next with error case token is not defined',
    async () => {
      const fn = sinon.fake()
      await authenticateMiddleware({}, {}, fn);
      expect(fn.called).toBeTruthy()
    }
  )
})