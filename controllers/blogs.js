/* eslint-disable indent */
const blogsRouter = require('express').Router();
const Blog = require('../models/Blog');

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs);
});

blogsRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)

    if (blog) {
        response.json(blog);
    } else {
        response.status(404).end
    }
});


blogsRouter.post('/', async (request, response, next) => {
    const blog = new Blog(request.body);
    // if likes don't exist default to 0 

    const newBlog = {
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes || 0
    }
    try {
        const savedBlog = await newBlog.save()
        response.status(201).json(savedBlog)
    } catch (error) {
        next(error)
    }

})


module.exports = blogsRouter;
