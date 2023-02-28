const express = require("express");
const router = express.Router();

const profileValidator = require("../middlewares/validators/profileValidator");
const updateProfileValidator = require("../middlewares/validators/updateProfileValidator");
const profileController = require("../controllers/profile");

router.get("/", profileController.showProfile);

router.get("/suggestion", profileController.profileSuggestion);
router.post("/", profileValidator(), profileController.createProfile);
router.put("/", updateProfileValidator(), profileController.updateProfile);
router.get("/posts", profileController.showProfilePosts);
router.post(
  "/showSpecificProfilePosts",
  profileController.showSpecificProfilePosts
);
router.get("/:profileUserId", profileController.showSpecificProfile);

module.exports = router;
