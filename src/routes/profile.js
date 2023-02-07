const express = require("express");
const router = express.Router();

const profileValidator = require("../middlewares/validators/profileValidator");
const updateProfileValidator = require("../middlewares/validators/updateProfileValidator");
const profileController = require("../controllers/profile");

router.get("/", profileController.showProfile);
router.post("/", profileValidator(), profileController.createProfile);
router.put("/", updateProfileValidator(), profileController.updateProfile);
router.get("/suggestion", profileController.profileSuggestion);
router.get("/posts", profileController.showProfilePosts);

module.exports = router;
