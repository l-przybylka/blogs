require('dotenv').config()

const PORT = process.env.PORT
const MOGNO_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGO_URI 
    : process.env.MONGO_URI

module.exports = {
    PORT, MOGNO_URI
}