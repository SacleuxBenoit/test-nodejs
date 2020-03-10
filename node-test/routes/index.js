// Imports
const express = require('express');
const usersControllers = require('../controllers/users');
const apiRouter = require("../routes/index").route;

// Router
exports.router = (function(){
    const router = express.Router();

// Users Routes
router.route('/users/register/').post(usersControllers.register);
router.route('/users/login/').post(usersControllers.login);

return router;
})();