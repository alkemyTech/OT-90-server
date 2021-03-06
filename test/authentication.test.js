const request = require('supertest')
const app = require('../app')
const expect = require("chai").expect  
const { createTestUser } = require('../utils/createUser')
const { hardDelete } = require('../utils/hardDeleteUser')



describe('hooks', function() {

  const userData =   {
    email: "usuario@testing.com",
    password: "alkemy123",
    firstName: "alkemy",
    lastName: "bootcamp",
    role: "Admin"
}

let id
let token
  before( async function() {

    try {
      const response = await createTestUser(userData)
      token = response.token
      id = response.id
    }catch (e) {
      return e
    }
      // runs once before the first test in this block
  });

  after(async function() {
    try{ 
      await hardDelete('User',id)
    }catch(e){
      return e
    }
    // runs once after the last test in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases

  
   describe("GET /auth/me", function () { 

    it("respond with 200 OK", async function () {
          const header = {
            authorization: `Bearer ${token}`
          }
        const response = await request(app)
        .get("/auth/me")   
        .set(header)
       expect(response.status).to.eql(200) 
       expect(response.body.success).to.eql(true) 
      })

      it("returns de user data when logged succesfully", async function () {
        const header = {
          authorization: `Bearer ${token}`
        }
      const response = await request(app)
      .get("/auth/me")   
      .set(header)
      
     expect(response.body.body.firstName).to.eql("alkemy") 
     expect(response.status).to.eql(200) 
     expect(response.body.success).to.eql(true) 
    })

      it("respond with success:false when token is invalid", async function () {
        const header = {
          authorization: `Bearer ${token}s`
        }
      const response = await request(app)
      .get("/auth/me")   
      .set(header)
     expect(response.body.success).to.eql(false) 
     expect(response.status).to.eql(400)
    })

    it("respond with success:false when token is missing", async function () {
    const response = await request(app)
    .get("/auth/me")   
   expect(response.body.body).to.eql('missing token') 
  })
  })

});


