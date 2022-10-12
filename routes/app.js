// const client = require('../module/mongodb'); / local
const Contact = require('../model/contact');
const routeMongo = require('./contact/ContactRouter');
const HomeRoute = require('./home/HomeRouter');

const clients = require('../module/cloudMongodb'); //cloud
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');



const app = express()

// const {
//     AddOneData,
//     AddManyData,
//     ReadAllData,

// } = require('../controller/CRUDmongodb');

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)
// mongodb local
// client.connect(async(err, client)=> {
//     if (err) {
//         return console.log(err);
//     }
    
//     console.log('koneksi aman');
//     //AddOneData()// done
//     AddManyData()
//     ReadAllData()
// })

//mongodb cloud

// clients.connect(err => {
//     const collection = clients.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log('connect to db');
//     clients.close();
//     return console.log('done');
//   });

// tes mongoose
app.use('/home', HomeRoute)
app.use('/contact', routeMongo)
// app.use('/', (req, res) => res.send('Hello World!'))



module.exports = app