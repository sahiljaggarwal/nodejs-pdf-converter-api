const dotenv = require('dotenv')
dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    mongodb: process.env.MONGODB,
    host: process.env.HOST
} 

module.exports = config