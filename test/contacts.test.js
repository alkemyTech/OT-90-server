const CreateUser = require('../utils/createUser')
const Delete = require('../utils/hardDeleteUser')
const request = require('supertest')
const server = require('../app')
const chai = require('chai')
const expect = require('chai').expect

let idContact

chai.should()

  // test cases
describe('Contacts API', () => {
    /* get / */
  describe('GET /contacts', () => {
    it('It should GET all contacts', (done) => {
      request(server)
        .get('/contacts')
        .set('Acept', 'application/json')
        .end((error, response) => {
          expect(response.status).to.eql(200)
          response.body.should.be.a('array')
          response.body.length.should.be.eql(10)
        done()
        })
    })
  })

  /* post */
  describe('POST /contacts', () => {
    it('It shoul POST a new contacts', (done) => {
      const data = { name: 'new contacts', phone: '5490113154870387', email: 'usuario@testing27.com', message: 'prueba test'}
      request(server)
        .post('/contacts')
        .send(data)
        .end((err, response) => {
          if (err) done(err)
          idContact = response.body.createdContacts.id
          expect(response.status).to.eql(201)
        done()
        })
    })

    it('It shoul NOT POST a new contacts', (done) => {
      const data = {}
      request(server)
        .post('/contacts')
        .send(data)
        .end((err, response) => {
          expect(response.status).to.eql(400)
          response.body.should.have.property('type')
          response.body.should.have.property('type').eql('ValidationError')
          response.body.should.have.property('message')
          response.body.should.have.property('errors')
        done()
        })
    })
  })

  /* delete */
  describe('DELETE /contacts/id', () => {
    it('It shoul DELETE activity by id', (done) => {
      request(server)
        .delete(`/contacts/${idContact}`)
        .expect(204, done)
    })
  })

})
