const express = require("express");
const router = express.Router();

const showCommentController = require("../controllers/showComment");
router.get("/comment/:commentId", showCommentController.showComment);

module.exports = router;
