const request = require('supertest')
const app = require('../app')
const api = request(app)
var id

//Successful POST
describe('POST /members', () => {
        const data = {
            name: 'pruebas',
            image: 'https://image.example001.com'
        }
        it('respond with 201', (done) => {
            api
            .post('/members')
            .send(data)
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                if (err) done(err)
                id = res.body.id
                token = res.body.token
                done()
            })
        })
})

//Successful GET
describe('GET /members', () => {
  it('respond with 200', (done) => {
      api
      .get('/members')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})

//Successful PUT
describe('PUT /members', () => {
  const data = {
      name: 'updateName',
      image: 'https://image.updateexample001.com'
  }
  it('respond with 201', (done) => {
      api
      .put(`/members/${id}`)
      .send(data)
      .expect('Content-Type', /json/)
      .expect(201, done)
  })
})


//Failed PUT when trying to update an id that does not exist
describe('PUT /members', () => {
  const data = {
    name: 'updateName',
    image: 'https://image.updateexample001.com'
  }
  
  it('respond with 500', (done) => {
      api
      .put(`/members/${id+1}`)
      .send(data)
      .expect('Content-Type', /json/)
      .expect(500, done)
  })
})


//Failed DELETE when trying to retrieve an id that does not exist
describe('DELETE /members/:id', () => {
  it('respond with 400', (done) => {
      api
      .delete(`/members/${id+1}`)
      .expect('Content-Type', /json/)
      .expect(400, done)
  })
})

//Successful DELETE
describe('DELETE /members/:id', () => {
  it('respond with 201', (done) => {
      api
      .delete(`/members/${id}`)
      .expect('Content-Type', /json/)
      .expect(201, done)
  })
})

