const request = require('supertest')
const app = require('../app')

describe('GET /ping', () => {
  it('respond with PONG', (done) => {
    request(app).get('/ping').expect('PONG', done)
  })
})

describe('testimonials endpoints', () => {
  it('respond with json containing a testimonial successfully post', done => {
    const data = { name: 'Ben', image: 'url', content: "content", createdAt: new Date(), updatedAt: new Date() }
    request(app)
      .post('/testimonials')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done)
  })
  it('respond with json containing a testimonial successfully delete', done => {
    const data = { name: 'Ben', image: 'url', content: "content" }
    request(app)
      .delete('/testimonials/23')
      .set('Accept', 'application/json')
      .set({ "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJiZW5qYW1pbnBsYS5kZXYzQGdtYWlsLmNvbSIsInJvbGUiOiJBZG1pbiIsImZpcnN0TmFtZSI6IkJlbmphbWluIiwibGFzdE5hbWUiOiJQbGEiLCJpbWFnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0xMS0xNlQxNjozMjoyMi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMS0xNlQxNjozMjoyMi4wMDBaIiwiZGVsZXRlZEF0IjpudWxsLCJpYXQiOjE2MzcwODA2NDV9.86trA9lavwDMUl6LnouxLJEU4WTbj2TvKcxIVQ4Gt1A'})
      .expect(204, done)
  })
})
