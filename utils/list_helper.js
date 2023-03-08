var _ = require('lodash');

const totalLikes = blogs => {
    return blogs.reduce((acc, next) => acc + next.likes, 0)
}

const theMostLikes = blogs => {
    if (blogs.length === 1) {
        return blogs[0]
    }
    const controlValueHighestLikes = blogs.sort((a, b) => b.likes - a.likes)[0].likes
    const arrayWithResults = []

    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].likes === controlValueHighestLikes) {
            arrayWithResults.push(blogs[i])
        }
    }

    return arrayWithResults
}



const theMostActiveAuthor = blogs => {
    // helper function for iterating in lodash library
    const authorsName = obj => obj.author
    // using lodash lib. we go over provided array using iteree function authorsName to count how many times each of the author's name appears in the array
    const blogsPerAuthor = _.countBy(blogs, authorsName)
    // turn object into an array so we can sort by the highest number
    const authorWithTheMostBlogs = Object.entries(blogsPerAuthor).sort((a,b) => b[1] - a[1])[0]
    // we create an object to be returned 
    return  {
        author: authorWithTheMostBlogs[0],
        blogs: authorWithTheMostBlogs[1]
      }
}

module.exports = {
    totalLikes,
    theMostLikes,
    theMostActiveAuthor
};
