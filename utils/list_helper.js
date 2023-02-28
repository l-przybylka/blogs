const totalLikes = (blogs) => {
    return blogs.reduce((acc,next) => acc + next.likes, 0)
}

const theMostLikes = (blogs) => {
    if(blogs.length === 1) {
        return blogs[0]
    }
}

module.exports = {
    totalLikes,
    theMostLikes
};
