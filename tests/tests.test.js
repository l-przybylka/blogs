const listHelper = require('../utils/list_helper')

describe('Total likes of the array of blogs', () => {

  test('One blog with 5 likes returns 5', () => {
    const listWithOneBlog = [
      {
        author: "Lukasz",
        likes: 5
      }
    ]

    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('Two blogs with total 7 of likes returns 7', () => {
    const listWithTwoBlogs = [
      {
        author: "Lukasz",
        likes: 5
      },
      {
        author: "Wolfgang",
        likes: 2
      }
    ]

    const result = listHelper.totalLikes(listWithTwoBlogs)
    expect(result).toBe(7)
  })

  test('List of six blogs with 36 likes retunrs 36', () => {
    const listWithSixBlogs = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      },
      {
        _id: "5a422b3a1b54a676234d17f9",
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12,
        __v: 0
      },
      {
        _id: "5a422b891b54a676234d17fa",
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
        __v: 0
      },
      {
        _id: "5a422ba71b54a676234d17fb",
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0,
        __v: 0
      },
      {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 2,
        __v: 0
      }  
    ] 

    const result = listHelper.totalLikes(listWithSixBlogs)
    expect(result).toBe(36)
  })
})


describe('Find blog with the most number of likes', () => {
 // test with 1 obj (just likes to return)
 // test with 3 obj ()
 // test with 3 obj 2 the same amount of likes ()
 // proper test
 test('Test with only one blog in the list', () => {
  const listWithOneBlog = [
    {
      blog: "potato",
      likes: 5
    }
  ]
  
  const result = listHelper.theMosttLikes(listWithOneBlog)
  expect(result).toEqual(listWithOneBlog[0])

 })


 // an array of objects, each object will have a integer nr of likes
 // an object with the most number of likes which is the highest integer (maybe a list if there is more)
 // for a list where we have objects with 3, 2, 5 likes we return the one with 5. For a list with 5, 5 , 1 we return 5, ideally 5 and 5.
 // first find the highest number of likes
 // for loop for the lenght of the array:
 // if the blog has equal number of likes then add it to the array we will return
 // how to make it work in one loop only?
 // sort b - a, take the frist entry as the highest nr. and then run the loop and push objects with equal likes to the result array. 
  test('List with one blog returns that blog', () => {

  })


  // test('Find blogs with the most number of likes with a proper list', () => {
  //   const listWithSixBlogs = [
  //     {
  //       _id: "5a422a851b54a676234d17f7",
  //       title: "React patterns",
  //       author: "Michael Chan",
  //       url: "https://reactpatterns.com/",
  //       likes: 7,
  //       __v: 0
  //     },
  //     {
  //       _id: "5a422aa71b54a676234d17f8",
  //       title: "Go To Statement Considered Harmful",
  //       author: "Edsger W. Dijkstra",
  //       url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
  //       likes: 5,
  //       __v: 0
  //     },
  //     {
  //       _id: "5a422b3a1b54a676234d17f9",
  //       title: "Canonical string reduction",
  //       author: "Edsger W. Dijkstra",
  //       url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
  //       likes: 12,
  //       __v: 0
  //     },
  //     {
  //       _id: "5a422b891b54a676234d17fa",
  //       title: "First class tests",
  //       author: "Robert C. Martin",
  //       url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
  //       likes: 10,
  //       __v: 0
  //     },
  //     {
  //       _id: "5a422ba71b54a676234d17fb",
  //       title: "TDD harms architecture",
  //       author: "Robert C. Martin",
  //       url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
  //       likes: 0,
  //       __v: 0
  //     },
  //     {
  //       _id: "5a422bc61b54a676234d17fc",
  //       title: "Type wars",
  //       author: "Robert C. Martin",
  //       url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  //       likes: 2,
  //       __v: 0
  //     }  
  //   ]
  // })
})