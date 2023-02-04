const express = require("express");
const router = express.Router();

const showAllPostsController = require("../controllers/showAllPosts");
router.get("/post", showAllPostsController.showAllPosts);

module.exports = router;
