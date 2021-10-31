const request = require('supertest')
const app = require('../app')

describe('GET /ping', () => {
  it('respond with PONG', (done) => {
    request(app).get('/ping').expect('PONG', done)
  })
})
