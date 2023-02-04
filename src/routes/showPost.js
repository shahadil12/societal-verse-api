const express = require("express");
const router = express.Router();

const showPostController = require("../controllers/showPost");

router.get("/:postId", showPostController.showPost);

module.exports = router;
