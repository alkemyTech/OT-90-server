const CreateUser = require('../utils/createUser')
const Delete = require('../utils/hardDeleteUser')
const request = require('supertest')
const server = require('../app')


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
      console.log(user)
      token = user.token
      idUser = user.dataValues.id
      console.log(id)
    } catch (e) {
      console.log(idUser)
    }
  })

  after(async () => {
    try {
      await Delete.hardDelete('Activity',idActivity)
      console.log('actividad ', idActivity, ' eliminada')
      await Delete.hardDelete('User', idUser)
      console.log('usuario ', idUser, 'eliminado')
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
          .expect(200, done)
      })
    })

    /* get:id */
    describe('GET /activities/id', () => {
      it('It shoul GET a activity by id', (done) => {
        request(server)
          .get('/activities/1')
          .set('Acept', 'application/json')
          .expect(200, done)
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
          .expect(201)
          .end((err, res) => {
            if (err) done(err)
            idActivity = res.body.body.id
            done()
          })
      })
    })

    describe('PUT /activities', () => {
      it('It shoul PUT activity by id', (done) => {
        const data = { name: 'Prueba', content: 'Prueba del cambio correcto' }
        request(server)
          .put(`/activities/${idActivity}`)
          .send(data)
          .set({ authorization: token })
          .expect(200, done)
      })
    })

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
