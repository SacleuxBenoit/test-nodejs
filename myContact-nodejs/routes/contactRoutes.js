const express = require("express");
const router = express.Router();
const {     
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact 
} = require('../controllers/contactControllers');

// this code works too, because it's same route
// router.route("/").get(getContacts).post(createContact)
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

router.route("/").get(getContacts)

router.route("/").post(createContact)

router.route("/:id").get(getContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

module.exports = router;