const express = require("express");
const router = express.Router();

const profileValidator = require("../middlewares/validators/profileValidator");
const profileController = require("../controllers/profile");

router.get("/", profileController.showProfile);
router.post("/", profileValidator(), profileController.createProfile);
router.get("/suggestion", profileController.profileSuggestion);
router.get("/posts", profileController.showProfilePosts);

module.exports = router;
