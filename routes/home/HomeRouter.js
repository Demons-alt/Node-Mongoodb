const express = require('express');
const HomeRoute = express.Router();

HomeRoute.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

module.exports = HomeRoute