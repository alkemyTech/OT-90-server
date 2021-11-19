const CreateUser = require('../utils/createUser')
const Delete = require('../utils/hardDeleteUser')
const request = require('supertest')
const server = require('../app')
const chai = require('chai')
const expect = require('chai').expect

chai.should()

describe('hooks', () => {
  const userData = {
    firstName: 'alkemy',
    lastName: 'bootcamp',
    email: 'usuario@testing27.com',
    password: 'alkemy123',
    role: 'Admin'
  }

  let token
  let idUser
  let idActivity
  before(async () => {
    try {
      const user = await CreateUser.createTestUser(userData)
      token = user.token
      idUser = user.dataValues.id
      console.log('Usuario', idUser, 'creado')
    } catch (e) {
      console.log(idUser)
    }
  })

  after(async () => {
    try {
      await Delete.hardDelete('Activity',idActivity)
      console.log('actividad', idActivity, 'eliminada')
      await Delete.hardDelete('User', idUser)
      console.log('usuario', idUser, 'eliminado')
    } catch (e) {
      console.log(e)
    }
  })

  // test cases
  describe('Activities API', () => {
    /* get / */
    describe('GET /activities', () => {
      it('It should GET all the activities', (done) => {
        request(server)
          .get('/activities')
          .set('Acept', 'application/json')
          .end((error, response) => {
            expect(response.status).to.eql(200)
            response.body.should.be.a('array')
            response.body.length.should.be.eql(3)
          done()
          })
      })
    })

    /* get:id */
    describe('GET /activities/id', () => {
      it('It shoul GET a activity by id', (done) => {
        request(server)
          .get(`/activities/1`)
          .set('Acept', 'application/json')
          .end((error, response) => {
            expect(response.status).to.eql(200)
            response.body.should.be.a('object')
            response.body.should.have.property('id')
            response.body.should.have.property('name')
            response.body.should.have.property('content')
            response.body.should.have.property('image')
          done()
          })
      })

      it('It shoul NOT GET a activity by id', (done) => {
        request(server)
          .get(`/activities/${idActivity}`)
          .set('Acept', 'application/json')
          .end((error, response) => {
            expect(response.status).to.eql(200)
            response.body.should.be.a('object')
            response.body.should.be.a('object').eql({})
          done()
          })
      })
    })

    /* post */
    describe('POST /activities', () => {
      it('It shoul POST a new activity', (done) => {
        const data = { name: 'new Activity', content: 'Send New Activity' }
        console.log(token)
        request(server)
          .post('/activities')
          .send(data)
          .set({ authorization: token })
          .end((err, response) => {
            if (err) done(err)
            idActivity = response.body.body.id
            expect(response.status).to.eql(201)
          done()
          })
      })

      it('It shoul NOT POST a new activity', (done) => {
        const data = {}
        console.log(token)
        request(server)
          .post('/activities')
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

    /* put */
    describe('PUT /activities', () => {
      it('It shoul PUT activity by id', (done) => {
        const data = { name: 'Prueba', content: 'Prueba del cambio correcto' }
        request(server)
          .put(`/activities/${idActivity}`)
          .send(data)
          .set({ authorization: token })
          .end((err, response) => {
            expect(response.status).to.eql(200)
            response.body.should.be.a('object')
            response.body.success.should.eql(true)
            response.body.body.should.have.property('id')
            response.body.body.should.have.property('name')
            response.body.body.should.have.property('content')
            response.body.body.should.have.property('image')
          done()
          })
      })
    })

    /* delete */
    describe('DELETE /activities/id', () => {
      it('It shoul DELETE activity by id', (done) => {
        request(server)
          .delete(`/activities/${idActivity}`)
          .set({ authorization: token })
          .expect(201, done)
      })
    })

  })
})
