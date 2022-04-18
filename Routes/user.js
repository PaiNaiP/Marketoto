const express = require("express");
const {
  registrationEmail,
  registrationGoogle,
} = require("../Controllers/UserController.js");

const router = express.Router();

router.post("/register_via_email", registrationEmail);
router.post("/register_via_google", registrationGoogle);

module.exports = {
  routes: router,
};
