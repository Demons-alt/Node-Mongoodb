
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Mie:j5pP5LwHNPVxi995@cluster.xajie2t.mongodb.net/?retryWrites=true&w=majority";
const clients = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = clients
