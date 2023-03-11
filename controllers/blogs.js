/* eslint-disable indent */
const blogsRouter = require('express').Router();
const Blog = require('../models/Blog');

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})

    response.json(blogs);
});

blogsRouter.post('/', async (request, response, next) => {
    const blog = new Blog(request.body);

    try {
        const savedBlog = await blog.save()
        console.log(savedBlog);
        response.status(201).json(savedBlog)        
    } catch (error) {
        next(error)
    }


})

module.exports = blogsRouter;
