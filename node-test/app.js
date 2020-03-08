// Imports
const express = require('express');

// Instantiate Server
const server = express();

// Configures routes

server.get('/',function(req, res){
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send('<h1>TEST</h1>')
});

// Launch Server