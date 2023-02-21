const asyncHandler = require("express-async-handler");

// @desc Register a user
// route POST /api/users/register
// access public
const registerUser = asyncHandler(async (req,res) => {
    res.json({message: "Register the user"});
})

// @desc login user
// route POST /api/users/login
// access public
const userLogin = asyncHandler(async (req,res) => {
    res.json({message: "login user"})
})

// @desc user current info
// route GET /api/users/login
// access private
const currentUser = asyncHandler(async(req,res) => {
    res.json({message: "current user information"})
})

module.exports = {
    registerUser,
    userLogin,
    currentUser
}