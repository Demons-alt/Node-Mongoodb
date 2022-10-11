const { mongo } = require("mongoose")
const { MongoClient } = require("mongodb")

const url = 'mongodb://127.0.0.1:27017'
const db = 'api_mongo'

const client = new MongoClient(url, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})


module.exports = client
