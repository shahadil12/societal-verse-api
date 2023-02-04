const express = require("express");
const router = express.Router();

const showProfileController = require("../controllers/showProfile");

router.get("/userId/profile", showProfileController.showProfile);

module.exports = router;
