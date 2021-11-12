const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname),
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
    '<rootDir>/src/**/*.spec.js'
  ]
}
