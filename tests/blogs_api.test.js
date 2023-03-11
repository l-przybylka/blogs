const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Blogs are returned as JSON', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-type', /application\/json/)
})

// Production test
test('there are three blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(3)
  })

// test('Returns one blog', async () => {
//     const response = await api.get('/api/blogs')
//     console.log(response.body);
// })



afterAll(async () => {
    mongoose.connection.close()
})