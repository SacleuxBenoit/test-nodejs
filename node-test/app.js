// Imports
const express = require('express');
const bodyParser = require('body-parser');

// Instantiate Server
const server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

// Configures routes

server.get('/',function(req, res){
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send('<h1>TEST</h1>')
});

// Launch Server
server.listen(8080, function(){
  console.log('Server ok')
})