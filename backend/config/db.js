require('dotenv').config()

MongoURI = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.duhc0.mongodb.net/Garbage_Sytem?retryWrites=true&w=majority`

module.exports = { MongoURI }