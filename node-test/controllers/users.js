// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');

// Routes
module.exports = {
    register: function(req, res){
        // Params
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        if (email == null || username == null|| password ==nul){
            return res.status(400).json({'error':'missing parameters'});
        }
    },


    login: function(req, res){
        
    }
}