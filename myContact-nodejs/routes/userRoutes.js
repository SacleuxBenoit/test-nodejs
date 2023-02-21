const express = require("express");
const { registerUser, userLogin, currentUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/current", currentUser);

module.exports = router;