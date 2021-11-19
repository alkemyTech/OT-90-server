const request = require('supertest')
const server = require('../app')
const chai = require('chai')
const expect = require('chai').expect
const { createTestUser } = require('../utils/createUser')
const { hardDelete } = require('../utils/hardDeleteUser')
chai.should()

describe('hooks', () => {
  const userData = {
    firstName: 'alkemy',
    lastName: 'bootcamp',
    email: 'usuario222@testing.com',
    password: 'alkemy123',
    role: 'Admin'
  }

  let token
  let idUser
  let idNew

  before(async () => {
    try {
      const user = await createTestUser(userData)
      token = user.token
      idUser = user.dataValues.id
    } catch (e) {
      return e
    }
  })

  after(async () => {
    try {
      await hardDelete('New',idNew)
      await hardDelete('User', idUser)
    } catch (e) {
        return e
    }
  })
// test cases
describe('News API', () => {

  describe('GET /news', () => {
    it('GET all news', (done) => {
      request(server)
        .get('/news')
        .set('Acept', 'application/json')
        .end((error, response) => {
          expect(response.status).to.eql(200)
        done()
        })
    })
  })

  describe('GET /news/id', () => {
    it('GET a new by id', (done) => {
      request(server)
        .get(`/news/1`)
        .set('Acept', 'application/json')
        .end((error, response) => {
          expect(response.status).to.eql(200)
          response.body.should.be.a('object')
          response.body.body.should.have.property('id')
          response.body.body.should.have.property('name')
        done()
        })
    })
    it('Ih shouldnt GET a new by id', (done) => {
      request(server) .get(`/news/${idNew}`)
      .set('Acept', 'application/json') 
      .end((error, response) => { 
        expect(response.status).to.eql(200) 
        response.body.should.be.a('object') 
        response.body.body.should.be.a('object').eql({})
        done()
       })
    }) 
  })
  describe('POST /news', () => {
    it('It shoul POST a new new', (done) => {
      const data = { name: 'new news', content: 'Send new news' }
      request(server) 
      .post('/news') 
      .send(data) 
      .set({ authorization: token }) 
      .end((err, response) => {
        if (err) done(err)
        idNew = response.body.body.id 
        expect(response.status).to.eql(201)
        done() 
      })
    })

  it('It shouldnt POST a new new', (done) => {
    const data = {} 
    request(server) 
      .post('/news') 
      .send(data) 
      .set({ authorization: token }) 
      .end((err, response) => { 
        expect(response.status).to.eql(400) 
        response.body.should.have.property('type') 
        response.body.should.have.property('message') 
        response.body.should.have.property('errors') 
        response.body.should.have.property('type').eql('ValidationError') 
        done() 
      }) 
    }) 
  })

  describe('PUT /news', () => { 
    it('It shoul PUT new by id', (done) => { 
      const dataPut = { 
        name: 'modifing testing news', 
        content: 'modifing this a test content', 
        categoryId: 2, 
      }
      request(server)
          .put(`/news/${idNew}`)
          .send(dataPut)
          .set({ authorization: token })
          .end((err, response) => {
            expect(response.status).to.eql(201)
            response.body.should.be.a('object')
            response.body.success.should.eql(true)
            response.body.body.should.have.property('id')
            response.body.body.should.have.property('name')
          done()
          })
      })
    })
  
    describe('DELETE /news/id', () => {
      it("delete news by id", async function () {
        const response = await request(server)
        .delete(`/news/${idNew}`)
        .set({ authorization: token })
        expect(response.status).to.eql(204)
      })
    })

  })
})

