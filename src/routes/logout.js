const express = require("express");
const router = express.Router();

const logoutController = require("../controllers/logout");

router.post("/auth/logout", logoutController.logout);

module.exports = router;
