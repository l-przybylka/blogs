const totalLikes = blogs => {
    return blogs.reduce((acc,next) => acc + next.likes, 0)
}

const theMostLikes = blogs => {
    if(blogs.length === 1) {
        return blogs[0]
    }
    const controlValueHighestLikes = blogs.sort((a,b) => b.likes - a.likes)[0].likes
    const arrayWithResults = []

    for(let i = 0; i < blogs.length; i++) {
        if(blogs[i].likes === controlValueHighestLikes) {
            arrayWithResults.push(blogs[i])
            console.log(blogs[i].likes);
        }
    }

    return arrayWithResults
}

const theMostActiveAuthor = blogs => {

}

module.exports = {
    totalLikes,
    theMostLikes,
    theMostActiveAuthor
};
