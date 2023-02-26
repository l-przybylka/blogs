require('dotenv').config()

const PORT = process.env.PORT
const MOGNO_URI = process.env.MONGO_URI

module.exports = {
    PORT, MOGNO_URI
}