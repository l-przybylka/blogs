const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const logger = require('../utils/logger')

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

    expect(response.body).toHaveLength(5)
})


test('ID identifier exists in blog object 1', async () => {
    const response = await api.get('/api/blogs/63fb6c4bacb03815de08e0eb')
    expect(response.body.id).toBeDefined()
    logger.info(response.body.id)
})

test('Successful blog entry creation', async () => {
    const newBlog = {
        title: "New Test Blog",
        author: "Testing Author",
        url: "www.testblogtest.com",
        likes: 0
    }

    const response = await api.get('/api/blogs')
    const initialBlogs = response.body
    logger.info('before new blog', initialBlogs.length)

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-type', /application\/json/)


    const afterPostResponse = await api.get('/api/blogs')
    logger.info('after new blog', afterPostResponse.body.length)

    expect(afterPostResponse.body).toHaveLength(initialBlogs.length + 1)
    expect(afterPostResponse.body[afterPostResponse.body.length - 1].author).toEqual("Testing Author")
})

test('Blog with no likes, should default to 0 likes', async () => {
    const blogWithNoLikes = {
        "title": "Likes should default to 0",
        "author": "The Greatest Author of All Times",
        "url": "www.indeedisgood.com"
    }
})




afterAll(async () => {
    mongoose.connection.close()
})