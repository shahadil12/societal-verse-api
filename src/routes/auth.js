const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");
const registerUserValidator = require("../middlewares/validators/registerUserValidator");

router.post("/auth/register", registerUserValidator(), authController.register);

module.exports = router;
