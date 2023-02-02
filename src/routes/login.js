const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");
const loginUserValidator = require("../middlewares/validators/loginUserValidator");

router.post("/auth/login", loginUserValidator(), loginController.login);

module.exports = router;
