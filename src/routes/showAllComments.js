const express = require("express");

const router = express.Router();

const showAllCommentsController = require("../controllers/showAllComments");

router.get("/:postId/comments", showAllCommentsController.showAllComments);

module.exports = router;
