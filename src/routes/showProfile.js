const express = require("express");
const router = express.Router();

const showProfileController = require("../controllers/showProfile");

router.get("/profile", showProfileController.showProfile);

module.exports = router;
