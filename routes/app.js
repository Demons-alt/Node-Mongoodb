const client = require('../module/mongodb');
const Contact = require('../model/contact');

const clients = require('../module/cloudMongodb');
const express = require('express');

const dbname = 'tes'
const app = express()

const {
    AddOneData,
    AddManyData,
    ReadAllData,

} = require('../controller/CRUDmongodb');

//mongodb local
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



app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app