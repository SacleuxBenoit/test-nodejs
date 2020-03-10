// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Routes
module.exports = {
    register: function(req, res){
        // Params
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;
    },
    login: function(req, res){
        
    }
}