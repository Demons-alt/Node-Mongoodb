const express = require( 'express')
const routeMongo = express.Router();

const{

} = require('../../controller/CRUDmongoos');

routeMongo.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
routeMongo.get('/home',(req,res) => res.send('home') )


module.exports = routeMongo