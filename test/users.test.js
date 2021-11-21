const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')
const { hardDelete } = require('../utils/hardDeleteUser')
const api = request(app)
let token
let id

describe('POST /users', () => {
        const data = {
            firstName: 'pruebas',
            lastName: 'testeo',
            password: 'passdeTest',
            email: 'userdetesting@prueba.com',
            role: 'Admin',
        }
        it('respond with 201', (done) => {
            api
            .post('/users')
            .send(data)
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                if (err) done(err)
                id = res.body.body.id
                token = res.body.body.token
                done()
            })
        })
})

describe('POST /users/login', () => {
    const data = {
        password: 'passdeTest',
        email: 'userdetesting@prueba.com',
    }
    it('respond with 200', (done) => {
        api
        .post('/users/login')
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) done(err)
            expect(res.body.success).to.eql(true) 
            done()
        })
    })
})

describe('GET /users', () => {
    it('respond with 200', (done) => {
        api
        .get('/users')
        .set({ "Authorization": token})
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
})

describe('DELETE /users/:id', () => {
    it('respond with 201', (done) => {
        api
        .delete(`/users/${id}`)
        .set({ "Authorization": token})
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
            if (err) done(err)
            hardDelete('User',id)
            done()
        })
    })
})