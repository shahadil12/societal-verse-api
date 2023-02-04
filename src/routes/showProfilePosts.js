const express = require("express");
const router = express.Router();

const showProfilePostsController = require("../controllers/showProfilePosts");
router.get(
  "/userId/profile/posts",
  showProfilePostsController.showProfilePosts
);

module.exports = router;
