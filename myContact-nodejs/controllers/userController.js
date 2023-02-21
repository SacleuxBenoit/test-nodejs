const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// @desc Register a user
// route POST /api/users/register
// access public
const registerUser = asyncHandler(async (req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already register")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password", hashedPassword);

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    console.log(`user created : ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("user data is not valid");
    }
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