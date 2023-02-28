const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.delete("/follow", userController.unfollow);
router.post("/sessionId", userController.sessionId);
router.post("/follow/:requestedId", userController.follow);
router.delete("/", userController.deleteUser);
router.get("/followingProfile", userController.followingProfile);
router.post("/messages", userController.messages);

module.exports = router;
