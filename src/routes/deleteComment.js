const express = require("express");
const router = express.Router();

const deleteCommentController = require("../controllers/deleteComment");
router.delete("/comment/:commentId", deleteCommentController.deleteComment);

module.exports = router;
