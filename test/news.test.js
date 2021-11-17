const app = require('../app')
const request = require("supertest")
const expect = require("chai").expect

let id 

describe("POST /news", function () {
  const dataPost = {
    name: 'testing news',
    content: 'this a test content',
    categoryId: 1,
}
  it("post news", async function () {
    const response = await request(app).post("/news").send(dataPost)
    id = response.body.body.id
    expect(response.status).to.eql(201)
  })
})

describe("GET /news", function () {
  it("returns all news", async function () {
    const response = await request(app).get("/news")
    expect(response.status).to.eql(200)
  })
})

describe("GET /news:id", function () {
  it("returns the one new", async function () {
    const response = await request(app).get(`/news/${id}`)
    expect(response.status).to.eql(200)
  })
})

describe("PUT /news", function () {
  const dataPut = {
    name: 'modifing testing news',
    content: 'modifing this a test content',
    categoryId: 2,
}
  it("put news", async function () {
    const response = await request(app).put(`/news/${id}`).send(dataPut)
    expect(response.status).to.eql(201)
  })
})

describe("delete /news", function () {
  it("delete news", async function () {
    const response = await request(app).delete(`/news/${id}`)
    expect(response.status).to.eql(204)
  })
})


