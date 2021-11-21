const request = require('supertest')
const app = require('../app')
const { createTestUser } = require('../utils/createUser')
const { hardDelete } = require('../utils/hardDeleteUser')
const should = require('chai').should()

const userData = {
  token: null,
  id: null
}

let data;

describe('GET /organizations/:id/public', () => {
  it('respond with ong data and status 200', async () => {
    const { body: {success, body} } = await request(app)
      .get('/organizations/1/public')
      .expect('Content-Type', /json/)
      .expect(200);
    data = body;
    success.should.to.eql(true)
    body.should.be.a('object')
    const {id, name, image, address, welcomeText, urlFacebook, urlLinkedin, urlInstagram} = body
    id.should.be.a('number')
    name.should.be.a('string')
    image.should.be.a('string')
    image.should.be.a('string')
    address.should.be.a('string')
    welcomeText.should.be.a('string')
    urlFacebook.should.be.a('string')
    urlLinkedin.should.be.a('string')
    urlInstagram.should.be.a('string')
  })
  
  it('respond with an error 404 when id doesnt exist', async () => {
    request(app)
    .get('/organizations/1234/public')
    .expect('Content-Type', /json/)
    .expect(404)
    .expect({
      body: { Error: 'Id not found' },
      success: false
    })
  })
})

describe('PUT /organizations/:id with Admin Role', () => {
  before(createUser(userData, 'Admin'))
  after(deleteUser(userData))
  
  it('respond with ong updated data and status 201', async () => {
    const { body: {success, body} } = await request(app)
      .put('/organizations/1')
      .send(data)
      .set('Authorization', 'Bearer ' + userData.token)
      .expect('Content-Type', /json/)
      .expect(201);
    success.should.to.eql(true)
    body.should.be.a('object')
    const {id, name, image, address, welcomeText, urlFacebook, urlLinkedin, urlInstagram} = body
    id.should.be.a('number')
    name.should.be.a('string')
    image.should.be.a('string')
    image.should.be.a('string')
    address.should.be.a('string')
    welcomeText.should.be.a('string')
    urlFacebook.should.be.a('string')
    urlLinkedin.should.be.a('string')
    urlInstagram.should.be.a('string')
  })

  it('respond with an error 404 when id doesnt exist', (done) => {
    request(app)
      .put('/organizations/1234')
      .send({
        name: 'test@alkemy.com',
        image: 'Alkemy90'
      })
      .set('Authorization', 'Bearer ' + userData.token)
      .expect('Content-Type', /json/)
      .expect(404)
      .expect({
        body: { Error: 'Id not found' },
        success: false
      })
      .end(done)
  })
})

describe('PUT /organizations/:id with Standar Role', () => {
  before(createUser(userData, 'Standar'))
  after(deleteUser(userData))
  it('respond with an error 403', (done) => {
    request(app)
    .put('/organizations/1234')
    .send({
      name: 'test@alkemy.com',
      image: 'Alkemy90'
    })
    .set('Authorization', 'Bearer ' + userData.token)
    .expect('Content-Type', /json/)
    .expect(403)
    .expect({
      body: "Your user role have not authorization to make this request",
      success: false
    })
    .end(done)
  })
})

function createUser(data, role) {
  return async function() {
      const userData = {
        firstName: 'test',
        lastName: 'User',
        email: 'test@alkemy.com',
        password: '123456test',
        role
      }
      try {
        const user = await createTestUser(userData)
        data.token = user.token
        data.id = user.dataValues.id
      } catch (e) {
        console.error(e)
      }
  };
}
function deleteUser(data) {
  return async function() {
    try {
      const deleted = await hardDelete('User', data.id)
      console.log(deleted)
    } catch (e) {
      console.error(e)
    }
  }
}